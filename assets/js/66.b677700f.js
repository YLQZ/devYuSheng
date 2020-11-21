(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{547:function(e,s,a){"use strict";a.r(s);var t=a(56),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"beego"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beego"}},[e._v("#")]),e._v(" Beego")]),e._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("go get -u github.com/astaxie/beego\ngo get -u github.com/beego/bee\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"bee工具命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bee工具命令"}},[e._v("#")]),e._v(" bee工具命令")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bee new <项目名> //创建新的站点项目  src下执行\n\nbee api <项目名> //创建新的站点api服务  src下执行\n\nbee run // 运行项目  app根目录下执行\n\nbee dockerize // 生成Dockerfile文件\n\nbee help dockerize//  dockerize 的帮助\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("conf/app.conf")]),e._v(" "),a("h2",{attrs:{id:"app-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-配置"}},[e._v("#")]),e._v(" App 配置")]),e._v(" "),a("h3",{attrs:{id:"appname-应用名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appname-应用名称"}},[e._v("#")]),e._v(" AppName 应用名称")]),e._v(" "),a("p",[e._v("应用名称，默认是 beego。通过 bee new 创建的是创建的项目名。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.AppName = "beego"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"runmode-应用的运行模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runmode-应用的运行模式"}},[e._v("#")]),e._v(" RunMode 应用的运行模式")]),e._v(" "),a("p",[e._v("应用的运行模式，可选值为 prod, dev 或者 test. 默认是 dev, 为开发模式，在开发模式下出错会提示友好的出错页面，如前面错误描述中所述。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.RunMode = "dev"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"routercasesensitive-是否路由忽略大小写匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routercasesensitive-是否路由忽略大小写匹配"}},[e._v("#")]),e._v(" RouterCaseSensitive 是否路由忽略大小写匹配")]),e._v(" "),a("p",[e._v("是否路由忽略大小写匹配，默认是 true，区分大小写")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.RouterCaseSensitive = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"servername-服务名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servername-服务名称"}},[e._v("#")]),e._v(" ServerName 服务名称")]),e._v(" "),a("p",[e._v("beego 服务器默认在请求的时候输出 server 为 beego。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.ServerName = "beego"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"recoverpanic-是否异常恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recoverpanic-是否异常恢复"}},[e._v("#")]),e._v(" RecoverPanic 是否异常恢复")]),e._v(" "),a("p",[e._v("是否异常恢复，默认值为 true，即当应用出现异常的情况，通过 recover 恢复回来，而不会导致应用异常退出。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.RecoverPanic = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"copyrequestbody-是否允许在-http-请求时-返回原始请求体数据字节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copyrequestbody-是否允许在-http-请求时-返回原始请求体数据字节"}},[e._v("#")]),e._v(" CopyRequestBody 是否允许在 HTTP 请求时，返回原始请求体数据字节")]),e._v(" "),a("p",[e._v("是否允许在 HTTP 请求时，返回原始请求体数据字节，默认为 false （GET or HEAD or 上传文件请求除外）。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.CopyRequestBody = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enablegzip-开启-gzip-支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enablegzip-开启-gzip-支持"}},[e._v("#")]),e._v(" EnableGzip 开启 gzip 支持")]),e._v(" "),a("p",[e._v("是否开启 gzip 支持，默认为 false 不支持 gzip，一旦开启了 gzip，那么在模板输出的内容会进行 gzip 或者 zlib 压缩，根据用户的 Accept-Encoding 来判断。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.EnableGzip = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Gzip允许用户自定义压缩级别、压缩长度阈值和针对请求类型压缩:")]),e._v(" "),a("p",[e._v("压缩级别, gzipCompressLevel = 9,取值为 1~9,如果不设置为 1(最快压缩)")]),e._v(" "),a("p",[e._v("压缩长度阈值, gzipMinLength = 256,当原始内容长度大于此阈值时才开启压缩,默认为 20B(ngnix默认长度)")]),e._v(" "),a("p",[e._v("请求类型, includedMethods = get;post,针对哪些请求类型进行压缩,默认只针对 GET 请求压缩")]),e._v(" "),a("h3",{attrs:{id:"maxmemory-文件上传默认内存缓存大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxmemory-文件上传默认内存缓存大小"}},[e._v("#")]),e._v(" MaxMemory 文件上传默认内存缓存大小")]),e._v(" "),a("p",[e._v("文件上传默认内存缓存大小，默认值是 1 << 26(64M)。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.MaxMemory = 1 << 26\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enableerrorsshow-是否显示系统错误信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enableerrorsshow-是否显示系统错误信息"}},[e._v("#")]),e._v(" EnableErrorsShow 是否显示系统错误信息")]),e._v(" "),a("p",[e._v("是否显示系统错误信息，默认为 true。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.EnableErrorsShow = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enableerrorsrender-是否将错误信息进行渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enableerrorsrender-是否将错误信息进行渲染"}},[e._v("#")]),e._v(" EnableErrorsRender 是否将错误信息进行渲染")]),e._v(" "),a("p",[e._v("是否将错误信息进行渲染，默认值为 true，即出错会提示友好的出错页面，对于 API 类型的应用可能需要将该选项设置为 false 以阻止在 dev 模式下不必要的模板渲染信息返回。")]),e._v(" "),a("h2",{attrs:{id:"web配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web配置"}},[e._v("#")]),e._v(" Web配置")]),e._v(" "),a("h3",{attrs:{id:"autorender-是否模板自动渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autorender-是否模板自动渲染"}},[e._v("#")]),e._v(" AutoRender 是否模板自动渲染")]),e._v(" "),a("p",[e._v("是否模板自动渲染，默认值为 true，对于 API 类型的应用，应用需要把该选项设置为 false，不需要渲染模板。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.AutoRender = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enabledocs-是否开启文档内置功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabledocs-是否开启文档内置功能"}},[e._v("#")]),e._v(" EnableDocs 是否开启文档内置功能")]),e._v(" "),a("p",[e._v("是否开启文档内置功能，默认是 false")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.EnableDocs = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"flashname-flash-数据设置时-cookie-的名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashname-flash-数据设置时-cookie-的名称"}},[e._v("#")]),e._v(" FlashName Flash 数据设置时 Cookie 的名称")]),e._v(" "),a("p",[e._v("Flash 数据设置时 Cookie 的名称，默认是 BEEGO_FLASH")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.FlashName = "BEEGO_FLASH"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"flashseperator-flash-数据的分隔符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flashseperator-flash-数据的分隔符"}},[e._v("#")]),e._v(" FlashSeperator Flash 数据的分隔符")]),e._v(" "),a("p",[e._v("Flash 数据的分隔符，默认是 BEEGOFLASH")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.FlashSeperator = "BEEGOFLASH"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"directoryindex-是否开启静态目录的列表显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directoryindex-是否开启静态目录的列表显示"}},[e._v("#")]),e._v(" DirectoryIndex 是否开启静态目录的列表显示")]),e._v(" "),a("p",[e._v("是否开启静态目录的列表显示，默认不显示目录，返回 403 错误。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.DirectoryIndex = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"staticdir-静态文件目录设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staticdir-静态文件目录设置"}},[e._v("#")]),e._v(" StaticDir 静态文件目录设置")]),e._v(" "),a("p",[e._v("静态文件目录设置，默认是static")]),e._v(" "),a("p",[e._v("可配置单个或多个目录:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v('单个目录, StaticDir = download. 相当于 beego.SetStaticPath("/download","download")')])]),e._v(" "),a("li",[a("p",[e._v('多个目录, StaticDir = download:down download2:down2. 相当于 beego.SetStaticPath("/download","down") 和beego.SetStaticPath("/download2","down2")')])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.StaticDir\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"staticextensionstogzip-允许哪些后缀名的静态文件进行-gzip-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staticextensionstogzip-允许哪些后缀名的静态文件进行-gzip-压缩"}},[e._v("#")]),e._v(" StaticExtensionsToGzip 允许哪些后缀名的静态文件进行 gzip 压缩")]),e._v(" "),a("p",[e._v("允许哪些后缀名的静态文件进行 gzip 压缩，默认支持 .css 和 .js")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.StaticExtensionsToGzip = []string{".css", ".js"}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("等价 config 文件中")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("StaticExtensionsToGzip = .css, .js\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"templateleft-模板左标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templateleft-模板左标签"}},[e._v("#")]),e._v(" TemplateLeft 模板左标签")]),e._v(" "),a("p",[e._v("模板左标签，默认值是{{。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.TemplateLeft="{{"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"templateright-模板右标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templateright-模板右标签"}},[e._v("#")]),e._v(" TemplateRight 模板右标签")]),e._v(" "),a("p",[e._v("模板右标签，默认值是}}。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.TemplateRight="}}"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"viewspath-模板路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewspath-模板路径"}},[e._v("#")]),e._v(" ViewsPath 模板路径")]),e._v(" "),a("p",[e._v("模板路径，默认值是 views。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.ViewsPath="views"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enablexsrf-是否开启-xsrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enablexsrf-是否开启-xsrf"}},[e._v("#")]),e._v(" EnableXSRF 是否开启 XSRF")]),e._v(" "),a("p",[e._v("是否开启 XSRF，默认为 false，不开启。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.EnableXSRF = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"xsrfkey-xsrf-的-key-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xsrfkey-xsrf-的-key-信息"}},[e._v("#")]),e._v(" XSRFKEY XSRF 的 key 信息")]),e._v(" "),a("p",[e._v("XSRF 的 key 信息，默认值是 beegoxsrf。 EnableXSRF＝true 才有效")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.XSRFKEY = "beegoxsrf"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"xsrfexpire-xsrf-过期时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xsrfexpire-xsrf-过期时间"}},[e._v("#")]),e._v(" XSRFExpire XSRF 过期时间")]),e._v(" "),a("p",[e._v("XSRF 过期时间，默认值是 0，不过期。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.XSRFExpire = 0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"监听配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听配置"}},[e._v("#")]),e._v(" 监听配置")]),e._v(" "),a("h3",{attrs:{id:"graceful-是否开启热升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graceful-是否开启热升级"}},[e._v("#")]),e._v(" Graceful 是否开启热升级")]),e._v(" "),a("p",[e._v("是否开启热升级，默认是 false，关闭热升级。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.Graceful=false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"servertimeout-设置-http-的超时时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servertimeout-设置-http-的超时时间"}},[e._v("#")]),e._v(" ServerTimeOut 设置 HTTP 的超时时间")]),e._v(" "),a("p",[e._v("设置 HTTP 的超时时间，默认是 0，不超时。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.ServerTimeOut=0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"listentcp4-监听本地网络地址类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listentcp4-监听本地网络地址类型"}},[e._v("#")]),e._v(" ListenTCP4 监听本地网络地址类型")]),e._v(" "),a("p",[e._v("监听本地网络地址类型，默认是TCP6，可以通过设置为true设置为TCP4。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.ListenTCP4 = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enablehttp-是否启用-http-监听"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enablehttp-是否启用-http-监听"}},[e._v("#")]),e._v(" EnableHTTP 是否启用 HTTP 监听")]),e._v(" "),a("p",[e._v("是否启用 HTTP 监听，默认是 true。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.EnableHTTP = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"httpaddr-应用监听地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpaddr-应用监听地址"}},[e._v("#")]),e._v(" HTTPAddr 应用监听地址")]),e._v(" "),a("p",[e._v("应用监听地址，默认为空，监听所有的网卡 IP。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.Listen.HTTPAddr = ""\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"httpport-应用监听端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpport-应用监听端口"}},[e._v("#")]),e._v(" HTTPPort 应用监听端口")]),e._v(" "),a("p",[e._v("应用监听端口，默认为 8080。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.HTTPPort = 8080\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enablehttps-是否启用-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enablehttps-是否启用-https"}},[e._v("#")]),e._v(" EnableHTTPS 是否启用 HTTPS，")]),e._v(" "),a("p",[e._v("是否启用 HTTPS，默认是 false 关闭。当需要启用时，先设置 EnableHTTPS = true，并设置 HTTPSCertFile 和 HTTPSKeyFile")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.EnableHTTPS = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"httpsaddr-应用监听地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpsaddr-应用监听地址"}},[e._v("#")]),e._v(" HTTPSAddr 应用监听地址，")]),e._v(" "),a("p",[e._v("应用监听地址，默认为空，监听所有的网卡 IP。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.Listen.HTTPSAddr = ""\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"httpsport-应用监听端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpsport-应用监听端口"}},[e._v("#")]),e._v(" HTTPSPort 应用监听端口")]),e._v(" "),a("p",[e._v("应用监听端口，默认为 10443")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.HTTPSPort = 10443\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"httpscertfile-开启-https-后-ssl-证书路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpscertfile-开启-https-后-ssl-证书路径"}},[e._v("#")]),e._v(" HTTPSCertFile 开启 HTTPS 后，ssl 证书路径")]),e._v(" "),a("p",[e._v("开启 HTTPS 后，ssl 证书路径，默认为空。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.Listen.HTTPSCertFile = "conf/ssl.crt"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"httpskeyfile-开启-https-之后-ssl-证书-keyfile-的路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpskeyfile-开启-https-之后-ssl-证书-keyfile-的路径"}},[e._v("#")]),e._v(" HTTPSKeyFile 开启 HTTPS 之后，SSL 证书 keyfile 的路径")]),e._v(" "),a("p",[e._v("开启 HTTPS 之后，SSL 证书 keyfile 的路径。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.Listen.HTTPSKeyFile = "conf/ssl.key"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enableadmin-是否开启进程内监控模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enableadmin-是否开启进程内监控模块"}},[e._v("#")]),e._v(" EnableAdmin 是否开启进程内监控模块")]),e._v(" "),a("p",[e._v("是否开启进程内监控模块，默认 false 关闭。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.EnableAdmin = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"adminaddr-监控程序监听的地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adminaddr-监控程序监听的地址"}},[e._v("#")]),e._v(" AdminAddr 监控程序监听的地址")]),e._v(" "),a("p",[e._v("监控程序监听的地址，默认值是 localhost 。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.Listen.AdminAddr = "localhost"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"adminport-监控程序监听的地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adminport-监控程序监听的地址"}},[e._v("#")]),e._v(" AdminPort 监控程序监听的地址")]),e._v(" "),a("p",[e._v("监控程序监听的地址，默认值是 8088 。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.AdminPort = 8088\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enablefcgi-是否启用-fastcgi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enablefcgi-是否启用-fastcgi"}},[e._v("#")]),e._v(" EnableFcgi 是否启用 fastcgi")]),e._v(" "),a("p",[e._v("是否启用 fastcgi ， 默认是 false。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.EnableFcgi = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"enablestdio-通过fastcgi-标准i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enablestdio-通过fastcgi-标准i-o"}},[e._v("#")]),e._v(" EnableStdIo 通过fastcgi 标准I/O，")]),e._v(" "),a("p",[e._v("通过fastcgi 标准I/O，启用 fastcgi 后才生效，默认 false。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Listen.EnableStdIo = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"session配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session配置"}},[e._v("#")]),e._v(" Session配置")]),e._v(" "),a("h3",{attrs:{id:"sessionon-session-是否开启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionon-session-是否开启"}},[e._v("#")]),e._v(" SessionOn session 是否开启")]),e._v(" "),a("p",[e._v("session 是否开启，默认是 false。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.Session.SessionOn = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"sessionprovider-session-的引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionprovider-session-的引擎"}},[e._v("#")]),e._v(" SessionProvider session 的引擎")]),e._v(" "),a("p",[e._v("session 的引擎，默认是 memory，详细参见 session 模块。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.Session.SessionProvider = ""\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"sessionname-存在客户端的-cookie-名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionname-存在客户端的-cookie-名称"}},[e._v("#")]),e._v(" SessionName 存在客户端的 cookie 名称")]),e._v(" "),a("p",[e._v("存在客户端的 cookie 名称，默认值是 beegosessionID。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.Session.SessionName = "beegosessionID"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"sessiongcmaxlifetime-session-过期时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessiongcmaxlifetime-session-过期时间"}},[e._v("#")]),e._v(" SessionGCMaxLifetime session 过期时间")]),e._v(" "),a("p",[e._v("session 过期时间，默认值是 3600 秒。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"sessionproviderconfig-配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionproviderconfig-配置信息"}},[e._v("#")]),e._v(" SessionProviderConfig 配置信息")]),e._v(" "),a("p",[e._v("配置信息，根据不同的引擎设置不同的配置信息，详细的配置请看下面的引擎设置，详细参见 session 模块")]),e._v(" "),a("h3",{attrs:{id:"sessioncookielifetime-session-默认存在客户端的-cookie-的时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessioncookielifetime-session-默认存在客户端的-cookie-的时间"}},[e._v("#")]),e._v(" SessionCookieLifeTime session 默认存在客户端的 cookie 的时间")]),e._v(" "),a("p",[e._v("session 默认存在客户端的 cookie 的时间，默认值是 3600 秒。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.Session.SessionCookieLifeTime = 3600\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"sessionautosetcookie-是否开启setcookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessionautosetcookie-是否开启setcookie"}},[e._v("#")]),e._v(" SessionAutoSetCookie 是否开启SetCookie")]),e._v(" "),a("p",[e._v("是否开启SetCookie, 默认值 true 开启。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.WebConfig.Session.SessionAutoSetCookie = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"sessiondomain-session-cookie-存储域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sessiondomain-session-cookie-存储域名"}},[e._v("#")]),e._v(" SessionDomain session cookie 存储域名")]),e._v(" "),a("p",[e._v("session cookie 存储域名, 默认空。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.WebConfig.Session.SessionDomain = ""\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"log配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log配置"}},[e._v("#")]),e._v(" Log配置")]),e._v(" "),a("p",[e._v("log详细配置，请参见 "),a("code",[e._v("logs 模块")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"accesslogs-是否输出日志到-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accesslogs-是否输出日志到-log"}},[e._v("#")]),e._v(" AccessLogs 是否输出日志到 Log")]),e._v(" "),a("p",[e._v("是否输出日志到 Log，默认在 prod 模式下不会输出日志，默认为 false 不输出日志。此参数不支持配置文件配置。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Log.AccessLogs = false\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"filelinenum-是否在日志里面显示文件名和输出日志行号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filelinenum-是否在日志里面显示文件名和输出日志行号"}},[e._v("#")]),e._v(" FileLineNum 是否在日志里面显示文件名和输出日志行号")]),e._v(" "),a("p",[e._v("是否在日志里面显示文件名和输出日志行号，默认 true。此参数不支持配置文件配置。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("beego.BConfig.Log.FileLineNum = true\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"outputs-日志输出配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs-日志输出配置"}},[e._v("#")]),e._v(" Outputs 日志输出配置")]),e._v(" "),a("p",[e._v("日志输出配置，参考 logs 模块，console file 等配置，此参数不支持配置文件配置。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('beego.BConfig.Log.Outputs = map[string]string{"console": ""}\n\nor\n\nbeego.BConfig.Log.Outputs["console"] = ""\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);