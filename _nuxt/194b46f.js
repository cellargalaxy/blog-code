(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{506:function(t,e){},524:function(t,e,n){"use strict";n.r(e);var r=n(35),l={name:"pageFoot",props:{config:{default:function(){return{lines:[[{text:"Copyright © 2017-? ."},{text:"备案？不存在的"},{text:"Powered by Nuxt.js & Github"}],[{text:"友链："},{text:"Github",url:"https://github.com/"},{text:"Nuxt.js",url:"https://nuxtjs.org/"}]]}}},buildTime:{default:function(){return new Date}}},computed:{buildDate:function(){return r.default.formatDate(this.buildTime,"YYYY-MM-DD")}}},c=n(84),o=n(528),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"text-center blue-background-8",staticStyle:{border:"none"}},[t._l(t.config.lines,(function(line,i){return n("b-card-text",{key:i,staticClass:"white"},t._l(line,(function(content,e){return n("b-badge",{key:e,staticClass:"transparent",staticStyle:{"margin-left":"0.5em","margin-right":"0.5em"}},[n("a",{staticClass:"white",attrs:{href:content.url,target:"_blank"},domProps:{textContent:t._s(content.text)}})])})),1)})),t._v(" "),n("b-card-text",{staticClass:"white"},[n("b-badge",{staticClass:"transparent",staticStyle:{"margin-left":"0.5em","margin-right":"0.5em"}},[n("a",{staticClass:"white",domProps:{textContent:t._s("buildTime: "+t.buildDate)}})])],1)],2)}),[],!1,null,"561c0f9d",null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},528:function(t,e,n){"use strict";var r=n(506),l=n.n(r);e.default=l.a}}]);