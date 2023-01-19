import { Argv, ArgumentsCamelCase } from 'yargs';
import nodemailer from 'nodemailer';
import chalk from 'chalk';
import spinner from '../utils/spinner';
import { readFileSync } from 'fs';

interface SendArgv {
  path: string;
  email: string;
  subject: string;
  config: string;
}

export default class Send {
  static command = 'send <path> <email> [subject] [config]';
  static description = 'Send an email';

  static builder = (yargs: Argv) => {
    yargs
      .positional('path', {
        describe: 'Path to the email',
        type: 'string',
      })
      .positional('email', {
        describe: 'Email address to send to',
        type: 'string',
      })
      .option('subject', {
        alias: 's',
        describe: 'Subject of the email',
        type: 'string',
        default: 'Email sent with @tlra/cli',
      })
      .option('config', {
        alias: 'c',
        describe: 'Path to the config file',
        type: 'string',
        default: 'talaria.config.json',
      });
  };

  static handler = (argv: ArgumentsCamelCase<SendArgv>) => {
    try {
      const config = JSON.parse(readFileSync(argv.config, 'utf8'));
      const html = readFileSync(argv.path, 'utf8');
      spinner.start('Sending email');
      const transporter = nodemailer.createTransport(config.send);
      transporter.sendMail(
        {
          from: config.send.auth.user,
          to: argv.email,
          subject: argv.subject,
          html,
        },
        (err) => {
          if (err) {
            this.error('Error sending email');
          } else {
            spinner.stop();
            console.log(
              chalk.green(`Email sent to ${chalk.yellow(argv.email)}`)
            );
          }
        }
      );
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes(argv.config))
          this.error(`Config file not found: ${argv.config}`);
        else if (err.message.includes(argv.path))
          this.error(`Email file not found: ${argv.path}`);
        else this.error(err.message);
      }
    }
  };

  static error = (msg: string) => {
    spinner.stop();
    console.error(chalk.red(msg));
    process.exit(1);
  };
}
