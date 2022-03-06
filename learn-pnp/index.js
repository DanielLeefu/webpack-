// pnp 在package.json中配置后，再安装的时候，并不会生成nodemodules的宝
// 而是会生成一个.pnp.js 文件

// package.json 中配置
// "installConfig": {
//   "pnp": true
// }

// 添加脚步
// "start": "node --require='./.pnp.js' index.js"