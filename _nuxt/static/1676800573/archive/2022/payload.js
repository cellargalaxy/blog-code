__NUXT_JSONP__("/archive/2022", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb){return {data:[{siteConfig:{siteName:"无名の窝",siteHost:"https:\u002F\u002Fcellargalaxy.github.io",basePath:"\u002Fblog-code\u002F",navs:[{text:"文章",url:"\u002Fblog-code\u002Fpage\u002F1\u002F"},{text:"归档",url:"\u002Fblog-code\u002Farchive\u002F0\u002F"},{text:"画画",url:"\u002Fblog-code\u002Fhtml\u002Fhua.html"},{text:"开源",url:"\u002Fblog-code\u002Fhttps:\u002Fgithub.com\u002Fcellargalaxy\u002Fblog-vue"}],pageSize:10,urlReplace:{"^/file/blog/code":"https:\u002F\u002Foracleamd1.dynv6.net\u002Ffile\u002Ffile\u002Fblog\u002Fcode"},backgroundImage:{duration:aj,fade:1000,images:[{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F25\u002FcofTzDQXitjeVZ6.jpg",description:ak,type:D},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F25\u002FsfaRJ2lVeM3NDbE.jpg",description:ak,type:D},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F26\u002FKybiTdftam5Su7x.jpg",description:"青春猪头-双葉理央",type:D},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F09\u002F08\u002FxdX73nfs24qgOYk.jpg",description:"京吹-明日香,久美子",type:D},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F02\u002F14\u002FMAiruNcEFW2HYtg.jpg",description:"终将成为你-七海灯子,小糸侑",type:D},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F02\u002F05\u002FEojdAxTDJsFpbPw.jpg",description:"玉子市场-北白川玉子",type:D},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F31\u002FAXxwJDRS9fmN2uU.jpg",description:"fate_hf-弓道馆",type:D},{url:"https:\u002F\u002Fi.loli.net\u002F2020\u002F02\u002F01\u002FaHhVObpJus6dnM4.jpg",description:"fate_hf-樱花树",type:D}]}},homeConfig:{brandInterval:aj,brands:[{imageUrl:"https:\u002F\u002Fi.loli.net\u002F2020\u002F01\u002F21\u002FmMEAnwY5XPC2pFb.jpg",title:"日常",texts:["我们所度过的每个平凡的日常，也许就是连续不断发生的奇迹。","日々、私たちが過ごしている日常は、実は奇跡の連続なのかもしれない。"]},{imageUrl:"https:\u002F\u002Fi.loli.net\u002F2020\u002F04\u002F19\u002FH1MmXb9xPcYEhT2.jpg",title:"昨日之歌",texts:["时间梭梭箭如飞，人道漫漫步蹒跚","人間そんな変わるもんじゃないのに、月日ばっかどんどん過ぎて"]}],navs:[{text:"Github",url:"https:\u002F\u002Fgithub.com\u002Fcellargalaxy\u002F"}]},pageFootConfig:{lines:[[{text:"Copyright © 2017-? ."},{text:"备案？不存在的"},{text:"Powered by Nuxt.js & Github"}]]},buildTime:new Date(1676800582431),startPage:2018,endPage:2023,currentPage:2022,files:[{slug:al,description:"夜深，好困，长话短说。\n\nloki：存储查询日志的服务，对外提供一个http端口\npromtail：收集日志，把日志发生到loki里进行管理\ngrafana：可以通过loki的接口查询日志\n",createdAt:am,updatedAt:am,toc:[],body:{type:T,children:[{type:b,tag:j,props:{},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:aq}]},{type:a,value:f}]},{type:a,value:f},{type:a,value:f},{type:b,tag:F,props:{id:ar},children:[{type:b,tag:n,props:{href:"#%E9%A2%84%E5%A4%87%E5%B7%A5%E4%BD%9C",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:ar}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"loki的http端口需要对外，但loki的http貌似没权限校验功能，所以用caddy反代置于，加个账号密码校验。"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"caddy的配置，使用basicauth加上账号密码校验。admin就是账号，后面的是密码的hash base64。 这个hash base64需要使用caddy来生成，执行"},{type:b,tag:s,props:{},children:[{type:a,value:"caddy hash-password"}]},{type:a,value:"\n，输入两次密码，就能生成。"}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,U]},children:[{type:b,tag:s,props:{},children:[{type:a,value:":80 "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:"\n  encode "},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:"gzip"}]},{type:a,value:" zstd\n  \n  route \u002Floki\u002F* "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:"\n    uri strip_prefix \u002Floki\n    reverse_proxy "},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"127.0"}]},{type:a,value:".0.1:3100\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:"\n    \n  basicauth \u002Floki\u002F* "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:"\n    admin JDJhJDE0JEZDN1Q0ZjZwc2ZrbG1FODROdndmc09UZzRJWW41c2QyaFB0aUFnSUhwL3JZWVRob1FabWV1\n  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ab}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:F,props:{id:as},children:[{type:b,tag:n,props:{href:"#grafana",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:as}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"grafana没啥要求的，docker直接安装就好"}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,U]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:V}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:W}]},{type:a,value:" volume create grafana_data\n"},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:V}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:W}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ad}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:H}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ag}]},{type:a,value:" grafana "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:at}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,au,o]},children:[{type:a,value:"GF_SERVER_ROOT_URL"}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:H}]},{type:a,value:"https:\u002F\u002Fexample.com\u002Fgrafana\u002F "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:at}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,au,o]},children:[{type:a,value:"GF_SERVER_SERVE_FROM_SUB_PATH"}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:H}]},{type:a,value:"true "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:av}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"3000"}]},{type:a,value:":3000 "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:X}]},{type:a,value:" grafana_data:\u002Fvar\u002Flib\u002Fgrafana "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n  grafana\u002Fgrafana\n"}]}]}]},{type:a,value:f},{type:b,tag:F,props:{id:aw},children:[{type:b,tag:n,props:{href:"#loki",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aw}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"配置文件，加了注释的可以按需改改，其余的都是官方默认配置。"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"官方配置："},{type:b,tag:n,props:{href:ax,rel:[x,y,z],target:A},children:[{type:a,value:ax}]}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,ay]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"auth_enabled"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah,Y]},children:[{type:a,value:"false"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aB}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"9096"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"common"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"path_prefix"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Ftmp\u002Floki\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"storage"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"filesystem"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"chunks_directory"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Ftmp\u002Floki\u002Fchunks\n      "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"rules_directory"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Ftmp\u002Floki\u002Frules\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"replication_factor"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"1"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"ring"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"instance_addr"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" 127.0.0.1\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"kvstore"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" inmemory\n\n"},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"schema_config"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"configs"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"from"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,"datetime",w]},children:[{type:a,value:"2020-10-24"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" boltdb"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:"shipper\n      "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"object_store"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" filesystem\n      "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"schema"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" v11\n      "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"index"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"prefix"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" index_\n        "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"period"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" 24h\n\n"},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"ruler"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"alertmanager_url"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002F\u002Flocalhost"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"9093"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"limits_config"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"reject_old_samples"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah,Y]},children:[{type:a,value:r}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"#是否拒绝旧样本"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"reject_old_samples_max_age"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"#30d,默认168h(7d),之前的样本被拒绝"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"ingestion_rate_mb"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"32"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"#每用户每秒样本大小的摄取速率限制。单位为 MB"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"max_entries_limit_per_query"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"10000"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"#默认5000,最大查询行数"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"table_manager"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"retention_deletes_enabled"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ah,Y]},children:[{type:a,value:r}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"#开启删除"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"retention_period"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"#30d,默认744h(31d),超过的数据将被删除"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:aG}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,U]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:V}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:W}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ad}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:H}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ag}]},{type:a,value:" loki "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:av}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:aB}]},{type:a,value:":3100 "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:X}]},{type:a,value:" \u002Fconfig:\u002Fconfig "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n  grafana\u002Floki "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:H}]},{type:a,value:"\u002Fconfig\u002Floki.yaml\n"}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"安装完之后可以进"},{type:b,tag:s,props:{},children:[{type:a,value:"http:\u002F\u002F127.0.0.1:3100\u002Floki\u002Fready"}]},{type:a,value:"。一开始会线上要等等，还没ready。等个一会就会显示ready了。"}]},{type:a,value:f},{type:b,tag:F,props:{id:aI},children:[{type:b,tag:n,props:{href:"#promtail",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aI}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"配置文件，官方配置："},{type:b,tag:n,props:{href:aJ,rel:[x,y,z],target:A},children:[{type:a,value:aJ}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:s,props:{},children:[{type:a,value:"\u002Flog\u002F*log"}]},{type:a,value:"，promtail会抓取\u002Flog下面全面log结尾的文件"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"启动之后可以看看日志，如果发现请求loki被拒绝，报429，可能是promtail给loki一口气发送的日志过大。可以修改loki的速率限制配置。"}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,ay]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"9080"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"0"}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"positions"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"filename"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Ftmp\u002Fpositions.yaml\n\n"},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"client"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"url"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aE},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"\u002F\u002F127.0.0.1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"3100\u002Floki\u002Fapi\u002Fv1\u002Fpush\n  "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"basic_auth"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"username"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" username\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"password"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" password\n\n"},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"scrape_configs"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"job_name"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" log\n    "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"static_configs"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"targets"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:" localhost\n        "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"job"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" log\n          "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"__path__"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" \u002Flog\u002F"},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"**\u002F*.log"}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"pipeline_stages"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"regex"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"#https:\u002F\u002Fregex101.com\u002F"}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"expression"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,"string"]},children:[{type:a,value:"'(?P\u003Ctimestamp\u003E\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\+\\d{2}:\\d{2}).+\\[(?P\u003Clevel\u003E[A-Z]{4})\\].+\\[logid:(?P\u003Clogid\u003E[0-9]+)\\].+\\[sn:(?P\u003Csn\u003E.+)\\].+\\[ip:(?P\u003Cip\u003E[0-9.]+)\\].+\\[caller:\"(?P\u003Ccaller\u003E.+)\"\\]'"}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"level"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"logid"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"sn"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"ip"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"caller"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"timestamp"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"source"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" timestamp\n          "},{type:b,tag:c,props:{className:[d,h,i]},children:[{type:a,value:"format"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" RFC3339\n"}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:aG}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"加有日志文件的文件夹挂载到容器内的\u002Flog里。"}]},{type:a,value:f},{type:b,tag:K,props:{className:[L]},children:[{type:b,tag:M,props:{className:[N,U]},children:[{type:b,tag:s,props:{},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:V}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:W}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ad}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:H}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:ag}]},{type:a,value:" promtail "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:X}]},{type:a,value:" log:\u002Flog "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:X}]},{type:a,value:" \u002Fconfig.yml:\u002Fconfig.yml "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n  grafana\u002Fpromtail "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,p,o]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:H}]},{type:a,value:"\u002Fconfig.yml\n"}]}]}]},{type:a,value:f},{type:b,tag:F,props:{id:aL},children:[{type:b,tag:n,props:{href:"#%E6%9F%A5%E8%AF%A2",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aL}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"在grafana的左边菜单里找到"},{type:b,tag:s,props:{},children:[{type:a,value:"Configuration"}]},{type:a,value:"，在配置里添加数据源。\n按理数据源的列表有loki可以选。URL填上"},{type:b,tag:s,props:{},children:[{type:a,value:"http:\u002F\u002F127.0.0.1:3100\u002Floki"}]},{type:a,value:"。有账号密码就在"},{type:b,tag:s,props:{},children:[{type:a,value:"Basic auth"}]},{type:a,value:"里填一下。保存测试。"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"左侧菜单里去到"},{type:b,tag:s,props:{},children:[{type:a,value:"Explore"}]},{type:a,value:"，点一下"},{type:b,tag:s,props:{},children:[{type:a,value:"Log browser"}]},{type:a,value:"，正常的话就有日志文件和任务名称可以选。\n所谓的任务名称，是promtail配置里的"},{type:b,tag:s,props:{},children:[{type:a,value:"scrape_configs.static_configs.labels.job"}]},{type:a,value:"那一项。"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"查询logid："},{type:b,tag:s,props:{},children:[{type:a,value:"{job=\"log\"} |= \"211016031700537788\""}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:aM}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fgrafana.com\u002Fdocs\u002Floki\u002Flatest\u002Finstallation\u002Fdocker\u002F",rel:[x,y,z],target:A},children:[{type:a,value:"官方安装教程"}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fjoelei.com\u002F2021\u002F06\u002Flightweight-log-system-loki-experience\u002F",rel:[x,y,z],target:A},children:[{type:a,value:"轻量级的日志系统Loki体验"}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fxiaosongs.com\u002Foperation\u002Floki\u002F",rel:[x,y,z],target:A},children:[{type:a,value:"Loki 轻量级日志收集系统"}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fwww.feiyiblog.com\u002F2021\u002F09\u002F16\u002F%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E4%B8%ADLoki%E7%9A%84%E4%BC%98%E5%8C%96\u002F",rel:[x,y,z],target:A},children:[{type:a,value:"生产环境中Loki的优化"}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fwww.yoyoask.com\u002F?p=4436",rel:[x,y,z],target:A},children:[{type:a,value:"Loki、promtail、Grafana、Prometheus日志监控安装与配置"}]}]},{type:a,value:f}]}]},excerpt:{type:T,children:[{type:b,tag:j,props:{},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:aq}]},{type:a,value:f}]}]},dir:aN,path:"\u002F折腾\u002F20220116\u002Fgrafana+loki+promtail搭建轻量日志系统",extension:aO,title:al,url:"\u002Fblog-code\u002Fview\u002F折腾\u002F20220116\u002Fgrafana+loki+promtail搭建轻量日志系统\u002F",createAt:new Date(1642291200000),updateAt:new Date(1642291200000),attributes:[{name:aP,value:aQ},{name:aR,value:aQ},{name:aS,value:aN,url:"\u002Fblog-code\u002Fpage\u002F折腾\u002F20220116\u002F1\u002F"}]},{slug:aT,description:ai,createdAt:"2022-03-04T00:00:00.000Z",updatedAt:"2022-03-07T00:00:00.000Z",toc:[{id:aU,depth:O,text:aV},{id:Z,depth:O,text:Z},{id:aW,depth:O,text:aX},{id:aY,depth:3,text:aZ},{id:_,depth:O,text:_},{id:$,depth:O,text:$},{id:a_,depth:O,text:a$}],body:{type:T,children:[{type:b,tag:j,props:{},children:[{type:a,value:ai}]},{type:a,value:f},{type:a,value:f},{type:b,tag:F,props:{id:"lsm树的实现"},children:[{type:b,tag:n,props:{href:"#lsm%E6%A0%91%E7%9A%84%E5%AE%9E%E7%8E%B0",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"LSM树的实现"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"RocksDB的LSM树的存储结构有三种：WAL+mentable+SSTable"}]},{type:a,value:f},{type:b,tag:P,props:{id:aU},children:[{type:b,tag:n,props:{href:"#wal",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aV}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"WAL(write-ahead log)(预写式日志)，WAL本质是一个追加写入的硬盘文件，是数据库技术中实现事务的一种标准方法，可以实现单机事务的原子性和持久性，同时提高写入的性能。\n在修改数据时为了实现事务的原子性和持久性，并不会直接修改数据文件，因为一个事务中可能会随机修改多个字段，导致需要修改数据文件的位置也是随机的。\n一是随机IO会影响性能，二是多次的随机IO写入显然无法保证原子性。\n而使用WAL的话，并不会直接去修改数据文件，而是把数据修改的情况都写入WAL里。往WAL里写入的类型有两种，redo执行写操作，undo回滚写操作。\n接下来可能会有五种情况："}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"往WAL写入redo前崩溃了，重启后WAL并没有相关日志：事务无执行，数据文件无影响"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"往WAL写入redo时崩溃了，重启后WAL的日志并不完整：事务取消执行，数据文件无影响"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"往WAL写入redo后崩溃了，重启后WAL的日志写入完整：从WAL中读出所需修改的数据，修改数据文件"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"修改数据文件时崩溃了：从WAL中读出所需修改的数据，继续修改数据文件"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"修改数据文件无法进行：往WAL里写入undo，回滚写操作，事务执行失败"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"使用WAL支持并发读读和读写，由于都是追加写入，不支持并发写写。\n如果需要读最新的数据，则需要往WAL里查询。如果WAL没查到，那数据文件里的就是最新的数据。\n需要注意，写入WAL与修改数据文件并不一定是同步的。往往会合并WAL多个写操作，批量刷入硬盘里。"}]},{type:a,value:f},{type:b,tag:P,props:{id:Z},children:[{type:b,tag:n,props:{href:"#mentable",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:Z}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"mentable是RocksDB的内存数据结构，使用跳表实现，分为active memtable和immutable memtable两种。\nRocksDB在写入WAL之后，会把数据写到active mentable里。\n如果active mentable被写满，会新建一个active mentable，旧的会变成immutable memtable，等待被异步刷入硬盘里。"}]},{type:a,value:f},{type:b,tag:P,props:{id:aW},children:[{type:b,tag:n,props:{href:"#sstable",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aX}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"SSTable，SST文件，全称Sorted String Table，是持久化的，不可改的，有序的数据文件。\nSSTable的文件分为多个区域，内部有索引信息能加快数据查询速度。\nmentable被刷到硬盘里的数据去向就是生成SSTable。\nSST文件都属于某一个层，从L0到Ln，层级越小，数据越新。新生成的SST文件首先会在L0层，但每一层的SST文件数量会有限制。在一定的条件下，会对SST文件进行合并。"}]},{type:a,value:f},{type:b,tag:"h3",props:{id:aY},children:[{type:b,tag:n,props:{href:"#compaction",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:aZ}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"由于RocksDB通过增量写写入mentable，而SST文件数据来源于mentable，所以SST文件的数据的冗余的。\n为了减少冗余，会对SST文件进行合并，删除重复或者过期的key。\n而RocksDB默认是使用Level Style Compaction作为合并策略。"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"首先L0的SST文件是从mentable生成的，所以L0的SST文件直接会有重复的key。\n当进行合并时，会选择Ln层的一个文件，与Ln+1的多个文件进行合并，合并相同的key，删除失效key。\n合并后，每一层的SST文件直接都是有顺序的。"}]},{type:a,value:f},{type:b,tag:P,props:{id:_},children:[{type:b,tag:n,props:{href:"#%E8%AF%BB%E6%93%8D%E4%BD%9C",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:ba,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"在active mentable里查询"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"在immutable memtable里查询"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"在L0里查询。由于L0可能有重复key，所以才有遍历查询"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"在Ln里查询，由于Ln没有重复key，所以使用二分法查询"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"如果到Lmax都还查不到，那就是查不到"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:P,props:{id:$},children:[{type:b,tag:n,props:{href:"#%E5%86%99%E6%93%8D%E4%BD%9C",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:$}]},{type:a,value:f},{type:b,tag:ba,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"数据写入active mentable"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"active mentable到达一定大小，会转变成immutable memtable，创建新的active mentable继续提供读写"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"满足一定会把immutable memtable刷为硬盘的SST文件。先写入系统缓存页，再异步写入硬盘，考虑到系统奔溃丢缓存页可能性较低，异步写还是可靠的"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:P,props:{id:a_},children:[{type:b,tag:n,props:{href:"#column-family",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:a$}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"kv存储时需要指定列族(Column Family)，且允许创建多个列族。列族直接使用不同的mentable和SST文件，但是公用一个WAL。\n好处是可以对不同列族的mentable和SST进行不同的配置，提高读写性能。"}]},{type:a,value:f},{type:b,tag:F,props:{id:"lsm树总结"},children:[{type:b,tag:n,props:{href:"#lsm%E6%A0%91%E6%80%BB%E7%BB%93",ariaHidden:r,tabIndex:t},children:[{type:b,tag:c,props:{className:[u,v]},children:[]}]},{type:a,value:"LSM树总结"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"相比于B+树来说，要在B+树写入随机的数据，写入的节点位置是随机的，随机写入影响着B+树的写入性能。\n而LSM树通过使用WAL，mentable和SST文件，将随机写转换为顺序写，大大提高了写入的性能。\n但顺序写的所带来的代价的空间放大，写放大和读放大。"}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"由于SST文件的冗余性，存储空间被放大"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"同样由于冗余性而需要进行合并，每次合并都进行一次写操作，实际是把每次只需写入一次的数据放大操作了多次写"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"LSM树读取数据需要分层读取多次，读取次数的放大会影响读性能"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"空间放大，写放大和读放大三种需要平衡，RocksDB提供了许多配置来进行微调设置。\n跟B+树相比，B+树对事物支持更好，因为B+树能原地更新数据，并且数据只有一份。而LSM树的key在L0里会重复，只有在进行合并的时候才算完成事物。\nLSM树支持O(1)的写，O(n)的读。而B+树的读写都是O(logN)。通常来说，LSM树的写性能由于B+树，B+树的读性能优于LSM树。"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:aM}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fsegmentfault.com\u002Fa\u002F1190000041198407",rel:[x,y,z],target:A},children:[{type:a,value:"从 RocksDB 看 LSM-Tree 算法设计"}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fflynx.dev\u002Frocksdb\u002F",rel:[x,y,z],target:A},children:[{type:a,value:"一个项目的诞生(三)：RocksDB的价值"}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Flessisbetter.site\u002F2020\u002F01\u002F02\u002Fwal-introduction\u002F",rel:[x,y,z],target:A},children:[{type:a,value:"WAL(预写式日志)简介"}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:n,props:{href:"https:\u002F\u002Fcloud.tencent.com\u002Fdeveloper\u002Farticle\u002F1623123",rel:[x,y,z],target:A},children:[{type:a,value:"你常听说的WAL到底是什么"}]}]}]},excerpt:{type:T,children:[{type:b,tag:j,props:{},children:[{type:a,value:ai}]}]},dir:bb,path:"\u002F中间件\u002F20220304\u002FRocksDB初步了解",extension:aO,title:aT,url:"\u002Fblog-code\u002Fview\u002F中间件\u002F20220304\u002FRocksDB初步了解\u002F",createAt:new Date(1646352000000),updateAt:new Date(1646611200000),attributes:[{name:aP,value:"2022-03-04"},{name:aR,value:"2022-03-07"},{name:aS,value:bb,url:"\u002Fblog-code\u002Fpage\u002F中间件\u002F20220304\u002F1\u002F"}]}]}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n",":","key","atrule","p"," ","\n  ","li","a","variable","parameter","\\","true","code",-1,"icon","icon-link","number","nofollow","noopener","noreferrer","_blank","function","\n          ","wide","-","h1","operator","=","\n      ","comment","div","nuxt-content-highlight","pre","line-numbers",2,"h2","ul","\n\n","\n    ","root","language-shell","sudo","docker","-v","important","mentable","读操作","写操作","{","}"," run ","-d","--restart","always ","--name","boolean","RocksDB是一个嵌入式的KV数据库，由Facebook基于levelDB开发。\n多数情况下，看一把RocksDB看做是一个在本地的，数据落盘的，大数据量的Redis，且访问性能高于远端的Redis。\nRocksDB底层使用LSM树实现，但LSM树实际上并不是一棵具体的树，其实是一套存储处理算法。\nLSM树对KV的持久化，保持较高性能的读的基础上，实现了追加写，提供了写入的性能。",10000,"青春猪头-牧之原翔子-江之岛","grafana+loki+promtail搭建轻量日志系统","2022-01-16T00:00:00.000Z","夜深，好困，长话短说。","loki：存储查询日志的服务，对外提供一个http端口","promtail：收集日志，把日志发生到loki里进行管理","grafana：可以通过loki的接口查询日志","预备工作","grafana","-e","assign-left","-p","loki","https:\u002F\u002Fgrafana.com\u002Fdocs\u002Floki\u002Flatest\u002Fconfiguration\u002F","language-yaml","server","http_listen_port","3100","grpc_listen_port","store"," http"," 720h ","安装","-config.file","promtail","https:\u002F\u002Fgrafana.com\u002Fdocs\u002Floki\u002Flatest\u002Fclients\u002Fpromtail\u002Fconfiguration\u002F","labels","查询","参考文章","\u002F折腾\u002F20220116",".md","createAt","2022-01-16","updateAt","sort","RocksDB初步了解","wal","WAL","sstable","SSTable","compaction","Compaction","column-family","Column Family","ol","\u002F中间件\u002F20220304")));