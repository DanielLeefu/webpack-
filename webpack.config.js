const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: process.cwd(),
  entry: {
    entry1: './src/entry1.js',
    entry2: './src/entry2.js',
    // page3: './src/page3.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // all = async(import asynmc) + initaial,
      minSize: 0,
      maxSize: 0,
      cacheGroups: {
        default: false, // 禁用默认缓存组
        commons: {
          minChunks: 1,
          reuseExistingChunk: true, // 是否重用代码块
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'page1.html',
      chunks: ['page1'] // 往html页面里插入哪些资源文件
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'page2.html',
      chunks: ['page2'] // 往html页面里插入哪些资源文件
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'page3.html',
      chunks: ['page3'] // 往html页面里插入哪些资源文件
    }),
    new BundleAnalyzerPlugin()
  ] 

}