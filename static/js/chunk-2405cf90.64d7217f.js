(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2405cf90"],{"1a50":function(t,e,i){"use strict";var s=i("ce79"),c=i.n(s);c.a},"3f9a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("exception-page",{style:"min-height: "+t.minHeight,attrs:{"home-route":"/demo",type:"403"}})},c=[],a=i("5530"),n=i("7832"),o=i("5880"),p={name:"Exp403",components:{ExceptionPage:n["a"]},computed:Object(a["a"])(Object(a["a"])({},Object(o["mapState"])("setting",["pageMinHeight"])),{},{minHeight:function(){return this.pageMinHeight?this.pageMinHeight+"px":"100vh"}})},r=p,m=i("0c7c"),g=Object(m["a"])(r,s,c,!1,null,"36919bde",null);e["default"]=g.exports},7832:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exception-page"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:t.config[t.type].img}})]),i("div",{staticClass:"content"},[i("h1",[t._v(t._s(t.config[t.type].title))]),i("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),i("div",{staticClass:"action"},[i("a-button",{attrs:{type:"primary"},on:{click:t.backHome}},[t._v("返回首页")])],1)])])},c=[],a={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}},n=a,o={name:"ExceptionPage",props:["type","homeRoute"],data:function(){return{config:n}},methods:{backHome:function(){this.homeRoute&&this.$router.push(this.homeRoute),this.$emit("backHome",this.type)}}},p=o,r=(i("1a50"),i("0c7c")),m=Object(r["a"])(p,s,c,!1,null,"206e07da",null);e["a"]=m.exports},ce79:function(t,e,i){}}]);