// var nav = require('./nav.js')
// var { EcosystemNav, ComponentNav } = nav

// var utils = require('./utils.js')
// var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'devYuSheng',
  description: 'devYuSheng development language api search',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  dest: './dist',
  themeConfig: {
    repo: 'YLQZ/devYuSheng',
    docsRepo: 'YLQZ/devYuSheng',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我改善此页面！',
    sidebarDepth: 4,
    search: true,
    searchMaxSuggestions: 20,
    sidebar: {
      '/install/': [
        {
          title: '基础',
          collapsable: false,
          children: genInstallEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genInstallAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
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
          children: []
        }
      ],
      '/CSS/': [
        {
          title: '基础',
          collapsable: false,
          children: genCssEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genCssAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
      '/JavaScript/': [
        {
          title: '基础',
          collapsable: false,
          children: genJSEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genJSAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
      '/webpack/': [
        {
          title: '基础',
          collapsable: false,
          children: genWebpackEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genWebpackAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
      '/Golang/': [
        {
          title: '基础',
          collapsable: false,
          children: genGolangEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genGolangAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
      '/MackDown/': [
        {
          title: '基础',
          collapsable: false,
          children: genMackDownEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genMackDownAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
      '/Npm/': [
        {
          title: '基础',
          collapsable: false,
          children: genNpmEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genNpmAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
      '/Vue/': [
        {
          title: '基础',
          collapsable: false,
          children: genVueEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genVueAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ]
    },
    serviceWorker: {
      updatedPopup: {
        message: '新内容可用。',
        buttonText: '刷新'
      }
    },
    lastUpdated: 'Last Updated'
  },
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'A magical api search'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

// TODO: Install 对外路径配置
function genInstallEssentialsSidebar(type = '') {
  const mapArr = ['/install/', '/install/essentials/essentials.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genInstallAdvancedSidebar(type = '') {
  const mapArr = ['/install/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: html 对外路径配置
function genHtmlEssentialsSidebar(type = '') {
  const mapArr = ['/html/', '/html/essentials/essentials.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genHtmlAdvancedSidebar(type = '') {
  const mapArr = ['/html/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: css 对外路径配置
function genCssEssentialsSidebar(type = '') {
  const mapArr = ['/CSS/', '/CSS/essentials/essentials.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genCssAdvancedSidebar(type = '') {
  const mapArr = ['/CSS/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: JavaScript 对外路径配置
function genJSEssentialsSidebar(type = '') {
  const mapArr = ['/JavaScript/', '/JavaScript/essentials/essentials.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genJSAdvancedSidebar(type = '') {
  const mapArr = ['/JavaScript/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}

// TODO: webpack 对外路径配置
function genWebpackEssentialsSidebar(type = '') {
  const mapArr = [
    '/webpack/',

  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genWebpackAdvancedSidebar(type = '') {
  const mapArr = ['/webpack/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}

// TODO: GoLang 对外路径配置
function genGolangEssentialsSidebar(type = '') {
  const mapArr = [
    '/Golang/',
    '/Golang/essentials/essentials.md',
    '/Golang/essentials/variable.md',
    '/Golang/essentials/const.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genGolangAdvancedSidebar(type = '') {
  const mapArr = [
    '/Golang/advanced/beego.md',
    '/Golang/advanced/beegoRouter.md',
    '/Golang/advanced/beegoAPI.md',
    '/Golang/advanced/gin.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: Mackdown 对外路径配置
function genMackDownEssentialsSidebar(type = '') {
  const mapArr = ['/MackDown/', '/MackDown/essentials/essentials.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genMackDownAdvancedSidebar(type = '') {
  const mapArr = ['/MackDown/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: npm 对外路径配置
function genNpmEssentialsSidebar(type = '') {
  const mapArr = ['/Npm/', '/Npm/essentials/essentials.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genNpmAdvancedSidebar(type = '') {
  const mapArr = ['/Npm/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: vue 对外路径配置
function genVueEssentialsSidebar(type = '') {
  const mapArr = ['/Vue/', '/Vue/essentials/VueAPI.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genVueAdvancedSidebar(type = '') {
  const mapArr = ['/Vue/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}
