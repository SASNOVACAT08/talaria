import { Argv, ArgumentsCamelCase } from 'yargs';
import spinner from '../utils/spinner';
import { cp } from 'fs';
import chalk from 'chalk';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

interface InitArgv {
  name: string;
  template: string;
}

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
        default: 'simple',
      });
  };

  static handler = (argv: ArgumentsCamelCase<InitArgv>) => {
    spinner.start('Initializing project');
    const cliPath = path.resolve(
      fileURLToPath(pathToFileURL(__filename).toString()),
      '../..',
      'templates'
    );
    const templatePath = path.join(cliPath, argv.template);
    cp(templatePath, argv.name, { recursive: true }, (err) => {
      if (err) this.error();
      spinner.stop();
      console.log(chalk.green('Project initialized successfully!'));
    });
  };

  static error = () => {
    spinner.stop();
    console.error(chalk.red('Error building project'));
    process.exit(1);
  };
}
