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
      '/Solution/': [
        {
          title: '基础',
          collapsable: false,
          children: genSolutionEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genSolutionAdvancedSidebar()
        },
        {
          title: '其它',
          collapsable: false,
          children: []
        }
      ],
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
      '/Cypress/': [
        {
          title: '基础',
          collapsable: false,
          children: genCypressEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genCypressAdvancedSidebar()
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
          title: '官方包',
          collapsable: false,
          children: genGolangPackageSidebar()
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
      ],
      '/VSCode/': [
        {
          title: '基础',
          collapsable: false,
          children: genVSCodeEssentialsSidebar()
        },
        {
          title: '进阶',
          collapsable: false,
          children: genVSCodeAdvancedSidebar()
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
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader' // 将 JS 字符串生成为 style 节点
            },
            {
              loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
            },
            {
              loader: 'sass-loader' // 将 Sass 编译成 CSS
            }
          ]
        }
      ]
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
// TODO: Cypress 对外路径配置
function genCypressEssentialsSidebar(type = '') {
  const mapArr = ['/Cypress/', '/Cypress/essentials/essentials.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genCypressAdvancedSidebar(type = '') {
  const mapArr = ['/Cypress/advanced/advanced.md']
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
  const mapArr = ['/webpack/']
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

function genGolangPackageSidebar(type = '') {
  const mapArr = [
    '/Golang/package/os.md',
    '/Golang/package/archive-tar.md'
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
// TODO: VSCode 对外路径配置
function genVSCodeEssentialsSidebar(type = '') {
  const mapArr = ['/VSCode/', '/VSCode/essentials/VSCodeAPI.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genVSCodeAdvancedSidebar(type = '') {
  const mapArr = ['/VSCode/advanced/advanced.md']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: Solution 对外路径配置
function genSolutionEssentialsSidebar(type = '') {
  const mapArr = ['/Solution/', '/Solution/Solutions/1.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genSolutionAdvancedSidebar(type = '') {
  const mapArr = ['/Solution/Solutions/1.md']
  return mapArr.map(i => {
    return type + i
  })
}