# 简介

## package.json配置项

```
{
    "name": "Hello World",
    "version": "0.0.1",
    "author": "张三",
    "description": "第一个node.js程序",
    "keywords":["node.js","javascript"],
    "repository": {
        "type": "git",
        "url": "https://path/to/url"
    },
    "license":"MIT",
    "engines": {"node": "0.10.x"},
    "bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
    "contributors":[{"name":"李四","email":"lisi@example.com"}],
    "scripts": {
        "start": "node index.js"
    },
    "dependencies": {
        "express": "latest",
        "mongoose": "~3.8.3",
        "handlebars-runtime": "~1.0.12",
        "express3-handlebars": "~0.5.0",
        "MD5": "~1.2.0"
    },
    "devDependencies": {
        "bower": "~1.2.8",
        "grunt": "~0.4.1",
        "grunt-contrib-concat": "~0.3.0",
        "grunt-contrib-jshint": "~0.7.2",
        "grunt-contrib-uglify": "~0.2.7",
        "grunt-contrib-clean": "~0.5.0",
        "browserify": "2.36.1",
        "grunt-browserify": "~1.3.0",
    }
}
```

### name 项目名称

> 在发布npm包时，先搜索一下包名是否已经被别人发布，如果已经被别人发布，要更换包名，简单粗暴的办法是在包名前加上用户名```@ <username>/<name>```


### version 项目版本号

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复bug，需要更新Z位。
- 如果是新增了功能，但是向下兼容，需要更新Y位。
- 如果有大变动，向下不兼容，需要更新X位。

版本号有了这个保证后，在申明第三方包依赖时，除了可依赖于一个固定版本号外，还可依赖于某个范围的版本号。例如"argv": "0.0.x"表示依赖于0.0.x系列的最新版argv。

### author 作者
```
    // 写法1
    "author": "张三",
    // 写法2
    "author": {
        "name": "TJ Holowaychuk",
        "email": "tj@vision-media.ca"
    },},
```

### contributors 贡献者
```
// 写法
"contributors": [
    {{
      "name": "Aaron Heckmann",
      "email": "aaron.heckmann+github@gmail.com"
    },},
    {{
      "name": "Ciaran Jessup",
      "email": "ciaranj@gmail.com"
    },},
    {{
      "name": "Douglas Christopher Wilson",
      "email": "doug@somethingdoug.com"
    },},
  ],],
```


### description 项目简介

### keywords 关键词

```
"keywords": [
    "express",
    "framework",
    "sinatra",
    "web",
    "rest",
    "restful",
    "router",
    "app",
    "api"
],],
```

### repository 存储库/知识库

### license 开源许可证

### engines 指定环境版本/范围

### homepage 包的官网 url

### bugs bug提交

填写一个bug提交地址或者一个邮箱，被你的模块坑到的人可以通过这里吐槽，例如：

```

{ 
    "url" : "https://github.com/owner/project/issues", 
    "email" : "project@hostname.com"
}

```

### files 

"files"属性的值是一个数组，内容是模块下文件名或者文件夹名，如果是文件夹名，则文件夹下所有的文件也会被包含进来（除非文件被另一些配置排除了）
你也可以在模块根目录下创建一个".npmignore"文件（windows下无法直接创建以"."开头的文件，使用linux命令行工具创建如git bash），写在这个文件里边的文件即便被写在files属性里边也会被排除在外，这个文件的写法".gitignore"类似。

### main 程序的主入口文件

### bin 命令行命令

很多模块有一个或多个需要配置到PATH路径下的可执行模块，npm让这个工作变得十分简单（实际上npm本身也是通过bin属性安装为一个可执行命令的）
如果要用npm的这个功能，在package.json里边配置一个bin属性。bin属性是一个已命令名称为key，本地文件名称为value的map如下：

```
{ "bin" : { "myapp" : "./cli.js" } }
```

模块安装的时候，若是全局安装，则npm会为bin中配置的文件在bin目录下创建一个软连接（对于windows系统，默认会在C:\Users\username\AppData\Roaming\npm目录下），若是局部安装，则会在项目内的./node_modules/.bin/目录下创建一个软链接。
因此，按上面的例子，当你安装myapp的时候，npm就会为cli.js在/usr/local/bin/myapp路径创建一个软链接。
如果你的模块只有一个可执行文件，并且它的命令名称和模块名称一样，你可以只写一个字符串来代替上面那种配置，例如：

```
{ 
    "name": "my-program",
    "version": "1.2.5",
    "bin": "./path/to/program"
}
```