import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { metricsPlugin } from './vite-plugin-metrics';

export default defineConfig({
  plugins: [react(), metricsPlugin()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
    assetsInlineLimit: 0,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    passWithNoTests: true,
  },
});
