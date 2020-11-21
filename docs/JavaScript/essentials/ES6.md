# ECMAScript 6 (ES6, ES2015)

兼容性: IE10+, chrome , Firefox, 移动端, Node.js

提前编译

ES6:

1. 变量
2. 函数
3. 数组
4. 字符串
5. 面向对象
6. Promise
7. generator
8. 模块化

## 变量

```js
var:
1. 可以重复声明
2. 无法限制修改
3. 没有块级作用域
```

```js
let:
不能重复声明,变量,块级作用域
const:
不能重复声明,常量,块级作用域
```

## 函数

### 箭头函数

1. 如果只有一个参数，() 可以省
2. 如果只有一个 return，{} 可以省
3. this 指向更清晰

```
() => {}
```

### 函数的参数

1. 参数扩展/展开数组
2. 默认参数

```js
// 参数展开
// 1.收集剩余参数 必须放最后
function Name(a, b, ...args) {
  // args 剩余参数   必须放最后
}
// 2. 展开数组
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr = [...arr1, ...arr2] // 1,2,3,4,5,6
```

```js
//默认参数
function Name(a, b = 5, c = 10) {
  // args 剩余参数   必须放最后
}
```

## 结构赋值

1. 左右两边结构必须一样
2. 右边必须是个东西
3. 声明和赋值不能分开 (必须在一句话里完成)

```js
let [a, b, c] = [1, 2, 3]
let { a, b, c } = { a: 3, b: 6, c: 9 }
let [{ a, b }, [n1, n2, n3], num, str] = [
  { a: 12, b: 5 },
  [12, 5, 8],
  8,
  'dsafa',
]
```

## 数组

map -----映射
reduce---汇总
filter---过滤器
forEach--循环(迭代)

```js
// map
let score = [19, 85, 99, 25, 90]
let result = score.map((item) => (item >= 60 ? '及格' : '不及格'))
// reduce
let arr = [12, 69, 180, 8764]
let result = arr.reduce((tmp, item, index) => {
  return tmp + item
})
// filter
let arr = [12, 5, 8, 99, 27, 36, 75]
let result = arr.filter((item) => item % 3 == 0)

let arr = [
  { title: '包', price: 75 },
  { title: '包1', price: 564654 },
  { title: '包2', price: 5465 },
  { title: '包3', price: 743543 },
]
let result = arr.filter((json) => json.price >= 10000)
// forEach
let arr = [12, 5, 8, 99, 27, 36, 75]
arr.forEach((item, index) => {
  console.log(index + ':' + item)
})
```

## 字符串

1. 多了两个新方法
2. 字符串模板

```js
// 1. 多了两个新方法
// startsWith
let str = 'http://example.com'
if (str.startsWith('http://')) {
  alert('普通网址')
}
// endWith
let str = '1.txt'
if (str.endsWith('.txt')) {
  alert('文本文件')
}

// 字符串模板
// 1.可以把变量塞到字符串内
// 2.可以折行
```

## 面向对象

1. class 关键字、构造器和类分开了
2. class 里面直接加方法
   继承

```js
class User {
  constructor(name, pass) {
    this.name = name
    this.pass = pass
  }
  showName() {
    alert(this.name)
  }
  showPass() {
    alert(this.pass)
  }
}
class VipUser extends User {
  constructor(name, pass, level) {
    super(name, pass)
    this.level = level
  }
}
```

## JSON

1. JSON 对象
2. 简写

```js
JSON.stringify()
JSON.parse()
```

## Promise

异步: 操作之间没啥关系，同时进行多个操作
同步: 同时只能做一件事
