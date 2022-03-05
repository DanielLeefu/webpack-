
let { SyncHook } = require('tapable')
let hook = new SyncHook();

// 注册监听 相当于 hook.addEventListener('click', () => {});
hook.tap('some name', () => {
  console.log('some name')
})
// 触发 相当于点击click
hook.call();

// 简单实现SyncHooks 实际就是发布订阅
class SyncHookMy  {
  constructor () {
    this.taps = [];
  }
  tap(name, fn) {
    this.taps.push(fn);
  }
  call() {
    this.taps.forEach(tap => tap())
  }
}

