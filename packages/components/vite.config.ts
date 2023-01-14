import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript2 from 'rollup-plugin-typescript2';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'components',
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ['src/**/*.ts', 'src/**/*.vue'],
    }),
  ],
});
