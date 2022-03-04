
let { SyncHook } = require('tapable')
let hook = new SyncHook();

// 注册监听 相当于 hook.addEventListener('click', () => {});
hook.tap('some name', () => {
  console.log('some name')
})
// 触发 相当于点击click
hook.call();