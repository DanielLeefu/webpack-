const path = require("path")
const fs = require("fs")
const express = require("express")
const mime = require("mime");
const webpack = require("webpack")
let config = require("../webpack.config")
let compiler = webpack(config);

// 1.创建webpack 实例
// 2.启动webpack-dev-server服务器
class Server {
  constructor(compiler) {
      // 4. 添加webpack的’done‘事件回调，在编译完成后会向浏览器发送消息
      let lastHash;
      let sockets = [];
      compiler.hooks.done.tap("webpack-dev-server", (stats) => {
        lastHash = stats.hash;
        sockets.forEach((socket) => {
          socket.emit("hash", stats.hash)
          socket.emit("ok");
        })
      });
      let app = new express();
      // webpack 开始以监听模式进行编译
      compiler.watch({}, (err)=>{
        console.log('编译成功')
      });

      // 3. 添加webpack-dev-middleware中间件
      // 用来提供编译后产出的文件的静态文件服务
      const webpackDevMiddleware = (req, res, next) => {
        if (req.url === '/favicon.ico') {
          return res.sendStatus(404)
        }
        let filename = path.join(config.output.path, req.url.slice(
          1
        ));
        try {
          let stats = fs.statSync(filename);
          if (stats.isFile()) {
            let content = fs.readFileSync(filename);
            res.header("Content-Type", mime.getType(filename))
            res.send(content)
          } else {
            next()
          }
        } catch (error) {
          return res.sendStatus(404)
        }
      };
      app.use(webpackDevMiddleware);
      this.server = require("http").createServer(app)
      // 4. 使用sockjs 在浏览器和服务端之间建立一个websocket长连接
      // 将webpack 编译打包的各个阶段的状态信息告知浏览器端，浏览器根据这些
      // socket 消息进行不同的
      // 当然服务端传递最主要的信息还是新模块的hash值，后面的步骤根据hash值来进行模块热替换

      let io = require("socket.io")(this.server);
      // 启动一个websocker 服务器
      io.on("connection", (socket) => {
        sockets.push(socket);
        if (lastHash) {
          // 5. 发送hash值
          socket.emit("hash", lastHash)
          socket.emit("ok")
        }
      });
  }

  // 9. 创建http服务器开启服务
  listen(port) {
    this.server.listen(port, () => {
      console.log(port + '服务启动成功')
    })
  }
}

// 3. 创建server 服务器
let server = new Server(compiler)
server.listen(8080)

