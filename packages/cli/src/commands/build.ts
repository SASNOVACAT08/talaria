import chalk from 'chalk';
import { exec } from 'child_process';
import { unlink } from 'fs';
import spinner from '../utils/spinner';

export default class Build {
  static command = 'build';
  static description = 'Build a project';

  static builder = () => {
    // Empty
  };

  static handler = () => {
    spinner.start('Building project');
    exec(
      './node_modules/.bin/vite build --config ./node_modules/@talaria/cli/vite.build.ts',
      (err) => {
        if (err) return this.error();
        exec('node dist/talaria-generated.js', (err) => {
          if (err) return this.error();
          unlink('dist/talaria-generated.js', (err) => {
            if (err) return this.error();
            spinner.stop();
            console.log(chalk.green('Project built successfully!'));
          });
        });
      }
    );
  };

  static error = () => {
    spinner.stop();
    console.error(chalk.red('Error building project'));
  };
}
