const { rm, cp, mkdir, exec, echo } = require('shelljs');
const chalk = require('chalk');


console.log(chalk.blue('编译 LESS ./src/less/main.less'));
mkdir('-p', './dist/static/css');
exec('lessc ./src/less/main.less ./dist/static/css/main.css');
console.log(chalk.blue('/dist/static/css/main.css Ok!'));
