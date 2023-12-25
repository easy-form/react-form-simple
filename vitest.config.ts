import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    environment: 'jsdom',
    coverage: {
      exclude: [
        'src/template/Controller.tsx',
        'src/template/DataProvide.tsx',
        'src/utils/*',
        'src/use/useContextApi.ts',
      ],
      enabled: true,
      reportsDirectory: './src/__tests__/coverage',
      reporter: ['text', 'json', 'html'],
      reportOnFailure: true,
    },
    alias: {
      'react-form-simple': path.join(__dirname, './src/'),
      'react-form-simple/*': path.join(__dirname, './src/'),
    },
    // outputFile: './test-output.json',
  },
});
