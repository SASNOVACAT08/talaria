import { Argv, ArgumentsCamelCase } from 'yargs';
import chalk from 'chalk';

export default class Dev {
  static command = 'dev [port]';
  static description = 'Start a development server';

  static builder = (yargs: Argv) => {
    yargs.option('port', {
      alias: 'p',
      describe: 'Port to use',
      type: 'number',
    });
  };

  static handler = (argv: ArgumentsCamelCase) => {
    console.log(chalk.green(`Port ${argv.port}`));
  };
}
