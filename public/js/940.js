"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[940],{1523:(e,t,n)=>{n.d(t,{Z:()=>i});const i=[{name:"olma",color:"#8DA35F"},{name:"behi",color:"#fdeb1c"},{name:"shaftoli",color:"#ba2222"},{name:"qayragoch",color:"#32452E"},{name:"archa",color:"#47BE60"},{name:"gilos",color:"#ba2222"},{name:"nok",color:"#ba2222"},{name:"tut",color:"#ba2222"}]},4214:(e,t,n)=>{n.d(t,{Z:()=>i});const i={loaderFile:function(e){window.onkeyup=function(t){107==t.keyCode&&(store.state.inspector?e.debugLayer.show({embedMode:!0}):e.debugLayer.hide(),store.state.inspector=!store.state.inspector)}}}},6510:(e,t,n)=>{function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.d(t,{Z:()=>a});var a=function(){function e(t){var n,i,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i="keysArr",a=[{frame:0,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:20,value:new BABYLON.Color3(1,1,1)},{frame:40,value:BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace()}],i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,this.scene=t}var t,n,a;return t=e,n=[{key:"hover",value:function(e){var t=this;e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOverTrigger},(function(){t.scene.activeMesh!=e&&(e.material=t.scene.getMaterialByName("hover"))}))),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOutTrigger},(function(){t.scene.activeMesh!=e&&(e.material=e.mainmaterial)})))}},{key:"hoverNode",value:function(e){var t=this;e.forEach((function(e){e.mainmaterial=e.material,e.actionManager=new BABYLON.ActionManager(t.scene),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOverTrigger},(function(){var n=!0;t.scene.activeMesh&&e.parent==t.scene.activeMesh&&(n=!1),n&&e.parent._children.forEach((function(e){e.material=t.scene.getMaterialByName("hover")}))}))),e.actionManager.registerAction(new BABYLON.ExecuteCodeAction({trigger:BABYLON.ActionManager.OnPointerOutTrigger},(function(){var n=!0;t.scene.activeMesh&&e.parent==t.scene.activeMesh&&(n=!1),n&&e.parent._children.forEach((function(e){e.material=e.mainmaterial}))})))}))}},{key:"animate",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.keysArr;this.animation=new BABYLON.Animation("newBlink",e,60,t,BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE),this.animation.setKeys(n),this.animationGroup=new BABYLON.AnimationGroup("newBlinkGroup")}},{key:"animatePlay",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];n&&this.animate("material.diffuseColor",BABYLON.Animation.ANIMATIONTYPE_COLOR3),1==i?e.forEach((function(e){e.material=t.scene.getMaterialByName("animated"),t.animationGroup.addTargetedAnimation(t.animation,e)})):(e.material=this.scene.getMaterialByName("animated"),this.animationGroup.addTargetedAnimation(this.animation,e)),this.animationGroup.play(!0)}},{key:"animateStop",value:function(){this.animationGroup.stop(),this.animationGroup.dispose(),this.scene.activeMesh._isMesh?this.scene.activeMesh.material=this.scene.activeMesh.mainmaterial:this.scene.activeMesh._children.forEach((function(e){e.material=e.mainmaterial}))}}],n&&i(t.prototype,n),a&&i(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()},147:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(1523);function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=r((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=new BABYLON.StandardMaterial("building",t);n.diffuseColor=new BABYLON.Color3.FromHexString("#EFDC9A"),n.specularColor=new BABYLON.Color3(0,0,0);var a=new BABYLON.StandardMaterial("ground",t);a.diffuseColor=new BABYLON.Color3(1,1,1),a.specularColor=new BABYLON.Color3(0,0,0);var r=new BABYLON.StandardMaterial("hover",t);r.diffuseColor=BABYLON.Color3.FromHexString("#C8F5FF").toLinearSpace(),r.specularColor=new BABYLON.Color3(0,0,0),i.Z.forEach((function(e){new BABYLON.StandardMaterial(e.name,t).diffuseColor=BABYLON.Color3.FromHexString(e.color).toLinearSpace()}));var o=new BABYLON.StandardMaterial("BluePoints",this.scene);o.diffuseColor=BABYLON.Color3.FromHexString("#3268D1"),o.specularColor=new BABYLON.Color3(0,0,0),new BABYLON.StandardMaterial("animated",this.scene).specularColor=new BABYLON.Color3(0,0,0)}))},289:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(3645),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,"::-webkit-scrollbar{background-color:#aaa;height:6px;width:6px}::-webkit-scrollbar-thumb{background-color:#05ae23}::-webkit-scrollbar-thumb:hover{background-color:#253861}",""]);const r=a},6940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$e});var i=n(821),a={class:"h-full w-5/6 relative p-1 shadow-inner bg-gray-300",ref:"room"},r={class:"absolute top-0 left-0 m-4"},o=(0,i._)("img",{src:"/images/tree.png"},null,-1),s=["onClick"],c=(0,i._)("img",{src:"/images/build.png"},null,-1),l=["onClick"],u=(0,i._)("span",{class:"color shadow-xl"},null,-1),h=[(0,i._)("img",{src:"/images/plus.png",style:{transform:"scale(0.5)"}},null,-1)],f={class:"absolute top-0 right-0 m-5 flex"},m=(0,i._)("i",{class:"gg-eye"},null,-1),d=(0,i._)("i",{class:"gg-clapper-board"},null,-1),p=(0,i.Uk)(" Bosh sahifa "),g=(0,i._)("img",{src:"/images/home.png",class:"ml-3 w-5"},null,-1);var v=n(7757),b=n.n(v),w=n(4214);function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var B=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createScene(),this.setEnvironment()}return function(e,t,n){t&&y(e.prototype,t),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"createScene",value:function(){var e=new BABYLON.Engine(canvas,!0);window.scene=new BABYLON.Scene(e),e.runRenderLoop((function(){scene.render()})),window.addEventListener("resize",(function(){e.resize()}))}},{key:"setEnvironment",value:function(){var e=BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/hdrmini.env",scene);scene.environmentTexture=e,scene.clearColor=new BABYLON.Color3(.8,.8,.8,1)}}]),e}();function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var M=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createLight()}return function(e,t,n){t&&k(e.prototype,t),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"createLight",value:function(){this.light=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(1,1,0))}}]),e}(),O=n(6510);function A(e,t,n,i,a,r,o){try{var s=e[r](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,a)}function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var L=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.actions=new O.Z(scene),scene.onDataLoadedObservable.add((function(){t._createGround()}))}var t,n;return function(e,t,n){t&&C(e.prototype,t),n&&C(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"_createGround",value:function(){var e=BABYLON.MeshBuilder.CreateGround("ground",{width:1e3,height:1e3},scene);e.actionManager=new BABYLON.ActionManager(scene),e.material=scene.getMaterialByName("ground")}},{key:"createMesh",value:function(e){if(!scene.getNodeByName(e.name)){var t=[];JSON.parse(e.points).forEach((function(e){t.push(new BABYLON.Vector3(e.x,e.y,e.z))}));var n=BABYLON.MeshBuilder.ExtrudePolygon(e.name,{shape:t,depth:5,wrap:!0},scene);n.scaling=new BABYLON.Vector3(1,1,-1),n.material=scene.getMaterialByName("building"),n.mainmaterial=scene.getMaterialByName("building"),n.position.y=.01,n.position.x=4e4,n.position.z=4e4,n.rotation.x=Math.PI}}},{key:"getMeshes",value:(t=b().mark((function e(t){var n=this;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("/api/getallfinal/".concat(t));case 2:e.sent.data.forEach((function(e){var t=JSON.parse(e.position),i=scene.getNodeByName(e.parentname).clone(e.name);i.material=scene.getMaterialByName(e.materialname),i.mainmaterial=scene.getMaterialByName(e.materialname),i.setAbsolutePosition(t._x,t._y,t._z),"plant"==e.parentname?i.scaling.y=1:i.scaling.y=e.height,i.actionManager=new BABYLON.ActionManager(scene),n.actions.hover(i)}));case 4:case"end":return e.stop()}}),e)})),n=function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function o(e){A(r,i,a,o,s,"next",e)}function s(e){A(r,i,a,o,s,"throw",e)}o(void 0)}))},function(e){return n.apply(this,arguments)})}]),e}();function P(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var N=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.Import(),scene.onDataLoadedObservable.add((function(){t.hideMeshes(["plant","house"])}))}return function(e,t,n){t&&P(e.prototype,t),n&&P(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"Import",value:function(){BABYLON.SceneLoader.AppendAsync("/models/assets.glb",void 0,scene,(function(e){e.lengthComputable&&(e.loaded,e.total)}),".glb")}},{key:"hideMeshes",value:function(e){e.forEach((function(e){var t=scene.getNodeByName(e);t.setAbsolutePosition(4e4,t.position.y,4e4)}))}}]),e}(),x=n(9669),Y=n.n(x);function _(e,t,n,i,a,r,o){try{var s=e[r](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,a)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function o(e){_(r,i,a,o,s,"next",e)}function s(e){_(r,i,a,o,s,"throw",e)}o(void 0)}))}}function T(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function j(e,t){var n=Math.round(e/t)*t;return 0==n&&(n=1e-4),n}var D=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.native=new L,this.actions=new O.Z(scene),new N,scene.onPreKeyboardObservable.add((function(e){2==e.type&&"KeyX"==e.event.code&&store.state.mesh.active&&t.meshDelete(store.state.mesh.active)})),this.pickForDrag()}var t,n,i,a,r;return function(e,t,n){t&&T(e.prototype,t),n&&T(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"pickForDrag",value:function(){var e=this;scene.onPointerPick=function(t,n){var i=n.pickedMesh;0!=t.button&&2!=t.button||e.clearActiveMesh(),i&&"ground"!=i.name&&(t.shiftKey&&0==t.button?(store.state.mesh.active=i,e.position=i.absolutePosition.clone(),e.drag(i),e.drop(i)):0==t.button&&(e.getMesh(i),store.state.mesh.active=i,scene.activeMesh=i,e.actions.animatePlay(i,!0)))}}},{key:"clearActiveMesh",value:function(){store.state.mesh.active&&(this.actions.animateStop(),scene.activeMesh=null,store.state.mesh.active=null,store.state.mesh.info=null)}},{key:"newMesh",value:function(e,t,n,i){this.id=i,this.clearActiveMesh(),scene.onPointerPick=null;var a=scene.getNodeByName(t).clone(e+Date.now());a.visibility=.5;var r=scene.getMaterialByName(e);r&&(a.material=r,a.mainmaterial=r),store.state.mesh.active=a,this.drag(a,!0,n),this.drop(a,t)}},{key:"drag",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;store.state.drag=!0,scene.onPointerMove=function(t,n){if(n.pickedPoint){var i=j(n.pickedPoint.x,.5),a=j(n.pickedPoint.z,.5);e.setAbsolutePosition(i,e.position.y,a)}},t&&scene.simulatePointerMove(scene.pick(n.clientX,n.clientY))}},{key:"drop",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;scene.onPointerPick=function(i){null!=store.state.mesh.active&&(0==i.button&&(n?(e.visibility=1,e.actionManager=new BABYLON.ActionManager(scene),t.actions.hover(e),t.saveMeshProps(e,n)):t.editMeshProps(e)),2==i.button&&(n?e.dispose():e.setAbsolutePosition(t.position)),scene.onPointerMove=null,store.state.mesh.active=null,store.state.drag=null,t.pickForDrag())}}},{key:"saveMeshProps",value:(r=E(b().mark((function e(t,n){var i,a,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.name,a=t.material.name,r=t.absolutePosition,e.next=5,Y().post("/api/createfinal",{name:i,position:r,material:a,parent:n,id:this.id});case 5:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"getMesh",value:(a=E(b().mark((function e(t){var n,i,a,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return store.state.mesh.images=null,n=t.name,e.next=4,Y().post("/api/getonefinal",{id:this.id,name:n});case 4:if(i=e.sent,a=i.data,store.state.mesh.info=a,"plant"!=a.parentname){e.next=14;break}return e.next=10,Y().post("/api/getimages",{id:this.id,name:n});case 10:r=e.sent,store.state.mesh.images=r.data,e.next=15;break;case 14:store.state.mesh.images=[];case 15:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"editMesh",value:(i=E(b().mark((function e(t){var n,i,a,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,i=t.height,a=t.username,r=t.plantTime,e.next=3,Y().post("/api/editfinalprops",{id:this.id,name:n,height:i,username:a,plantTime:r});case 3:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"editMeshProps",value:(n=E(b().mark((function e(t){var n,i;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,i=t.absolutePosition,e.next=4,Y().post("/api/editfinalposition",{id:this.id,name:n,position:i});case 4:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"meshDelete",value:(t=E(b().mark((function e(t){var n;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,this.clearActiveMesh(),t.dispose(),e.next=5,Y().post("/api/deleteonefinal",{id:this.id,name:n});case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}();function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var I=function(){function e(){var t,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n="camera",i=new BABYLON.ArcRotateCamera("camera",-Math.PI/2,0,40,new BABYLON.Vector3(0,0,0)),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,this.createCamera(),this.limits()}return function(e,t,n){t&&S(e.prototype,t),n&&S(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"createCamera",value:function(){var e=this;this.camera.attachControl(canvas,!0),this.camera.mode=1,this.camera.minZ=0,this.camera.onViewMatrixChangedObservable.add((function(){e.orthographic()})),window.addEventListener("resize",(function(){e.orthographic()}))}},{key:"orthographic",value:function(){var e=canvas.width/canvas.height;this.camera.orthoTop=this.camera.radius/e,this.camera.orthoBottom=-this.camera.radius/e,this.camera.orthoLeft=-this.camera.radius,this.camera.orthoRight=this.camera.radius}},{key:"limits",value:function(){this.camera.useBouncingBehavior=!0,this.camera.lowerRadiusLimit=25,this.camera.upperRadiusLimit=240,this.camera.lowerAlphaLimit=-Math.PI/2,this.camera.upperAlphaLimit=-Math.PI/2,this.camera.lowerBetaLimit=0,this.camera.upperBetaLimit=0,this.camera.inputs.attached.keyboard.detachControl(),this.camera.inputs.attached.pointers.buttons=[1,2]}}]),e}();function F(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var $=function(){function e(t){var n=t.lines,i=void 0!==n&&n,a=t.grid,r=void 0!==a&&a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i&&this.Lines(),r&&this.Grid()}return function(e,t,n){t&&F(e.prototype,t),n&&F(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"Lines",value:function(){var e=[new BABYLON.Vector3(-300,0,0),new BABYLON.Vector3(300,0,0)],t=[new BABYLON.Color4(.5,0,0,.3),new BABYLON.Color4(.5,0,0,.3)],n=BABYLON.MeshBuilder.CreateLines("lineX",{points:e,colors:t});n.isPickable=!1,n.position.y=.002;var i=[new BABYLON.Vector3(0,0,-300),new BABYLON.Vector3(0,0,300)],a=[new BABYLON.Color4(0,0,.5,.3),new BABYLON.Color4(0,0,.5,.3)],r=BABYLON.MeshBuilder.CreateLines("lineZ",{points:i,colors:a});r.isPickable=!1,r.position.y=.002}},{key:"Grid",value:function(){var e=new BABYLON.GridMaterial("groundMaterial");e.majorUnitFrequency=1,e.minorUnitVisibility=.1,e.gridRatio=1,e.backFaceCulling=!1,e.mainColor=new BABYLON.Color3(1,1,1),e.lineColor=new BABYLON.Color3(1,1,1),e.opacity=.3;var t=BABYLON.Mesh.CreateGround("GridMain",2e4,2e4,2);t.position.y=.001,t.material=e,t.isPickable=!1}}]),e}(),Z=n(147);var G=n(1523),z={class:"h-full w-full absolute top-0 left-0 p-8 bg-black bg-opacity-60"},V={class:"h-full w-full border-transparent",ref:"BuilderCanvas"},q=[(0,i._)("img",{src:"/images/close.png",class:"imgwhite w-4"},null,-1)],K={class:"absolute bottom-0 right-0 m-3"},R=(0,i._)("button",{type:"submit",class:"bg-green-600 p-2 px-4 text-white shadow-xl hover:bg-gray-700"}," Saqlash ",-1);function U(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.MeshBuilderScene(t)}return function(e,t,n){t&&U(e.prototype,t),n&&U(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"MeshBuilderScene",value:function(e){var t=this;BABYLON.Scene.DoubleClickDelay=600,this.engine=new BABYLON.Engine(e,!0),this.scene=new BABYLON.Scene(this.engine),this.engine.runRenderLoop((function(){t.scene.render()})),window.addEventListener("resize",(function(){t.engine.resize()}))}}]),e}();function W(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var X=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.createLight()}return function(e,t,n){t&&W(e.prototype,t),n&&W(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"createLight",value:function(){this.light=new BABYLON.HemisphericLight("light",new BABYLON.Vector3(1,1,0))}}]),e}();function J(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ee=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Q(this,"points",[]),Q(this,"finishedPoints",[]),this.scene=t,this.actions=new O.Z(t),this.createGround(),this.onKeyboard(),this.onDoubleClick(),this.onClick()}return function(e,t,n){t&&J(e.prototype,t),n&&J(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"onClick",value:function(){var e=this;this.scene.onPointerDown=function(t,n){if("linepoint"==n.pickedMesh.type){var i=n.pickedMesh;return e.scene.activeMesh&&i!=e.scene.activeMesh&&e.clearActiveMesh(),e.scene.activeMesh=i,void e.actions.animatePlay(i,!0)}2==t.button&&e.scene.activeMesh&&e.clearActiveMesh()}}},{key:"onDoubleClick",value:function(){var e=this;this.scene.onPointerObservable.add((function(t){if(t.type==BABYLON.PointerEventTypes.POINTERDOUBLETAP){var n=e.gridCoords(t.pickInfo);if(e.scene.activeMesh){var i=e.points.findIndex((function(t){return t.mesh===e.scene.activeMesh}));return e.points[i].mesh.position=n,e.points[i].coordinate=n,e.meshBuilder(e.points),void e.clearActiveMesh()}if("ground"!=t.pickInfo.pickedMesh.name||0!=event.button)return;e.createCube(n),e.meshBuilder(e.points)}}))}},{key:"clearActiveMesh",value:function(){this.actions.animateStop(),this.scene.activeMesh=null}},{key:"onKeyboard",value:function(){var e=this;this.scene.onPreKeyboardObservable.add((function(t){if(2==t.type&&"KeyX"==t.event.code&&e.scene.activeMesh){var n=e.points.findIndex((function(t){return t.mesh===e.scene.activeMesh}));e.points[n].mesh.dispose(),e.points.splice(n,1),e.meshBuilder(e.points),e.scene.activeMesh=null}}))}},{key:"createCube",value:function(e){var t=BABYLON.MeshBuilder.CreateBox("cubicpoints",{height:.4,width:.4,size:.4},this.scene);this.points.push({mesh:t,coordinate:e}),t.type="linepoint",t.material=this.scene.getMaterialByName("BluePoints"),t.mainmaterial=t.material,t.position=e,t.position.y=1,t.actionManager=new BABYLON.ActionManager(this.scene),this.actions.hover(t)}},{key:"meshBuilder",value:function(e){var t=this;if(this.finishedPoints=[],e.forEach((function(e){t.finishedPoints.push(e.coordinate)})),!(this.finishedPoints.length<2)){var n=this.scene.getNodeByName("line");n&&n.dispose(),BABYLON.MeshBuilder.CreateLines("line",{points:this.finishedPoints},this.scene).isPickable=!1}}},{key:"createGround",value:function(){var e=BABYLON.MeshBuilder.CreateGround("ground",{width:1e3,height:1e3},this.scene);e.actionManager=new BABYLON.ActionManager(this.scene);var t=new BABYLON.StandardMaterial("material",this.scene);t.diffuseColor=new BABYLON.Color3(.8,.8,.8),t.specularColor=new BABYLON.Color3(0,0,0),e.material=t}},{key:"numRound",value:function(e,t){return Math.round(e/t)*t}},{key:"gridCoords",value:function(e){var t=this.numRound(e.pickedPoint.x,1),n=this.numRound(e.pickedPoint.z,1);return new BABYLON.Vector3(t,1,n)}},{key:"getPoints",value:function(){var e=[];return this.finishedPoints.forEach((function(t){e.push({x:t.x,y:t.y,z:t.z})})),e}}]),e}();function te(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var ne=function(){function e(t){var n,i,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i="camera",a=new BABYLON.ArcRotateCamera("camera",-Math.PI/2,0,40,new BABYLON.Vector3(0,0,0)),i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,this.createCamera(t),this.limits()}return function(e,t,n){t&&te(e.prototype,t),n&&te(e,n),Object.defineProperty(e,"prototype",{writable:!1})}(e,[{key:"createCamera",value:function(e){var t=this;this.camera.attachControl(e,!0),this.camera.mode=1,this.camera.onViewMatrixChangedObservable.add((function(){t.orthographic(e)})),window.addEventListener("resize",(function(){t.orthographic(e)}))}},{key:"orthographic",value:function(e){var t=e.width/e.height;this.camera.orthoTop=this.camera.radius/t,this.camera.orthoBottom=-this.camera.radius/t,this.camera.orthoLeft=-this.camera.radius,this.camera.orthoRight=this.camera.radius}},{key:"limits",value:function(){this.camera.useBouncingBehavior=!0,this.camera.lowerRadiusLimit=5,this.camera.upperRadiusLimit=50,this.camera.lowerAlphaLimit=-Math.PI/2,this.camera.upperAlphaLimit=-Math.PI/2,this.camera.lowerBetaLimit=0,this.camera.upperBetaLimit=0,this.camera.inputs.attached.keyboard.detachControl(),this.camera.inputs.attached.pointers.buttons=[1,2]}}]),e}();function ie(e,t,n,i,a,r,o){try{var s=e[r](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,a)}const ae={props:["id"],data:function(){return{clientname:""}},mounted:function(){this.MeshBuilder=function(e){var t=new H(e),n=new ne(e),i=new ee(t.scene),a=new X;return new $({lines:!1,grid:!0}),new Z.Z(t.scene),{Scene:t,Camera:n,Light:a,Meshes:i}}(this.$refs.BuilderCanvas)},methods:{insertPoints:function(){var e,t=this;return(e=b().mark((function e(){var n,i,a,r;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.MeshBuilder.Meshes.getPoints(),e.next=3,axios.get("/api/getparents/".concat(t.id));case 3:if(i=e.sent,a=i.data,console.log(a),r="createdMesh"+a.length,!(n.length>2)){e.next=12;break}return e.next=10,axios.post("/api/createparent",{points:n,name:r,clientname:t.clientname,id:t.id});case 10:t.$emit("newmesh"),t.$emit("close");case 12:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function o(e){ie(r,i,a,o,s,"next",e)}function s(e){ie(r,i,a,o,s,"throw",e)}o(void 0)}))})()}}};var re=n(3744);const oe=(0,re.Z)(ae,[["render",function(e,t,n,a,r,o){return(0,i.wg)(),(0,i.iD)("section",z,[(0,i._)("form",{class:"relative h-full shadow border-2 border-gray-500",onKeypress:t[2]||(t[2]=(0,i.D2)((0,i.iM)((function(){}),["prevent"]),["enter"])),onSubmit:t[3]||(t[3]=(0,i.iM)((function(){return o.insertPoints&&o.insertPoints.apply(o,arguments)}),["prevent"]))},[(0,i._)("canvas",V,null,512),(0,i._)("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("close")}),class:"absolute flex items-center justify-center top-0 right-0 bg-red-500 p-2 px-4 m-3 shadow-xl hover:bg-red-700"},q),(0,i._)("div",K,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.clientname=e}),class:"p-2 outline-none",placeholder:"Nomi",required:""},null,512),[[i.nr,r.clientname]]),R])],32)])}]]);var se={class:"w-1/6 flex flex-col h-full p-1 bg-gray-100"},ce={class:"h-full px-3 pt-3"},le={class:"bg-green-600 p-3 -m-5 flex justify-center mb-5"},ue=(0,i.Uk)(" Constructor "),he=(0,i._)("i",{class:"gg-extension ml-5"},null,-1),fe={key:0},me=(0,i._)("h3",{class:"text-center font-medium uppercase py-2 bg-gray-200 text-gray-600 mb-4 rounded shadow-inner"},"Tanlangan obyekt",-1),de=(0,i._)("label",{for:"names",class:"text-sm text-gray-400"},"Obyekt nomi",-1),pe={key:0},ge=(0,i._)("label",{for:"height",class:"text-sm text-gray-400"},"Bino Balandligi",-1),ve={key:1},be=(0,i._)("label",{for:"height",class:"text-sm text-gray-400"},"Ekilgan sana",-1),we={key:2},ye={class:"flex-grow"};var Be={class:"my-3"},ke={for:"fileinp",class:"mb-2 cursor-pointer hover:opacity-80 block shadow-lg text-center"},Me={class:"rounded w-full h-40 object-cover inline-block",ref:"imagePreview",src:"/images/default.jpg"},Oe={key:0,class:"w-full px-1 whitespace-nowrap overflow-hidden overflow-x-scroll my-2"},Ae=["src","onClick"],Ce=["onClick"],Le=[(0,i._)("img",{src:"/images/trash-bin.png",class:"w-4"},null,-1)],Pe={class:"flex justify-end"},Ne={for:"fileinp"},xe=[(0,i.Uk)(" Qo'shish "),(0,i._)("i",{class:"gg-math-plus ml-3"},null,-1)];const Ye={data:function(){return{images:[],files:[],bool:!0}},mounted:function(){this.images=store.state.mesh.images,this.mainImage(this.images[this.images.length-1])},methods:{onchange:function(){this.addfiles(this.$refs.fileInput.files),this.sendFilesToServer(this.files),this.mainImage(this.images[this.images.length-1]),this.$refs.fileInput.value=null},addfiles:function(e){for(var t={files:[]},n=0;n<e.length;n++)t.files.push(e[n]);for(var i in t.files)this.files.push(t.files[i])},sendFilesToServer:function(e){var t=this,n=new FormData;for(var i in n.append("name",store.state.mesh.active.name),e)n.append("image[".concat(i,"]"),e[i]);axios.post("/api/upload",n).then((function(e){t.images=e.data,t.files=[],t.mainImage(t.images[t.images.length-1])}))},deleteInServer:function(){axios.post("/api/deleteimages",{list:this.images,name:store.state.mesh.active.name})},deleteImage:function(e){if(this.images[e]==this.$refs.imagePreview.getAttribute("src"))return this.images.splice(e,1),this.mainImage(this.images[this.images.length-1]),void this.deleteInServer();this.images.splice(e,1),this.deleteInServer()},mainImage:function(e){var t=this;null!=e&&(console.log(this.$refs.imagePreview.getAttribute("src"),e),this.$refs.imagePreview.getAttribute("src")!=e&&(this.bool=!1,setTimeout((function(){t.$refs.imagePreview&&(t.$refs.imagePreview.src=null==e?"/images/default.jpg":e,t.bool=!0)}),200)))}}},_e={data:function(){return{interval:null}},mounted:function(){this.engine=Engine.Meshes},unmounted:function(){this.engine.clearActiveMesh()},methods:{edit:function(){var e=this;store.state.mesh.active.scaling.y=store.state.mesh.info.height,this.interval&&clearTimeout(this.interval),this.interval=setTimeout((function(){store.state.mesh.active&&e.engine.editMesh({name:store.state.mesh.active.name,height:store.state.mesh.info.height,username:store.state.mesh.info.username,plantTime:store.state.mesh.info.plantTime})}),800)},change:function(){this.engine.editMesh({name:store.state.mesh.active.name,height:store.state.mesh.info.height,username:store.state.mesh.info.username,plantTime:store.state.mesh.info.plantTime})}},components:{Uploader:(0,re.Z)(Ye,[["render",function(e,t,n,a,r,o){return(0,i.wg)(),(0,i.iD)("section",Be,[(0,i._)("label",ke,[(0,i.Wm)(i.uT,{name:"fade",mode:"out-in"},{default:(0,i.w5)((function(){return[(0,i.wy)((0,i._)("img",Me,null,512),[[i.F8,r.bool]])]})),_:1})]),(0,i._)("input",{id:"fileinp",type:"file",multiple:"",ref:"fileInput",accept:"image/png, image/gif, image/jpeg",onInput:t[0]||(t[0]=function(){return o.onchange&&o.onchange.apply(o,arguments)}),hidden:""},null,544),r.images.length>0?((0,i.wg)(),(0,i.iD)("div",Oe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.images,(function(e,t){return(0,i.wg)(),(0,i.iD)("main",{class:"relative inline-block w-1/3",key:t},[(0,i._)("img",{src:e,onClick:function(t){return o.mainImage(e)},class:(0,i.C_)([{"pl-2":0!=t},"cursor-pointer hover:opacity-80 object-cover w-full h-20"])},null,10,Ae),(0,i._)("button",{class:"absolute bottom-0 right-0 p-1",onClick:function(e){return o.deleteImage(t)}},Le,8,Ce)])})),128))])):(0,i.kq)("",!0),(0,i._)("main",Pe,[(0,i._)("label",Ne,[(0,i._)("button",{onClick:t[1]||(t[1]=function(t){return e.addForm=!0}),class:"custom-btn m-0 shadow-sm bg-green-600 text-white hover:bg-green-800",title:"Uchastka qo'shish"},xe)])])])}]])}};var Ee=n(3379),Te=n.n(Ee),je=n(289),De={insert:"head",singleton:!1};Te()(je.Z,De);je.Z.locals;function Se(e,t,n,i,a,r,o){try{var s=e[r](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(i,a)}function Ie(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var r=e.apply(t,n);function o(e){Se(r,i,a,o,s,"next",e)}function s(e){Se(r,i,a,o,s,"throw",e)}o(void 0)}))}}const Fe={props:["id"],data:function(){return{fructs:G.Z,fructMenu:!1,customMenu:!1,builderToggle:!1,customMeshes:[],engine:null,onload:null}},beforeCreate:function(){var e=this;return Ie(b().mark((function t(){var n;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("/api/territories/getone/".concat(e.id));case 2:n=t.sent,0==n.data&&router.push({name:"territories"});case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){var e,t,n,i,a=this;window.canvas=this.$refs.canvas,window.Engine=(e=new B,t=new I,n=new D(t),i=new M,new Z.Z(scene),new $({lines:!0,grid:!0}),{Scene:e,Camera:t,Light:i,Meshes:n}),w.Z.loaderFile(scene),Engine.Meshes.id=this.id,scene.onDataLoadedObservable.add((function(){a.onload=!0,Engine.Meshes.native.getMeshes(a.id)})),this.reloadMeshes()},methods:{addFruct:function(e,t){this.fructMenu=!1,Engine.Meshes.newMesh(e,t,event,this.id)},addBuilding:function(e,t){this.customMenu=!1,Engine.Meshes.newMesh(e,t,event,this.id)},openMeshBuilder:function(){this.builderToggle=!this.builderToggle},reloadMeshes:function(){var e=this;return Ie(b().mark((function t(){var n,i,a;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.customMeshes=[],t.next=3,axios.get("/api/getparents/".concat(e.id));case 3:n=t.sent,i=n.data,a=Engine.Meshes.native,i.forEach((function(t){a.createMesh(t),e.customMeshes.push({clientname:t.clientname,name:t.name})}));case 7:case"end":return t.stop()}}),t)})))()}},components:{MeshBuilder:oe,ConstructorPanel:(0,re.Z)(_e,[["render",function(e,t,n,a,r,o){var s=(0,i.up)("router-link"),c=(0,i.up)("Uploader");return(0,i.wg)(),(0,i.iD)("main",se,[(0,i._)("aside",ce,[(0,i._)("header",le,[(0,i.Wm)(s,{to:"/",class:"text-white uppercase font-medium flex items-center"},{default:(0,i.w5)((function(){return[ue,he]})),_:1})]),(0,i.Wm)(i.uT,{name:"opacity",mode:"out-in"},{default:(0,i.w5)((function(){return[e.$store.state.mesh.info?((0,i.wg)(),(0,i.iD)("div",fe,[me,(0,i._)("main",null,[de,(0,i.wy)((0,i._)("input",{placeholder:"Obyekt nomi",id:"names",class:"border-b border-green-600 my-1 outline-none p-2 w-full",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.$store.state.mesh.info.username=t}),onChange:t[1]||(t[1]=function(){return o.change&&o.change.apply(o,arguments)}),onKeyup:t[2]||(t[2]=function(){return o.edit&&o.edit.apply(o,arguments)})},null,544),[[i.nr,e.$store.state.mesh.info.username]])]),"plant"!=e.$store.state.mesh.info.parentname?((0,i.wg)(),(0,i.iD)("main",pe,[ge,(0,i.wy)((0,i._)("input",{placeholder:"Bino Balandligi",id:"height",class:"border-b border-green-600 my-1 outline-none p-2 w-full",type:"number","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.$store.state.mesh.info.height=t}),onChange:t[4]||(t[4]=function(){return o.change&&o.change.apply(o,arguments)}),onKeyup:t[5]||(t[5]=function(){return o.edit&&o.edit.apply(o,arguments)})},null,544),[[i.nr,e.$store.state.mesh.info.height]])])):(0,i.kq)("",!0),"plant"==e.$store.state.mesh.info.parentname?((0,i.wg)(),(0,i.iD)("main",ve,[be,(0,i.wy)((0,i._)("input",{placeholder:"Bino Balandligi",id:"height",class:"border-b border-green-600 my-1 outline-none p-2 w-full",type:"date","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.$store.state.mesh.info.plantTime=t}),onChange:t[7]||(t[7]=function(){return o.change&&o.change.apply(o,arguments)}),onKeyup:t[8]||(t[8]=function(){return o.edit&&o.edit.apply(o,arguments)})},null,544),[[i.nr,e.$store.state.mesh.info.plantTime]])])):(0,i.kq)("",!0),"plant"==e.$store.state.mesh.info.parentname?((0,i.wg)(),(0,i.iD)("main",we,[e.$store.state.mesh.images?((0,i.wg)(),(0,i.j4)(c,{key:0})):(0,i.kq)("",!0)])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)]})),_:1})]),(0,i._)("aside",ye,[(0,i._)("button",{class:"custom-btn shadow border w-full justify-center m-0",onClick:t[9]||(t[9]=function(t){return e.$store.dispatch("logout")})},"Chiqish")])])}]])}},$e=(0,re.Z)(Fe,[["render",function(e,t,n,v,b,w){var y=(0,i.up)("router-link"),B=(0,i.up)("MeshBuilder"),k=(0,i.up)("ConstructorPanel");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("main",a,[(0,i._)("section",r,[(0,i._)("div",{onClick:t[1]||(t[1]=function(e){b.fructMenu=!b.fructMenu,b.customMenu=!1}),class:(0,i.C_)([{"bg-gray-200":b.fructMenu},"m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200"])},[o,b.fructMenu?((0,i.wg)(),(0,i.iD)("main",{key:0,onClick:t[0]||(t[0]=(0,i.iM)((function(){}),["stop"])),class:"menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.fructs,(function(e){return(0,i.wg)(),(0,i.iD)("div",{key:e,onClick:function(t){return w.addFruct(e.name,"plant")},class:"flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 mb-2"},[(0,i.Uk)((0,i.zw)(e.name)+" ",1),(0,i._)("span",{style:(0,i.j5)({background:e.color}),class:"color shadow-xl"},null,4)],8,s)})),128))])):(0,i.kq)("",!0)],2),b.customMeshes.length>0?((0,i.wg)(),(0,i.iD)("div",{key:0,onClick:t[3]||(t[3]=function(e){b.customMenu=!b.customMenu,b.fructMenu=!1}),class:(0,i.C_)([{"bg-gray-200":b.customMenu},"m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200"])},[c,b.customMenu?((0,i.wg)(),(0,i.iD)("main",{key:0,onClick:t[2]||(t[2]=(0,i.iM)((function(){}),["stop"])),class:"menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.customMeshes,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{key:t,onClick:function(t){return w.addBuilding("building",e.name)},class:"flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 mb-2"},[(0,i.Uk)((0,i.zw)(e.clientname)+" ",1),u],8,l)})),128))])):(0,i.kq)("",!0)],2)):(0,i.kq)("",!0),(0,i._)("div",{onClick:t[4]||(t[4]=function(){return w.openMeshBuilder&&w.openMeshBuilder.apply(w,arguments)}),class:"m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-gray-200"},h)]),(0,i._)("section",f,[(0,i.Wm)(y,{title:"Ko'rish",class:"custom-btn",to:{name:"territory",params:{id:n.id}}},{default:(0,i.w5)((function(){return[m]})),_:1},8,["to"]),(0,i.Wm)(y,{title:"Maydonlar",class:"custom-btn ml-4",to:"/territories"},{default:(0,i.w5)((function(){return[d]})),_:1}),(0,i.Wm)(y,{title:"Bosh sahifa",class:"custom-btn ml-4",to:"/"},{default:(0,i.w5)((function(){return[p,g]})),_:1})]),(0,i._)("canvas",{ref:"canvas",class:(0,i.C_)(["w-full h-full",{"cursor-move":e.$store.state.drag}])},null,2),b.builderToggle?((0,i.wg)(),(0,i.j4)(B,{key:0,id:n.id,onNewmesh:w.reloadMeshes,onClose:t[5]||(t[5]=function(e){return b.builderToggle=!1})},null,8,["id","onNewmesh"])):(0,i.kq)("",!0)],512),b.onload?((0,i.wg)(),(0,i.j4)(k,{key:0})):(0,i.kq)("",!0)],64)}]])}}]);