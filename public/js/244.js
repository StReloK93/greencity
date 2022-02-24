"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[244],{1523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=[{name:"olma",color:"#8DA35F"},{name:"behi",color:"#fdeb1c"},{name:"shaftoli",color:"#ba2222"},{name:"qayragoch",color:"#32452E"},{name:"archa",color:"#47BE60"},{name:"gilos",color:"#3E4AAD"},{name:"nok",color:"#CF9D46"},{name:"tut",color:"#EEEDED"},{name:"o'rik",color:"#FFAFAF"},{name:"gujum",color:"#6BD0FF"},{name:"sasna",color:"#000000"},{name:"akatsiya",color:"#fd0b1c"},{name:"yasin",color:"#F3CE56"},{name:"jiyda",color:"#A43481"}]},4214:(e,t,n)=>{n.d(t,{Z:()=>a});const a={loaderFile:function(e){window.onkeyup=function(t){107==t.keyCode&&(store.state.inspector?e.debugLayer.show({embedMode:!0}):e.debugLayer.hide(),store.state.inspector=!store.state.inspector)}}}},6510:(e,t,n)=>{function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.d(t,{Z:()=>r});var r=function(){function e(t){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,a="keysArr",r=[{frame:0,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:40,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()}],a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,this.scene=t}var t,n,r;return t=e,n=[{key:"hover",value:function(e){var t=this;e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOverTrigger},(function(){t.scene.activeMesh!=e&&(e.material=t.scene.getMaterialByName("hover"))}))),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOutTrigger},(function(){t.scene.activeMesh!=e&&(e.material=e.mainmaterial)})))}},{key:"hoverNode",value:function(e){var t=this;e.forEach((function(e){e.mainmaterial=e.material,e.actionManager=new BABYLON.ActionManager(t.scene),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOverTrigger},(function(){var n=!0;t.scene.activeMesh&&e.parent==t.scene.activeMesh&&(n=!1),n&&e.parent._children.forEach((function(e){e.material=t.scene.getMaterialByName("hover")}))}))),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOutTrigger},(function(){var n=!0;t.scene.activeMesh&&e.parent==t.scene.activeMesh&&(n=!1),n&&e.parent._children.forEach((function(e){e.material=e.mainmaterial}))})))}))}},{key:"animate",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.keysArr;this.animation=new BABYLON.Animation("newBlink",e,60,t,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE),this.animation.setKeys(n),this.animationGroup=new BABYLON.AnimationGroup("newBlinkGroup")}},{key:"animatePlay",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&this.animate("material.diffuseColor",BABYLON.Animation.ANIMATIONTYPE_COLOR3),1==a?e.forEach((function(e){e.material=t.scene.getMaterialByName("animated"),t.animationGroup.addTargetedAnimation(t.animation,e)})):(e.material=this.scene.getMaterialByName("animated"),this.animationGroup.addTargetedAnimation(this.animation,e)),this.animationGroup.play(!0)}},{key:"animateStop",value:function(){this.animationGroup.stop(),this.animationGroup.dispose(),this.scene.activeMesh._isMesh?this.scene.activeMesh.material=this.scene.activeMesh.mainmaterial:this.scene.activeMesh._children.forEach((function(e){e.material=e.mainmaterial}))}}],n&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},147:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(1523);function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=i((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=new BABYLON.StandardMaterial("building",t);n.diffuseColor=new BABYLON.Color3.FromHexString("#EFDC9A"),n.specularColor=new BABYLON.Color3(0,0,0);var r=new BABYLON.StandardMaterial("green",t);r.diffuseColor=new BABYLON.Color3.FromHexString("#79FFAD"),r.specularColor=new BABYLON.Color3(0,0,0);var i=new BABYLON.StandardMaterial("ground",t);i.diffuseColor=new BABYLON.Color3(1,1,1),i.specularColor=new BABYLON.Color3(0,0,0);var o=new BABYLON.StandardMaterial("hover",t);o.diffuseColor=BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace(),o.specularColor=new BABYLON.Color3(0,0,0),a.Z.forEach((function(e){new BABYLON.StandardMaterial(e.name,t).diffuseColor=BABYLON.Color3.FromHexString(e.color).toLinearSpace()}));var s=new BABYLON.StandardMaterial("BluePoints",this.scene);s.diffuseColor=BABYLON.Color3.FromHexString("#3268D1"),s.specularColor=new BABYLON.Color3(0,0,0),new BABYLON.StandardMaterial("animated",this.scene).specularColor=new BABYLON.Color3(0,0,0)}))},8727:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(3645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,".btns{position:relative;top:1px;transform:scale(-1)}.fades-enter-active,.fades-leave-active{transition:1s ease}.fades-enter-from,.fades-leave-to{opacity:0;transform:scaleX(0);width:0}.easy-transition{transition:.5s}.left-ang{left:-50px}.left-ang,.right-ang{top:50%;transform:translateY(-50%)}.right-ang{right:-50px}",""]);const i=r},6889:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(821),r={class:"fixed top-0 right-16 mx-2 my-4"},i={key:0,class:"flex"},o={key:0,class:"custom-btn",href:"/territories"},s=[(0,a.Uk)(" Uchastkalar "),(0,a._)("i",{class:"gg-clapper-board ml-3"},null,-1)],c=[(0,a.Uk)(" Chiqish "),(0,a._)("i",{class:"gg-log-out ml-3 mr-1"},null,-1)],l={key:1,class:"flex"},u=(0,a.Uk)(" Kirish "),f=(0,a._)("i",{class:"gg-log-in ml-5 mr-0"},null,-1);const h={},m=(0,n(3744).Z)(h,[["render",function(e,t){var n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("main",r,[e.$store.state.user?((0,a.wg)(),(0,a.iD)("div",i,["territories"!=e.$route.name?((0,a.wg)(),(0,a.iD)("a",o,s)):(0,a.kq)("",!0),(0,a._)("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("logout")}),class:"custom-btn ml-4"},c)])):((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(n,{class:"custom-btn",to:"/login"},{default:(0,a.w5)((function(){return[u,f]})),_:1})]))])}]])},8244:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var a=n(821),r={class:"fixed flex top-0 left-16 m-4 items-center"},i=[(0,a._)("i",{class:"gg-chevron-left mr-3"},null,-1),(0,a.Uk)(" Orqaga ")],o={key:0,class:"font-medium text-xl ml-10 text-gray-600"},s={class:"h-full w-full border-transparent",ref:"BuilderCanvas"};var c=n(7757),l=n.n(c);function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=t,this.createScene()}var t,n,a;return t=e,(n=[{key:"createScene",value:function(){var e=this,t=new BABYLON.Engine(this.canvas,!0);t.enableOfflineSupport=!1,this.scene=new BABYLON.Scene(t),this.scene.clearColor=new BABYLON.Color3(.8,.8,.8,1),this.scene.autoClear=!1,this.scene.autoClearDepthAndStencil=!1,t.runRenderLoop((function(){e.scene.render()})),window.addEventListener("resize",(function(){t.resize()}))}}])&&u(t.prototype,n),a&&u(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createLight()}var t,n,a;return t=e,(n=[{key:"createLight",value:function(){this.light=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(1,1,0))}}])&&h(t.prototype,n),a&&h(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),p=n(9669),g=n.n(p),d=n(1962),v=n(6510);function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var y=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.Import(),t.onDataLoadedObservable.add((function(){n.hideMeshes(["plant","house"])}))}var t,n,a;return t=e,(n=[{key:"Import",value:function(){BABYLON.SceneLoader.AppendAsync("/models/assets.glb",void 0,this.scene,(function(e){e.lengthComputable&&(e.loaded,e.total)}),".glb")}},{key:"hideMeshes",value:function(e){var t=this;e.forEach((function(e){var n=t.scene.getNodeByName(e);n.setAbsolutePosition(4e4,n.position.y,4e4)}))}}])&&w(t.prototype,n),a&&w(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function B(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){b(i,a,r,o,s,"next",e)}function s(e){b(i,a,r,o,s,"throw",e)}o(void 0)}))}}function A(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.actions=new v.Z(t),this.pickidMesh(),new y(t)}var t,n,a,r,i;return t=e,n=[{key:"createMesh",value:function(e){if(!this.scene.getNodeByName(e.name)){var t=[];JSON.parse(e.points).forEach((function(e){t.push(new BABYLON.Vector3(e.x,e.y,e.z))}));var n=BABYLON.MeshBuilder.ExtrudePolygon(e.name,{shape:t,depth:5,wrap:!0},this.scene);n.scaling=new BABYLON.Vector3(1,1,-1),n.material=this.scene.getMaterialByName("building"),n.material.sideOrientation=2,n.material.backFaceCulling=!1,n.mainmaterial=this.scene.getMaterialByName("building"),n.position.y=.01,n.position.x=4e4,n.position.z=4e4,n.rotation.x=Math.PI}}},{key:"getMeshes",value:(i=B(l().mark((function e(t){var n=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().get("/api/getallfinal/".concat(t));case 2:e.sent.data.forEach((function(e){var t=JSON.parse(e.position),a=n.scene.getNodeByName(e.parentname).clone(e.name);a.setAbsolutePosition(t._x,t._y,t._z),a.hovered=e.hovered,"plant"==e.parentname?a.scaling.y=1:a.scaling.y=e.height,a.actionManager=new BABYLON.ActionManager(n.scene),1==e.hovered?(a.material=n.scene.getMaterialByName("green"),a.mainmaterial=n.scene.getMaterialByName("green"),n.actions.hover(a)):(a.material=n.scene.getMaterialByName(e.materialname),a.mainmaterial=n.scene.getMaterialByName(e.materialname))}));case 4:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},{key:"pickidMesh",value:function(){var e=this;this.scene.onPointerPick=function(t,n){var a=n.pickedMesh;a&&1==a.hovered&&e.getImages(a.name)}}},{key:"getImages",value:(r=B(l().mark((function e(t){var n,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().post("/api/getimages",{name:t});case 2:n=e.sent,a=n.data,d.Z.state.images=a;case 5:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}],n&&A(t.prototype,n),a&&A(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var O=function(){function e(t){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,a="camera",r=new BABYLON.ArcRotateCamera("camera",-1.871,.43,160,new BABYLON.Vector3(0,0,0)),a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,this.canvas=t,this.createCamera(),this.limits()}var t,n,a;return t=e,(n=[{key:"createCamera",value:function(){var e=this;this.camera.attachControl(this.canvas,!0),this.camera.minZ=0,this.camera.onViewMatrixChangedObservable.add((function(){e.orthographic()})),window.addEventListener("resize",(function(){e.orthographic()}))}},{key:"orthographic",value:function(){var e=this.canvas.width/this.canvas.height;this.camera.orthoTop=this.camera.radius/e,this.camera.orthoBottom=-this.camera.radius/e,this.camera.orthoLeft=-this.camera.radius,this.camera.orthoRight=this.camera.radius}},{key:"limits",value:function(){this.camera.useBouncingBehavior=!0,this.camera.lowerRadiusLimit=25,this.camera.upperRadiusLimit=240,this.camera.lowerBetaLimit=0,this.camera.upperBetaLimit=Math.PI/2.5,this.camera.inputs.attached.keyboard.detachControl(),this.camera.inputs.attached.pointers.buttons=[1,2]}}])&&k(t.prototype,n),a&&k(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=n(147);var L=n(4214),N=n(6889),M={class:"absolute bottom-0 right-2 p-2 bg-gray-200 font-medium text-gray-700"},Y={class:"bg-white h-96"},E=["src"],P=[(0,a._)("img",{src:"/images/close.png",class:"imgwhite w-4"},null,-1)],_=(0,a._)("div",{class:"h-96 text-4xl flex items-center justify-center font-bold uppercase text-gray-300"}," Rasm kiritilmagan ",-1),F=[(0,a._)("img",{src:"/images/close.png",class:"imgwhite w-4"},null,-1)];var S={class:"flex justify-between items-center relative"},j=[(0,a._)("img",{src:"/images/leftang.png",class:"w-2/3 btns"},null,-1)],D={class:"overflow-hidden flex-grow"},T=[(0,a._)("img",{src:"/images/leftang.png",class:"w-2/3"},null,-1)];const Z={props:["itemCount"],data:function(){return{prosent:0,endItem:null,slots:null}},computed:{transform:function(){return{transform:"translateX(".concat(this.prosent,"%)")}},casr:function(){var e=this.$refs.mainBlock.children.length;return e%this.itemCount==0?0:this.itemCount-e%this.itemCount}},mounted:function(){this.slots=this.$refs.mainBlock.children.length;var e=this.$refs.mainBlock.children.length-this.itemCount,t=this.itemCount;this.endItem=100*-e/t},methods:{next:function(){this.endItem<this.prosent&&(console.log(this.endItem,this.prosent),this.prosent-=(100/this.itemCount).toFixed(2),Math.abs(this.prosent.toFixed(2))>99&&(this.prosent=-Math.ceil(Math.abs(this.prosent.toFixed(2)))))},prev:function(){this.prosent<0&&(this.prosent+=100/this.itemCount,this.prosent=+this.prosent.toFixed(2),this.prosent<0&&this.prosent>-1&&(this.prosent=0))}}};var $=n(3379),I=n.n($),z=n(8727),H={insert:"head",singleton:!1};I()(z.Z,H);z.Z.locals;var q=n(3744);const G={components:{Carusel:(0,q.Z)(Z,[["render",function(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("section",S,[(0,a.Wm)(a.uT,{name:"fades",mode:"out-in"},{default:(0,a.w5)((function(){return[0!=i.prosent?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[0]||(t[0]=function(){return o.prev&&o.prev.apply(o,arguments)}),class:"absolute left-ang w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"},j)):(0,a.kq)("",!0)]})),_:1}),(0,a._)("aside",D,[(0,a._)("main",{ref:"mainBlock",style:(0,a.j5)(o.transform),class:(0,a.C_)([{"-ml-2":0==i.prosent},"whitespace-nowrap easy-transition"])},[(0,a.WI)(e.$slots,"default")],6)]),(0,a.Wm)(a.uT,{name:"fades",mode:"out-in"},{default:(0,a.w5)((function(){return[i.prosent!=i.endItem&&i.slots>n.itemCount?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[1]||(t[1]=function(){return o.next&&o.next.apply(o,arguments)}),class:"absolute right-ang w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"},T)):(0,a.kq)("",!0)]})),_:1})])}]])},mounted:function(){console.log(this.$store.state.images)}};function R(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function V(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){R(i,a,r,o,s,"next",e)}function s(e){R(i,a,r,o,s,"throw",e)}o(void 0)}))}}const W={props:["id"],data:function(){return{territory:null}},mounted:function(){var e=this;return V(l().mark((function t(){var n,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.Engine=(r=e.$refs.BuilderCanvas,i=void 0,o=void 0,s=void 0,c=void 0,i=new f(r),o=new O(r),s=new C(i.scene),c=new m,new x.Z(i.scene),{Scene:i,Camera:o,Light:c,Meshes:s}),L.Z.loaderFile(e.Engine.Scene.scene),e.Engine.Scene.scene.onReadyObservable.add(V(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getParents();case 2:return t.next=4,e.getActive();case 4:case"end":return t.stop()}}),t)})))),t.next=5,axios.get("/api/territories/get/".concat(e.id));case 5:n=t.sent,a=n.data,e.territory=a;case 8:case"end":return t.stop()}var r,i,o,s,c}),t)})))()},methods:{getParents:function(){var e=this;return V(l().mark((function t(){var n,a,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.customMeshes=[],t.next=3,axios.get("/api/getparents/".concat(e.id));case 3:n=t.sent,a=n.data,r=e.Engine.Meshes,a.forEach((function(t){r.createMesh(t),e.customMeshes.push({clientname:t.clientname,name:t.name})}));case 7:case"end":return t.stop()}}),t)})))()},getActive:function(){var e=this;return V(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.Engine.Meshes.getMeshes(e.id);case 2:case"end":return t.stop()}}),t)})))()}},components:{ImageViewer:(0,q.Z)(G,[["render",function(e,t,n,r,i,o){var s=(0,a.up)("Carusel");return(0,a.wg)(),(0,a.j4)(a.uT,{name:"fade"},{default:(0,a.w5)((function(){return[e.$store.state.images&&e.$store.state.images.length>0?((0,a.wg)(),(0,a.iD)("main",{key:0,onClick:t[2]||(t[2]=function(t){return e.$store.state.images=null}),class:"fixed flex items-center top-0 left-0 bg-black bg-opacity-60 w-full h-full z-50"},[(0,a._)("div",{class:"px-20 py-8 bg-black bg-opacity-30 shadow w-full",onClick:t[1]||(t[1]=(0,a.iM)((function(){}),["stop"]))},[(0,a.Wm)(s,{class:"w-full",itemCount:3},{default:(0,a.w5)((function(){return[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$store.state.images,(function(e){return(0,a.wg)(),(0,a.iD)("main",{key:e,class:"inline-block relative w-1/3 px-2"},[(0,a._)("span",M,(0,a.zw)(e.created),1),(0,a._)("div",Y,[(0,a._)("img",{src:e.img,class:"object-cover w-full h-full border-2 border-gray-200"},null,8,E)])])})),128))]})),_:1}),(0,a._)("button",{onClick:t[0]||(t[0]=function(t){return e.$store.state.images=null}),class:"absolute flex items-center justify-center top-0 right-0 bg-red-700 p-2 px-4 m-3 shadow-xl hover:bg-red-500"},P)])])):e.$store.state.images&&0==e.$store.state.images.length?((0,a.wg)(),(0,a.iD)("main",{key:1,onClick:t[5]||(t[5]=function(t){return e.$store.state.images=null}),class:"fixed flex items-center top-0 left-0 bg-black bg-opacity-60 w-full h-full z-50"},[(0,a._)("div",{class:"px-20 py-8 bg-black bg-opacity-30 shadow w-full",onClick:t[4]||(t[4]=(0,a.iM)((function(){}),["stop"]))},[_,(0,a._)("button",{onClick:t[3]||(t[3]=function(t){return e.$store.state.images=null}),class:"absolute flex items-center justify-center top-0 right-0 bg-red-700 p-2 px-4 m-3 shadow-xl hover:bg-red-500"},F)])])):(0,a.kq)("",!0)]})),_:1})}]]),Authentication:N.Z}},U=(0,q.Z)(W,[["render",function(e,t,n,c,l,u){var f=(0,a.up)("ImageViewer"),h=(0,a.up)("Authentication");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f),(0,a._)("main",r,[(0,a._)("button",{onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)}),class:"custom-btn pl-2",to:"/"},i),l.territory?((0,a.wg)(),(0,a.iD)("span",o,(0,a.zw)(l.territory.name),1)):(0,a.kq)("",!0)]),(0,a.Wm)(h),(0,a._)("canvas",s,null,512)],64)}]])}}]);