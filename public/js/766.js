"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{8556:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3645),s=n.n(r)()((function(e){return e[1]}));s.push([e.id,"@import url(https://unpkg.com/css.gg/icons/all.css);"]),s.push([e.id,"",""]);const i=s},7766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var r=n(821),s={class:"w-full"},i={class:"py-3 bg-green-700 w-full mb-6"},o={class:"container flex justify-between items-center mx-auto"},a=(0,r._)("img",{src:"/images/lotus.png",class:"mr-3 inline w-8"},null,-1),c=(0,r.Uk)(" Yashil Makon "),u={class:"flex items-center"},l={class:"capitalize text-white flex items-center"},f=(0,r._)("i",{class:"gg-database mr-3"},null,-1),g=[(0,r._)("i",{class:"gg-log-out mr-5"},null,-1),(0,r.Uk)(" Chiqish ")],p={class:"container mx-auto py-2"},m={key:0};var d=n(7757),h=n.n(d),w=n(9669),v=n.n(w);function k(e,t,n,r,s,i,o){try{var a=e[i](o),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,s)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var i=e.apply(t,n);function o(e){k(i,r,s,o,a,"next",e)}function a(e){k(i,r,s,o,a,"throw",e)}o(void 0)}))}}const b={data:function(){return{territories:[]}},mounted:function(){var e=this;return x(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getTerritories();case 1:case"end":return t.stop()}}),t)})))()},methods:{getTerritories:function(){var e=this;return x(h().mark((function t(){var n,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v().get("/api/territories/getforuser");case 2:n=t.sent,r=n.data,e.territories=r,console.log(e.territories);case 6:case"end":return t.stop()}}),t)})))()}}};var _=n(3379),y=n.n(_),z=n(8556),C={insert:"head",singleton:!1};y()(z.Z,C);z.Z.locals;const U=(0,n(3744).Z)(b,[["render",function(e,t,n,d,h,w){var v=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",s,[(0,r._)("header",i,[(0,r._)("main",o,[(0,r.Wm)(v,{to:"/",class:"text-green-100 uppercase font-dancing flex items-center"},{default:(0,r.w5)((function(){return[a,c]})),_:1}),(0,r._)("aside",u,[(0,r._)("div",l,[f,(0,r.Uk)(" "+(0,r.zw)(e.$store.state.user.email),1)]),(0,r._)("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("logout")}),class:"ml-12 p-2 text-white flex items-center bg-green-600 pl-5 pr-3 hover:bg-green-800"},g)])])]),(0,r._)("div",p,[h.territories.length>0?((0,r.wg)(),(0,r.iD)("main",m,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(h.territories,(function(e){return(0,r.wg)(),(0,r.j4)(v,{to:{name:"constructor",params:{id:e.id}},key:e,class:"p-2 bg-blue-300 inline-block text-white"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,r.zw)(e.name)+" ",1),(0,r._)("p",null,(0,r.zw)(e.id),1)]})),_:2},1032,["to"])})),128))])):(0,r.kq)("",!0)])])}]])}}]);