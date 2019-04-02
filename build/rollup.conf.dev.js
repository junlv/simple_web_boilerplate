var glob = require('glob')
var utils = require('./utils')
var _ = require('lodash');

process.env.NODE_ENV = 'production';

const configbase = require('./rollup.conf.base');

var pages = utils.getEntries('./src/module/**/*.js',"./dist/static/app/","./dist/views/")
var modules = []

pages.forEach( (item) =>{
  let configure = _.cloneDeep(configbase);
  configure.input = item.input
  configure.output.name = item.moduleName
  configure.output.file = item.output_js
  modules.push(configure)
})

module.exports = modules