"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/HomePanel.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/HomePanel.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['Engine'],
  data: function data() {
    return {
      Territories: null
    };
  },
  mounted: function mounted() {
    console.log(store.state.territories);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scene_Viewscene_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene/Viewscene/Canvas */ "./resources/js/scene/Viewscene/Canvas.js");
/* harmony import */ var _components_HomePanel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HomePanel.vue */ "./resources/js/components/HomePanel.vue");
/* harmony import */ var _components_Authentication_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Authentication.vue */ "./resources/js/components/Authentication.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      Engine: null
    };
  },
  mounted: function mounted() {
    this.Engine = (0,_scene_Viewscene_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$refs.BuilderCanvas);
  },
  unmounted: function unmounted() {
    this.Engine.Import.clearActiveMesh();
  },
  components: {
    HomePanel: _components_HomePanel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Authentication: _components_Authentication_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Authentication.vue?vue&type=template&id=e76b5cba":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Authentication.vue?vue&type=template&id=e76b5cba ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed top-0 right-16 mx-2 my-4"
};
var _hoisted_2 = {
  key: 0,
  "class": "flex"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Uchastkalar ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "gg-clapper-board ml-3"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Chiqish ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "gg-log-out ml-3 mr-1"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_5, _hoisted_6];
var _hoisted_8 = {
  key: 1,
  "class": "flex"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Kirish ");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "gg-log-in ml-5 mr-0"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [_ctx.$store.state.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_ctx.$route.name != 'territories' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
    key: 0,
    "class": "custom-btn",
    to: "/territories"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3, _hoisted_4];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$store.dispatch('logout');
    }),
    "class": "custom-btn ml-4"
  }, _hoisted_7)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "custom-btn",
    to: "/login"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, _hoisted_10];
    }),
    _: 1
    /* STABLE */

  })]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/HomePanel.vue?vue&type=template&id=4e6b480a":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/HomePanel.vue?vue&type=template&id=4e6b480a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  ref: "information",
  "class": "fixed bg-white flex shadow bottom-0 left-0 h-52 w-full p-5 border-t border-green-400"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$store.state.territories, function (territory) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_link, {
      "class": "p-2 mx-2 h-full bg-gray-200 shadow-md w-40 uppercase flex items-center justify-center font-bold",
      to: {
        name: 'territory',
        params: {
          id: territory.id
        }
      },
      key: territory
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(territory.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["to"]);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-63cd6604"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "h-full w-full border-transparent",
  ref: "BuilderCanvas"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Authentication = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Authentication");

  var _component_HomePanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("HomePanel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Authentication), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_1, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "lift"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.Engine && _ctx.$store.state.territories ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_HomePanel, {
        key: 0,
        Engine: $data.Engine
      }, null, 8
      /* PROPS */
      , ["Engine"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })], 64
  /* STABLE_FRAGMENT */
  );
}

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

/***/ "./resources/js/scene/Viewscene/Assets/ImportMeshes.js":
/*!*************************************************************!*\
  !*** ./resources/js/scene/Viewscene/Assets/ImportMeshes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Addons_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Addons/Actions */ "./resources/js/scene/Addons/Actions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var _default = /*#__PURE__*/function () {
  function _default(scene) {
    var _this = this;

    _classCallCheck(this, _default);

    this.scene = scene;
    this.Actions = new _Addons_Actions__WEBPACK_IMPORTED_MODULE_1__["default"](scene);
    this.Import();
    this.pickidMesh();
    this.scene.onDataLoadedObservable.add(function () {
      _this.getActiveMeshes();

      var polMat = _this.scene.getMaterialByName('pol');

      polMat.albedoColor = new BABYLON.Color3(0.7, 0.7, 0.6);
    });
  }

  _createClass(_default, [{
    key: "pickidMesh",
    value: function pickidMesh() {
      var _this2 = this;

      this.scene.onPointerPick = function (event, pick) {
        var mesh = pick.pickedMesh;
        if (event.button == 0 || event.button == 2) _this2.clearActiveMesh();

        if (mesh && mesh.metadata.gltf.extras.pickable != 0) {
          store.state.mesh.active = mesh;
          _this2.scene.activeMesh = mesh;

          _this2.Actions.animatePlay(mesh, true);

          _this2.getTerritories(mesh.name);
        }
      };
    }
  }, {
    key: "clearActiveMesh",
    value: function clearActiveMesh() {
      if (store.state.mesh.active) {
        this.Actions.animateStop();
        this.scene.activeMesh.material = this.scene.activeMesh.mainmaterial;
        this.scene.activeMesh = null;
        store.state.mesh.active = null;
        store.state.territories = null;
      }
    }
  }, {
    key: "getTerritories",
    value: function () {
      var _getTerritories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(name) {
        var _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.post("/api/territories/getall", {
                  name: name
                });

              case 2:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                store.state.territories = data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getTerritories(_x) {
        return _getTerritories.apply(this, arguments);
      }

      return getTerritories;
    }()
  }, {
    key: "Import",
    value: function Import() {
      BABYLON.SceneLoader.AppendAsync('./models/view.glb', undefined, this.scene, function (event) {
        var percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0;
      }, ".glb");
    }
  }, {
    key: "getActiveMeshes",
    value: function getActiveMeshes() {
      var _this3 = this;

      this.activeMeshes = this.scene.getNodeByName('active')._children;
      this.activeMeshes.forEach(function (mesh) {
        mesh.actionManager = new BABYLON.ActionManager(_this3.scene);
        mesh.mainmaterial = mesh.material;

        _this3.Actions.hover(mesh);

        _this3.meshSceneNames(mesh);
      });
    }
  }, {
    key: "meshSceneNames",
    value: function meshSceneNames(mesh) {
      var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
      var rect1 = new BABYLON.GUI.Rectangle();
      rect1.width = '100px';
      rect1.height = "36px";
      rect1.cornerRadius = 10;
      rect1.color = "white";
      rect1.thickness = 0;
      rect1.background = "#1db81d6b";
      advancedTexture.addControl(rect1);
      rect1.linkWithMesh(mesh);
      rect1.linkOffsetY = -60;
      var label = new BABYLON.GUI.TextBlock();
      label.text = mesh.name.toUpperCase();
      label.fontSize = '14px';
      console.log(label);
      rect1.addControl(label);
      var target = new BABYLON.GUI.Ellipse();
      target.width = "5px";
      target.height = "5px";
      target.color = "#1db81d6b";
      target.thickness = 1;
      target.background = "#1db81d6b";
      advancedTexture.addControl(target);
      target.linkWithMesh(mesh);
      var line = new BABYLON.GUI.Line();
      line.lineWidth = 2;
      line.color = "#1db81d6b";
      line.y2 = 18;
      line.linkOffsetY = 0;
      advancedTexture.addControl(line);
      line.linkWithMesh(mesh);
      line.connectedControl = rect1;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Viewscene/Assets/Meshes.js":
/*!*******************************************************!*\
  !*** ./resources/js/scene/Viewscene/Assets/Meshes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _Addons_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Addons/Actions */ "./resources/js/scene/Addons/Actions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var _default = /*#__PURE__*/function () {
  function _default(scene) {
    _classCallCheck(this, _default);

    this.scene = scene;
    this.actions = new _Addons_Actions__WEBPACK_IMPORTED_MODULE_0__["default"](scene);

    this._materials(); // this._createGround()

  }

  _createClass(_default, [{
    key: "_materials",
    value: function _materials() {
      var hover = new BABYLON.StandardMaterial("hover", this.scene);
      hover.diffuseColor = BABYLON.Color3.FromHexString('#C8F5FF').toLinearSpace();
      hover.specularColor = new BABYLON.Color3(0, 0, 0);
      var animated = new BABYLON.StandardMaterial("animated", this.scene);
      animated.specularColor = new BABYLON.Color3(0, 0, 0); //ground

      var ground = new BABYLON.StandardMaterial("ground", this.scene);
      ground.diffuseColor = new BABYLON.Color3(1, 1, 1);
      ground.specularColor = new BABYLON.Color3(0, 0, 0);
    }
  }, {
    key: "_createGround",
    value: function _createGround() {
      var ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 2000,
        height: 2000
      }, this.scene);
      ground.actionManager = new BABYLON.ActionManager(this.scene);
      ground.onpickable = false;
      ground.material = this.scene.getMaterialByName('ground');
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Viewscene/Canvas.js":
/*!************************************************!*\
  !*** ./resources/js/scene/Viewscene/Canvas.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _engine_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Scene */ "./resources/js/scene/Viewscene/engine/Scene.js");
/* harmony import */ var _engine_Light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/Light */ "./resources/js/scene/Viewscene/engine/Light.js");
/* harmony import */ var _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Meshes */ "./resources/js/scene/Viewscene/Assets/Meshes.js");
/* harmony import */ var _Assets_ImportMeshes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/ImportMeshes */ "./resources/js/scene/Viewscene/Assets/ImportMeshes.js");
/* harmony import */ var _engine_Camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./engine/Camera */ "./resources/js/scene/Viewscene/engine/Camera.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(canvas) {
  var SceneClass = new _engine_Scene__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
  var CameraClass = new _engine_Camera__WEBPACK_IMPORTED_MODULE_4__["default"](canvas);
  var MeshesClass = new _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__["default"](SceneClass.scene);
  var LightClass = new _engine_Light__WEBPACK_IMPORTED_MODULE_1__["default"]();
  return {
    Scene: SceneClass,
    Camera: CameraClass,
    Light: LightClass,
    Meshes: MeshesClass,
    Import: new _Assets_ImportMeshes__WEBPACK_IMPORTED_MODULE_3__["default"](SceneClass.scene)
  };
}

/***/ }),

/***/ "./resources/js/scene/Viewscene/engine/Camera.js":
/*!*******************************************************!*\
  !*** ./resources/js/scene/Viewscene/engine/Camera.js ***!
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

    _defineProperty(this, "camera", new BABYLON.ArcRotateCamera("camera", 1.294, 0.965, 100, new BABYLON.Vector3(0, 0, 0)));

    this.canvas = canvas;
    this.camera.attachControl(this.canvas, true);
    this.limits();
  }

  _createClass(_default, [{
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

/***/ "./resources/js/scene/Viewscene/engine/Light.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Viewscene/engine/Light.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/_createClass(function _default() {
  _classCallCheck(this, _default);

  _defineProperty(this, "light", new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0)));

  this.light.intensity = 0.5;
});



/***/ }),

/***/ "./resources/js/scene/Viewscene/engine/Scene.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Viewscene/engine/Scene.js ***!
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
      this.scene = new BABYLON.Scene(engine); // this.scene.debugLayer.show({})

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
      var hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", this.scene);
      this.scene.environmentTexture = hdr;
      this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.text-holo[data-v-63cd6604]{\r\n   color: #a5e6ff;\n}\n.lift-enter-active[data-v-63cd6604], .lift-leave-active[data-v-63cd6604] {\r\n  transition: 0.3s;\r\n  opacity: 1;\r\n  transform: translateY(0);\n}\n.lift-enter-from[data-v-63cd6604],.lift-leave-to[data-v-63cd6604]  {\r\n  opacity: 0;\r\n  transform: translateY(100%);\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Authentication.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Authentication.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Authentication_vue_vue_type_template_id_e76b5cba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Authentication.vue?vue&type=template&id=e76b5cba */ "./resources/js/components/Authentication.vue?vue&type=template&id=e76b5cba");
/* harmony import */ var C_OpenServer_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Authentication_vue_vue_type_template_id_e76b5cba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Authentication.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/HomePanel.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/HomePanel.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePanel_vue_vue_type_template_id_4e6b480a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePanel.vue?vue&type=template&id=4e6b480a */ "./resources/js/components/HomePanel.vue?vue&type=template&id=4e6b480a");
/* harmony import */ var _HomePanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePanel.vue?vue&type=script&lang=js */ "./resources/js/components/HomePanel.vue?vue&type=script&lang=js");
/* harmony import */ var C_OpenServer_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HomePanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomePanel_vue_vue_type_template_id_4e6b480a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/HomePanel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604&scoped=true */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/views/Home.vue?vue&type=script&lang=js");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css */ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css");
/* harmony import */ var C_OpenServer_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_OpenServer_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_63cd6604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-63cd6604"],['__file',"resources/js/views/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/HomePanel.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/components/HomePanel.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePanel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/HomePanel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Authentication.vue?vue&type=template&id=e76b5cba":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Authentication.vue?vue&type=template&id=e76b5cba ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Authentication_vue_vue_type_template_id_e76b5cba__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Authentication_vue_vue_type_template_id_e76b5cba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Authentication.vue?vue&type=template&id=e76b5cba */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Authentication.vue?vue&type=template&id=e76b5cba");


/***/ }),

/***/ "./resources/js/components/HomePanel.vue?vue&type=template&id=4e6b480a":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/HomePanel.vue?vue&type=template&id=4e6b480a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePanel_vue_vue_type_template_id_4e6b480a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePanel_vue_vue_type_template_id_4e6b480a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePanel.vue?vue&type=template&id=4e6b480a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/HomePanel.vue?vue&type=template&id=4e6b480a");


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_63cd6604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_63cd6604_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=63cd6604&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true");


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css");


/***/ })

}]);