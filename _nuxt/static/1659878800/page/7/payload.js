__NUXT_JSONP__("/page/7", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK){z.type=d;z.children=[{type:b,tag:i,props:{},children:[{type:a,value:y}]}];C.type=d;C.children=[];G.type=d;G.children=[];V.type=d;V.children=[];_.type=d;_.children=[];ad.type=d;ad.children=[];ai.type=d;ai.children=[{type:b,tag:i,props:{},children:[{type:a,value:"之前一直只会使用"},{type:b,tag:k,props:{},children:[{type:a,value:"@RunWith(SpringRunner.class)"}]},{type:a,value:"和"},{type:b,tag:k,props:{},children:[{type:a,value:"@SpringBootTest"}]},{type:a,value:"注解来加载整个项目来注入依赖，就只会用个"},{type:b,tag:k,props:{},children:[{type:a,value:"assertEquals"}]},{type:a,value:"方法来进行测试（虽然现在也是）。但问题还是有的，且不论加载整个项目，把无关的依赖都加载进行，浪费时间。如果我要测试添加用户的接口，第一，一测试就把数据写进数据库了呀，即便是测试数据库，不要紧，那我测试第二遍，由于账户名相同，就写不进去数据库了，不能接受地报了错，其实啥问题都没有，如果要再测试就得改账户名，动了代码。也就是说这样的测试代码是连调用两次都不行的垃圾，这样子不是很奇怪吗。"}]},{type:a,value:l},{type:b,tag:i,props:{},children:[{type:a,value:"而Mockito能解决这些问题。先说说情景，我要对"},{type:b,tag:k,props:{},children:[{type:a,value:"UserService"}]},{type:a,value:"类测试添加账号和获取账号的方法，UserService调用了"},{type:b,tag:k,props:{},children:[{type:a,value:"UserDao"}]},{type:a,value:"的方法，为了避免我调用UserService的时候调用到真的，连接到数据库的UserDao，我需要给UserService替换一个UserDao的实现，而这个新的UserDao的实现的方法的返回我希望我能简单直观的控制，这样就叫做对UserService类mock了UserDao。"}]},{type:a,value:l},{type:b,tag:i,props:{},children:[{type:a,value:"在spring boot里使用很简单，下面是个简单例子，"},{type:b,tag:k,props:{},children:[{type:a,value:"UserPo"}]},{type:a,value:"类就是个普通的bean，放着账号密码，就不贴代码了。"}]}];am.type=d;am.children=[{type:b,tag:i,props:{},children:[{type:a,value:"让spring boot支持CORS非常简单，不用做任何配置，只需要在controller里使用"},{type:b,tag:k,props:{},children:[{type:a,value:"@CrossOrigin"}]},{type:a,value:"注解即可。"}]},{type:a,value:l},{type:b,tag:i,props:{},children:[{type:a,value:"@CrossOrigin注解可以使用在类或者方法上，其参数主要有origins和maxAge，用来指定允许跨域的域默认是*，和OPTIONS响应的有效时间，默认是1800。当类和方法都使用@CrossOrigin注解时，会自动合并两个注解的参数。"}]}];av.type=d;av.children=[{type:b,tag:aw,props:{id:ax},children:[{type:b,tag:ay,props:{ariaHidden:az,href:"#%E4%BD%95%E4%B8%BA%E5%9F%9F",tabIndex:aA},children:[{type:b,tag:aB,props:{className:[aC,aD]},children:[]}]},{type:a,value:ax}]},{type:a,value:l},{type:b,tag:i,props:{},children:[{type:a,value:"这里的域指的并不是域名，而是协议、主机地址和端口的唯一组合，即协议，主机地址和端口其中一个不一样那就是另外一个域了。"}]},{type:a,value:l},{type:b,tag:aw,props:{id:aE},children:[{type:b,tag:ay,props:{ariaHidden:az,href:"#%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98%E4%B8%BA%E4%BD%95%E8%80%8C%E6%9D%A5",tabIndex:aA},children:[{type:b,tag:aB,props:{className:[aC,aD]},children:[]}]},{type:a,value:aE}]},{type:a,value:l},{type:b,tag:i,props:{},children:[{type:a,value:"浏览器为了安全，避免网页被嵌入恶意代码，限制来源于某个域的脚本只能向其来源的域发起ajax请求，并且脚本也无法获取别的域的cookie，DOM等资源，这个叫同源策略。例如我在"},{type:b,tag:k,props:{},children:[{type:a,value:"http:\u002F\u002Fwww.alipay.com\u002F"}]},{type:a,value:"里嵌入了个检测你支付宝密码的脚本，发现你输入密码，就把你的密码发送到我的域名下，但由于我的域名跟阿里的域名不在同一个域里面，这样子偷偷发送密码的请求就会被浏览器拦截住。"}]},{type:a,value:l},{type:b,tag:i,props:{},children:[{type:a,value:"接下来以来源于a.com域（简称a域）的脚本向b.com（简称b域）发起请求作为情景来解释"}]}];aI.type=d;aI.children=[];return {data:[{siteConfig:{siteName:"无名の窝",siteHost:"https:\u002F\u002Fcellargalaxy.github.io",basePath:"\u002Fblog-code\u002F",navs:[{text:"文章",url:t},{text:"归档",url:"\u002Fblog-code\u002Farchive\u002F0\u002F"},{text:"画画",url:"\u002Fblog-code\u002Fhtml\u002Fhua.html"},{text:"开源",url:"\u002Fblog-code\u002Fhttps:\u002Fgithub.com\u002Fcellargalaxy\u002Fblog-vue"}],pageSize:u,urlReplace:{"^/file/blog/code":"https:\u002F\u002Foracleamd1.dynv6.net\u002Ffile\u002Ffile\u002Fblog\u002Fcode"},backgroundImage:{duration:v,fade:1000,images:[{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F25\u002FcofTzDQXitjeVZ6.jpg",description:w,type:j},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F25\u002FsfaRJ2lVeM3NDbE.jpg",description:w,type:j},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F26\u002FKybiTdftam5Su7x.jpg",description:"青春猪头-双葉理央",type:j},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F09\u002F08\u002FxdX73nfs24qgOYk.jpg",description:"京吹-明日香,久美子",type:j},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F02\u002F14\u002FMAiruNcEFW2HYtg.jpg",description:"终将成为你-七海灯子,小糸侑",type:j},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F02\u002F05\u002FEojdAxTDJsFpbPw.jpg",description:"玉子市场-北白川玉子",type:j},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F31\u002FAXxwJDRS9fmN2uU.jpg",description:"fate_hf-弓道馆",type:j},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F02\u002F01\u002FaHhVObpJus6dnM4.jpg",description:"fate_hf-樱花树",type:j}]}},homeConfig:{brandInterval:v,brands:[{imageUrl:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F21\u002FmMEAnwY5XPC2pFb.jpg",title:"日常",texts:["我们所度过的每个平凡的日常，也许就是连续不断发生的奇迹。","日々、私たちが過ごしている日常は、実は奇跡の連続なのかもしれない。"]},{imageUrl:"https:\u002F\u002Fi.loli.net\u002F2020\u002F04\u002F19\u002FH1MmXb9xPcYEhT2.jpg",title:"昨日之歌",texts:["时间梭梭箭如飞，人道漫漫步蹒跚","人間そんな変わるもんじゃないのに、月日ばっかどんどん過ぎて"]}],navs:[{text:"Github",url:"https:\u002F\u002Fgithub.com\u002Fcellargalaxy\u002F"}]},pageFootConfig:{lines:[[{text:"Copyright © 2017-? ."},{text:"备案？不存在的"},{text:"Powered by Nuxt.js & Github"}]]},buildTime:new Date(1659878812568),rootPath:t,crumbs:[],pageSize:u,total:116,currentPage:7,files:[{slug:x,description:y,createdAt:m,updatedAt:m,toc:[],body:z,excerpt:z,dir:q,path:"\u002F框架\u002F20181024\u002FQuartz集群原理及源码分析",extension:e,title:x,url:"\u002Fblog-code\u002Fview\u002F框架\u002F20181024\u002FQuartz集群原理及源码分析\u002F",createAt:new Date(1540339200000),updateAt:new Date(1540339200000),attributes:[{name:f,value:n},{name:g,value:n},{name:h,value:q,url:A}]},{slug:B,description:o,createdAt:m,updatedAt:m,toc:[{id:"job与jobdetail",depth:c,text:"Job与JobDetail"},{id:"trigger",depth:c,text:"Trigger"},{id:"scheduler",depth:c,text:"Scheduler"}],body:C,excerpt:C,dir:q,path:"\u002F框架\u002F20181024\u002FQuartz框架的使用",extension:e,title:B,url:"\u002Fblog-code\u002Fview\u002F框架\u002F20181024\u002FQuartz框架的使用\u002F",createAt:new Date(1540339200000),updateAt:new Date(1540339200000),attributes:[{name:f,value:n},{name:g,value:n},{name:h,value:q,url:A}]},{slug:D,description:o,createdAt:m,updatedAt:m,toc:[{id:E,depth:c,text:E},{id:F,depth:c,text:F}],body:G,excerpt:G,dir:H,path:"\u002F中间件\u002F20181024\u002FMysql的锁与引擎",extension:e,title:D,url:"\u002Fblog-code\u002Fview\u002F中间件\u002F20181024\u002FMysql的锁与引擎\u002F",createAt:new Date(1540339200000),updateAt:new Date(1540339200000),attributes:[{name:f,value:n},{name:g,value:n},{name:h,value:H,url:"\u002Fblog-code\u002Fpage\u002F中间件\u002F20181024\u002F1\u002F"}]},{slug:I,description:o,createdAt:J,updatedAt:J,toc:[{id:K,depth:c,text:K},{id:L,depth:c,text:L},{id:M,depth:c,text:M},{id:N,depth:c,text:N},{id:O,depth:c,text:O},{id:P,depth:c,text:P},{id:Q,depth:c,text:Q},{id:"arp",depth:c,text:"ARP"},{id:"icmp",depth:c,text:"ICMP"},{id:"udp",depth:c,text:"UDP"},{id:"tcp",depth:c,text:"TCP"},{id:R,depth:p,text:R},{id:"连续arq协议滑动窗口协议",depth:p,text:"连续ARQ协议\u002F滑动窗口协议"},{id:S,depth:p,text:S},{id:T,depth:p,text:T},{id:U,depth:p,text:U},{id:"tcp的三次握手和四次分手",depth:p,text:"TCP的三次握手和四次分手"}],body:V,excerpt:V,dir:W,path:"\u002F协议\u002F20180916\u002F计算机网络复习笔记",extension:e,title:I,url:"\u002Fblog-code\u002Fview\u002F协议\u002F20180916\u002F计算机网络复习笔记\u002F",createAt:new Date(1537056000000),updateAt:new Date(1537056000000),attributes:[{name:f,value:X},{name:g,value:X},{name:h,value:W,url:"\u002Fblog-code\u002Fpage\u002F协议\u002F20180916\u002F1\u002F"}]},{slug:Y,description:o,createdAt:Z,updatedAt:Z,toc:[],body:_,excerpt:_,dir:$,path:"\u002F框架\u002F20180831\u002Fjwt总结与jjwt的使用",extension:e,title:Y,url:"\u002Fblog-code\u002Fview\u002F框架\u002F20180831\u002Fjwt总结与jjwt的使用\u002F",createAt:new Date(1535673600000),updateAt:new Date(1535673600000),attributes:[{name:f,value:aa},{name:g,value:aa},{name:h,value:$,url:"\u002Fblog-code\u002Fpage\u002F框架\u002F20180831\u002F1\u002F"}]},{slug:ab,description:o,createdAt:ac,updatedAt:ac,toc:[],body:ad,excerpt:ad,dir:ae,path:"\u002F其他\u002F20180820\u002F做题笔记",extension:e,title:ab,url:"\u002Fblog-code\u002Fview\u002F其他\u002F20180820\u002F做题笔记\u002F",createAt:new Date(1534723200000),updateAt:new Date(1534723200000),attributes:[{name:f,value:af},{name:g,value:af},{name:h,value:ae,url:"\u002Fblog-code\u002Fpage\u002F其他\u002F20180820\u002F1\u002F"}]},{slug:ag,description:"之前一直只会使用@RunWith(SpringRunner.class)和@SpringBootTest注解来加载整个项目来注入依赖，就只会用个assertEquals方法来进行测试（虽然现在也是）。但问题还是有的，且不论加载整个项目，把无关的依赖都加载进行，浪费时间。如果我要测试添加用户的接口，第一，一测试就把数据写进数据库了呀，即便是测试数据库，不要紧，那我测试第二遍，由于账户名相同，就写不进去数据库了，不能接受地报了错，其实啥问题都没有，如果要再测试就得改账户名，动了代码。也就是说这样的测试代码是连调用两次都不行的垃圾，这样子不是很奇怪吗。\n而Mockito能解决这些问题。先说说情景，我要对UserService类测试添加账号和获取账号的方法，UserService调用了UserDao的方法，为了避免我调用UserService的时候调用到真的，连接到数据库的UserDao，我需要给UserService替换一个UserDao的实现，而这个新的UserDao的实现的方法的返回我希望我能简单直观的控制，这样就叫做对UserService类mock了UserDao。\n在spring boot里使用很简单，下面是个简单例子，UserPo类就是个普通的bean，放着账号密码，就不贴代码了。",createdAt:ah,updatedAt:ah,toc:[],body:ai,excerpt:ai,dir:aj,path:"\u002F框架\u002F20180809\u002FSpring Boot使用Mockito做单元测试",extension:e,title:ag,url:"\u002Fblog-code\u002Fview\u002F框架\u002F20180809\u002FSpring Boot使用Mockito做单元测试\u002F",createAt:new Date(1533772800000),updateAt:new Date(1533772800000),attributes:[{name:f,value:ak},{name:g,value:ak},{name:h,value:aj,url:"\u002Fblog-code\u002Fpage\u002F框架\u002F20180809\u002F1\u002F"}]},{slug:al,description:"让spring boot支持CORS非常简单，不用做任何配置，只需要在controller里使用@CrossOrigin注解即可。\n@CrossOrigin注解可以使用在类或者方法上，其参数主要有origins和maxAge，用来指定允许跨域的域默认是*，和OPTIONS响应的有效时间，默认是1800。当类和方法都使用@CrossOrigin注解时，会自动合并两个注解的参数。",createdAt:r,updatedAt:r,toc:[],body:am,excerpt:am,dir:an,path:"\u002F框架\u002F20180802\u002Fspring boot与Nginx支持CORS",extension:e,title:al,url:"\u002Fblog-code\u002Fview\u002F框架\u002F20180802\u002Fspring boot与Nginx支持CORS\u002F",createAt:new Date(1533168000000),updateAt:new Date(1533168000000),attributes:[{name:f,value:s},{name:g,value:s},{name:h,value:an,url:"\u002Fblog-code\u002Fpage\u002F框架\u002F20180802\u002F1\u002F"}]},{slug:ao,description:"何为域\n这里的域指的并不是域名，而是协议、主机地址和端口的唯一组合，即协议，主机地址和端口其中一个不一样那就是另外一个域了。\n跨域问题为何而来\n浏览器为了安全，避免网页被嵌入恶意代码，限制来源于某个域的脚本只能向其来源的域发起ajax请求，并且脚本也无法获取别的域的cookie，DOM等资源，这个叫同源策略。例如我在http:\u002F\u002Fwww.alipay.com\u002F里嵌入了个检测你支付宝密码的脚本，发现你输入密码，就把你的密码发送到我的域名下，但由于我的域名跟阿里的域名不在同一个域里面，这样子偷偷发送密码的请求就会被浏览器拦截住。\n接下来以来源于a.com域（简称a域）的脚本向b.com（简称b域）发起请求作为情景来解释",createdAt:r,updatedAt:r,toc:[{id:ap,depth:c,text:ap},{id:aq,depth:c,text:aq},{id:ar,depth:c,text:ar},{id:as,depth:c,text:as},{id:at,depth:c,text:at},{id:au,depth:c,text:au}],body:av,excerpt:av,dir:aF,path:"\u002F协议\u002F20180802\u002FJSONP和CORS的跨域请求",extension:e,title:ao,url:"\u002Fblog-code\u002Fview\u002F协议\u002F20180802\u002FJSONP和CORS的跨域请求\u002F",createAt:new Date(1533168000000),updateAt:new Date(1533168000000),attributes:[{name:f,value:s},{name:g,value:s},{name:h,value:aF,url:"\u002Fblog-code\u002Fpage\u002F协议\u002F20180802\u002F1\u002F"}]},{slug:aG,description:o,createdAt:aH,updatedAt:aH,toc:[],body:aI,excerpt:aI,dir:aJ,path:"\u002F框架\u002F20180728\u002Fspring boot+Spring Security+jjwt",extension:e,title:aG,url:"\u002Fblog-code\u002Fview\u002F框架\u002F20180728\u002Fspring boot+Spring Security+jjwt\u002F",createAt:new Date(1532736000000),updateAt:new Date(1532736000000),attributes:[{name:f,value:aK},{name:g,value:aK},{name:h,value:aJ,url:"\u002Fblog-code\u002Fpage\u002F框架\u002F20180728\u002F1\u002F"}]}]}],fetch:{},mutations:void 0}}("text","element",2,"root",".md","createAt","updateAt","sort","p","wide","code","\n","2018-10-24T00:00:00.000Z","2018-10-24","",3,"\u002F框架\u002F20181024","2018-08-02T00:00:00.000Z","2018-08-02","\u002Fblog-code\u002Fpage\u002F1\u002F",10,10000,"青春猪头-牧之原翔子-江之岛","Quartz集群原理及源码分析","我们需要Quartz框架执行任务，就需要告诉Quartz所需的JobDetail和Trigger。在单机里，Quartz会把JobDetail和Trigger保存在内存里，如果重启，JobDetail和Trigger的数据都会全部丢失（虽然会在代码里重新添加）。显然，需要集群执行，把JobDetail和Trigger保存在内存里是没有办法在各个节点之间进行同步的，而Quartz利用数据库的锁来进行实现。",{},"\u002Fblog-code\u002Fpage\u002F框架\u002F20181024\u002F1\u002F","Quartz框架的使用",{},"Mysql的锁与引擎","共享锁","独占锁",{},"\u002F中间件\u002F20181024","计算机网络复习笔记","2018-09-16T00:00:00.000Z","网络层次","网际协议ip","虚拟互联网络","ip地址分类","划分子网","ip数据报","ip层转发分组流程","等待停止协议","超时重传","流量控制","拥塞控制",{},"\u002F协议\u002F20180916","2018-09-16","jwt总结与jjwt的使用","2018-08-31T00:00:00.000Z",{},"\u002F框架\u002F20180831","2018-08-31","做题笔记","2018-08-20T00:00:00.000Z",{},"\u002F其他\u002F20180820","2018-08-20","Spring Boot使用Mockito做单元测试","2018-08-09T00:00:00.000Z",{},"\u002F框架\u002F20180809","2018-08-09","spring boot与Nginx支持CORS",{},"\u002F框架\u002F20180802","JSONP和CORS的跨域请求","简单请求的请求","简单请求的响应","预检请求的请求","预检请求的回应","实际请求的请求","实际请求的响应",{},"h1","何为域","a","true",-1,"span","icon","icon-link","跨域问题为何而来","\u002F协议\u002F20180802","spring boot+Spring Security+jjwt","2018-07-28T00:00:00.000Z",{},"\u002F框架\u002F20180728","2018-07-28")));