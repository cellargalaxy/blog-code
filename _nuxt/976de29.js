(window.webpackJsonp=window.webpackJsonp||[]).push([[11,5,6,7,13],{487:function(t,e){},488:function(t,e){},489:function(t,e,n){"use strict";n.r(e);n(22);var r=n(35),l={name:"autoColorBadge",props:{name:{default:function(){return r.default.randomString(4)}},value:{default:function(){return r.default.randomString(4)}},url:{default:function(){}}},data:function(){return{variants:["secondary","primary","info","dark"]}},computed:{variant:function(){var t=r.default.hashString(this.name)+r.default.hashString(this.value);return this.variants[t%this.variants.length]}}},o=n(84),c=n(493),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-badge",{attrs:{variant:t.variant}},[t._v(t._s(t.name+": ")),n("a",{staticClass:"white",attrs:{href:t.url},domProps:{textContent:t._s(t.value)}})])}),[],!1,null,"3845f08c",null);"function"==typeof c.default&&Object(c.default)(component);e.default=component.exports},490:function(t,e,n){"use strict";n.r(e);var r={name:"autoColorBadges",props:{attributes:{default:function(){return[void 0,void 0,void 0]}}},components:{autoColorBadge:n(489).default}},l=n(84),o=n(494),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.attributes,(function(t,i){return n("auto-color-badge",{key:i,staticStyle:{"margin-left":"0.1em","margin-right":"0.1em"},attrs:{name:t.name,value:t.value,url:t.url}})})),1)}),[],!1,null,"5388da3e",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadge:n(489).default})},491:function(t,e){},493:function(t,e,n){"use strict";var r=n(487),l=n.n(r);e.default=l.a},494:function(t,e,n){"use strict";var r=n(488),l=n.n(r);e.default=l.a},496:function(t,e){},497:function(t,e,n){"use strict";n.r(e);var r=n(490),l=n(166),o={name:"articleView",props:{file:{default:function(){return{title:"title_t",url:"#",toc:[{id:"h2_t",depth:2,text:"h2_t"},{id:"h3_t",depth:3,text:"h3_t"}],body:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]},{type:"element",tag:"h2",props:{id:"h2_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h2_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h2_t"}]},{type:"element",tag:"h3",props:{id:"h3_t"},children:[{type:"element",tag:"a",props:{ariaHidden:"true",href:"#h3_t",tabIndex:-1},children:[{type:"element",tag:"span",props:{className:["icon","icon-link"]},children:[]}]},{type:"text",value:"h3_t"}]}]},excerpt:{type:"root",children:[{type:"element",tag:"p",props:{},children:[{type:"text",value:"description_t"}]}]},attributes:[{name:"createAt",value:"YYYY-MM-DD"},{name:"updateAt",value:"YYYY-MM-DD"},{name:"sort",value:"sort",url:"#"}]}}},isSummary:{default:function(){return!1}}},computed:{article:function(){return l.default.file2Article(this.file,this.isSummary)}},components:{autoColorBadges:r.default}},c=n(84),f=n(502),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-list-group",{staticClass:"nuxt-content",staticStyle:{"margin-bottom":"1em"}},[n("b-list-group-item",{staticClass:"white-background-8"},[n("h1",[n("b-link",{attrs:{href:t.article.url,target:t.isSummary?"_blank":""},domProps:{textContent:t._s(t.article.title)}})],1),t._v(" "),n("auto-color-badges",{attrs:{attributes:t.article.attributes}})],1),t._v(" "),n("b-list-group-item",{staticClass:"white-background-8"},[n("nuxt-content",{attrs:{document:t.article}})],1)],1)}),[],!1,null,"3e472622",null);"function"==typeof f.default&&Object(f.default)(component);e.default=component.exports;installComponents(component,{AutoColorBadges:n(490).default})},502:function(t,e,n){"use strict";var r=n(491),l=n.n(r);e.default=l.a},509:function(t,e,n){"use strict";n.r(e);var r={name:"fileView",props:{file:{default:function(){}},isSummary:{default:function(){}}},components:{articleView:n(497).default}},l=n(84),o=n(514),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article-view",{attrs:{file:t.file,isSummary:t.isSummary}})}),[],!1,null,"22ac7f6b",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{ArticleView:n(497).default})},514:function(t,e,n){"use strict";var r=n(496),l=n.n(r);e.default=l.a},516:function(t,e){},537:function(t,e,n){"use strict";n.r(e);var r={name:"fileList",props:{files:{default:function(){return[void 0,void 0,void 0,void 0,void 0,void 0]}}},components:{fileView:n(509).default}},l=n(84),o=n(540),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.files,(function(t,i){return n("file-view",{key:i,attrs:{file:t,isSummary:!0}})})),1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports;installComponents(component,{FileView:n(509).default})},540:function(t,e,n){"use strict";var r=n(516),l=n.n(r);e.default=l.a}}]);