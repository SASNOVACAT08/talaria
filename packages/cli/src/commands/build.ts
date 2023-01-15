import chalk from 'chalk';
import { exec } from 'child_process';
import { unlink } from 'fs';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import typescript2 from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import spinner from '../utils/spinner';

export default class Build {
  static command = 'build';
  static description = 'Build a project';

  static builder = () => {
    // Empty
  };

  static handler = () => {
    spinner.start('Building project');
    build({
      logLevel: 'silent',
      build: {
        minify: false,
        lib: {
          entry: 'src/index.ts',
          name: 'talaria-generated',
          formats: ['es'],
          fileName: 'talaria-generated',
        },
        rollupOptions: {
          external: ['@tlra/render', '@tlra/components', 'vue'],
          output: {
            globals: {
              vue: 'Vue',
              '@tlra/render': 'render',
              '@tlra/components': 'components',
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
        commonjs(),
      ],
    })
      .then(() => {
        exec('node dist/talaria-generated.js', (err) => {
          if (err) return this.error();
          unlink('dist/talaria-generated.js', (err) => {
            if (err) return this.error();
            spinner.stop();
            console.log(chalk.green('Project built successfully!'));
          });
        });
      })
      .catch(() => this.error());
  };

  static error = () => {
    spinner.stop();
    console.error(chalk.red('Error building project'));
  };
}
