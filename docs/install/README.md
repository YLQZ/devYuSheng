# 需要安装的环境

## nodejs
    
    版本：10.15.3

||||
|---|:--:|---:|
|windows|[32位](https://npm.taobao.org/mirrors/node/v10.15.3/node-v10.15.3-x86.msi)|[64位](https://npm.taobao.org/mirrors/node/v10.15.3/node-v10.15.3-x64.msi)|


## npm 包安装命令

### npm-check 安装

* 检查 npm安装的各包版本升级用

```
npm install -g npm-check
```

### nrm 安装

* 切换npm源

```
// 安装
npm install -g nrm
// 源列表
nrm ls
// 使用源
nrm use <源名>

```

### vue-cli 安装


```
// vue-cli 3
npm install -g @vue/cli
// 安装cli 3 后 拉取兼容 2 的版本
npm install -g @vue/cli-init

```

### vuepress 安装

* 静态网站生成器

```
npm install -g vuepress
```

### netlify-cli 持续部署

```
npm install netlify-cli -g
//项目下使用进行持续部署
netlify dev --live
```



