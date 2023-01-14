#!/usr/bin/env node
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import Init from './commands/init';
import Build from './commands/build';
import Send from './commands/send';

yargs(hideBin(process.argv))
  .scriptName('talaria')
  .usage(
    chalk.green(
      `Usage: $0 ${chalk.yellow('<command>')} ${chalk.red('[options]')}`
    )
  )
  .command(Init.command, Init.description, Init.builder, Init.handler)
  .command(Build.command, Build.description, Build.builder, Build.handler)
  .command(Send.command, Send.description, Send.builder, Send.handler)
  .help().argv;
