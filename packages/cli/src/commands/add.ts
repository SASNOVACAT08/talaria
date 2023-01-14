import { Argv, ArgumentsCamelCase } from 'yargs';
import chalk from 'chalk';

export default class Add {
  static command = 'add <name> [template]';
  static description = 'Add a new email to a project';

  static builder = (yargs: Argv) => {
    yargs
      .positional('name', {
        describe: 'Name of the email',
        type: 'string',
      })
      .option('template', {
        alias: 't',
        describe: 'Template to use',
        type: 'string',
      });
  };

  static handler = (argv: ArgumentsCamelCase) => {
    console.log(
      chalk.green(
        `Add email ${chalk.yellow(argv.name)} with template ${argv.template}`
      )
    );
  };
}
