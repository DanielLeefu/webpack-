/**
 * webpack工作流程
 */
const { SyncHook } = require('tapable');
const fs = require('fs')
class Compiler {
  constructor(options) {
    this.options = options;
    this.hooks = {
      run: new SyncHook(),
      done: new SyncHook()
    }
  }
  run() {
    let modules = [];
    let chunks =[];
    let files = [];
    this.hooks.run.call(); // 触发run钩子执行
    // 根据配置中entry 找到所有的入口文件
    let entry = path.join(this.options.context, this.options.entry);
    // 从入口文件出发，调用所有配置的loader对模块进行编译
    // 再找出该模块依赖的模块，递归进行找到所有的依赖，直到所有入口文件
    // 经过了本步骤处理
    // 1. 读取模块内容(可能是sass ,less 等，需要babel-loader转换)
    let entryContent = fs.readFileSync(entry, 'utf-8');
    let entrySource = babelLoader(entryContent);
    // 模块module  chunk 代码块  file bundle 文件关系
    let entryModule = {id: entry, source: entrySource}
    modules.push(entryModule);

    // 把入口模块代码转为抽象语法树AST,分析里面的import 和require yili
    // 假如index。js 还引用了title.js
    let title = path.join(this.options.context, "./src/title.js")
    let titleContent = fs.readFileSync(title, 'utf-8');
    let titleSource = babelLoader(titleContent);
    // 模块module  chunk 代码块  file bundle 文件关系
    let titleModule = {id: title, source: titleSource}
    modules.push(titleModule);

    // 根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk
    let chunk = {name: 'main', modules}
    chunks.push(chunk)
    // 再把每个CHunk转换成一个单独的文件加入到输出列表
    let file = {
      file: this.options.output.filename,
      source: `

      `
    }
    // 确定好输出内容后，根据配置确定输出的路径和文件名，把内容 写入到文件系统
    files.push(file);
    let outputPath = path.join(
      this.options.output.path,
      this.options.output.filename
    );
    fs.writeFileSync(outputPath, file.source, 'utf-8');

    // webpack 会在特定时间点广播特定事件，插件在监听到后会执行对应的逻辑
    // 并且插件可以调用·webpack提供的API改变webpackk的运行结果
    this.hooks.done.call()
  }
}


/**
 * 1. 初始化参数，从配置文件和shell语句中读取合并参数，得到最终参数
 * webpack --mode=developement
 */

let options = require('../webpack.config.js')
// 开始编译 用上一步的options 来创建compiler
let compiler = new Compiler(options);
// 加载所有的配置的插件， 执行对象的run方法开始编译
if (options.plugins && Array.isArray(options.plugins)) {
  for (const plugin of options.plugins) {
    plugin.apply(compiler) // 插件里面一定有apply 方法
  }
}
// 确定入口，根据配置文件中entry 找出所有的入口文件
compiler.run()

//  loader 本质为函数 es6 转为es5
function babelLoader(source) {

  return source

}