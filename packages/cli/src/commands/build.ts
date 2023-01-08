import chalk from 'chalk';
import { exec } from 'child_process';

export default class Build {
  static command = 'build';
  static description = 'Build a project';

  static builder = () => {
    // Empty
  };

  static handler = () => {
    exec(
      './node_modules/.bin/vite build --config ./node_modules/@talaria/cli/vite.build.ts',
      (error, stdout, stderr) => {
        if (error) {
          console.log(chalk.red(`Do you have vite installed?`));
          return;
        }
        if (stderr) {
          console.log(chalk.red(`Error: ${stderr}`));
          return;
        }
        console.log(chalk.green(`Success: ${stdout}`));
      }
    );
    console.log(chalk.green(`Building project`));
  };
}
