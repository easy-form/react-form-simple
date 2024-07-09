const docgen = require('react-docgen-typescript');
const path = require('path');
const fs = require('fs');
const formatEnvArgs = require('./formatEnvArgs');

/** 获取根目录名称 */
function getRootName() {
  return path.basename(path.resolve(__dirname, '..'));
}

/** 格式化注释内容 */
function descriptionPaster(data) {
  if (data) {
    const regex = /@(\w+)\s+([^\n]+)/g;
    const result = {};
    [...data.matchAll(regex)].forEach((match) => {
      const [_, key, value] = match;
      result[key] = value.trim();
    });
    return result;
  }
  return null;
}

/** 生成写入文件名字 */
function generateFileName(filePath) {
  const projectRootName = getRootName();
  const regexString = `${projectRootName}\/(.*?)\.tsx`;
  const pattern = new RegExp(regexString);
  const match = filePath?.match(pattern);
  return match;
}

// 生成md文件名字
function generateMDFileName(filePath) {
  const match = generateFileName(filePath);

  if (match) {
    const fileName = match[1];
    if (fileName) {
      const fileNames = fileName.split('/');
      return fileNames[fileNames.length - 1];
    }
  } else {
    console.log('无法匹配改路径');
  }
  return null;
}

// 生成JSON文件名字
function generateJSONFileName(filePath) {
  const match = generateFileName(filePath);

  if (match) {
    const fileName = match[1];
    if (fileName) {
      return fileName.replace(/\//g, '_');
    }
  } else {
    console.log('无法匹配改路径');
  }
  return null;
}

/** 生成写入文件的内容 */
function generateWriteContent(datas, ignoreNames = []) {
  const modifiedObject = Object.fromEntries(
    Object.entries(datas)
      .map(([key, value]) => {
        const { parent, declarations, required, description, ...rest } = value;
        const modifiedValue = {
          ...rest,
          tags: descriptionPaster(description),
        };
        return [key, modifiedValue];
      })
      .filter(
        ([, value]) =>
          !value?.tags?.ignore && !ignoreNames.includes(value.name),
      ),
  );
  return modifiedObject;
}

/** 写入json文件方法 */
function writeJsonFileSync(fileName, doscInstance) {
  const outputDir = path.resolve(__dirname, '../docs/api/apiChildJSON');
  const outputFilePath = path.join(outputDir, `${fileName}.json`);
  const props = doscInstance.props;
  const ignoreNameStr = doscInstance.tags?.ignoreNames || '';
  const content = generateWriteContent(props, ignoreNameStr.split(','));
  // 将要写入的数据
  const writeData = JSON.stringify(content, null, 2);
  // 确保目录存在，如果不存在则创建它
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // 将数据写入文件
    fs.writeFileSync(outputFilePath, writeData, 'utf-8');
    console.log('success!');
  } catch (error) {
    console.error('写入文件时出错：', error);
  }
}

function writeMarkdownFileSync(fileName, doscInstance) {
  const outputDir = path.resolve(__dirname, '../docs/api');
  const outputFilePathCn = path.join(outputDir, `${fileName}.zh-CN.md`);
  const outputFilePath = path.join(outputDir, `${fileName}.md`);
  const { props, tags } = doscInstance;

  const { group, groupOrder, embed, name, pageTitle, order, toc, version } =
    tags || {};

  const content = generateWriteContent(props);

  const title = name || fileName;

  const groupStr = `
group:
  title: ${group || ''}
  order: ${groupOrder || 0}
  `;

  const tocStr = `
toc: content
  `;
  // 生成Markdown文件内容
  let markdownContent = `---
nav: 
  title: API
  order: 1
title: ${title}
order: ${order || 0}
${toc === 'false' ? '' : tocStr}
${group || groupOrder ? groupStr : ''}
---

`;

  markdownContent += `# ${pageTitle || title} \n`;
  if (embed) {
    markdownContent += `<embed src=".${embed}"></embed> \n`;
  }
  Object.keys(content).forEach((key) => {
    const { name } = content[key];

    const serializedApiInstance = JSON.stringify(content[key]).replace(
      /"/g,
      '&quot;',
    );
    markdownContent += `### ${name}\n`;

    markdownContent += `<APIWrap apiInstance="${serializedApiInstance}" ></APIWrap>\n`;
  });
  // 确保目录存在，如果不存在则创建它
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  try {
    // 将数据写入文件（.zh-CN.md）
    fs.writeFileSync(outputFilePathCn, markdownContent, 'utf-8');
    // 将数据写入文件（.md）
    fs.writeFileSync(outputFilePath, markdownContent, 'utf-8');
    console.log('success!');
  } catch (error) {
    console.error('写入文件时出错：', error);
  }
}

/** 格式化 */
function main(componentPathParamer) {
  const tsConfigParser = docgen.withCustomConfig(
    path.resolve(__dirname, '../tsconfig.json'),
    {
      propFilter: {
        skipPropsWithName: ['key', 'ref'],
      },
      propFilter(prop, component) {
        if (!prop.declarations) return false;
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          const hasPropAdditionalDescription = prop.declarations.find(
            (declaration) => {
              return !declaration.fileName.includes('node_modules');
            },
          );

          return Boolean(hasPropAdditionalDescription);
        }

        return true;
      },
      shouldRemoveUndefinedFromOptional: true,
    },
  );

  const componentPath = path.resolve(__dirname, `../${componentPathParamer}`);

  const docs = tsConfigParser.parse(componentPath);

  const doscInstance = docs?.[0];

  if (doscInstance) {
    const { tags } = doscInstance || {};
    const { child } = tags || {};
    if (child) {
      const fileName = generateJSONFileName(doscInstance.filePath);
      writeJsonFileSync(fileName, doscInstance);
    } else {
      const fileName = generateMDFileName(doscInstance.filePath);
      writeMarkdownFileSync(fileName, doscInstance);
    }
  } else {
    console.log(docs);
  }
}

function start() {
  const envs = formatEnvArgs(process.argv.slice(2));
  const pathUrl = envs.path;
  if (envs.all) {
    const directoryPath = path.join(__dirname, '../docs/api/apiDocs');

    // 使用 fs.readdir 读取目录内容
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('读取目录失败', err);
        return;
      }

      files.forEach((file) => {
        // 将文件名拼接到 ./docs/ 前面，形成相对路径
        const relativePath = path.join('./docs', 'api/apiDocs', file);

        // 使用 fs.stat 获取文件信息
        fs.stat(path.join(directoryPath, file), (err, stats) => {
          if (err) {
            console.error('获取文件信息失败', err);
            return;
          }

          // 判断是否为文件
          if (stats.isFile()) {
            console.log('相对路径:', relativePath);
            main(relativePath);
          }
        });
      });
    });
    return;
  }
  main(pathUrl);
}

start();
