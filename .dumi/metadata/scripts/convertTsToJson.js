const fs = require('fs');
const path = require('path');

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
  // 替换//@ts-ignore为空
  let formattedCode = code.replace(/\/\/@ts-ignore/g, '');

  // 合并空行
  formattedCode = formattedCode.replace(/\n\s*\n/g, '\n');

  return formattedCode;
};

const tsFilePath = path.join(__dirname, '../demos/hero/codeHighlight.tsx');
const jsonFilePath = path.join(__dirname, '../demos/hero/format.json');

const tsCode = readFile(tsFilePath);

if (tsCode) {
  const formattedCode = formatCode(tsCode);

  const dataToSave = {
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
