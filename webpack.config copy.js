const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const smw = new SpeedMeasureWebpackPlugin(); // 打包速度分析插件
module.exports = smw.wrap({
  mode: 'development',
  devtool: 'inline-source-map',
  context: process.cwd(),
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js',
    page3: './src/page3.js',
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
          reuseExistingChunk: true,
        }
      }
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"],
    alias: {
      bootstrap: bootstrap,
    },
    modules: [path.resolve(__dirname, "node_modules")],
    mainFields: ["browser", "module", "main"],
    mainFiles: ["index"]
  },
  resolveLoader: {
    modules: ["node_modules"],
    extensions: [".js",".json"],
    mainFields: ["loader", "main"]
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
    })
  ] 

})