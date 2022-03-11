"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[496],{4214:(e,t,n)=>{n.d(t,{Z:()=>a});const a={loaderFile:function(e){window.onkeyup=function(t){107==t.keyCode&&(store.state.inspector?e.debugLayer.show({embedMode:!0}):e.debugLayer.hide(),store.state.inspector=!store.state.inspector)}}}},6510:(e,t,n)=>{function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.d(t,{Z:()=>r});var r=function(){function e(t){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,a="keysArr",r=[{frame:0,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:40,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()}],a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,this.scene=t}var t,n,r;return t=e,n=[{key:"hover",value:function(e){var t=this;e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOverTrigger},(function(){t.scene.activeMesh!=e&&(e.material=t.scene.getMaterialByName("hover"))}))),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOutTrigger},(function(){t.scene.activeMesh!=e&&(e.material=e.mainmaterial)})))}},{key:"hoverNode",value:function(e){var t=this;e.forEach((function(e){e.mainmaterial=e.material,e.actionManager=new BABYLON.ActionManager(t.scene),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOverTrigger},(function(){var n=!0;t.scene.activeMesh&&e.parent==t.scene.activeMesh&&(n=!1),n&&e.parent._children.forEach((function(e){e.material=t.scene.getMaterialByName("hover")}))}))),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOutTrigger},(function(){var n=!0;t.scene.activeMesh&&e.parent==t.scene.activeMesh&&(n=!1),n&&e.parent._children.forEach((function(e){e.material=e.mainmaterial}))})))}))}},{key:"animate",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.keysArr;this.animation=new BABYLON.Animation("newBlink",e,60,t,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE),this.animation.setKeys(n),this.animationGroup=new BABYLON.AnimationGroup("newBlinkGroup")}},{key:"animatePlay",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&this.animate("material.diffuseColor",BABYLON.Animation.ANIMATIONTYPE_COLOR3),1==a?e.forEach((function(e){e.material=t.scene.getMaterialByName("animated"),t.animationGroup.addTargetedAnimation(t.animation,e)})):(e.material=this.scene.getMaterialByName("animated"),this.animationGroup.addTargetedAnimation(this.animation,e)),this.animationGroup.play(!0)}},{key:"animateStop",value:function(){this.animationGroup.stop(),this.animationGroup.dispose(),this.scene.activeMesh._isMesh?this.scene.activeMesh.material=this.scene.activeMesh.mainmaterial:this.scene.activeMesh._children.forEach((function(e){e.material=e.mainmaterial}))}}],n&&a(t.prototype,n),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},7912:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(3645),r=n.n(a)()((function(e){return e[1]}));r.push([e.id,".text-holo[data-v-0877b2eb]{color:#a5e6ff}.lift-enter-active[data-v-0877b2eb],.lift-leave-active[data-v-0877b2eb]{opacity:1;transform:translateX(0);transition:.3s}.lift-enter-from[data-v-0877b2eb],.lift-leave-to[data-v-0877b2eb]{opacity:0;transform:translateX(-100%)}",""]);const i=r},6889:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(821),r={class:"fixed top-0 right-16 mx-2 my-4"},i={key:0,class:"flex"},o={key:0,class:"custom-btn",href:"/territories"},s=[(0,a.Uk)(" Uchastkalar "),(0,a._)("i",{class:"gg-clapper-board ml-3"},null,-1)],c=[(0,a.Uk)(" Chiqish "),(0,a._)("i",{class:"gg-log-out ml-3 mr-1"},null,-1)],l={key:1,class:"flex"},u=(0,a.Uk)(" Kirish "),h=(0,a._)("i",{class:"gg-log-in ml-5 mr-0"},null,-1);const f={},m=(0,n(3744).Z)(f,[["render",function(e,t){var n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("main",r,[e.$store.state.user?((0,a.wg)(),(0,a.iD)("div",i,["territories"!=e.$route.name?((0,a.wg)(),(0,a.iD)("a",o,s)):(0,a.kq)("",!0),(0,a._)("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("logout")}),class:"custom-btn ml-4"},c)])):((0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(n,{class:"custom-btn",to:"/login"},{default:(0,a.w5)((function(){return[u,h]})),_:1})]))])}]])},9898:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(821),r={key:0,class:"fixed top-20 right-2 mr-16 bg-black bg-opacity-25 px-4 py-4 text-gray-200 shadow-inner rounded w-64"},i={class:"flex justify-between items-center mb-4"},o=(0,a._)("span",null," Umumiy daraxtlar ",-1),s={class:"flex justify-between items-center my-4"},c=(0,a._)("span",null," Mevali daraxtlar ",-1),l={class:"flex justify-between items-center mt-4 mb-2"},u=(0,a._)("span",null," Manzarali daraxtlar ",-1);var h=n(7757),f=n.n(h);function m(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}const d={props:["path"],data:function(){return{information:null}},mounted:function(){var e,t=this;return(e=f().mark((function e(){var n,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(t.path);case 2:n=e.sent,a=n.data,t.information=a;case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){m(i,a,r,o,s,"next",e)}function s(e){m(i,a,r,o,s,"throw",e)}o(void 0)}))})()}};const v=(0,n(3744).Z)(d,[["render",function(e,t,n,h,f,m){return f.information?((0,a.wg)(),(0,a.iD)("section",r,[(0,a._)("div",i,[o,(0,a._)("span",null,(0,a.zw)(f.information.all)+" ta ",1)]),(0,a._)("div",s,[c,(0,a._)("span",null,(0,a.zw)(f.information.mevali)+" ta ",1)]),(0,a._)("div",l,[u,(0,a._)("span",null,(0,a.zw)(f.information.manzarali)+" ta ",1)])])):(0,a.kq)("",!0)}]])},9496:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var a=n(821),r={class:"h-full w-full border-transparent",ref:"BuilderCanvas"};function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=t,this.createScene()}var t,n,a;return t=e,(n=[{key:"createScene",value:function(){var e=this,t=new BABYLON.Engine(this.canvas,!0);this.scene=new BABYLON.Scene(t),this.scene.ambientColor=new BABYLON.Color3(1,1,1),this.scene.clearColor=new BABYLON.Color3(.8,.8,.8,1),t.runRenderLoop((function(){e.scene.render()})),window.addEventListener("resize",(function(){t.resize()}))}}])&&i(t.prototype,n),a&&i(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var l=c((function e(){var t,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n="light",a=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(1,1,0)),n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,this.light.intensity=.75})),u=n(6510);function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.actions=new u.Z(t),this._materials()}var t,n,a;return t=e,(n=[{key:"_materials",value:function(){var e=new BABYLON.StandardMaterial("hover",this.scene);e.diffuseColor=BABYLON.Color3.FromHexString("#08e5eF").toLinearSpace(),e.ambientColor=BABYLON.Color3.FromHexString("#4C4C4C"),e.specularColor=new BABYLON.Color3(0,0,0);var t=new BABYLON.StandardMaterial("animated",this.scene);t.ambientColor=BABYLON.Color3.FromHexString("#4C4C4C"),t.specularColor=new BABYLON.Color3(0,0,0);var n=new BABYLON.StandardMaterial("ground",this.scene);n.diffuseColor=new BABYLON.Color3(1,1,1),n.specularColor=new BABYLON.Color3(0,0,0)}},{key:"_createGround",value:function(){var e=BABYLON.MeshBuilder.CreateGround("ground",{width:2e3,height:2e3},this.scene);e.actionManager=new BABYLON.ActionManager(this.scene),e.onpickable=!1,e.material=this.scene.getMaterialByName("ground")}}])&&h(t.prototype,n),a&&h(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),m=n(7757),d=n.n(m),v=n(9669),p=n.n(v);function g(e,t,n,a,r,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,r)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function o(e){g(i,a,r,o,s,"next",e)}function s(e){g(i,a,r,o,s,"throw",e)}o(void 0)}))}}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var B=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.Actions=new u.Z(t),this.Import(),this.pickidMesh(),this.scene.onDataLoadedObservable.add((function(){n.getActiveMeshes(),n.scene.getMaterialByName("pol").albedoColor=new BABYLON.Color3(.7,.7,.6),n.scene.materials.forEach((function(e){e.ambientColor=new BABYLON.Color3(.2,.2,.2)}))}))}var t,n,a,r,i;return t=e,n=[{key:"pickidMesh",value:function(){var e=this;this.scene.onPointerPick=function(t,n){var a=n.pickedMesh;!store.state.mesh.active||0!=t.button&&2!=t.button||e.clearActiveMesh(t),a.parent.metadata&&a.parent.metadata.gltf.extras&&1==a.parent.metadata.gltf.extras.pickable?(store.state.mesh.active=a.parent,e.scene.activeMesh=a.parent,e.Actions.animatePlay(a.parent._children,!0,!0),e.getTerritories(a.parent.name)):a&&1==a.metadata.gltf.extras.pickable&&(store.state.mesh.active=a,e.scene.activeMesh=a,e.Actions.animatePlay(a,!0),e.getTerritories(a.name))}}},{key:"clearActiveMesh",value:function(){this.Actions.animateStop(),this.scene.activeMesh=null,store.state.mesh.active=null,store.state.territories=null}},{key:"getTerritories",value:(i=b(d().mark((function e(t){var n,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p().post("/api/territories/getall",{name:t});case 2:n=e.sent,a=n.data,store.state.territories=a;case 5:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},{key:"Import",value:function(){BABYLON.SceneLoader.AppendAsync("./models/view.glb",void 0,this.scene,(function(e){e.lengthComputable&&(e.loaded,e.total)}),".glb")}},{key:"getActiveMeshes",value:(r=b(d().mark((function e(){var t,n,a=this;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeMeshes=this.scene.getNodeByName("active")._children,e.next=3,p().get("/api/territroy_count");case 3:t=e.sent,n=t.data,this.activeMeshes.forEach((function(e){a.meshSceneNames(e,n[e.name]),e._isMesh?(e.actionManager=new BABYLON.ActionManager(a.scene),e.mainmaterial=e.material,a.Actions.hover(e)):a.Actions.hoverNode(e._children)}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"meshSceneNames",value:function(e,t){var n=BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI"),a=new BABYLON.GUI.Rectangle;a.adaptWidthToChildren=!0,a.height="35px",a.cornerRadius=4,a.color="white",a.thickness=0,a.background="#1db81d6b",n.addControl(a),a.linkWithMesh(e),a.linkOffsetY=-50;var r=new BABYLON.GUI.TextBlock;"TROF, AMMQ va MShML"==e.name||"1-sonli autokorxona"==e.name?r.width="170px":r.width="100px",null!=t&&null!=t||(t=0),r.text=e.name.toUpperCase()+"\n"+t,r.fontSize="12px",a.addControl(r);var i=new BABYLON.GUI.Ellipse;i.width="5px",i.height="5px",i.color="#1db81d6b",i.thickness=1,i.background="#1db81d6b",n.addControl(i),i.linkWithMesh(e);var o=new BABYLON.GUI.Line;o.lineWidth=2,o.color="#1db81d6b",o.y2=14,o.linkOffsetY=0,n.addControl(o),o.linkWithMesh(e),o.connectedControl=a}}],n&&w(t.prototype,n),a&&w(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var A=function(){function e(t){var n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,a="camera",r=new BABYLON.ArcRotateCamera("camera",1.294,Math.PI/3,140,new BABYLON.Vector3(0,0,0)),a in n?Object.defineProperty(n,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[a]=r,this.canvas=t,this.camera.attachControl(this.canvas,!0),this.limits()}var t,n,a;return t=e,(n=[{key:"limits",value:function(){this.camera.useBouncingBehavior=!0,this.camera.lowerRadiusLimit=110,this.camera.upperRadiusLimit=240,this.camera.lowerBetaLimit=0,this.camera.upperBetaLimit=Math.PI/2.5,this.camera.inputs.attached.keyboard.detachControl(),this.camera.inputs.attached.pointers.buttons=[1,2]}}])&&y(t.prototype,n),a&&y(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();var O={ref:"information",class:"fixed flex flex-col bottom-2 left-2 top-2 w-80 overflow-y-auto p-2 shadow-inner bg-black bg-opacity-25 text-sm"},k=["href"],C={class:"text-center flex-grow text-white"},L=(0,a._)("div",{class:"px-4 p-5 border-l border-gray-200"},[(0,a._)("i",{class:"gg-sidebar-right text-white"})],-1);const M={props:["Engine"],data:function(){return{Territories:null}}};var N=n(3744);const x=(0,N.Z)(M,[["render",function(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("main",O,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.$store.state.territories,(function(e){return(0,a.wg)(),(0,a.iD)("a",{class:"bg-green-500 w-full mb-4 bg-opacity-60 shadow uppercase flex items-center justify-between font-medium hover:bg-green-600",href:"/territory/"+e.id,key:e},[(0,a._)("div",C,(0,a.zw)(e.name),1),L],8,k)})),128))],512)}]]);var Y=n(4214),P=n(6889),_=n(9898);const E={data:function(){return{Engine:null}},mounted:function(){var e,t,n,a;this.Engine=(e=this.$refs.BuilderCanvas,t=new o(e),n=new A(e),a=new f(t.scene),{Scene:t,Camera:n,Light:new l,Meshes:a,Import:new B(t.scene)}),Y.Z.loaderFile(this.Engine.Scene.scene)},unmounted:function(){store.state.mesh.active&&this.Engine.Import.clearActiveMesh()},components:{HomePanel:x,Authentication:P.Z,InformationPanel:_.Z}};var T=n(3379),S=n.n(T),I=n(7912),j={insert:"head",singleton:!1};S()(I.Z,j);I.Z.locals;const F=(0,N.Z)(E,[["render",function(e,t,n,i,o,s){var c=(0,a.up)("InformationPanel"),l=(0,a.up)("Authentication"),u=(0,a.up)("HomePanel");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(c,{path:"/api/plantInfromation"}),(0,a.Wm)(l),(0,a._)("canvas",r,null,512),(0,a.Wm)(a.uT,{name:"lift"},{default:(0,a.w5)((function(){return[o.Engine&&e.$store.state.territories?((0,a.wg)(),(0,a.j4)(u,{key:0,Engine:o.Engine},null,8,["Engine"])):(0,a.kq)("",!0)]})),_:1})],64)}],["__scopeId","data-v-0877b2eb"]])}}]);