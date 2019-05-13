const { mkdir, exec } = require('shelljs');
const chalk = require('chalk');
console.log(chalk.green('compile less ./src/less/main.less'));
mkdir('-p', './dist/static/css');
exec('lessc ./src/less/main.less ./dist/static/css/main.css');
console.log(chalk.green('/dist/static/css/main.css Ok!'));
