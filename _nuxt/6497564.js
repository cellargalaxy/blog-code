(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16,17],{493:function(t,e){},495:function(t,e,l){var content=l(505);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("4cba49aa",content,!0,{sourceMap:!1})},503:function(t,e,l){"use strict";l.r(e);var n={name:"fullImage",props:{url:{default:function(){return"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"}}}},r=(l(504),l(84)),c=l(506),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"full-image",style:{backgroundImage:"url("+t.url+")"}})}),[],!1,null,"01e101de",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},504:function(t,e,l){"use strict";l(495)},505:function(t,e,l){var n=l(61)(!1);n.push([t.i,".full-image[data-v-01e101de]{background-repeat:no-repeat;background-position:50%;background-attachment:fixed;background-size:cover;height:100vh}",""]),t.exports=n},506:function(t,e,l){"use strict";var n=l(493),r=l.n(n);e.default=r.a},519:function(t,e){},530:function(t,e,l){var content=l(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(62).default)("4015ef93",content,!0,{sourceMap:!1})},538:function(t,e){},544:function(t,e,l){"use strict";l(530)},545:function(t,e,l){var n=l(61)(!1);n.push([t.i,".full-scrub-image[data-v-5de50a1c]{background-repeat:repeat,no-repeat;background-position:0 0,50%;background-attachment:scroll,fixed;background-size:auto,cover;height:100vh}",""]),t.exports=n},546:function(t,e,l){"use strict";var n=l(519),r=l.n(n);e.default=r.a},548:function(t,e,l){"use strict";l.r(e);var n={name:"fullScrubImage",props:{scrub:{default:function(){return l(327)}},url:{default:function(){return"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png"}}}},r=(l(544),l(84)),c=l(546),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"full-scrub-image",style:{backgroundImage:"url("+t.scrub+"), url("+t.url+")"}})}),[],!1,null,"5de50a1c",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},554:function(t,e,l){"use strict";var n=l(538),r=l.n(n);e.default=r.a},559:function(t,e,l){"use strict";l.r(e);var n={name:"fullCarousel",props:{config:{default:function(){return{interval:5e3,brands:[{imageUrl:"https://i.loli.net/2018/08/21/5b7bb5dd4f0df.png",title:"这是大招牌-1",texts:["这是一段招牌的演示文字-1-1","这是一段招牌的演示文字-1-2"]},{imageUrl:"https://i.loli.net/2018/04/10/5accdcbcb1738.jpg",title:"这是大招牌-2",texts:["这是一段招牌的演示文字-2-1","这是一段招牌的演示文字-2-2"]},{imageUrl:"https://i.loli.net/2018/08/21/5b7bbc8ec3633.jpg",title:"这是大招牌-3",texts:["这是一段招牌的演示文字-3-1","这是一段招牌的演示文字-3-2"]}],navs:[{text:"Github",url:"https://github.com/"},{text:"Nuxt.js",url:"https://nuxtjs.org/"},{text:"BootstrapVue",url:"https://bootstrap-vue.org/"},{text:"Node.js",url:"https://nodejs.org/"}]}}}},components:{fullImage:l(548).default}},r=l(84),c=l(554),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("b-carousel",{attrs:{interval:t.config.interval,fade:"",indicators:""}},t._l(t.config.brands,(function(e,i){return l("b-carousel-slide",{key:i,attrs:{background:"rgba(255, 255, 255, 1)"},scopedSlots:t._u([{key:"img",fn:function(){return[l("full-image",{attrs:{url:e.imageUrl}})]},proxy:!0}],null,!0)},[t._v(" "),l("b-container",{attrs:{fluid:""}},[l("b-row",{staticClass:"text-center",attrs:{"align-v":"center"}},[l("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}}),t._v(" "),l("b-col",{attrs:{lg:"8",md:"10",sm:"12",xl:"8"}},[e.title||e.texts?l("b-card",{staticClass:"black-background-5",staticStyle:{border:"none"},attrs:{title:e.title,"title-tag":"h1"}},t._l(e.texts,(function(text,e){return l("b-card-text",{key:e,staticClass:"white"},[t._v(t._s(text))])})),1):t._e()],1),t._v(" "),l("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}})],1),t._v(" "),l("b-row",{staticClass:"text-center",attrs:{"align-v":"center"}},[l("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}}),t._v(" "),l("b-col",{attrs:{lg:"8",md:"10",sm:"12",xl:"8"}},t._l(t.config.navs,(function(nav,e){return l("b-badge",{key:e,staticClass:"black-background-5",attrs:{pill:""}},[l("a",{staticClass:"white",attrs:{href:nav.url,target:"_blank"},domProps:{textContent:t._s(nav.text)}})])})),1),t._v(" "),l("b-col",{attrs:{lg:"2",md:"1",sm:"0",xl:"2"}})],1)],1)],1)})),1)}),[],!1,null,"4fe5d4b8",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports;installComponents(component,{FullImage:l(503).default})}}]);