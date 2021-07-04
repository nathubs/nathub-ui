(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{361:function(t,s,_){"use strict";_.r(s);var e=_(40),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,_=t._self._c||s;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"增强功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#增强功能"}},[t._v("#")]),t._v(" 增强功能")]),t._v(" "),_("h2",{attrs:{id:"使用https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用https"}},[t._v("#")]),t._v(" 使用https")]),t._v(" "),_("p",[_("strong",[t._v("方式一：")]),t._v(" 类似于nginx实现https的处理")]),t._v(" "),_("p",[t._v("在配置文件中将https_proxy_port设置为443或者其他你想配置的端口，和在web中对应域名编辑中设置对应的证书路径，将"),_("code",[t._v("https_just_proxy")]),t._v("设置为false，然后就和http代理一样了")]),t._v(" "),_("p",[_("strong",[t._v("此外：")]),t._v(" 可以在"),_("code",[t._v("nps.conf")]),t._v("中设置一个默认的https配置，当遇到未在web中设置https证书的域名解析时，将自动使用默认证书，另还有一种情况就是对于某些请求的clienthello不携带sni扩展信息，nps也将自动使用默认证书")]),t._v(" "),_("p",[_("strong",[t._v("方式二：")]),t._v(" 在内网对应服务器上设置https")]),t._v(" "),_("p",[t._v("在"),_("code",[t._v("nps.conf")]),t._v("中将"),_("code",[t._v("https_just_proxy")]),t._v("设置为true，并且打开"),_("code",[t._v("https_proxy_port")]),t._v("端口，然后nps将直接转发https请求到内网服务器上，由内网服务器进行https处理")]),t._v(" "),_("h2",{attrs:{id:"与nginx配合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与nginx配合"}},[t._v("#")]),t._v(" 与nginx配合")]),t._v(" "),_("p",[t._v("有时候我们还需要在云服务器上运行nginx来保证静态文件缓存等，本代理可和nginx配合使用，在配置文件中将httpProxyPort设置为非80端口，并在nginx中配置代理，例如httpProxyPort为8010时")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("server {\n    listen 80;\n    server_name *.proxy.com;\n    location / {\n        proxy_set_header Host  $http_host;\n        proxy_pass http://127.0.0.1:8010;\n    }\n}\n")])])]),_("p",[t._v("如需使用https也可在nginx监听443端口并配置ssl，并将本代理的httpsProxyPort设置为空关闭https即可，例如httpProxyPort为8020时")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("server {\n    listen 443;\n    server_name *.proxy.com;\n    ssl on;\n    ssl_certificate  certificate.crt;\n    ssl_certificate_key private.key;\n    ssl_session_timeout 5m;\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n    ssl_prefer_server_ciphers on;\n    location / {\n        proxy_set_header Host  $http_host;\n        proxy_pass http://127.0.0.1:8020;\n    }\n}\n")])])]),_("h2",{attrs:{id:"web管理使用https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web管理使用https"}},[t._v("#")]),t._v(" web管理使用https")]),t._v(" "),_("p",[t._v("如果web管理需要使用https，可以在配置文件"),_("code",[t._v("nps.conf")]),t._v("中设置"),_("code",[t._v("web_open_ssl=true")]),t._v("，并配置"),_("code",[t._v("web_cert_file")]),t._v("和"),_("code",[t._v("web_key_file")])]),t._v(" "),_("h2",{attrs:{id:"web使用caddy代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web使用caddy代理"}},[t._v("#")]),t._v(" web使用Caddy代理")]),t._v(" "),_("p",[t._v("如果将web配置到Caddy代理,实现子路径访问nps,可以这样配置.")]),t._v(" "),_("p",[t._v("假设我们想通过 "),_("code",[t._v("http://caddy_ip:caddy_port/nps")]),t._v(" 来访问后台, Caddyfile 这样配置:")]),t._v(" "),_("div",{staticClass:"language-Caddyfile extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("caddy_ip:caddy_port/nps {\n  ##server_ip 为 nps 服务器IP\n  ##web_port 为 nps 后台端口\n  proxy / http://server_ip:web_port/nps {\n\ttransparent\n  }\n}\n")])])]),_("p",[t._v("nps.conf 修改 "),_("code",[t._v("web_base_url")]),t._v(" 为 "),_("code",[t._v("/nps")]),t._v(" 即可")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("web_base_url=/nps\n")])])]),_("h2",{attrs:{id:"关闭代理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关闭代理"}},[t._v("#")]),t._v(" 关闭代理")]),t._v(" "),_("p",[t._v("如需关闭http代理可在配置文件中将http_proxy_port设置为空，如需关闭https代理可在配置文件中将https_proxy_port设置为空。")]),t._v(" "),_("h2",{attrs:{id:"流量数据持久化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#流量数据持久化"}},[t._v("#")]),t._v(" 流量数据持久化")]),t._v(" "),_("p",[t._v("服务端支持将流量数据持久化，默认情况下是关闭的，如果有需求可以设置"),_("code",[t._v("nps.conf")]),t._v("中的"),_("code",[t._v("flow_store_interval")]),t._v("参数，单位为分钟")]),t._v(" "),_("p",[_("strong",[t._v("注意：")]),t._v(" nps不会持久化通过公钥连接的客户端")]),t._v(" "),_("h2",{attrs:{id:"系统信息显示"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#系统信息显示"}},[t._v("#")]),t._v(" 系统信息显示")]),t._v(" "),_("p",[t._v("nps服务端支持在web上显示和统计服务器的相关信息，但默认一些统计图表是关闭的，如需开启请在"),_("code",[t._v("nps.conf")]),t._v("中设置"),_("code",[t._v("system_info_display=true")])]),t._v(" "),_("h2",{attrs:{id:"自定义客户端连接密钥"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义客户端连接密钥"}},[t._v("#")]),t._v(" 自定义客户端连接密钥")]),t._v(" "),_("p",[t._v("web上可以自定义客户端连接的密钥，但是必须具有唯一性")]),t._v(" "),_("h2",{attrs:{id:"关闭公钥访问"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关闭公钥访问"}},[t._v("#")]),t._v(" 关闭公钥访问")]),t._v(" "),_("p",[t._v("可以将"),_("code",[t._v("nps.conf")]),t._v("中的"),_("code",[t._v("public_vkey")]),t._v("设置为空或者删除")]),t._v(" "),_("h2",{attrs:{id:"关闭web管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关闭web管理"}},[t._v("#")]),t._v(" 关闭web管理")]),t._v(" "),_("p",[t._v("可以将"),_("code",[t._v("nps.conf")]),t._v("中的"),_("code",[t._v("web_port")]),t._v("设置为空或者删除")]),t._v(" "),_("h2",{attrs:{id:"服务端多用户登陆"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务端多用户登陆"}},[t._v("#")]),t._v(" 服务端多用户登陆")]),t._v(" "),_("p",[t._v("如果将"),_("code",[t._v("nps.conf")]),t._v("中的"),_("code",[t._v("allow_user_login")]),t._v("设置为true,服务端web将支持多用户登陆，登陆用户名为user，默认密码为每个客户端的验证密钥，登陆后可以进入客户端编辑修改web登陆的用户名和密码，默认该功能是关闭的。")]),t._v(" "),_("h2",{attrs:{id:"用户注册功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用户注册功能"}},[t._v("#")]),t._v(" 用户注册功能")]),t._v(" "),_("p",[t._v("nps服务端支持用户注册功能，可将"),_("code",[t._v("nps.conf")]),t._v("中的"),_("code",[t._v("allow_user_register")]),t._v("设置为true，开启后登陆页将会有有注册功能，")]),t._v(" "),_("h2",{attrs:{id:"监听指定ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#监听指定ip"}},[t._v("#")]),t._v(" 监听指定ip")]),t._v(" "),_("p",[t._v("nps支持每个隧道监听不同的服务端端口,在"),_("code",[t._v("nps.conf")]),t._v("中设置"),_("code",[t._v("allow_multi_ip=true")]),t._v("后，可在web中控制，或者npc配置文件中(可忽略，默认为0.0.0.0)")]),t._v(" "),_("div",{staticClass:"language-ini extra-class"},[_("pre",{pre:!0,attrs:{class:"language-ini"}},[_("code",[_("span",{pre:!0,attrs:{class:"token constant"}},[t._v("server_ip")]),_("span",{pre:!0,attrs:{class:"token attr-value"}},[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("xxx")]),t._v("\n")])])]),_("h2",{attrs:{id:"代理到服务端本地"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代理到服务端本地"}},[t._v("#")]),t._v(" 代理到服务端本地")]),t._v(" "),_("p",[t._v("在使用nps监听80或者443端口时，默认是将所有的请求都会转发到内网上，但有时候我们的nps服务器的上一些服务也需要使用这两个端口，nps提供类似于"),_("code",[t._v("nginx")]),t._v(" "),_("code",[t._v("proxy_pass")]),t._v(" 的功能，支持将代理到服务器本地，该功能支持域名解析，tcp、udp隧道，默认关闭。")]),t._v(" "),_("p",[_("strong",[t._v("即：")]),t._v(" 假设在nps的vps服务器上有一个服务使用5000端口，这时候nps占用了80端口和443，我们想能使用一个域名通过http(s)访问到5000的服务。")]),t._v(" "),_("p",[_("strong",[t._v("使用方式：")]),t._v(" 在"),_("code",[t._v("nps.conf")]),t._v("中设置"),_("code",[t._v("allow_local_proxy=true")]),t._v("，然后在web上设置想转发的隧道或者域名然后选择转发到本地选项即可成功。")])])}),[],!1,null,null,null);s.default=a.exports}}]);