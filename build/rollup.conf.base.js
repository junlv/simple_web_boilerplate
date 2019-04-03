const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs') //兼容性
const terser = require('rollup-plugin-terser').terser //兼容性
const uglify = require('rollup-plugin-uglify').uglify
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const path = require('path')
const alias = require('rollup-plugin-alias')
const isProduction = process.env.NODE_ENV === 'production'
const pathResolve = p => path.resolve(__dirname + '/../', p)
const globals = {
  vue: 'Vue',
  Bee: 'Bee',
  VueRouter: 'VueRouter',
  vuex: 'Vuex',
  vant: 'vant',
};

module.exports = {
  external: [
    'vue',
    'Bee',
    'vuex',
    'vant',
    'VueRouter'
  ],
  input: './src/module/main/index.js',
  output: {
    globals,
    file: 'dist/static/js/main.js',
    format: 'umd',
    name: 'app',
    sourcemap: false,
    treeshake: true
  },
  inlineDynamicImports: true,
  plugins: [

    alias({
      'vue': require.resolve('vue/dist/vue.js'),
      resolve: ['.jsx', '.js', '.vue', '.css', '.less'],
      '@': pathResolve('src')
    }),
    replace({
      'process.env.NODE_ENV': isProduction ? JSON.stringify('production') : JSON.stringify('development')
    }),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**',
      babelrc: true,
      runtimeHelpers: true,
    }),
    // terser()
    (isProduction && uglify())
  ]
}