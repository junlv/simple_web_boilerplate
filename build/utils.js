var path = require('path')
var glob = require('glob')


exports.getEntries = function (globPath,js_des_path,html_des_path) {
  var entries = []
  /**
   * 读取src目录,并进行路径裁剪
   */
  glob.sync(globPath).forEach(function (entry) {
    /**
     * path.basename 提取出用 ‘/' 隔开的path的最后一部分，除第一个参数外其余是需要过滤的字符串
     * path.extname 获取文件后缀
     */
    // var basename = path.basename(entry, path.extname(entry), 'router.js') // 过滤router.js
    // ***************begin***************
    // 当然， 你也可以加上模块名称, 即输出如下： { module/main: './src/module/index/main.js', module/test: './src/module/test/test.js' }
    // 最终编译输出的文件也在module目录下， 访问路径需要时 localhost:8080/module/index.html
    // slice 从已有的数组中返回选定的元素, -3 倒序选择，即选择最后三个
    var tmp = entry.split('/').splice(-3)
    var moduleName = tmp.slice(1, 2);
    // ***************end***************
    entries.push(
      { 
        input : entry,
        output_js : js_des_path + moduleName + '.js',
        output_html : html_des_path + moduleName + '.html',
        moduleName:tmp[1],
      }
    )
  });
  return entries;
}
