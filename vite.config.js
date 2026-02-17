import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'src/ghost-cursor-mount.jsx',
      output: {
        entryFileNames: 'ghost-cursor-bg.js',
        format: 'es'
      }
    }
  }
});