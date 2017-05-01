var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "Dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
  entry: DEV + "/root.js",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        // query: {
        //   presets: ['react', 'es2015'],
        //   // plugins: ['react-html-attrs'], //添加组件的插件配置
        // }
    }]
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),//webpack 2.x已经默认加载
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
	  new webpack.BannerPlugin('This file is created by gakkispy'),
  ],
};

module.exports = config;