(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{383:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return f})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return m}));n(30),n(125),n(222),n(123),n(223),n(82),n(57),n(390),n(81),n(385),n(126);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function p(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function f(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:p(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||s.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=u.base,c=u.config;return c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},384:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},385:function(t,e,n){"use strict";var i=n(217),r=n(220),s=n(10),a=n(28),o=n(387),u=n(218),l=n(22),c=n(219),p=n(84),h=n(3),f=[].push,d=Math.min,g=!h((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var o,u,l,c=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=new RegExp(t.source,h+"g");(o=p.call(g,i))&&!((u=g.lastIndex)>d&&(c.push(i.slice(d,o.index)),o.length>1&&o.index<i.length&&f.apply(c,o.slice(1)),l=o[0].length,d=u,c.length>=s));)g.lastIndex===o.index&&g.lastIndex++;return d===i.length?!l&&g.test("")||c.push(""):c.push(i.slice(d)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var p=s(t),h=String(this),f=o(p,RegExp),m=p.unicode,v=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),b=new f(g?p:"^(?:"+p.source+")",v),k=void 0===r?4294967295:r>>>0;if(0===k)return[];if(0===h.length)return null===c(b,h)?[h]:[];for(var _=0,x=0,y=[];x<h.length;){b.lastIndex=g?x:0;var w,C=c(b,g?h:h.slice(x));if(null===C||(w=d(l(b.lastIndex+(g?0:x)),h.length))===_)x=u(h,x,m);else{if(y.push(h.slice(_,x)),y.length===k)return y;for(var $=1;$<=C.length-1;$++)if(y.push(C[$]),y.length===k)return y;x=_=w}}return y.push(h.slice(_)),y}]}),!g)},386:function(t,e,n){var i=n(28),r="["+n(384)+"]",s=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},387:function(t,e,n){var i=n(10),r=n(58),s=n(4)("species");t.exports=function(t,e){var n,a=i(t).constructor;return void 0===a||null==(n=i(a)[s])?e:r(n)}},388:function(t,e,n){var i=n(7),r=n(122);t.exports=function(t,e,n){var s,a;return r&&"function"==typeof(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&r(t,a),t}},390:function(t,e,n){"use strict";var i=n(217),r=n(10),s=n(22),a=n(28),o=n(218),u=n(219);i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),l=String(this);if(!a.global)return u(a,l);var c=a.unicode;a.lastIndex=0;for(var p,h=[],f=0;null!==(p=u(a,l));){var d=String(p[0]);h[f]=d,""===d&&(a.lastIndex=o(l,s(a.lastIndex),c)),f++}return 0===f?null:h}]}))},391:function(t,e,n){},396:function(t,e,n){"use strict";var i=n(2),r=n(398);i({target:"String",proto:!0,forced:n(399)("link")},{link:function(t){return r(this,"a","href",t)}})},397:function(t,e,n){"use strict";e.a={platinum_sponsors_china:[{url:"http://www.dcloud.io/?hmsr=vuejsorg&hmpl=&hmcu=&hmkw=&hmci=",img:"dcloud.gif"}],special_sponsors:[{url:"https://autocode.com",img:"autocode.svg",name:"Autocode",description:"Build app-to-app workflows and connect APIs"}],platinum_sponsors:[{url:"https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1",img:"vueschool.png",name:"VueSchool"},{url:"https://vehikl.com/",img:"vehikl.png",name:"Vehikl"},{url:"https://retool.com/?utm_source=sponsor&utm_campaign=vue",img:"retool.png",name:"Retool"},{url:"https://passionatepeople.io/",img:"passionate_people.png",name:"Passionate People"},{url:"https://www.storyblok.com",img:"storyblok.png",name:"Storyblok"}],gold_sponsors:[{url:"https://www.vuemastery.com/",img:"vuemastery.png",name:"VueMastery"},{url:"https://laravel.com",img:"laravel.png",name:"Laravel"},{url:"https://htmlburger.com",img:"html_burger.png",name:"HTML Burger"},{url:"https://www.frontenddeveloperlove.com/",img:"frontendlove.png",name:"FrontendLove"},{url:"https://onsen.io/vue/",img:"onsen_ui.png",name:"Onsen UI"},{url:"https://neds.com.au/",img:"neds.png",name:"Neds"},{url:"https://vuejobs.com/?ref=vuejs",img:"vuejobs.png",name:"VueJobs"},{url:"https://tidelift.com/subscription/npm/vue",img:"tidelift.png",name:"Tidelift"},{url:"https://www.firesticktricks.com/",img:"firestick_tricks.png",name:"Firestick Tricks"},{url:"https://intygrate.com/",img:"intygrate.png",name:"Intygrate"},{url:"http://en.shopware.com/",img:"shopware_ag.png",name:"shopware AG"},{url:"https://www.vpnranks.com/",img:"vpnranks.png",name:"VPNRanks"},{url:"https://www.bacancytechnology.com",img:"bacancy_technology.png",name:"Bacancy Technology"},{url:"https://www.bestvpn.co/",img:"bestvpn_co.png",name:"BestVPN.co"},{url:"https://www.y8.com/",img:"y8.png",name:"Y8"},{url:"https://js.devexpress.com/",img:"devexpress.png",name:"DevExpress"},{url:"https://fastcoding.jp/javascript/ ",img:"fastcoding_inc.svg",name:"FASTCODING Inc"},{url:"https://usave.co.uk/utilities/broadband",img:"usave.png",name:"usave"},{url:"https://www.foo.software",img:"foo.png",name:"Foo"},{url:"https://flatlogic.com/templates",img:"flatlogic_templates.svg",name:"Flatlogic Templates"},{url:"http://moovweb.com/",img:"moovweb.png",name:"Moovweb"}],silver_sponsors:[{url:"https://roadster.com",img:"roadster.png",name:"Roadster"},{url:"https://www.inkoop.io",img:"inkoop.png",name:"Inkoop"},{url:"https://www.thecasinodb.com",img:"isolutions_uk_limited.png",name:"iSolutions UK Limited"}],bronze_sponsors:[{url:"https://www.accelebrate.com/",img:"accelebrate.png",name:"Accelebrate"},{url:"https://polyglotengineer.com/derek.pollard",img:"derek_pollard.png",name:"Derek Pollard"},{url:"https://www.earthlink.ro",img:"earthlink.png",name:"Earthlink"},{url:"https://www.webucator.com",img:"webucator.png",name:"Webucator"}],video_sponsors_china:[{url:"https://cloud.youku.com/index.php?source=vuejs",img:"youku.png"}]}},398:function(t,e,n){var i=n(28),r=/"/g;t.exports=function(t,e,n,s){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(s).replace(r,"&quot;")+'"'),o+">"+a+"</"+e+">"}},399:function(t,e,n){var i=n(3);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},400:function(t,e,n){"use strict";n(391)},403:function(t,e,n){},404:function(t,e,n){},405:function(t,e,n){"use strict";var i=n(2),r=n(386).trim;i({target:"String",proto:!0,forced:n(444)("trim")},{trim:function(){return r(this)}})},406:function(t,e,n){var i=n(11),r=n(6),s=n(221),a=n(388),o=n(12).f,u=n(83).f,l=n(220),c=n(130),p=n(225),h=n(24),f=n(3),d=n(60).set,g=n(445),m=n(4)("match"),v=r.RegExp,b=v.prototype,k=/a/g,_=/a/g,x=new v(k)!==k,y=p.UNSUPPORTED_Y;if(i&&s("RegExp",!x||y||f((function(){return _[m]=!1,v(k)!=k||v(_)==_||"/a/i"!=v(k,"i")})))){for(var w=function(t,e){var n,i=this instanceof w,r=l(t),s=void 0===e;if(!i&&r&&t.constructor===w&&s)return t;x?r&&!s&&(t=t.source):t instanceof w&&(s&&(e=c.call(t)),t=t.source),y&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=a(x?new v(t,e):v(t,e),i?this:b,w);return y&&n&&d(o,{sticky:n}),o},C=function(t){t in w||o(w,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},$=u(v),L=0;$.length>L;)C($[L++]);b.constructor=w,w.prototype=b,h(r,"RegExp",w)}g("RegExp")},407:function(t,e,n){},408:function(t,e,n){},409:function(t,e,n){},410:function(t,e,n){},411:function(t,e,n){},412:function(t,e,n){},413:function(t,e){t.exports=function(t){return null==t}},414:function(t,e,n){},415:function(t,e,n){},416:function(t,e,n){},417:function(t,e,n){},418:function(t,e,n){},419:function(t,e,n){},436:function(t,e,n){"use strict";n.r(e);n(216);var i=n(383),r={name:"SidebarGroup",components:{DropdownTransition:n(439).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(436).default},methods:{isActive:i.e}},s=(n(457),n(56)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(458),n(82);function o(t,e,n,i,r){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),t("RouterLink",s,n)}function u(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l,e.level-1),u(t,e.children,n,r,s,a+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,l=n.$themeLocaleConfig,c=e.props,p=c.item,h=c.sidebarDepth,f=Object(i.e)(s,p.path),d="auto"===p.type?f||p.children.some((function(t){return Object(i.e)(s,p.basePath+"#"+t.slug)})):f,g="external"===p.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,p.path,p.title||p.path):o(t,p.path,p.title||p.path,d),m=[r.frontmatter.sidebarDepth,h,l.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),v=l.displayAllHeaders||a.displayAllHeaders;return"auto"===p.type?[g,u(t,p.children,p.basePath,s,m)]:(d||v)&&p.headers&&!i.d.test(p.path)?[g,u(t,Object(i.c)(p.headers),p.path,s,m)]:g}};n(459);function c(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?c(t,e):"page"===e.type&&Object(i.e)(t,e.path)}))}var p={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(c(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},438:function(t,e,n){"use strict";n.r(e);n(214),n(121),n(215);var i={Email:"fa-envelope",GitHub:"fa-github",Twitter:"fa-twitter",LinkedIn:"fa-linkedin-square",YouTube:"fa-youtube-square",Facebook:"fa-facebook-square",Instagram:"fa-instagram",CodePen:"fa-codepen",Medium:"fa-medium"},r={props:{link:{type:String,required:!0},type:{type:String,required:!0,validator:function(t){return Object.keys(i).includes(t)}},extraClass:{type:String}},computed:{iconClass:function(){return i[this.type]}}},s=(n(400),n(56)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"social-icon",class:t.extraClass,attrs:{href:t.link,title:t.type}},[n("i",{staticClass:"fa",class:t.iconClass}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v(t._s(t.type))])])}),[],!1,null,"6e33b68b",null);e.default=a.exports},439:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(449),n(56)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},440:function(t,e,n){"use strict";n(403)},441:function(t,e,n){"use strict";n(404)},442:function(t,e,n){var i=n(2),r=n(443);i({global:!0,forced:parseInt!=r},{parseInt:r})},443:function(t,e,n){var i=n(6),r=n(386).trim,s=n(384),a=i.parseInt,o=/^[+-]?0[Xx]/,u=8!==a(s+"08")||22!==a(s+"0x16");t.exports=u?function(t,e){var n=r(String(t));return a(n,e>>>0||(o.test(n)?16:10))}:a},444:function(t,e,n){var i=n(3),r=n(384);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},445:function(t,e,n){"use strict";var i=n(43),r=n(12),s=n(4),a=n(11),o=s("species");t.exports=function(t){var e=i(t),n=r.f;a&&e&&!e[o]&&n(e,o,{configurable:!0,get:function(){return this}})}},446:function(t,e,n){"use strict";var i,r=n(2),s=n(38).f,a=n(22),o=n(128),u=n(28),l=n(129),c=n(42),p="".endsWith,h=Math.min,f=l("endsWith");r({target:"String",proto:!0,forced:!!(c||f||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!f},{endsWith:function(t){var e=String(u(this));o(t);var n=arguments.length>1?arguments[1]:void 0,i=a(e.length),r=void 0===n?i:h(a(n),i),s=String(t);return p?p.call(e,s,r):e.slice(r-s.length,r)===s}})},447:function(t,e,n){"use strict";n(407)},448:function(t,e,n){"use strict";n(408)},449:function(t,e,n){"use strict";n(409)},450:function(t,e,n){"use strict";n(410)},451:function(t,e,n){"use strict";n(411)},452:function(t,e,n){"use strict";n(412)},453:function(t,e,n){"use strict";n(414)},454:function(t,e,n){var i=n(44),r=n(16),s=n(31);t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&"[object String]"==i(t)}},455:function(t,e,n){"use strict";n(415)},456:function(t,e,n){"use strict";n(416)},457:function(t,e,n){"use strict";n(417)},458:function(t,e,n){"use strict";var i=n(2),r=n(40).find,s=n(127),a=n(23),o=!0,u=a("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},459:function(t,e,n){"use strict";n(418)},460:function(t,e,n){"use strict";n(419)},485:function(t,e,n){"use strict";n.r(e);var i=n(397),r=(n(213),n(216),n(121),n(396),n(383)),s={props:{item:{type:Object,required:!0},extraClass:{type:String,default:""}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""},combinedClasses:function(){return"".concat(this.extraClass," ").concat(this.item.icon?"has-icon":"")}},methods:{focusoutAction:function(){this.$emit("focusout")}}},a=(n(440),n(56)),o={components:{HomeActionLink:Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",class:t.combinedClasses,attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t.item.icon?n("i",{staticClass:"icon",class:t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",class:t.combinedClasses,attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?n("i",{staticClass:"icon",class:t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,"21fcf84c",null).exports,SocialIcon:n(438).default},data:function(){return{sponsors:i.a}},computed:{data:function(){return this.$page.frontmatter},tagline:function(){return this.data.tagline||this.$description||"The Progressive JavaScript Framework"}},mounted:function(){window}},u=(n(441),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"left"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()]),t._v(" "),n("div",{staticClass:"right"},[null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n          "+t._s(t.data.heroText||t.$title||"Vue.js")+"\n        ")]):t._e(),t._v(" "),t.tagline?n("h2",{staticClass:"tagline",domProps:{innerHTML:t._s(t.tagline)}}):t._e()])])]),t._v(" "),t.data.features&&t.data.features.length?n("section",{staticClass:"section-features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"inner"},[n("h1",[t._v(t._s(e.typeTitle))]),t._v(" "),n("div",{staticClass:"features"},t._l(e.children,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("a",{attrs:{href:e.link}},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])])})),0)])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),n("footer",{staticClass:"main-footer"},[t.data.socialIcons?n("p",t._l(t.data.socialIcons,(function(t){return n("SocialIcon",{key:t.link,attrs:{type:t.type,link:t.link,"extra-class":"inverted"}})})),1):t._e(),t._v(" "),n("p",{staticClass:"copyright",domProps:{innerHTML:t._s(t.data.footer)}})])],1)}),[],!1,null,null,null).exports),l=(n(442),n(30),n(214),n(222),n(123),n(57),n(215),n(390),n(405),n(223),n(82),n(406),n(124),n(446),n(81),n(385),n(226)),c=n.n(l),p=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=c()(e,"title","");return c()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),h(t,i)},h=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},f={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],s=0;s<e.length&&!(r.length>=n);s++){var a=e[s];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(p(t,a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=n);o++){var u=a.headers[o];u.title&&p(t,a,u.title)&&r.push(Object.assign({},a,{path:a.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},d=(n(447),Object(a.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(448),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),m=n(54),v={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},b=Object(a.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,k=n(439),_=n(227),x=n.n(_),y={name:"DropdownLink",components:{NavLink:b,DropdownTransition:k.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return x()(e)===t}}},w=(n(450),{name:"NavLinks",components:{NavLink:b,DropdownLink:Object(a.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(s){var a,o=e[s],u=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===a}))||(a=s)),{text:u,link:a}}))};return[].concat(Object(m.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(r.j)(t),{items:(t.items||[]).map(r.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),C=(n(451),Object(a.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function $(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var L={name:"Navbar",components:{SidebarButton:g,NavLinks:C,SearchBox:d,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return!!(this.algolia&&this.algolia.apiKey&&this.algolia.indexName)}},mounted:function(){var t=this,e=parseInt($(this.$el,"paddingLeft"))+parseInt($(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},S=(n(452),Object(a.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[!1===t.isAlgoliaSearch&&!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"}),t._v(" "),t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):t._e()],1)],1)}),[],!1,null,null,null).exports),O=n(413),I=n.n(O),j={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=I()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,r=void 0===i?"":i,s=e.docsBranch,a=void 0===s?"master":s,o=e.docsRepo,u=void 0===o?n:o;return t&&u&&this.$page.relativePath?this.createEditLink(n,u,r,a,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(r.i.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.i.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(r.a,"")+"/":"")+s}}},E=(n(453),Object(a.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[n("div",{staticClass:"container"},[n("p",[t._v("\n      Deployed on\n      "),n("a",{attrs:{href:"https://url.netlify.com/HJ8X2mxP8"}},[t._v("Netlify")]),t._v(".\n      "),t.editLink?n("span",{staticClass:"edit-link"},[t._v("\n        Caught a mistake or want to contribute to the documentation?\n        "),n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n          "+t._s(t.editLinkText)+"\n          "),n("OutboundLink")],1)]):t._e(),t._v(" "),t.lastUpdated?[n("br"),t._v(" "),n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]:t._e()],2)])])}),[],!1,null,"425aaa07",null).exports),T=n(454),N=n.n(T),P={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return R(A.PREV,this)},next:function(){return R(A.NEXT,this)}}};var A={NEXT:{resolveLink:function(t,e){return D(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return D(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function R(t,e){var n=e.$themeConfig,i=e.$page,s=e.$route,a=e.$site,o=e.sidebarItems,u=t.resolveLink,l=t.getThemeLinkConfig,c=t.getPageLinkConfig,p=l(n),h=c(i),f=I()(h)?p:h;return!1===f?void 0:N()(f)?Object(r.k)(a.pages,f,s.path):u(i,o)}function D(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var H=P,U=(n(455),{components:{PageEdit:E,PageNav:Object(a.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.title||t.prev.path))])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v(t._s(t.next.title||t.next.path))]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),B=(n(456),Object(a.a)(U,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page"},[this._t("top"),this._v(" "),e("Content",{staticClass:"theme-default-content"}),this._v(" "),e("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),W={name:"Sidebar",components:{SidebarLinks:n(436).default,NavLinks:C},props:["items"]},M=(n(460),{name:"Layout",components:{Home:u,Page:B,Sidebar:Object(a.a)(W,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),G=Object(a.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=G.exports}}]);