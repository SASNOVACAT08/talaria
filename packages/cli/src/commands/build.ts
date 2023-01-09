import chalk from 'chalk';
import { exec } from 'child_process';
import ora from 'ora';
import { dots } from 'cli-spinners';

export default class Build {
  static command = 'build';
  static description = 'Build a project';

  static builder = () => {
    // Empty
  };

  static handler = () => {
    const spinner = ora({
      text: 'Building project',
      spinner: dots,
    }).start();
    let i = 0;
    const interval = setInterval(() => {
      spinner.text = chalk.blue(`Building project ${'.'.repeat(i)}`);
      i++;
      if (i > 3) {
        i = 0;
      }
    }, 200);
    exec(
      './node_modules/.bin/vite build --config ./node_modules/@talaria/cli/vite.build.ts',
      (error, stdout, stderr) => {
        spinner.stop();
        clearInterval(interval);
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
  };
}
