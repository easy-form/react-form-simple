import { lessLoader } from 'esbuild-plugin-less';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  esbuildPlugins: [lessLoader()],
  treeshake: true,
  minify: true,
  verbose: true,
  dts: true,
  external: ['react', 'react-dom'],
  tsconfig: './tsup.tsconfig.json',
  clean: true,
  ignore: ['**/*.less'],
  outDir: './design-system/build-sandpack', // build output
  esbuildOptions(options) {
    options.alias = {
      'react-form-simple': './src',
    };
    return options;
  },
});
