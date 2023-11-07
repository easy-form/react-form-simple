import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  resolve: {
    docDirs: ['docs'],
  },
  themeConfig: {
    name: 'React-form-simple',
    logo: '/logo.png',
    footer: true,
    lastUpdated: false,
    socialLinks: {
      github: 'https://github.com/easy-form/react-form-simple',
    },
    prefersColor: { default: 'auto', switch: true },
    disabledPreviewCodeActions: [
      'CSB',
      'STACKBLITZ',
      'HTML2SKETCH',
      'EXTERNAL',
      'EXPANDBTN',
    ],
    collpaseCode: true,
    onlyShowToc: false,
  },
  alias: {
    'react-form-simple': path.resolve(__dirname, './', 'src'),
    '@components': path.resolve(__dirname, './', '.dumi/component'),
  },
  codeSplitting: { jsStrategy: 'granularChunks' },
  title: 'react-form-simple',
});
