const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        404: resolve(__dirname, 'src/404.html'),
      }
    },
    minify: 'esbuild'
  }
})