# 基础题

## 计算机网络与其他知识

### 1.HTTP与HTTPS⭐s

HTTP：客户端与服务器之间数据传输的格式规范，表示“超文本传输协议”。  
HTTPS：在HTTP与TCP之间添加的安全协议层。  
默认端口号：HTTP：80，HTTPS：443。  
传输方式：http是明文传输，https则是具有安全性的ssl加密传输协议。  
连接方式：http的是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

### 2.TCP与UDP的区别

1. TCP面向连接（如打电话要先拨号建立连接）;UDP是无连接的，即发送数据之前不需要建立连接。
2. TCP面向字节流，实际上是TCP把数据看成一连串无结构的字节流;UDP是面向报文的
3. 每一条TCP连接只能是点到点的;UDP支持一对一，一对多，多对一和多对多的交互通信
4. TCP首部开销20字节;UDP的首部开销小，只有8个字节。
5. TCP提供可靠的服务。UDP适用于一次只传少量数据、对可靠要求不高的环境。

### 3.HTTP常见的状态码

### 4.如何解决跨域

什么是跨域？
浏览器从一个域名的网页去请求另一个域名的资源时，域名、端口、协议任一不同，都是跨域
常见的：
1、JSONP跨域
2、跨域资源共享（CORS）
3、nginx代理
4、WebSocket协议跨域

### 5.网页从输入url到页面加载发生了什么

1. DNS解析
2. TCP连接
3. 发送HTTP请求
4. 服务器处理请求并返回HTTP报文
5. 浏览器解析并渲染页面————>1.解析文档构建dom树。2.构建渲染树。3.布局与绘制渲染树。
6. 连接结束

### 6.对MVC和MVVM的理解

M:model(数据模型)，V：view(视图)，C：controller(逻辑处理)，VM：(连接model和view)  
MVC:单向通信。必须通过controller来承上启下。  
MVVM：数据双向绑定，数据改变视图，视图改变数据。

### 7.深拷贝，浅拷贝

浅拷贝：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。

深拷贝：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象。

总而言之，浅拷贝改动拷贝的数组原数组也会变（慎用！项目中很多地方共用的数组都会变）。深拷贝修改新数组不会改到原数组。
实现方法
浅拷贝：

1. Object.assign()
2. 函数库lodash的 _.clone 方法
3. es6的展开运算符 …
4. Array.prototype.concat()
5. Array.prototype.slice()

```javascript
 let arr = [{name: "uzi"}]
let arr1 = Object.assign({}, arr);
arr1[0].name = "xiaoming"
let arr2 = _.clone(arr);
arr2[0].name = "mlxg"
let arr3 = [...arr]
arr3[0].name = "xiaohu"
let arr4 = arr.concat()
arr4[0].name = "zitai"
let arr5 = arr.slice();
arr5[0].name = "clearLove"
console.log(arr[0].name == arr[1].name == arr[2].name ==……)
//true  arr[0].name="clearLove"

```

深拷贝：

1. JSON.parse(JSON.stringify())
2. 函数库lodash的 _.cloneDeep 方法
3. **jQuery.extend()**方法
4. 手写递归方法(转)

```javascript

var $ = require('jquery');
let arr = [{
    name: "theShy", age: "21"
}]

let arr1 = JSON.parse(JSON.stringify(arr));
arr1[0].name = "rookie"
let arr2 = _.cloneDeep(arr);
arr2[0].name = "ning"
let arr3 = $.extend(true, {}, arr);
arr3[0].name = "baolan"
console.log(arr[0].name == arr[1].name == arr[2].name ==……)
//fales arr1[0].name="rookie" arr2[0].name="ning"

```

### 8.防抖与节流

防抖：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间  
应用场景：  
提交按钮、用户注册时候的手机号验证、邮箱验证、

节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率  
应用场景：  
window对象的resize、scroll事件  
拖拽时候的mousemove  
射击游戏中的mousedown、keydown事件  
文字输入、自动完成的keyup事件

### 9.git 和 svn的区别

SVN是集中式版本控制系统，版本库是集中放在中央服务器的，首先要从中央服务器哪里得到最新的版本，干完活后，需要把自己做完的活推送到中央服务器。集中式版本控制系统是必须联网才能工作（如果在局域网还可以，带宽够大，速度够快，如果在互联网下，如果网速慢的话，就纳闷了）

Git是分布式版本控制系统，没有中央服务器的，每个人的电脑就是一个完整的版本库，这样，工作的时候就不需要联网了，因为版本都是在自己的电脑上。自己在电脑上改了文件A，其他人也在电脑上改了文件A，这时，只需把各自的修改推送给对方，就可以互相看到对方的修改了。

### 10.webSocket 

webSocket：可以让服务器主动向客户端发送消息，适合开发聊天室，多人游戏等协作应用。

WebSocket协议是基于TCP的一种新的网络协议。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

### 11.require和import区别

* 调用时间
  require运行时调用，理论上可以运用在代码任何地，甚至不需要赋值给某个变量之后再使用。  
  lmport是编译时候调用，必须放在文件开头，而且使用格式也是确定的。
* 遵循规范
  require 是 AMD规范引入方式  
  import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法
* 本质
  require是赋值过程，其实require 的结果就是对象、数字、字符串、函数等，再把require的结果赋值给某个变量。  
  import是解构过程。

通过require 引入基础数据类型时，属于复制该变量。  
通过require 引入复杂数据类型时，数据浅拷贝该对象。  
出现模块之间的循环引用时,会输出已经执行的模块,而未执行的模块不输出(比较复杂）。CommonJS模块默认export的是一个对象，即使导出的是基础数据类型。

ES6 模块语法是 JavaScript 模块的标准写法，坚持使用这种写法，取代 Node.js 的 CommonJS 语法。  
使用import取代require()。

```javascript
// CommonJS 的写法
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;
// ES6 的写法
import {func1, func2} from 'moduleA';
```

使用export取代module.exports。

```javascript
// commonJS 的写法
var React = require('react');
var Breadcrumbs = React.createClass({
    render() {
        return <nav/>;
    }
});
module.exports = Breadcrumbs;
```

## html

### 1.HTML5新特征

1. Canvas绘图以及SVG绘图。
2. 拖放（Drag and drop）API
3. 语义化标签（header、nav、footer、article、section）
4. 音频、视频（audio、video）API
5. 地理定位（Geolocation）
6. 本地离线存储（localStorage）,长期存储数据，关闭浏览器后不丢失。
7. 会话储存（sessionStorage）,数据在关闭浏览器后自动删除。
8. 表单控件（calendar、date、time、email、url、search）
9. 新技术如Web Worker、Web Socket。

### 2.cookie与sessionStorage和localStorage的区别

1. 保存方式  
   cookie存放在客户的浏览器上。  
   session都在客户端中保存，不参与服务器通讯。

2. 生命周期  
   cookie可设置失效时间  
   localStorage除非手动清除否则永久保存  
   sessionStorage关闭当前页面或浏览器后失效

3. 存储的大小  
   cookie 4kb左右  
   session 5M

4. 易用性  
   cookie需自己封装  
   session可以接受原生接口

## css

### 1.css有哪些基本的选择器，执行先后顺序？

类选择器（class）、标签选择器、ID选择器  
!important>内联样式（非选择器）>ID选择器>类选择器>标签选择器>通配符选择器（*）

### 2.清除浮动

父级div定义overflow:hidden  
结尾处加空div标签clear:both  
父级div定义height  
父级div定义overflow:auto  
用伪元素，父级div定义伪类:after（必须设置content）

### 3.CSS3新特征

圆角（border-radius）  
阴影（box-shadow）  
文字特效(text-shadow)  
线性渐变（gradient）  
变换(transform)  
更多的CSS选择器  
更多背景设置（background）  
色彩模式（rgba）  
伪元素（::selection）  
媒体查询（@media）  
多栏布局（column）  
图片边框（border-image）

### 4.介绍一下盒模型

盒模型由内容(content)、内边距(padding)、边框(border)、外边距(margin)组成。  
盒模型分为IE盒模型和W3C标准盒模型。  
W3C标准盒模型又叫content-box，元素宽度/高度由border+padding+content组成。  
（属性width,height只包含内容content，不包含border和padding）  
IE盒模型又叫border-box，元素宽度/高度由content组成。  
（属性width,height包含border和padding，指的是content+padding+border。）

### 5.CSS中有哪些长度单位？

1. 绝对长度单位：px
2. 百分比: %
3. 相对父元素字体大小单位: em
4. 相对于根元素字体大小的单位: rem
5. 相对于视口*宽度的百分比（100vw即视窗宽度的100%）: vw
6. 相对于视口*高度的百分比（100vh即视窗高度的100%）: vh

### 6.display:none和visibility:hidden的区别

display:none：隐藏元素，在文档布局中不在给它分配空间（从文档中移除）  
visibility:hidden: 隐藏元素，但是在文档布局中仍保留原来的空间（还在文档中）

## javascript

### 1.ES6新特性？

1. 新增块级作用域let定义变量和const定义常量
2. 变量的解构赋值
3. 模板字符串 （‘${}’）
4. 默认参数（key=value）
5. 箭头函数（=>）
6. 扩展运算符（…）
7. 模块（import/export）
8. 类（class/extends）
9. Promise
10. Proxy

### 2.闭包的理解

理解：主要是为了设计私有的方法和变量。  
优点：可以避免全局变量造成污染。  
缺点：闭包会常驻内存，增加内存使用量，使用不当会造成内存泄漏。  
特征：（1）函数嵌套函数。（2）在函数内部可以引用外部的参数和变量。（3）参数和变量不会以垃圾回收机制回收。

### 3.call()、apply()、bind（）的区别

### 4.原型，原型链

主要是还是实现继承与扩展对象。  
1.每个函数对象都有一个 prototype 属性，这个属性就是函数的原型对象。  
2.原型链是JavaScript实现继承的重要方式，原型链的形成是真正是靠__proto__ 而非prototype。

### 5.JS基本数据类型

1. Number:数值，包括整型和浮点型。
2. String:字符型。
3. Undefined:未定义，声明变量时未赋值。
4. Null：定义为空或者不存在。
5. Boolean：布尔值，true or false。
6. Object：对象，表示复合结构的数据集。

### 6.export和export default的区别

1. 均可导出常量、函数、文件、模块等。
2. 在一个文件或模块中，export、import可以有多个。export default仅有一个。
3. 通过export方式导出，在导入时要加{ }，export default则不需要。

### 7.箭头函数和普通函数的区别

1. 语法更加简洁、清晰，=>()
2. 箭头函数是匿名函数，不能作为构造函数，不能使用new
3. 箭头函数不能使用arguments，而用reat参数…解决
4. 箭头函数没有自己的this,会捕获其所在的上下文的this值,并且不能通过call()和apply()来改变其this
5. 箭头函数没有原型

### 8.GET和POST的区别

表面区别

1. 后退/刷新：GET无害，POST数据会被重新提交。
2. 书签：GET产生的URL地址可以被收藏为书签，而POST不可以。
3. 数据：GET一般是用来获取数据，POST提交数据。
4. 数据类型：GET只允许ASCII字符,POST无限制。
5. 数据大小：GET大小有限制（一般来说1024字节）,POST理论上来说没有大小限制。
6. 安全性：GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
7. 可见性：GET参数通过URL传递对所有人可见，POST数据不可见。
8. 历史保留：GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

### 9.forEach和map的区别

forEach没有返回值，map返回新的数组。

### 10.对象的继承

常见的：

1. 原型链继承
2. 借用构造函数继承
3. 原型链+借用构造函数的组合继承（使用 call 或 applay 方法）
4. ES6中class 的继承（class可以通过extends关键字实现继承）

### 11.简述一下你理解的面向对象

面向对象是基于万物皆对象这个哲学观点. 把一个对象抽象成类，具体上就是把一个对象的静态特征和动态特征抽象成属性和方法，也就是把一类事物的算法和数据结构封装在一个类之中,程序就是多个对象和互相之间的通信组成的。

面向对象具有封装性,继承性,多态性。

封装：隐蔽了对象内部不需要暴露的细节,使得内部细节的变动跟外界脱离,只依靠接口进行通信.封装性降低了编程的复杂性。
继承：使得新建一个类变得容易,一个类从派生类那里获得其非私有的方法和公用属性的繁琐工作交给了编译器。
多态：继承和实现接口和运行时的类型绑定机制所产生的多态，使得不同的类所产生的对象能够对相同的消息作出不同的反应,极大地提高了代码的通用性.。

### 12. == 和 ===的区别

相同点：都是判定两个值是否相等  
不同点：== 只比较值不比较类型，而 ===会判断类型

### 13. 普通的数组去重

在不涉及去重对象、NaN等情况下。

1. IndexOf()
2. 双重for循环
3. es6的 […new Set()]
4. filter()
5. sort()
   面试随便写一两种就行、项目直接用new Set()（方便）
   注 ：如果有多维数组如 [1,[2],[3,[2,3,4,5]] ] 先扁平化再去重,
   用Array.flat(Infinity)实现扁平化。

### 14. Promise

含义：异步编程的一种解决方案，用来解决回调地狱。  
三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败） （Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。）

resolved函数作用：将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved）。  
reject函数的作用：将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected）。

Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。  
then: Promise 实例添加状态改变时的回调函数。可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。

缺点：无法取消Promise，一旦新建它就会立即执行，无法中途取消。如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。

## Vue2

### 1.数据双向绑定原理

答：通过数据劫持结合发布—订阅模式，通过Object.defineProperty()为各个属性定义get、set方法，在数据发生改变时给订阅者发布消息，触发相应的事件回调。

### 2. vue生命周期

概念：从创建、初始化数据、编译模板、挂载DOM、渲染-更新-渲染、卸载等一系列过程，称为为Vue 实例的生命周期。

**beforeCreate**：创建前。此时，组件实例刚刚创建，还未进行数据观测和事件配置，拿不到任何数据。
**created**：创建完成。vue 实例已经完成了数据观测，属性和方法的计算(比如props、methods、data、computed和watch此时已经拿得到)，但尚未开始挂载。  
**beforeMount**：挂载前。挂在开始之前被调用，相关的render函数首次被调用（虚拟DOM）。编译模板，把data里面的数据和模板生成html，完成了el和data 初始化，注意此时还没有挂在html到页面上。  
**mounted**：挂载完成。也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。  
**beforeUpdate**：在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，不会触发附加地重渲染过程。  
**updated**：更新后。在由于数据更改导致地虚拟DOM重新渲染和打补丁之后调用，  
**beforeDestroy**;销毁前。在实例销毁之前调用，实例仍然完全可用。（一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件）  
**destroyed**：销毁后。在实例销毁之后调用，调用后，vue实列指示的所有东西都会解绑，所有的事件监听器会被移除。  
其他：  
**activated**：在keep-alive组件激活时调用。  
**deactivated**：在keep-alive组件停用时调用。  
详情可看vue官网生命周期钩子

### 3.组件之间如何传值

一、Vue父子 组件之间传值

* 子组件通过props来接受数据和通过$emit来触发父组件的自定义事件；
  二、兄弟组件之间的传值

* 建一个公共组件bus.js.。传递方通过事件触发bus.$emit。接收方通过在mounted（）{}生命周期里触发bus.$on。
  三、可以通过Vuxe 来跨组件传参。

* 详情可看vue之组件的传参方式

### 4.路由之间如何传参

vue2.0的写法

* 跳转时使用push方法拼接携带参数**

```javascript
this.$router.push({
    path: `/getlist/${id}`,
})
```

* 通过路由属性中的name来确定匹配的路由，通过params来传递参数。

```javascript
this.$router.push({
    name: 'Getlist',
    params: {
        id: id
    }
})
```

* 使用path来匹配路由，然后通过query来传递参数**

```javascript
this.$router.push({
    path: '/getlist',
    query: {
        id: id
    }
})
```

详情请看Vue-router之简单的路由传参三种方法

### 5.谈一谈VUEX

原理：Vuex是专门为vue.js应用程序设计的状态管理工具。  
构成:

* state:vuex的基本数据，用来存储变量。
* mutations:提交更改数据，同步更新状态。
* actions:提交mutations，可异步操作。
* getters：是store的计算属性。
* modules:模块，每个模块里面有四个属性。  
  关于VUEX如何使用可以看VUE的传值问题

### 6.计算属性和侦听属性的区别

详情请看Vue的计算属性与methods、watch的区别

### 7.如何封装axios？

这个根据自己项目实际情况来说，这篇文章写的不错可以看看Vue的axios的简单封装

### 8.Route和router的区别

* route:是路由信息对象，包括“path,parms,hash,name“等路由信息参数。
* Router:是路由实例对象，包括了路由跳转方法，钩子函数等。

### 9.v-show和v-if的区别

* v-if:组件的销毁和重建，更适合带有权限的操作，切换开大。如果开始条件为false则什么都不做，只有为true才会编译。
* v-show:css切换，隐藏显示更适合频繁切换。在任何情况下都会被编译，然后被缓存，而且dom元素会被保留。

### 10.vue中数据变了但是视图不跟新怎么解决？

原因：

* 数组数据变动：使用某些方法操作数组，变动数据时，有些方法无法被vue监测。
* Vue 不能检测到对象属性的添加或删除。
* 异步更新队列：数据第一次的获取到了，也渲染了，但是第二次之后数据只有在再一次渲染页面的时候更新，并不能实时更新。

### 11.vue中data为什么是函数而不是对象？

官网中有这么一段介绍，详情可以看组件的复用

意思就是，在Vue中组件是可以被复用的，而当data是一个函数的时候，每一个实例的data都是独立的，不会相互影响了。

### 12.vue中父子组件传值，父组件异步请求，子组件不能实时更新怎么解决？（vue中数据不能实时更新怎么解决？）

首先了解父子组件生命周期执行顺序 ==>
加载渲染数据过程
父组件 beforeCreate -->
父组件 created -->
父组件 beforeMount -->
子组件 beforeCreate -->
子组件 created -->
子组件 beforeMount -->
子组件 mounted -->
父组件 mounted -->
原因：因为生命周期只会执行一次，数据是要等到异步请求以后才能拿到，那么子组件的mounted钩子执行的时候，还没有拿到父组件传递过来的数据，但是又必须要打印出来结果，那这样的话，就只能去打印props中的默认值空字符串了，所以打印的结果是一个空字符串。
解决办法：

1. 使用v-if控制组件渲染的时机
   初始还没拿到后端接口的异步数据的时候，不让组件渲染，等拿到的时候再去渲染组件。使用v-if="变量"去控制，初始让这个变量为false，这样的话，子组件就不会去渲染，等拿到数据的时候，再让这个变量变成true，
   举例：

```vue
data(){
return {
isTrue: false // 初始为false
};
},
monted(){
this.$post.a.b.c.getData(res => {
if (res.result) {
this.isTrue = true
}
})
}
```

2. 使用watch监听数据的变化
   举例：

```vue
props: {
tableData: {
type: Array,
default: [],
},
},
watch: {
tableData(val){
console.log(val)
}
},
```

3. 使用VueX

### 13.父子组件传参emit如何传多个参数？

子组件：

```vue
submit(){
this.$emit('submit',1,2,3,4,5)
}
```

父组件

```vue
g(val1,val2,val3,val4,val5) {
console.log(val1,val2,val3,val4,val5)
}
```

## react
### 1.React的生命周期(版本17.0.2)
概念：每个组件都包含 “生命周期方法”，你可以重写这些方法，以便于在运行过程中特定的阶段执行这些方法。
**挂载**：

* **constructor()**：在 React 组件挂载之前，会调用它的构造函数。（注：如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。）
* **render()**： class 组件中唯一必须实现的方法。
* **componentDidMount()**：在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。
更新

* **render()**： class 组件中唯一必须实现的方法。
* **componentDidUpdate()**：在更新后会被立即调用。首次渲染不会执行此方法。
卸载

* **componentWillUnmount()**：在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
具体可用一张图来表示


详情可看官网组件的生命周期

### 2.React如何获取组件对应的DOM元素？
* **ref**:通过当前class组件实例的一些特定属性来直接获取子节点实例。
注意：不能在函数组件上使用 ref 属性，因为他们没有实例。
* **findDOMNode()**：findDOMNode 是一个访问底层 DOM 节点的应急方案（escape hatch）。
注意：在大多数情况下，不推荐使用该方法，因为它会破坏组件的抽象结构。严格模式下该方法已弃用。findDOMNode 不能用于函数组件。
详情请看官网：ReactDOM
### 3.React中可以在render访问refs吗？为什么？
答：不能，因为在render阶段refs还未生成。DOM 的读取在 pre-commit 阶段，DOM的使用在 commit 阶段。


### 4.React中什么是受控组件和非控组件？
渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。  

受控组件更新state的流程：  

* 可以通过初始state中设置表单的默认值

* 每当表单的值发生变化时，调用onChange事件处理器

* 事件处理器通过事件对象e拿到改变后的状态，并更新组件的state

一旦通过setState方法更新state，就会触发视图的重新渲染，完成表单组件的更新

对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。
详情看官网受控组件  

非受控组件  
如果一个表单组件没有value props（单选和复选按钮对应的是checked props）时，就可以称为非受控组件。在非受控组件中，可以使用一个ref来从DOM获得表单值。而不是为每个状态更新编写一个事件处理程序。  

官网解释：要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 使用 ref 来从 DOM 节点中获取表单数据。  

因为非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。  
官网非受控组件  

总结： 页面中所有输入类的DOM如果是现用现取的称为非受控组件，而通过setState将输入的值维护到了state中，需要时再从state中取出，这里的数据就受到了state的控制，称为受控组件。

### 5.谈一谈React的状态提升？
官网是这么解释的：

多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。

简单来说就是：将多个组件需要共享的状态提升到它们最近的父组件上，在父组件上改变这个状态然后通过props分发给子组件。对子组件操作，子组件不改变自己的状态。
可看官网的温度计数器例子

### 6.为什么要使用虚拟DOM？(什么是 Virtual DOM？)
**Virtual DOM算法**
用一张图片来表示

**虚拟DOM**
那就是虚拟DOM概念出现的地方，并且其性能要比真实DOM好得多。虚拟DOM只是DOM的虚拟表示。每当我们的应用程序状态更改时，虚拟DOM就会更新，而不是真实DOM。

**React如何使用虚拟DOM**

在React中，每个UI块都是一个组件，每个组件都有一个状态。React遵循可观察的模式，并监听状态变化。当组件的状态改变时，React更新虚拟DOM树。虚拟DOM更新后，React然后将虚拟DOM的当前版本与虚拟DOM的先前版本进行比较。此过程称为“差异化”。

一旦React知道哪些虚拟DOM对象已更改，然后React就会在真实DOM中仅 更新那些对象。与直接操作真实DOM相比，这使性能好得多。

**原因**：对于局部的小视图的更新，重新构造整棵 DOM没问题；但是对于大型视图，如全局应用状态变更的时候，需要更新页面较多局部视图的时候，这样的做法不可取。 Virtual DOM只是加了一些特别的步骤来避免了整棵 DOM 树变更。

简而言之就是：  

* 频繁的DOM操作昂贵且性能沉重。
* 虚拟DOM是真实DOM的虚拟表示。
* React使用虚拟DOM来增强其性能。
* JS 和 DOM 之间的缓存。


## angular



