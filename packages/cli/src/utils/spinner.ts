import { clock } from 'cli-spinners';
import ora from 'ora';
import chalk from 'chalk';

class Spinner {
  dot = 1;
  spinner = clock;
  interval?: NodeJS.Timer;
  ora?: ora.Ora;

  start(text: string) {
    this.ora = ora({
      text: chalk.green(text),
      spinner: this.spinner,
    }).start();
    this.interval = setInterval(() => {
      if (this.ora) {
        this.ora.text = chalk.green(`${text} ${'.'.repeat(this.dot)}`);
      }
      this.dot++;
      if (this.dot > 3) {
        this.dot = 1;
      }
    }, 200);
  }

  stop() {
    if (this.ora) {
      this.ora.stop();
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

const spinner = new Spinner();

export default spinner;
