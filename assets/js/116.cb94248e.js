(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{605:function(s,a,n){"use strict";n.r(a);var e=n(56),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("h2",{attrs:{id:"package-json配置项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#package-json配置项"}},[s._v("#")]),s._v(" package.json配置项")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{\n    "name": "Hello World",\n    "version": "0.0.1",\n    "author": "张三",\n    "description": "第一个node.js程序",\n    "keywords":["node.js","javascript"],\n    "repository": {\n        "type": "git",\n        "url": "https://path/to/url"\n    },\n    "license":"MIT",\n    "engines": {"node": "0.10.x"},\n    "bugs":{"url":"http://path/to/bug","email":"bug@example.com"},\n    "contributors":[{"name":"李四","email":"lisi@example.com"}],\n    "scripts": {\n        "start": "node index.js"\n    },\n    "dependencies": {\n        "express": "latest",\n        "mongoose": "~3.8.3",\n        "handlebars-runtime": "~1.0.12",\n        "express3-handlebars": "~0.5.0",\n        "MD5": "~1.2.0"\n    },\n    "devDependencies": {\n        "bower": "~1.2.8",\n        "grunt": "~0.4.1",\n        "grunt-contrib-concat": "~0.3.0",\n        "grunt-contrib-jshint": "~0.7.2",\n        "grunt-contrib-uglify": "~0.2.7",\n        "grunt-contrib-clean": "~0.5.0",\n        "browserify": "2.36.1",\n        "grunt-browserify": "~1.3.0",\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br")])]),n("h3",{attrs:{id:"name-项目名称"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#name-项目名称"}},[s._v("#")]),s._v(" name 项目名称")]),s._v(" "),n("blockquote",[n("p",[s._v("在发布npm包时，先搜索一下包名是否已经被别人发布，如果已经被别人发布，要更换包名，简单粗暴的办法是在包名前加上用户名"),n("code",[s._v("@ <username>/<name>")])])]),s._v(" "),n("h3",{attrs:{id:"version-项目版本号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#version-项目版本号"}},[s._v("#")]),s._v(" version 项目版本号")]),s._v(" "),n("p",[s._v("语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。")]),s._v(" "),n("ul",[n("li",[s._v("如果只是修复bug，需要更新Z位。")]),s._v(" "),n("li",[s._v("如果是新增了功能，但是向下兼容，需要更新Y位。")]),s._v(" "),n("li",[s._v("如果有大变动，向下不兼容，需要更新X位。")])]),s._v(" "),n("p",[s._v('版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。')]),s._v(" "),n("h3",{attrs:{id:"author-作者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#author-作者"}},[s._v("#")]),s._v(" author 作者")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    // 写法1\n    "author": "张三",\n    // 写法2\n    "author": {\n        "name": "TJ Holowaychuk",\n        "email": "tj@vision-media.ca"\n    },},\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"contributors-贡献者"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contributors-贡献者"}},[s._v("#")]),s._v(" contributors 贡献者")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 写法\n"contributors": [\n    {{\n      "name": "Aaron Heckmann",\n      "email": "aaron.heckmann+github@gmail.com"\n    },},\n    {{\n      "name": "Ciaran Jessup",\n      "email": "ciaranj@gmail.com"\n    },},\n    {{\n      "name": "Douglas Christopher Wilson",\n      "email": "doug@somethingdoug.com"\n    },},\n  ],],\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"description-项目简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description-项目简介"}},[s._v("#")]),s._v(" description 项目简介")]),s._v(" "),n("h3",{attrs:{id:"keywords-关键词"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keywords-关键词"}},[s._v("#")]),s._v(" keywords 关键词")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"keywords": [\n    "express",\n    "framework",\n    "sinatra",\n    "web",\n    "rest",\n    "restful",\n    "router",\n    "app",\n    "api"\n],],\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"repository-存储库-知识库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#repository-存储库-知识库"}},[s._v("#")]),s._v(" repository 存储库/知识库")]),s._v(" "),n("h3",{attrs:{id:"license-开源许可证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#license-开源许可证"}},[s._v("#")]),s._v(" license 开源许可证")]),s._v(" "),n("h3",{attrs:{id:"engines-指定环境版本-范围"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#engines-指定环境版本-范围"}},[s._v("#")]),s._v(" engines 指定环境版本/范围")]),s._v(" "),n("h3",{attrs:{id:"homepage-包的官网-url"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#homepage-包的官网-url"}},[s._v("#")]),s._v(" homepage 包的官网 url")]),s._v(" "),n("h3",{attrs:{id:"bugs-bug提交"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bugs-bug提交"}},[s._v("#")]),s._v(" bugs bug提交")]),s._v(" "),n("p",[s._v("填写一个bug提交地址或者一个邮箱，被你的模块坑到的人可以通过这里吐槽，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\n{ \n    "url" : "https://github.com/owner/project/issues", \n    "email" : "project@hostname.com"\n}\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[s._v("#")]),s._v(" files")]),s._v(" "),n("p",[s._v('"files"属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）\n你也可以在模块根目录下创建一个".npmignore"文件（windows下无法直接创建以"."开头的文件，使用linux命令行工具创建如git bash），写在这个文件里边的文件即便被写在files属性里边也会被排除在外，这个文件的写法".gitignore"类似。')]),s._v(" "),n("h3",{attrs:{id:"main-程序的主入口文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#main-程序的主入口文件"}},[s._v("#")]),s._v(" main 程序的主入口文件")]),s._v(" "),n("h3",{attrs:{id:"bin-命令行命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bin-命令行命令"}},[s._v("#")]),s._v(" bin 命令行命令")]),s._v(" "),n("p",[s._v("很多模块有一个或多个需要配置到PATH路径下的可执行模块，npm让这个工作变得十分简单（实际上npm本身也是通过bin属性安装为一个可执行命令的）\n如果要用npm的这个功能，在package.json里边配置一个bin属性。bin属性是一个已命令名称为key，本地文件名称为value的map如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{ "bin" : { "myapp" : "./cli.js" } }\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("模块安装的时候，若是全局安装，则npm会为bin中配置的文件在bin目录下创建一个软连接（对于windows系统，默认会在C:\\Users\\username\\AppData\\Roaming\\npm目录下），若是局部安装，则会在项目内的./node_modules/.bin/目录下创建一个软链接。\n因此，按上面的例子，当你安装myapp的时候，npm就会为cli.js在/usr/local/bin/myapp路径创建一个软链接。\n如果你的模块只有一个可执行文件，并且它的命令名称和模块名称一样，你可以只写一个字符串来代替上面那种配置，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{ \n    "name": "my-program",\n    "version": "1.2.5",\n    "bin": "./path/to/program"\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);