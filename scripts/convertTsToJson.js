import fs from 'fs';

const readFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return null;
  }
};

const formatCode = (code) => {
  // 在这里你可以实现对代码的任何格式化逻辑
  // 例如：去除空格、注释等
  return code;
};

const tsFilePath = 'path/to/your/file.ts'; // 替换成你的 TypeScript 文件路径
const jsonFilePath = path.JSON(__dirname, '../../.dumi/metadata/demos/hero'); // 输出的 JSON 文件路径

const tsCode = readFile(tsFilePath);

if (tsCode) {
  const formattedCode = formatCode(tsCode);

  const dataToSave = {
    format: 'your_format_here', // 格式信息，可以根据需要修改
    content: formattedCode,
  };

  fs.writeFile(jsonFilePath, JSON.stringify(dataToSave, null, 2), (err) => {
    if (err) {
      console.error(`Error writing JSON file: ${err}`);
    } else {
      console.log(`JSON file saved as ${jsonFilePath}`);
    }
  });
}
