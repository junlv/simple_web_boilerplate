var utils = require('../build/utils')
var UglifyJS = require("uglify-js");
const {
    rm,
    cp,
    mkdir,
    exec,
    echo
} = require('shelljs');
const chalk = require('chalk');
console.log(chalk.green('copy static'));
mkdir('-p', './dist/views');
cp('-R', './static', './dist/');
// console.log(chalk.green('复制views copy static'));
// cp('-R', './src/module/**/*.html', './dist/views/');

var views = utils.getEntries('./src/module/**/*.html', "./dist/static/js/", "./dist/views/")
views.forEach(element => {
    cp('-R', element.input, element.output_html);
});

exec('uglifyjs --compress --mangle --output ./dist/static/js/vendor.js -- ./static/js/bee.js ./static/js/vue.umd.js ./static/js/vue-router.js ./static/js/vuex.js');