import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../public',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/main.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
