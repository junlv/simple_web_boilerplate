const { rm, cp, mkdir, exec, echo } = require('shelljs');
const chalk = require('chalk');


console.log(chalk.blue('compile js文件'));
mkdir('-p', './dist/static/css');
exec('rollup -c ./build/rollup.conf.dev.js');

