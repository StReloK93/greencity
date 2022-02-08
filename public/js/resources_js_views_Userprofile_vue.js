"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Userprofile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Userprofile.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Userprofile.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scene_Userscene_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene/Userscene/Canvas */ "./resources/js/scene/Userscene/Canvas.js");
/* harmony import */ var _hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hotkeys */ "./resources/js/hotkeys.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["id"],
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.Engine = (0,_scene_Userscene_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.$refs.BuilderCanvas);
              _hotkeys__WEBPACK_IMPORTED_MODULE_2__["default"].loaderFile(_this.Engine.Scene.scene);
              _context.next = 4;
              return _this.getParents();

            case 4:
              _context.next = 6;
              return _this.getActive();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getParents: function getParents() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get, data, Native;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.customMeshes = [];
                _context2.next = 3;
                return axios.get("/api/getparents/".concat(_this2.id));

              case 3:
                _yield$axios$get = _context2.sent;
                data = _yield$axios$get.data;
                Native = _this2.Engine.Meshes;
                data.forEach(function (element) {
                  Native.createMesh(element);

                  _this2.customMeshes.push({
                    clientname: element.clientname,
                    name: element.name
                  });
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getActive: function getActive() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var Native;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                Native = _this3.Engine.Meshes;
                Native.getMeshes(_this3.id);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Userprofile.vue?vue&type=template&id=92f9f7a2":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Userprofile.vue?vue&type=template&id=92f9f7a2 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "uppercase fixed top-0 right-0 text-green-600"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Constructor");

var _hoisted_3 = {
  key: 1,
  "class": "uppercase fixed top-0 right-0 text-blue-600"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Kirish");

var _hoisted_5 = {
  "class": "h-full w-full border-transparent",
  ref: "BuilderCanvas"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_ctx.$store.state.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "shadow inline-block p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white",
    to: "/constructor"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_2];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$store.dispatch('logout');
    }),
    "class": "shadow uppercase inline-block text-green-600 p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white"
  }, "Tizimdan chiqish")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "shadow inline-block p-2 px-4 m-3 border border-green-600 hover:bg-green-600 hover:text-white",
    to: "/login"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  })])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_5, null, 512
  /* NEED_PATCH */
  )], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/fructColor.js":
/*!************************************!*\
  !*** ./resources/js/fructColor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: 'olma',
  color: '#2feb71'
}, {
  name: 'behi',
  color: '#fdeb1c'
}, {
  name: 'shaftoli',
  color: '#ba2222'
}]);

/***/ }),

/***/ "./resources/js/hotkeys.js":
/*!*********************************!*\
  !*** ./resources/js/hotkeys.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loaderFile(scene) {
  window.onkeyup = function (event) {
    if (event.keyCode == 107) {
      if (store.state.inspector) {
        scene.debugLayer.show({
          embedMode: true
        });
      } else {
        scene.debugLayer.hide();
      }

      store.state.inspector = !store.state.inspector;
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loaderFile: loaderFile
});

/***/ }),

/***/ "./resources/js/scene/Addons/Actions.js":
/*!**********************************************!*\
  !*** ./resources/js/scene/Addons/Actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function () {
  function _default(scene) {
    _classCallCheck(this, _default);

    _defineProperty(this, "keysArr", [{
      frame: 0,
      value: BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace()
    }, {
      frame: 20,
      value: new BABYLON.Color3(1, 1, 1)
    }, {
      frame: 20,
      value: new BABYLON.Color3(1, 1, 1)
    }, {
      frame: 40,
      value: BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace()
    }]);

    this.scene = scene;
  }

  _createClass(_default, [{
    key: "hover",
    value: function hover(mesh) {
      var _this = this;

      var material = mesh.material;
      mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnPointerOverTrigger
      }, function () {
        if (_this.scene.activeMesh != mesh) mesh.material = _this.scene.getMaterialByName('hover');
      }));
      mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnPointerOutTrigger
      }, function () {
        if (_this.scene.activeMesh != mesh) {
          mesh.material = material;
        }
      }));
    }
  }, {
    key: "animate",
    value: function animate(parametr, property) {
      var keysArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.keysArr;
      this.animation = new BABYLON.Animation("newBlink", parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      this.animation.setKeys(keysArr);
      this.animationGroup = new BABYLON.AnimationGroup("newBlinkGroup");
    }
  }, {
    key: "animatePlay",
    value: function animatePlay(mesh) {
      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (select) {
        this.animate('material.diffuseColor', BABYLON.Animation.ANIMATIONTYPE_COLOR3);
      }

      mesh.material = this.scene.getMaterialByName('animated');
      this.animationGroup.addTargetedAnimation(this.animation, mesh);
      this.animationGroup.play(true);
    }
  }, {
    key: "animateStop",
    value: function animateStop() {
      this.animationGroup.stop();
      this.animationGroup.dispose();
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Addons/Materials.js":
/*!************************************************!*\
  !*** ./resources/js/scene/Addons/Materials.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Materials)
/* harmony export */ });
/* harmony import */ var _fructColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fructColor */ "./resources/js/fructColor.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Materials = /*#__PURE__*/_createClass(function Materials(scene) {
  _classCallCheck(this, Materials);

  //building
  var building = new BABYLON.StandardMaterial("building", scene);
  building.diffuseColor = new BABYLON.Color3.FromHexString('#EFDC9A');
  building.specularColor = new BABYLON.Color3(0, 0, 0); //ground

  var ground = new BABYLON.StandardMaterial("ground", scene);
  ground.diffuseColor = new BABYLON.Color3(1, 1, 1);
  ground.specularColor = new BABYLON.Color3(0, 0, 0); //hover

  var hover = new BABYLON.StandardMaterial("hover", scene);
  hover.diffuseColor = BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace();
  hover.specularColor = new BABYLON.Color3(0, 0, 0); //fructColor

  _fructColor__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (fruct) {
    var myMaterial = new BABYLON.StandardMaterial(fruct.name, scene);
    myMaterial.diffuseColor = BABYLON.Color3.FromHexString(fruct.color).toLinearSpace();
  });
  var BluePoints = new BABYLON.StandardMaterial('BluePoints', this.scene);
  BluePoints.diffuseColor = BABYLON.Color3.FromHexString('#3268D1');
  BluePoints.specularColor = new BABYLON.Color3(0, 0, 0);
  var animated = new BABYLON.StandardMaterial("animated", this.scene);
  animated.specularColor = new BABYLON.Color3(0, 0, 0);
});



/***/ }),

/***/ "./resources/js/scene/Userscene/Assets/ImportMeshes.js":
/*!*************************************************************!*\
  !*** ./resources/js/scene/Userscene/Assets/ImportMeshes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default(scene) {
    var _this = this;

    _classCallCheck(this, _default);

    this.scene = scene;
    this.Import();
    scene.onDataLoadedObservable.add(function () {
      _this.hideMeshes(['plant', 'house']);
    });
  }

  _createClass(_default, [{
    key: "Import",
    value: function Import() {
      BABYLON.SceneLoader.AppendAsync('/models/assets.glb', undefined, this.scene, function (event) {
        var percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0;
      }, ".glb");
    }
  }, {
    key: "hideMeshes",
    value: function hideMeshes(meshNames) {
      var _this2 = this;

      meshNames.forEach(function (meshname) {
        var mesh = _this2.scene.getNodeByName(meshname);

        mesh.setAbsolutePosition(40000, mesh.position.y, 40000);
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Userscene/Assets/Meshes.js":
/*!*******************************************************!*\
  !*** ./resources/js/scene/Userscene/Assets/Meshes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Addons_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Addons/Actions */ "./resources/js/scene/Addons/Actions.js");
/* harmony import */ var _ImportMeshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImportMeshes */ "./resources/js/scene/Userscene/Assets/ImportMeshes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var _default = /*#__PURE__*/function () {
  function _default(scene) {
    _classCallCheck(this, _default);

    this.scene = scene;
    this.actions = new _Addons_Actions__WEBPACK_IMPORTED_MODULE_1__["default"](scene);
    new _ImportMeshes__WEBPACK_IMPORTED_MODULE_2__["default"](scene);
  }

  _createClass(_default, [{
    key: "createMesh",
    value: function createMesh(mesh) {
      if (this.scene.getNodeByName(mesh.name)) return;
      var readypoints = [];
      var points = JSON.parse(mesh.points);
      points.forEach(function (point) {
        readypoints.push(new BABYLON.Vector3(point.x, point.y, point.z));
      });
      var customMesh = BABYLON.MeshBuilder.ExtrudePolygon(mesh.name, {
        shape: readypoints,
        depth: 5,
        wrap: true
      }, this.scene);
      customMesh.scaling = new BABYLON.Vector3(1, 1, -1);
      customMesh.material = this.scene.getMaterialByName('building');
      customMesh.mainmaterial = this.scene.getMaterialByName('building');
      customMesh.position.y = 0.01;
      customMesh.position.x = 40000;
      customMesh.position.z = 40000;
      customMesh.rotation.x = Math.PI;
    }
  }, {
    key: "getMeshes",
    value: function () {
      var _getMeshes = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
        var _this = this;

        var meshes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/getallfinal/".concat(id));

              case 2:
                meshes = _context.sent;
                meshes.data.forEach(function (mesh) {
                  var position = JSON.parse(mesh.position);

                  var getmesh = _this.scene.getNodeByName(mesh.parentname);

                  var mymesh = getmesh.clone(mesh.name);
                  mymesh.material = _this.scene.getMaterialByName(mesh.materialname);
                  mymesh.mainmaterial = _this.scene.getMaterialByName(mesh.materialname);
                  mymesh.setAbsolutePosition(position._x, position._y, position._z);

                  if (mesh.parentname == 'plant') {
                    mymesh.scaling.y = 1;
                  } else {
                    mymesh.scaling.y = mesh.height;
                  }

                  mymesh.actionManager = new BABYLON.ActionManager(_this.scene);

                  _this.actions.hover(mymesh);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getMeshes(_x) {
        return _getMeshes.apply(this, arguments);
      }

      return getMeshes;
    }()
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Userscene/Canvas.js":
/*!************************************************!*\
  !*** ./resources/js/scene/Userscene/Canvas.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _engine_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Scene */ "./resources/js/scene/Userscene/engine/Scene.js");
/* harmony import */ var _engine_Light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/Light */ "./resources/js/scene/Userscene/engine/Light.js");
/* harmony import */ var _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Meshes */ "./resources/js/scene/Userscene/Assets/Meshes.js");
/* harmony import */ var _engine_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/Camera */ "./resources/js/scene/Userscene/engine/Camera.js");
/* harmony import */ var _Addons_Materials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Addons/Materials */ "./resources/js/scene/Addons/Materials.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(canvas) {
  var SceneClass = new _engine_Scene__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
  var CameraClass = new _engine_Camera__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
  var MeshesClass = new _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__["default"](SceneClass.scene);
  var LightClass = new _engine_Light__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _Addons_Materials__WEBPACK_IMPORTED_MODULE_4__["default"](SceneClass.scene);
  return {
    Scene: SceneClass,
    Camera: CameraClass,
    Light: LightClass,
    Meshes: MeshesClass
  };
}

/***/ }),

/***/ "./resources/js/scene/Userscene/engine/Camera.js":
/*!*******************************************************!*\
  !*** ./resources/js/scene/Userscene/engine/Camera.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function () {
  function _default(canvas) {
    _classCallCheck(this, _default);

    _defineProperty(this, "camera", new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, 0, 40, new BABYLON.Vector3(0, 0, 0)));

    this.canvas = canvas;
    this.createCamera();
    this.limits();
  }

  _createClass(_default, [{
    key: "createCamera",
    value: function createCamera() {
      var _this = this;

      this.camera.attachControl(this.canvas, true);
      this.camera.mode = 1;
      this.camera.minZ = 0;
      this.camera.onViewMatrixChangedObservable.add(function () {
        _this.orthographic();
      }); //listener for resize orthographic camera

      window.addEventListener("resize", function () {
        _this.orthographic();
      });
    }
  }, {
    key: "orthographic",
    value: function orthographic() {
      var proportion = this.canvas.width / this.canvas.height;
      this.camera.orthoTop = this.camera.radius / proportion;
      this.camera.orthoBottom = -this.camera.radius / proportion;
      this.camera.orthoLeft = -this.camera.radius;
      this.camera.orthoRight = this.camera.radius;
    }
  }, {
    key: "limits",
    value: function limits() {
      this.camera.useBouncingBehavior = true;
      this.camera.lowerRadiusLimit = 25;
      this.camera.upperRadiusLimit = 240; // this.camera.lowerAlphaLimit = -Math.PI/2
      // this.camera.upperAlphaLimit = -Math.PI/2
      // this.camera.lowerBetaLimit = 0
      // this.camera.upperBetaLimit = 0
      // upperRadiusLimit

      this.camera.inputs.attached.keyboard.detachControl(); // this.camera.inputs.attached.mousewheel.detachControl();

      this.camera.inputs.attached.pointers.buttons = [1, 2];
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Userscene/engine/Light.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Userscene/engine/Light.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    this.createLight();
  }

  _createClass(_default, [{
    key: "createLight",
    value: function createLight() {
      this.light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Userscene/engine/Scene.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Userscene/engine/Scene.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default(canvas) {
    _classCallCheck(this, _default);

    this.canvas = canvas;
    this.createScene();
    this.setEnvironment();
  }

  _createClass(_default, [{
    key: "createScene",
    value: function createScene() {
      var _this = this;

      var engine = new BABYLON.Engine(this.canvas, true);
      this.scene = new BABYLON.Scene(engine);
      engine.runRenderLoop(function () {
        _this.scene.render();
      });
      window.addEventListener("resize", function () {
        engine.resize();
      });
    }
  }, {
    key: "setEnvironment",
    value: function setEnvironment() {
      var hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/hdrmini.env", this.scene);
      this.scene.environmentTexture = hdr;
      this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/views/Userprofile.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Userprofile.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Userprofile_vue_vue_type_template_id_92f9f7a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Userprofile.vue?vue&type=template&id=92f9f7a2 */ "./resources/js/views/Userprofile.vue?vue&type=template&id=92f9f7a2");
/* harmony import */ var _Userprofile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Userprofile.vue?vue&type=script&lang=js */ "./resources/js/views/Userprofile.vue?vue&type=script&lang=js");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Userprofile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Userprofile_vue_vue_type_template_id_92f9f7a2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Userprofile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Userprofile.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/views/Userprofile.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Userprofile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Userprofile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Userprofile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Userprofile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Userprofile.vue?vue&type=template&id=92f9f7a2":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Userprofile.vue?vue&type=template&id=92f9f7a2 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Userprofile_vue_vue_type_template_id_92f9f7a2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Userprofile_vue_vue_type_template_id_92f9f7a2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Userprofile.vue?vue&type=template&id=92f9f7a2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Userprofile.vue?vue&type=template&id=92f9f7a2");


/***/ })

}]);