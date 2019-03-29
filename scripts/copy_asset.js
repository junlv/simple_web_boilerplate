var utils = require('../build/utils')
const { rm, cp, mkdir, exec, echo } = require('shelljs');
const chalk = require('chalk');
console.log(chalk.green('复制静态资源 copy static'));
mkdir('-p', './dist/views');
cp('-R', './static', './dist/');
// console.log(chalk.green('复制views copy static'));
// cp('-R', './src/module/**/*.html', './dist/views/');
console.log(chalk.green('复制HTML'));
var views = utils.getEntries('./src/module/**/*.html',"./dist/static/js/","./dist/views/")
views.forEach(element => {
    cp('-R', element.input, element.output_html);
});



