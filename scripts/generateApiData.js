/**
 * npm run  genAPI xx=xxx1 xx2=xxx2
 */
const docgen = require('react-docgen-typescript');
const path = require('path');
const fs = require('fs');
const formatEnvArgs = require('./formatEnvArgs');

const isMeaningful = (val) => val !== '' && val !== undefined && val !== null;

/** root name  */
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

  console.log(match);

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
function generateWriteContent(datas) {
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
      .filter(([, value]) => !value?.tags?.ignore),
  );
  return modifiedObject;
}

/** 写入文件方法 */
function writeFileSync(fileName, props) {
  const outputDir = path.resolve(__dirname, '../.dumi/metadata/apis');
  const outputFilePath = path.join(outputDir, `${fileName}.json`);
  const content = generateWriteContent(props);
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
    const fileName = generateFileName(doscInstance.filePath);

    writeFileSync(fileName, doscInstance.props);
  } else {
    console.log(docs);
  }
}

function start() {
  const envs = formatEnvArgs(process.argv.slice(2));
  const pathUrl = envs.path;
  if (envs.all) {
    const directoryPath = path.join(__dirname, '../docs/apiDemos');

    // 使用 fs.readdir 读取目录内容
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('读取目录失败', err);
        return;
      }

      files.forEach((file) => {
        // 将文件名拼接到 ./docs/ 前面，形成相对路径
        const relativePath = path.join('./docs', 'apiDemos', file);

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
