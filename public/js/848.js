"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[848],{848:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var n=r(821),a=(0,n.Uk)("Kirish"),i={class:"h-full w-full border-transparent",ref:"BuilderCanvas"};function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=t,this.createScene(),this.setEnvironment()}var t,r,n;return t=e,(r=[{key:"createScene",value:function(){var e=new BABYLON.Engine(this.canvas,!0);window.scene=new BABYLON.Scene(e),e.runRenderLoop((function(){scene.render()})),window.addEventListener("resize",(function(){e.resize()}))}},{key:"setEnvironment",value:function(){var e=BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env",scene);scene.environmentTexture=e,scene.clearColor=new BABYLON.Color3(.8,.8,.8,1)}}])&&o(t.prototype,r),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createLight()}var t,r,n;return t=e,(r=[{key:"createLight",value:function(){this.light=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(1,1,0))}}])&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createGround()}var t,r,n;return t=e,(r=[{key:"createGround",value:function(){var e=BABYLON.MeshBuilder.CreateGround("ground",{width:1e3,height:1e3},scene),t=new BABYLON.StandardMaterial("material",scene);t.diffuseColor=new BABYLON.Color3(1,1,1),t.specularColor=new BABYLON.Color3(0,0,0),e.material=t}}])&&l(t.prototype,r),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.Import()}var t,r,n;return t=e,(r=[{key:"Import",value:function(){BABYLON.SceneLoader.AppendAsync("./models/assets.glb",void 0,scene,(function(e){e.lengthComputable&&(e.loaded,e.total)}),".glb")}}])&&h(t.prototype,r),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var b=v((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new f,new p}));function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var m=function(){function e(t){var r,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n="camera",a=new BABYLON.ArcRotateCamera("camera",0,0,40,new BABYLON.Vector3(0,0,0)),n in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,this.canvas=t,this.createCamera()}var t,r,n;return t=e,(r=[{key:"createCamera",value:function(){var e=this;this.camera.attachControl(this.canvas,!0),this.camera.mode=1,this.camera.onViewMatrixChangedObservable.add((function(){e.orthographic()})),window.addEventListener("resize",(function(){e.orthographic()}))}},{key:"orthographic",value:function(){var e=this.canvas.width/this.canvas.height;this.camera.orthoTop=this.camera.radius/e,this.camera.orthoBottom=-this.camera.radius/e,this.camera.orthoLeft=-this.camera.radius,this.camera.orthoRight=this.camera.radius}},{key:"limits",value:function(){this.camera.useBouncingBehavior=!0,this.camera.lowerRadiusLimit=25,this.camera.upperRadiusLimit=120,this.camera.inputs.attached.keyboard.detachControl(),this.camera.inputs.attached.pointers.buttons=[1,2]}}])&&w(t.prototype,r),n&&w(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const y={mounted:function(){var e,t,r,n;this.MeshBuilder=(e=this.$refs.BuilderCanvas,t=new c(e),r=new m(e),n=new b(r),{Scene:t,Camera:r,Light:new s,Meshes:n})}};const g=(0,r(744).Z)(y,[["render",function(e,t,r,o,c,u){var s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{class:"fixed font-bold top-0 right-0 p-2 px-4 uppercase m-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",to:"/login"},{default:(0,n.w5)((function(){return[a]})),_:1}),(0,n._)("canvas",i,null,512)],64)}]])}}]);