# CodeSeach

QQ群：45686341

CodeSeach 是基于vuepress开发、mackdown 编辑的**文档**、**记录**、**api**，**解决方案** 搜索站点
探针深度 ### 即 h1 h2 h3 的深度 3级导航

暂未部署，后期将进行持续自动化部署

下载代码后 需要先行安装vuepress

```
npm install -g vuepress
```

安装相关环境

```
// 在项目 根目录下
npm install
```

运行 npn run dev 启动服务
打开：**localhost:8080** 即可查看

## 原则

1. 原则上以语言、架构为创建文件夹的依据，如果如vue、vue-router、vuex这样的将统一放到vue文件夹下 新开分组进行编写

2. 尽量将标题 api的主项保持在3级分类内 以便搜索

## 配置

1. **docs** 下边创建相应的文件夹
2. 在 **.vuepress/config.js** 中配置如下示例

    1. 在 sidebar 下添加如下配置
    2. 修改 **/html/** 为相应文件夹名称， 会将此名称作为一层网络地址进行编译
    3. **/html/** 的 3 个子集为侧边栏的分组，可相应调整
    4. 个分组的相应页面为 写在函数内，函数写在配置的最下边，**函数命名** 驼峰命名,仿照示例，需带有文件夹相应的关键词以进行区分
    5. 创建页面只需要加入到相应分组即可
3. 创建完成后 需要将路径配置到网站的主页 也就是home页面
    home页面为docs/README.md  如没有相应分类 可添加一个分类

```

'/html/': [ 
    {
        title: '基础',
        collapsable: false,
        children: genHtmlEssentialsSidebar()
    },
    {
        title: '进阶',
        collapsable: false,
        children: genHtmlAdvancedSidebar()
    },
    {
        title: '其它',
        collapsable: false,
        children: [
        
        ]
    }
],

// TODO: html 对外路径配置
function genHtmlEssentialsSidebar(type = '') {
  const mapArr = [
    '/html/',
    '/html/essentials/essentials.md',
    
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genHtmlAdvancedSidebar(type = '') {
  const mapArr = [
    '/html/advanced/advanced.md',
  ]
  return mapArr.map(i => {
    return type + i
  })
}

```

open http://localhost:8080/

> Generator by [vuepress](https://github.com/vuejs/vuepress)
