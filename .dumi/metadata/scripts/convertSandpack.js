const convertTsToJson = require('./convertTsToJson');

const genHeroDemo = () => {
  convertTsToJson(
    '../demos/sourceCode/sandpack.tsx',
    '../demos/format/sandpack.json',
  );
};

genHeroDemo();
