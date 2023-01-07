import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: 'simple-email',
      formats: ['es'],
      fileName: 'simple-email',
    },
    rollupOptions: {
      external: ['@talaria/render', '@talaria/components', 'vue'],
      output: {
        globals: {
          vue: 'Vue',
          '@talaria/render': 'render',
          '@talaria/components': 'components',
        },
      },
    },
  },
  plugins: [vue(), typescript2({
    check: false,
    include: ['src/**/*.ts', 'src/**/*.vue'],
  }), commonjs()],
})
