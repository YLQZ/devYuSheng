# Golang简介

## Go环境安装--windows

   1. 下载msi安装包 [golang下载](https://studygolang.com/dl)
   2. 双击根据提示安装，需要调整 安装目录到你想要的安装目录 个人将安装目录命名为Go 或者 GoEnv
   3. 在安装目录外,与安装目录同级 建GoPath文件夹  GoPath 文件夹将是你的**项目工作空间**和 **驱动、插件、包等存放空间**
   4. 在环境变量中新建GOROOT 指向 安装目录，即Go或者GoEnv，
      在环境变量中新建GOPATH 指向 GoPath，
      在path变量中加入  %GOROOT%\bin ， %GOPATH%\bin

## Go常用命令

* go get：获取远程包（需 提前安装 git或hg）
* go run：直接运行程序
* go build：测试编译，检查是否有编译错误
* go fmt：格式化源码（部分IDE在保存时自动调用）
* go install：编译包文件并编译整个程序
* go test：运行测试文件
* go doc：查看文档（[CHM手册](https://github.com/astaxie/godoc)）

[Golang相关群](https://docs.google.com/spreadsheet/lv?key=0AqIvOG5Y0CJ6dFFJV0JwSm1kbEtEdmg5Nk1uZndzakE)

## Go内置关键字

| 关键字|关键字 | 关键字  |关键字|
| :---: |:---: | :----: |:----:|
|break| default| func | interface | select|
|case | defer |  go  | map |
|struct | chan | else  | goto|
|package | switch |const  | fallthrough  |
| if | range | type | continue |
| for |  import  |   return  |  var|

## Go注释方法

* // ：单行注释
* /* */：多行注释

## Go语言结构

   Go 语言的基础组成有以下几个部分：

      包声明
      引入包
      函数
      变量
      语句 & 表达式
      注释

## Go程序结构

Go程序是通过 package 来组织的（与python类似）
只有 package 名称为 main 的包可以包含 main 函数
一个可执行程序 有且仅有 一个 main 包

* 通过 **import** 关键字来导入其它非 **main** 包
* 通过 **const** 关键字来进行常量的定义
* 通过在函数体外部使用 **var** 关键字来进行全局变量的声明与赋值
* 通过 **type** 关键字来进行结构(**struct**)或接口(**interface**)的声明
* 通过 **func** 关键字来进行函数的声明

## Go可见性规则

Go语言中，使用 **大小写** 来决定该 **常量**、**变量**、**类型**、**接口**、**结构**
或**函数** 是否可以被外部包所调用：
根据约定，

* 函数名首字母 小写 即为private,仅包内调用
* 函数名首字母 大写 即为public,可外部调用
