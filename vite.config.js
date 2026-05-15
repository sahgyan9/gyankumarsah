import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'work-gallery.html'),
        books: resolve(__dirname, 'books.html'),
        resources: resolve(__dirname, 'resources.html')
      }
    }
  }
});
