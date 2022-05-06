# 框架/架构/框架管理

## 模块化开发

### 1、说说你对前端模块化开发的认识。

相关认识如下。

（1）异步模块定义（AMD）规范是 require. js推广的、对模块定义的规范。

（2）通用模块定义（CMD）规范是 SeaJS推广的、对模块定义的规范。

（3）AMD提前执行，CMD延迟执行

（4）AMD推荐的风格是通过 module transport规范暴露接口，即通过返回一个对象暴露模块接口；CommonJs的风格是通过对 module.exports或exports的属性赋值来达到暴露模块接口的目的。

### 2、说说你对 CommonJS和AMD的理解。

CommonJS是服务器端模抉的规范， Node. js采用了这个规范。CommonJS规范同步加载模块，也就是说，只有加载完成，才能执行后面的操作。AMD规范则非同步加载模块，允许指定回调函数。

AMD推荐的风格是通过 module transport规范暴露接口，即通过返回一个对象来暴露模块接口， CommonJS的风格是通过对module.exports或exports的属性赋值来达到暴露模块对象的目的。

### 3、模块化开发的好处是什么？

在Web开发中，通常将项目的实现划分成许多模块。模块化开发其实就是将功能相关的代码封装在一起，方便维护和重用。另外，模块之间通过API进行通信

### 4、require.js解决了什么问题？

解决了以下问题。

（1）实现了 JavaScript文件的异步加载。

（2）有助于管理模块之间的依赖性。

（3）便于代码的编写和维护。

### 5、前端模块化解决了哪些问题？

解决了以下问题。

（1）各个模块的命名空间独立，A模块的变量x不会覆盖B模块的变量x。

（2）模块的依赖关系，通过模块管理工具（如 webpack、 require.js等）进行管理。

### 6、如何实现前端模块化开发？

require. js、 SeaJS都是适用于web浏览器端的模块加载器，使用它们可以更好地组织 Javascript代码。

### 7、模块化的 JavaScript开发的优势是什么？

优势如下。

（1）将功能分离出来

（2）具有更好的代码组织方式

（3）可以按需加载。

（4）避免了命名冲突。

（5）解决了依赖管理问题

### 8、你了解 CommonJS规范吗？

定义模块，即一个单独的文件就是一个模块，文件中的作用域独立，文件中定义的变量是无法被其他文件引用的。如果需要使用这些变量，需要将其定义为全局变量（不建议）。

输出模块指模块只有一个接口对象，即使用 module. exports对象可以将需要输出的内容放入到该对象中。

加载模块指通过 require加载，例如 var module= require（'/ moduleFile. js），该 module的值对应文件内部的 module exports对象，然后就可以通过
module名称引用模块中暴露的接口变量或接口函数了。

### 9、谈谈你对CMD（ Common module Definition，通用模块定义）规范的理解。

就近依赖，需要时再进行加载，所以执行顺序和书写顺序一致；这一点与AMD不同，AMD是在使用模块之前将依赖模块全部加载完成，但由于网络等其他因素可能导致依赖模块下载的先后顺序不一致，这就造成执行顺序可能与书写顺序不一致。

### 10、你了解 EMAScript 6模块规范吗？

相关了解如下。

（1）类似于 Commonjs，语法更简洁

（2）类似于AMD，直接支持异步加载和配置模块加载

（3）对于结构可以做静态分析、静态检测。

（4）比 CommonJS更妤地支持循环依赖。

### 11、为什么要通过模块化方式进行开发？

原因如下。

（1）高内聚低耦合，有利于团队开发。当项目很复杂时，将项目划分为子模块并分给不同的人开发，最后再组合在一起，这样可以降低模块与模块之间的依赖关系，实现

低耦合，模块中又有特定功能体现高内聚特点。

（2）可重用，方便维护。模块的特点就是有功能，当两个项目都需要某种功能时，定义一个特定的模块来实现该功能，这样只需要在两个项目中都引入这个模块就能够实现该功能，不需要书写重复性的代码。

另外，当需要变更该功能时，直接修改该模块，这样就能够修改所有项目的功能，维护起来很方便。

### 12、AMD与CMD的区别是什么？

区别如下

（1）对于依赖的模块，AMD提前执行，CMD延迟执行，不过 require.JS从2.0版本开始，也改成可以延迟执行（根据写法不同，处理方式不同）。

（2）CMD推崇依赖就近，AMD推崇依赖前置。

### 13、为什么需要前端模块化？

JavaScript以前只用于实现网页的特效、表单的验证等简单的功能，只需要少量的代码就可以完成这些功能。但随着技术的发展，需要使用
JavaScript处理越来越多的事情，以前许多本来由后台处理的内容都转移到前端来处理，这使代码量急剧膨胀。

如果还是像以前一样书写代码，那么对于后期的维护将非常困难。同时在开发中，我们难免会需要一些“轮子”，如果没有模块（ Model）这个概念，我们将很难简便地使用别人制造的“轮子”。

所以，我们需要前端模块化。

### 14、前端模块化是否等同JavaScript模块化？

前端开发相对其他语言来说比较特殊，因为我们实现一个页面功能总是需要JavaScript、CSS和HTML三者相互交织。

如果一个功能只有 JavaScript实现了模块化， CSS和 Template还处于原始状态，那么调用这个功能的时候并不能完全通过模块化的方式，这样的模块化方案并不是完整的。

所以我们真正需要的是一种可以将 JavaScript 、CSS和HTML同时都考虑进去的模块化方案，而非只使用 JavaScript模块化方案。综上所述，前端模块化并不等同于 JavaScript模块化。

### 15、JavaScript模块化是否等同于异步模块化？

主流的 JavaScript模块化方案都使用“异步模块定义”的方式，这种方式给开发带来了极大的不便，所有的同步代码都需要修改为异步方式。

当在前端开发中使用“ CommonJs”模块化开发规范时，开发者可以使用自然、容易理解的模块定义和调用方式，不需要关注模块是否异步，不需要改变开发者的开发行为。因此 JavaScript模块化并不等同于异步模块化。

### 16、require.JS与 SeaJS的异同是什么？

相同之处如下。

require.JS和 SeaiJS都是模块加载器，倡导的是一种模块化开发理念，核心价值是让JavaScript的模块化开发变得更简单自然。

不同之处如下。

（1）定位有差异。require.JS想成为浏览器端的模块加载器，同时也想成为 rhino/node等环境的模块加载器。SeaJS则专注于Web浏览器端，同时通过node扩展的方式可以很方便地运行在Node服务器端

（2）遵循的规范不同。require.JS遵循的是AMD规范， SeaJS遵循的是CMD规范。规范的不同，导致了两者API的不同。SeaJS更简洁优雅，更贴近 CommonJS Modules/1.1和 Node Modules规范。

（3） require.JS尝试让第三方类库修改自身来支持 require.JS。SeaJS不强推，采用自主封装的方式来“海纳百川”。

### 17、系统在设计上遵循几个原则？

遵循以下原则

（1）在编译时纳入所有依赖。

（2）去中心化，实现分布式

（3）内置命名和封装。

### 18、什么是模块化规范？

服务器端规范主要是 CommonJS, Node.js用的就是 CommonJS规范客户端规范主要有推崇依赖前置的AMD和推崇依赖就近的CMD。AMD规范的实现主要有 require.js。

CMD规范的主要实现有 SeaJS。但是 SeaJS已经停止维护了，因为在 EMAScript 6 中提供了 EMAScript Module模块化规范，随着 EMAScript 6的普及，第三方的模块化规范的实现将会慢慢地被淘汰。

## 打包工具

四款前端主流的打包工具：**grunt** ， **gulp**，**webpack**， **rollup**，**esbuild(vite)**
**Grunt**：

最老牌的打包工具，它运用配置的思想来写打包脚本，一切皆配置，所以会出现比较多的配置项，诸如option,src,dest等等。而且不同的插件可能会有自己扩展字段，认知成本高，运用的时候需要明白各种插件的配置规则。

**Gulp**：

用代码方式来写打包脚本，并且代码采用流式的写法，只抽象出了gulp.src, gulp.pipe, gulp.dest, gulp.watch 接口，运用相当简单。更易于学习和使用，使用gulp的代码量能比grunt少一半左右。

**webpack**:

是模块化管理工具和打包工具。通过 loader 的转换，任何形式的资源都可以视作模块，比如 Commonjs 模块、AMD 模块、ES6
模块、css、图片等。它可以将许多松散的模块按照依赖和规则打包成符合生产环境部署的前端资源。还可以将按需加载的模块进行代码分隔，等到实际需要的时候再异步加载。它定位是模块打包器，而 Gulp/Grunt 属于构建工具。Webpack
可以代替 Gulp/Grunt 的一些功能，但不是一个职能的工具，可以配合使用。

**Rollup**：

下一代 ES6 模块化工具，最大的亮点是利用 ES6 模块设计，利用 tree-shaking生成更简洁、更简单的代码。一般而言，对于应用使用 Webpack，对于类库使用 Rollup；需要代码拆分(Code Splitting)
，或者很多静态资源需要处理，再或者构建的项目需要引入很多 Commonjs 模块的依赖时，使用 webpack。代码库是基于 ES6 模块，而且希望代码能够被其他人直接使用，使用 Rollup。

vi设计http://www.maiqicn.com 办公资源网站大全https://www.wode007.com  

vi设计http://www.maiqicn.com 办公资源网站大全https://www.wode007.com  

使用总结：  

**Grunt**：MPA，老牌打包工具，基于文件为媒介（运行慢，零散的脚本文件一当多起来就受到影响  

**Gulp**：MPA，易学，基于 nodejs 的 steam 流打包  

**Webpack**：SPA，目前最强大的打包工具，但是过于臃肿，如何单纯打包js不推荐  

**Roleup**：MPA，tree-shaking特性（针对es6，按需打包，多余的不要，目前（2018，vuex,react主流使用）  

**esbuild(vite)**  
**esbuild(vite)** 重点提到的就是构建速度方面，为什么会比 webpack 快呢？而且不在同一个数量级。  

Go 语言与 JavaScript 语言差异（webpack 采用 JavaScript；esbuild 采用 Go）  

Go 是为并行性而设计的，而 JavaScript 是单线程的  
Go 在线程之间共享内存，而 JavaScript 必须在线程之间序列化数据  
Go 可直接编译成机器码，不依赖其他库，必然比 JIT 快（JIT相关看这里）  
对构建流程进行了优化，充分利用 CPU 资源  

解析 => 链接 => 代码生成。解析和代码生成采用并行化  
当导入同一 JavaScript 的不同入口时，可以轻松共享（线程间共享内存）  
尽量少做全 AST 传递以获得更好的缓存局部性（esbuild 中只有三次全量 AST pass）  

Lexing + parsing + scope setup + symbol declaration  
Symbol binding + constant folding + syntax lowering + syntax mangling  
Printing + source map generation  

扫描阶段： 这个阶段从一组入口点开始，遍历依赖图以找到需要在包中的所有模块。这是bundler.ScanBundle()作为并行工作列表算法实现的。列表中的每个文件都在单独的 goroutine 上被解析为
AST，如果它有任何依赖项（ES6import语句、ES6import()表达式或 CommonJSrequire()表达式），可能会向工作列表添加更多文件。扫描继续，直到工作清单为空。

编译阶段： 这个阶段为每个入口点创建一个包，这涉及首先“链接”导入和导出，然后将解析的 AST 转换回 JavaScript，然后将它们连接在一起形成最终的 bundle。这发生在(*Bundle).Compile().

示例
index.js

```javascript
import {add} from './math.js'

let result = add(1, 2)
console.log(result)
```

math.js

```javascript

const add = function (p1, p2) {
    return p1 + p2;
}
const sub = function (p1, p2) {
    return p1 - p2;
}
export {add, sub}
```

构建：

```shell
$ npx esbuild src/index.js --bundle
```

结果：

```javascript
(() => {
// src/math.js
    var add = function (p1, p2) {
        return p1 + p2;
    };

// src/index.js
    var result = add(1, 2);
    console.log(result);
})();
```

默认输出 iife 格式，也可以通过 --format 指定其他格式输出（cjs、esm）

```shell
$ npx esbuild src/index.js --bundle --format=cjs
$ npx esbuild src/index.js --bundle --format=esm
```

针对 esm 格式，也支持 Tree Shaking

```shell
$ esbuild index.js main.js --bundle --splitting --outdir=dist --format=esm
```

main.js 内容同上述 index.js

```javascript
import {add} from './math.js'

console.log(add(3, 4))
```

结果

```javascript
import {add} from "./chunk-2YHQ3R6P.js";

// main.js
console.log(add(3, 4));
```

chunk-2YHQ3R6P.js

```javascript
// math.js
var add = function (p1, p2) {
    return p1 + p2;
};

export {add};
```

esbuild 构建默认开启了 Tree shaking（sub 并没有被编译输出），还可以进行 minify、 sourcemap，指定 platform ，以及 watch（监视模式）等等。具体可以查看官方 API

**缺点**
当然 esbuild 不是万能的，由于其为了保证编译效率，并没提供 AST 的操作能力，所以对一些处理 AST 的 plugin（如 babel-plugin-import） 暂时不能过渡到 esbuild 中。

## 框架

### 9.性能优化

举例：

1. 减少http请求次数
2. 减少DNS查找
3. 避免重定向
4. 使用Ajax缓存
5. 少用全局变量、减少DOM操作的使用
6. 优化图片大小，通过CSS Sprites（精灵图）优化图片，
7. 将css放在顶部，将js放在底部

### 10.webpack是怎么打包的，babel又是什么

Webpack：把所有依赖打包成一个 bundle.js文件，通过代码分割成单元片段并按需加载。Webpack是以公共JS的形式来书写脚本的，但对AMD/CMD的支持也很全面，方便旧项目进行代码迁移。  
把项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

babel将es6、es7、es8等语法转换成浏览器可识别的es5或es3语法。
