import { Argv, ArgumentsCamelCase } from 'yargs';
import chalk from 'chalk';

export default class Init {
  static command = 'init <name> [template]';
  static description = 'Init a new project';

  static builder = (yargs: Argv) => {
    yargs
      .positional('name', {
        describe: 'Name of the project',
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
        `Creating project ${chalk.yellow(argv.name)} with template ${
          argv.template
        }`
      )
    );
  };
}
