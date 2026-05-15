import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'pages/work-gallery.html'),
        books: resolve(__dirname, 'pages/books.html'),
        resources: resolve(__dirname, 'pages/resources.html')
      }
    }
  }
});
