import { defineConfig } from 'dumi';
import path from 'path';

const repo = 'react-form-simple ';

export default defineConfig({
  outputPath: 'docs-dist',
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
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
