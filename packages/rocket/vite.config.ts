import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UIRocket',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    assetsInlineLimit: 0,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css' || assetInfo.name?.endsWith('.css')) {
            if (assetInfo.name?.includes('fraunces') || assetInfo.name?.includes('dm-')) {
              return 'fonts/[name][extname]';
            }
            return 'rocket.css';
          }
          if (assetInfo.name?.endsWith('.woff2') || assetInfo.name?.endsWith('.woff')) {
            return 'fonts/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
});
