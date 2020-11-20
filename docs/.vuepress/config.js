const sidebar = {
  cookbook: [
    {
      title: 'Cookbook',
      collapsable: false,
      children: ['/cookbook/', '/cookbook/editable-svg-icons']
    }
  ],
  guide: [
    {
      title: '基础',
      collapsable: false,
      children: [
        '/guide/installation',
        '/guide/introduction',
        '/guide/instance',
        '/guide/template-syntax',
        '/guide/data-methods',
        '/guide/computed',
        '/guide/class-and-style',
        '/guide/conditional',
        '/guide/list',
        '/guide/events',
        '/guide/forms',
        '/guide/component-basics'
      ]
    },
    {
      title: '深入组件',
      collapsable: false,
      children: [
        '/guide/component-registration',
        '/guide/component-props',
        '/guide/component-attrs',
        '/guide/component-custom-events',
        '/guide/component-slots',
        '/guide/component-provide-inject',
        '/guide/component-dynamic-async',
        '/guide/component-template-refs',
        '/guide/component-edge-cases'
      ]
    },
    {
      title: '过渡&动画',
      collapsable: false,
      children: [
        '/guide/transitions-overview',
        '/guide/transitions-enterleave',
        '/guide/transitions-list',
        '/guide/transitions-state'
      ]
    },
    {
      title: '可复用&组合',
      collapsable: false,
      children: [
        '/guide/mixins',
        '/guide/custom-directive',
        '/guide/teleport',
        '/guide/render-function',
        '/guide/plugins'
      ]
    },
    {
      title: '高阶指南',
      collapsable: false,
      children: [
        {
          title: '响应性',
          children: [
            '/guide/reactivity',
            '/guide/reactivity-fundamentals',
            '/guide/reactivity-computed-watchers'
          ]
        },
        {
          title: '组合式 API',
          children: [
            '/guide/composition-api-introduction',
            '/guide/composition-api-setup',
            '/guide/composition-api-lifecycle-hooks',
            '/guide/composition-api-provide-inject',
            '/guide/composition-api-template-refs'
          ]
        },
        '/guide/optimizations',
        '/guide/change-detection'
      ]
    },
    {
      title: '工具',
      collapsable: false,
      children: [
        '/guide/single-file-component',
        '/guide/testing',
        '/guide/typescript-support',
        '/guide/mobile'
      ]
    },
    {
      title: '规模化',
      collapsable: false,
      children: ['/guide/routing', '/guide/state-management', '/guide/ssr']
    },
    {
      title: '无障碍',
      collapsable: false,
      children: [
        '/guide/a11y-basics',
        '/guide/a11y-semantics',
        '/guide/a11y-standards',
        '/guide/a11y-resources'
      ]
    },
    {
      title: '从 Vue 2 迁移',
      collapsable: true,
      children: [
        '/guide/migration/introduction',
        '/guide/migration/array-refs',
        '/guide/migration/async-components',
        '/guide/migration/attribute-coercion',
        '/guide/migration/custom-directives',
        '/guide/migration/custom-elements-interop',
        '/guide/migration/data-option',
        '/guide/migration/events-api',
        '/guide/migration/filters',
        '/guide/migration/fragments',
        '/guide/migration/functional-components',
        '/guide/migration/global-api',
        '/guide/migration/global-api-treeshaking',
        '/guide/migration/inline-template-attribute',
        '/guide/migration/key-attribute',
        '/guide/migration/keycode-modifiers',
        '/guide/migration/props-default-this',
        '/guide/migration/render-function-api',
        '/guide/migration/slots-unification',
        '/guide/migration/transition',
        '/guide/migration/v-model',
        '/guide/migration/v-if-v-for',
        '/guide/migration/v-bind'
      ]
    },
    {
      title: '贡献文档',
      collapsable: true,
      children: [
        '/guide/contributing/writing-guide',
        '/guide/contributing/doc-style-guide',
        '/guide/contributing/translations'
      ]
    }
  ],
  api: [
    '/api/application-config',
    '/api/application-api',
    '/api/global-api',
    {
      title: '选项',
      path: '/api/options-api',
      collapsable: false,
      children: [
        '/api/options-data',
        '/api/options-dom',
        '/api/options-lifecycle-hooks',
        '/api/options-assets',
        '/api/options-composition',
        '/api/options-misc'
      ]
    },
    '/api/instance-properties',
    '/api/instance-methods',
    '/api/directives',
    '/api/special-attributes',
    '/api/built-in-components.md',
    {
      title: '响应性 API',
      collapsable: false,
      path: '/api/reactivity-api',
      children: [
        '/api/basic-reactivity',
        '/api/refs-api',
        '/api/computed-watch-api'
      ]
    },
    '/api/composition-api'
  ],
  examples: [
    {
      title: '示例',
      collapsable: false,
      children: [
        '/examples/markdown',
        '/examples/commits',
        '/examples/grid-component',
        '/examples/tree-view',
        '/examples/svg',
        '/examples/modal',
        '/examples/elastic-header',
        '/examples/select2',
        '/examples/todomvc'
      ]
    }
  ]
}

module.exports = {
  title: 'devYuSheng',
  description: 'devYuSheng development language api search',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'A magical api search'
    }
  },
  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    // localization for china
    [
      'script',
      {
        src: 'https://player.youku.com/iframeapi'
      }
    ]
  ],
  dest: './dist',
  themeConfig: {
    logo: '/logo.png',
    repo: 'YLQZ/devYuSheng',
    editLinks: false,
    editLinkText: '帮助我改善此页面！',
    lastUpdated: 'Last updated',
    docsRepo: 'YLQZ/devYuSheng',
    docsDir: 'docs',
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
    smoothScroll: false
  },
  plugins: [
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}

// TODO: Install 对外路径配置
function genInstallEssentialsSidebar(type = '') {
  const mapArr = ['/install/', '/install/essentials/essentials']
  return mapArr.map(i => {
    return type + i
  })
}

function genInstallAdvancedSidebar(type = '') {
  const mapArr = ['/install/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: Cypress 对外路径配置
function genCypressEssentialsSidebar(type = '') {
  const mapArr = ['/Cypress/', '/Cypress/essentials/essentials']
  return mapArr.map(i => {
    return type + i
  })
}

function genCypressAdvancedSidebar(type = '') {
  const mapArr = ['/Cypress/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}

// TODO: html 对外路径配置
function genHtmlEssentialsSidebar(type = '') {
  const mapArr = ['/html/', '/html/essentials/essentials']
  return mapArr.map(i => {
    return type + i
  })
}

function genHtmlAdvancedSidebar(type = '') {
  const mapArr = ['/html/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: css 对外路径配置
function genCssEssentialsSidebar(type = '') {
  const mapArr = ['/CSS/', '/CSS/essentials/essentials']
  return mapArr.map(i => {
    return type + i
  })
}

function genCssAdvancedSidebar(type = '') {
  const mapArr = ['/CSS/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: JavaScript 对外路径配置
function genJSEssentialsSidebar(type = '') {
  const mapArr = ['/JavaScript/', '/JavaScript/essentials/essentials']
  return mapArr.map(i => {
    return type + i
  })
}

function genJSAdvancedSidebar(type = '') {
  const mapArr = ['/JavaScript/advanced/advanced']
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
  const mapArr = ['/webpack/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}

// TODO: GoLang 对外路径配置
function genGolangEssentialsSidebar(type = '') {
  const mapArr = [
    '/Golang/',
    '/Golang/essentials/essentials',
    '/Golang/essentials/variable',
    '/Golang/essentials/const'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genGolangPackageSidebar(type = '') {
  const mapArr = ['/Golang/package/os', '/Golang/package/archive-tar']
  return mapArr.map(i => {
    return type + i
  })
}
function genGolangAdvancedSidebar(type = '') {
  const mapArr = [
    '/Golang/advanced/beego',
    '/Golang/advanced/beegoRouter',
    '/Golang/advanced/beegoAPI',
    '/Golang/advanced/gin'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: Mackdown 对外路径配置
function genMackDownEssentialsSidebar(type = '') {
  const mapArr = ['/MackDown/', '/MackDown/essentials/essentials']
  return mapArr.map(i => {
    return type + i
  })
}

function genMackDownAdvancedSidebar(type = '') {
  const mapArr = ['/MackDown/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: npm 对外路径配置
function genNpmEssentialsSidebar(type = '') {
  const mapArr = ['/Npm/', '/Npm/essentials/essentials']
  return mapArr.map(i => {
    return type + i
  })
}

function genNpmAdvancedSidebar(type = '') {
  const mapArr = ['/Npm/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: vue 对外路径配置
function genVueEssentialsSidebar(type = '') {
  const mapArr = ['/Vue/', '/Vue/essentials/VueAPI']
  return mapArr.map(i => {
    return type + i
  })
}

function genVueAdvancedSidebar(type = '') {
  const mapArr = ['/Vue/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: VSCode 对外路径配置
function genVSCodeEssentialsSidebar(type = '') {
  const mapArr = ['/VSCode/', '/VSCode/essentials/VSCodeAPI']
  return mapArr.map(i => {
    return type + i
  })
}

function genVSCodeAdvancedSidebar(type = '') {
  const mapArr = ['/VSCode/advanced/advanced']
  return mapArr.map(i => {
    return type + i
  })
}
// TODO: Solution 对外路径配置
function genSolutionEssentialsSidebar(type = '') {
  const mapArr = ['/Solution/', '/Solution/Solutions/1']
  return mapArr.map(i => {
    return type + i
  })
}

function genSolutionAdvancedSidebar(type = '') {
  const mapArr = ['/Solution/Solutions/1']
  return mapArr.map(i => {
    return type + i
  })
}
