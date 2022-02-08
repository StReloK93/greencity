"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[431],{1523:(e,t,n)=>{n.d(t,{Z:()=>r});const r=[{name:"olma",color:"#2feb71"},{name:"behi",color:"#fdeb1c"},{name:"shaftoli",color:"#ba2222"}]},4214:(e,t,n)=>{n.d(t,{Z:()=>r});const r={loaderFile:function(e){window.onkeyup=function(t){107==t.keyCode&&(store.state.inspector?e.debugLayer.show({embedMode:!0}):e.debugLayer.hide(),store.state.inspector=!store.state.inspector)}}}},6510:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:()=>a});var a=function(){function e(t){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r="keysArr",a=[{frame:0,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:40,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()}],r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,this.scene=t}var t,n,a;return t=e,n=[{key:"hover",value:function(e){var t=this,n=e.material;e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOverTrigger},(function(){t.scene.activeMesh!=e&&(e.material=t.scene.getMaterialByName("hover"))}))),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOutTrigger},(function(){t.scene.activeMesh!=e&&(e.material=n)})))}},{key:"animate",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.keysArr;this.animation=new BABYLON.Animation("newBlink",e,60,t,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE),this.animation.setKeys(n),this.animationGroup=new BABYLON.AnimationGroup("newBlinkGroup")}},{key:"animatePlay",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&this.animate("material.diffuseColor",BABYLON.Animation.ANIMATIONTYPE_COLOR3),e.material=this.scene.getMaterialByName("animated"),this.animationGroup.addTargetedAnimation(this.animation,e),this.animationGroup.play(!0)}},{key:"animateStop",value:function(){this.animationGroup.stop(),this.animationGroup.dispose()}}],n&&r(t.prototype,n),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},147:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(1523);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=i((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=new BABYLON.StandardMaterial("building",t);n.diffuseColor=new BABYLON.Color3.FromHexString("#EFDC9A"),n.specularColor=new BABYLON.Color3(0,0,0);var a=new BABYLON.StandardMaterial("ground",t);a.diffuseColor=new BABYLON.Color3(1,1,1),a.specularColor=new BABYLON.Color3(0,0,0);var i=new BABYLON.StandardMaterial("hover",t);i.diffuseColor=BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace(),i.specularColor=new BABYLON.Color3(0,0,0),r.Z.forEach((function(e){new BABYLON.StandardMaterial(e.name,t).diffuseColor=BABYLON.Color3.FromHexString(e.color).toLinearSpace()}));var o=new BABYLON.StandardMaterial("BluePoints",this.scene);o.diffuseColor=BABYLON.Color3.FromHexString("#3268D1"),o.specularColor=new BABYLON.Color3(0,0,0),new BABYLON.StandardMaterial("animated",this.scene).specularColor=new BABYLON.Color3(0,0,0)}))},8431:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var r=n(821),a={key:0,class:"uppercase fixed top-0 right-0 text-blue-600"},i=(0,r.Uk)("Constructor"),o={key:1,class:"uppercase fixed top-0 right-0 text-blue-600"},s=(0,r.Uk)("Kirish"),c={class:"h-full w-full border-transparent",ref:"BuilderCanvas"};var u=n(7757),l=n.n(u);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=t,this.createScene(),this.setEnvironment()}var t,n,r;return t=e,(n=[{key:"createScene",value:function(){var e=this,t=new BABYLON.Engine(this.canvas,!0);this.scene=new BABYLON.Scene(t),t.runRenderLoop((function(){e.scene.render()})),window.addEventListener("resize",(function(){t.resize()}))}},{key:"setEnvironment",value:function(){var e=BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/hdrmini.env",this.scene);this.scene.environmentTexture=e,this.scene.clearColor=new BABYLON.Color3(.8,.8,.8,1)}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createLight()}var t,n,r;return t=e,(n=[{key:"createLight",value:function(){this.light=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(1,1,0))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),m=n(6510);function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.Import(),t.onDataLoadedObservable.add((function(){n.hideMeshes(["plant","house"])}))}var t,n,r;return t=e,(n=[{key:"Import",value:function(){BABYLON.SceneLoader.AppendAsync("/models/assets.glb",void 0,this.scene,(function(e){e.lengthComputable&&(e.loaded,e.total)}),".glb")}},{key:"hideMeshes",value:function(e){var t=this;e.forEach((function(e){var n=t.scene.getNodeByName(e);n.setAbsolutePosition(4e4,n.position.y,4e4)}))}}])&&v(t.prototype,n),r&&v(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.scene=t,this.actions=new m.Z(t),new b(t)}var t,n,r,a,i;return t=e,n=[{key:"createMesh",value:function(e){if(!this.scene.getNodeByName(e.name)){var t=[];JSON.parse(e.points).forEach((function(e){t.push(new BABYLON.Vector3(e.x,e.y,e.z))}));var n=BABYLON.MeshBuilder.ExtrudePolygon(e.name,{shape:t,depth:5,wrap:!0},this.scene);n.scaling=new BABYLON.Vector3(1,1,-1),n.material=this.scene.getMaterialByName("building"),n.mainmaterial=this.scene.getMaterialByName("building"),n.position.y=.01,n.position.x=4e4,n.position.z=4e4,n.rotation.x=Math.PI}}},{key:"getMeshes",value:(a=l().mark((function e(t){var n=this;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/getactive/".concat(t));case 2:e.sent.data.forEach((function(e){var t=JSON.parse(e.position),r=n.scene.getNodeByName(e.parentname).clone(e.name);r.material=n.scene.getMaterialByName(e.materialname),r.mainmaterial=n.scene.getMaterialByName(e.materialname),r.setAbsolutePosition(t._x,t._y,t._z),"plant"==e.parentname?r.scaling.y=1:r.scaling.y=e.height,r.actionManager=new BABYLON.ActionManager(n.scene),n.actions.hover(r)}));case 4:case"end":return e.stop()}}),e)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=a.apply(e,t);function o(e){g(i,n,r,o,s,"next",e)}function s(e){g(i,n,r,o,s,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})}],n&&w(t.prototype,n),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r="camera",a=new BABYLON.ArcRotateCamera("camera",-Math.PI/2,0,40,new BABYLON.Vector3(0,0,0)),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,this.canvas=t,this.createCamera(),this.limits()}var t,n,r;return t=e,(n=[{key:"createCamera",value:function(){var e=this;this.camera.attachControl(this.canvas,!0),this.camera.mode=1,this.camera.minZ=0,this.camera.onViewMatrixChangedObservable.add((function(){e.orthographic()})),window.addEventListener("resize",(function(){e.orthographic()}))}},{key:"orthographic",value:function(){var e=this.canvas.width/this.canvas.height;this.camera.orthoTop=this.camera.radius/e,this.camera.orthoBottom=-this.camera.radius/e,this.camera.orthoLeft=-this.camera.radius,this.camera.orthoRight=this.camera.radius}},{key:"limits",value:function(){this.camera.useBouncingBehavior=!0,this.camera.lowerRadiusLimit=25,this.camera.upperRadiusLimit=240,this.camera.inputs.attached.keyboard.detachControl(),this.camera.inputs.attached.pointers.buttons=[1,2]}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=n(147);var L=n(4214);function C(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){C(i,r,a,o,s,"next",e)}function s(e){C(i,r,a,o,s,"throw",e)}o(void 0)}))}}const k={props:["id"],mounted:function(){var e=this;return N(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.Engine=(n=e.$refs.BuilderCanvas,r=void 0,a=void 0,i=void 0,o=void 0,r=new f(n),a=new O(n),i=new B(r.scene),o=new d,new A.Z(r.scene),{Scene:r,Camera:a,Light:o,Meshes:i}),L.Z.loaderFile(e.Engine.Scene.scene),t.next=4,e.getParents();case 4:return t.next=6,e.getActive();case 6:case"end":return t.stop()}var n,r,a,i,o}),t)})))()},methods:{getParents:function(){var e=this;return N(l().mark((function t(){var n,r,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.customMeshes=[],t.next=3,axios.get("/api/getparent/".concat(e.id));case 3:n=t.sent,r=n.data,a=e.Engine.Meshes,r.forEach((function(t){a.createMesh(t),e.customMeshes.push({clientname:t.clientname,name:t.name})}));case 7:case"end":return t.stop()}}),t)})))()},getActive:function(){var e=this;return N(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.Engine.Meshes.getMeshes(e.id);case 2:case"end":return t.stop()}}),t)})))()}}};const Y=(0,n(3744).Z)(k,[["render",function(e,t,n,u,l,h){var f=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[e.$store.state.user?((0,r.wg)(),(0,r.iD)("main",a,[(0,r.Wm)(f,{class:"font-bold inline-block p-2 px-4 m-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white",to:"/constructor"},{default:(0,r.w5)((function(){return[i]})),_:1}),(0,r._)("button",{onClick:t[0]||(t[0]=function(t){return e.$store.dispatch("logout")}),class:"uppercase font-bold inline-block text-blue-600 p-2 px-4 m-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white"},"Tizimdan chiqish")])):((0,r.wg)(),(0,r.iD)("main",o,[(0,r.Wm)(f,{class:"font-bold inline-block p-2 px-4 m-3 border-2 border-blue-600 hover:bg-blue-600 hover:text-white",to:"/login"},{default:(0,r.w5)((function(){return[s]})),_:1})])),(0,r._)("canvas",c,null,512)],64)}]])}}]);