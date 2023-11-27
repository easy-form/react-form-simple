const convertTsToJson = require('./convertTsToJson');

const genHeroDemo = () => {
  convertTsToJson(
    '../demos/sourceCode/codeHighlight.tsx',
    '../demos/format/codeHighlight.json',
  );
};

genHeroDemo();
