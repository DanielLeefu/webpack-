###  loader 和 plugin 区别

- loader 是加载器，webpack中所有的文件都是当作是模块，但是他只能解析js文件和json文件，如果要打包其他文件，就需要用到loader。
- plugin 是插件，他可以扩展webpack的能力，在webpack运行的生命周期中会触发许多的事件，在plugin中注册这些事件做一些事情，则webpack打包的时候到某一个生命周期时候就会执行这些事件，然后改变webpack输出的结果