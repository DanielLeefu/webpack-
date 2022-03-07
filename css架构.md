>oss BEM SMACSS  ITcss  Accss
>



## less

>声明变量  @



```javascript
function css() {
  
}
```



Minxin  

.css()



### scss

>定义变量  $



Mixin 使用

@mixin box-center() {}

@include box-center(center, center)

Sass 和scss区别

sass没有大括号。



















![image-20220222214526110](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222214526110.png)



![image-20220222214750068](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222214750068.png)



![image-20220222214909556](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222214909556.png)







>SplitChunksPlugin

![image-20220222215716438](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222215716438.png)



![image-20220222215917862](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222215917862.png)

![image-20220222215837275](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222215837275.png)

![image-20220222220357641](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222220357641.png)

## 代码分割的规则

1. 每一个入口是一个chunk
   1. page1.js 
   2. page2
   3. page3
2. 动态import 会分割代码块
3. 代码分割 split-chunk-Plugin1

![image-20220222222748845](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222222748845.png)

![image-20220222224048907](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220222224048907.png)

![image-20220306150943420](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306150943420.png)





![image-20220224213648203](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220224213648203.png)





plugin 预设是一个返回plugin 数组的函数

presets: [preset1, preset2]

Function preseet1() {

​	return {plugins: [plugin5, plugin6]}

}



插件是从前往后

​		预设是从后往前执行

















### 事件流

事件流描述了页面接收事件的顺序，就好像一个一个的圆套在一起，然后点击触发，一种情况是先点击到最内层的圆，然后向外扩散（事件冒泡），还有一种就是先点击到了最外层，然后才点击到最内层(事件捕获)

事件流分为三个阶段，事件捕获，到达目标，事件冒泡，事件捕获最先发生，然后实际的目标元素接收到事件，最后一个阶段是冒泡。

### 事件冒泡

事件被定义为从最具体的元素开始触发，然后向上传播到没有那么具体的元素，比如说页面有一个div标签，点击后，div元素最先触发，click事件沿着DOM树一路向上，然后触发body,触发html,触发Document,一直冒泡到window对象

### 事件捕获

事件捕获是最不具体的节点先收到事件，最具体的节点应该最后接收到事件， 事件捕获实际上是为了在事件到达最终目标前拦截事件



处理事件



- 获取到操作对象的引用，然后他都会包含一个小写的事件处理程序，将其赋值为一个函数即可

  ```js
  const btn = document.getElementById('button')
  btn.onclick = () => {
  	console.log('btn click')
  }
  ```

  如果将事件处理函数设置为null,就相当于移除事件处理程序

  ```js
  btn.onclick = null
  ```

  

- 通过 `addEventListener()/removeEventlister()`

  他们接受三个参数，事件名，事件处理函数，以及一个boolen,来表示是在事件冒泡阶段调用事件处理函数还是在捕获阶段调用。默认为false,在冒泡阶段调用

  >添加事件和移除事件的事件处理函数必须是用同一个，否则无法移除























### web pack 工作流程

![image-20220304221548535](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220304221548535.png)

![image-20220305210940392](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220305210940392.png)

![image-20220305211021331](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220305211021331.png)

![image-20220306144556045](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306144556045.png)

ta pab le 分类

![image-20220305211131513](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220305211131513.png)

![image-20220306142808819](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306142808819.png)





### webpack 三种hash

![image-20220306154139580](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306154139580.png)





## 利用webpack 优化前端性能

![image-20220306145145633](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306145145633.png)

![image-20220306145204927](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306145204927.png)

![image-20220306145250512](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306145250512.png)

使用three.shaking



使用 Scope Hoisting

![image-20220306145405431](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306145405431.png)

![image-20220306145500274](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306145500274.png)

![image-20220306145559950](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306145559950.png)

react 懒加载

![image-20220306145702140](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306145702140.png)

![image-20220306150013780](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306150013780.png)

![image-20220306150140218](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306150140218.png)

![image-20220306150233161](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306150233161.png)

![image-20220306150307278](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306150307278.png)****

![image-20220306152349226](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306152349226.png)







### 如何提高we b pa c k的构建速度

![image-20220306161545577](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306161545577.png)

![image-20220306162134377](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306162134377.png)

![image-20220306162338412](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306162338412.png)

![image-20220306162439262](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306162439262.png)

![image-20220306163010485](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306163010485.png)

![image-20220306163052168](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306163052168.png)

![image-20220306163413435](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306163413435.png)

![image-20220306163453154](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306163453154.png)

![image-20220306163522944](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306163522944.png)

![image-20220306163609038](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306163609038.png)







### loader



![image-20220306164552095](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306164552095.png)

![image-20220306164639056](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306164639056.png)

![image-20220306164655224](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306164655224.png)

![image-20220306164712493](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306164712493.png)

![image-20220306164731453](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306164731453.png)

![image-20220306164846400](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306164846400.png)

loader 分为四种







Three-shaking 原理。依赖于bab le-import-plugin

实际上是将导入通过a s t转换为 默认导出

![image-20220306181021677](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306181021677.png)



### we b pa c k 热更新

![image-20220306181754519](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306181754519.png)

![image-20220306184110194](/Users/lisiyuan/Library/Application Support/typora-user-images/image-20220306184110194.png)