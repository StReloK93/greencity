(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Configurator_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scene_MeshBuilder_BuilderBundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene/MeshBuilder/BuilderBundle */ "./resources/js/scene/MeshBuilder/BuilderBundle.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      clientname: ""
    };
  },
  mounted: function mounted() {
    this.MeshBuilder = (0,_scene_MeshBuilder_BuilderBundle__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$refs.BuilderCanvas);
  },
  methods: {
    insertPoints: function insertPoints() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var points, _yield$axios$get, data, meshName;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                points = _this.MeshBuilder.Meshes.getPoints();
                _context.next = 3;
                return axios.get('/api/getmeshes');

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                meshName = 'createdMesh' + data.length;

                if (!(points.length > 2)) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return axios.post('/api/savepoints', {
                  points: points,
                  name: meshName,
                  clientname: _this.clientname
                });

              case 9:
                _this.$emit('newmesh');

                _this.$emit('close');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hotkeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hotkeys */ "./resources/js/hotkeys.js");
/* harmony import */ var _scene_Mainscene_Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene/Mainscene/Canvas */ "./resources/js/scene/Mainscene/Canvas.js");
/* harmony import */ var _fructColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fructColor */ "./resources/js/fructColor.js");
/* harmony import */ var _components_MeshBuilder_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/MeshBuilder.vue */ "./resources/js/components/MeshBuilder.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      fructs: _fructColor__WEBPACK_IMPORTED_MODULE_3__["default"],
      fructMenu: false,
      customMenu: false,
      builderToggle: false,
      customMeshes: []
    };
  },
  mounted: function mounted() {
    window.canvas = this.$refs.canvas;
    window.Engine = (0,_scene_Mainscene_Canvas__WEBPACK_IMPORTED_MODULE_2__["default"])();
    _hotkeys__WEBPACK_IMPORTED_MODULE_1__["default"].loaderFile(this.$refs.room);
    scene.onDataLoadedObservable.add(function () {
      var Native = Engine.Meshes["native"];
      Native.getMeshes();
    });
    this.reloadMeshes();
  },
  methods: {
    addFruct: function addFruct(fruct, plant) {
      this.fructMenu = false;
      var meshClass = Engine.Meshes;
      meshClass.newMesh(fruct, plant, event);
    },
    addBuilding: function addBuilding(build, house) {
      this.customMenu = false;
      var meshClass = Engine.Meshes;
      meshClass.newMesh(build, house, event);
    },
    openMeshBuilder: function openMeshBuilder() {
      this.builderToggle = !this.builderToggle;
    },
    reloadMeshes: function reloadMeshes() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data, Native;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.customMeshes = [];
                _context.next = 3;
                return axios.get('/api/getmeshes');

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                Native = Engine.Meshes["native"];
                data.forEach(function (element) {
                  Native.createMesh(element);

                  _this.customMeshes.push({
                    clientname: element.clientname,
                    name: element.name
                  });
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  components: {
    MeshBuilder: _components_MeshBuilder_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-full w-full absolute top-0 left-0 p-8 bg-black bg-opacity-60"
};
var _hoisted_2 = {
  "class": "h-full w-full border-transparent",
  ref: "BuilderCanvas"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/close.png",
  "class": "imgwhite w-4"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_3];
var _hoisted_5 = {
  "class": "absolute bottom-0 right-0 m-3"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "bg-green-600 p-2 px-4 text-white shadow-xl hover:bg-gray-700"
}, " Saqlash ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    "class": "relative h-full shadow border-2 border-gray-500",
    onKeypress: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["prevent"]), ["enter"])),
    onSubmit: _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.insertPoints && $options.insertPoints.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_2, null, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('close');
    }),
    "class": "absolute flex items-center justify-center top-0 right-0 bg-red-500 p-2 px-4 m-3 shadow-xl hover:bg-red-700"
  }, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.clientname = $event;
    }),
    "class": "p-2 outline-none",
    placeholder: "Nomi",
    required: ""
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.clientname]]), _hoisted_6])], 32
  /* HYDRATE_EVENTS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=template&id=26eb2154&lang=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=template&id=26eb2154&lang=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "h-full w-5/6 relative p-1 shadow-inner bg-gray-100",
  ref: "room"
};
var _hoisted_2 = {
  "class": "absolute top-0 left-0 m-4"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/tree.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_4 = ["onClick"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/build.png",
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_6 = ["onClick"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "color shadow-xl"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/plus.png",
  style: {
    "transform": "scale(0.5)"
  },
  alt: ""
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_8];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MeshBuilder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("MeshBuilder");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      $data.fructMenu = !$data.fructMenu;
      $data.customMenu = false;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-gray-200': $data.fructMenu
    }, "m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200"])
  }, [_hoisted_3, $data.fructMenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"])),
    "class": "menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.fructs, function (fruct) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: fruct,
      onClick: function onClick($event) {
        return $options.addFruct(fruct.name, 'plant');
      },
      "class": "flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 mb-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(fruct.name) + " ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        background: fruct.color
      }),
      "class": "color shadow-xl"
    }, null, 4
    /* STYLE */
    )], 8
    /* PROPS */
    , _hoisted_4);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), $data.customMeshes.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    onClick: _cache[3] || (_cache[3] = function ($event) {
      $data.customMenu = !$data.customMenu;
      $data.fructMenu = false;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      'bg-gray-200': $data.customMenu
    }, "m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl relative cursor-pointer hover:bg-gray-200"])
  }, [_hoisted_5, $data.customMenu ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
    key: 0,
    onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"])),
    "class": "menu absolute bg-gray-100 shadow-xl px-4 py-2 top-0 text-gray-500"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.customMeshes, function (custom, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      onClick: function onClick($event) {
        return $options.addBuilding('building', custom.name);
      },
      "class": "flex items-center capitalize justify-between cursor-pointer hover:bg-green-500 hover:text-red-50 py-1 px-2 pb-2"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(custom.clientname) + " ", 1
    /* TEXT */
    ), _hoisted_7], 8
    /* PROPS */
    , _hoisted_6);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.openMeshBuilder && $options.openMeshBuilder.apply($options, arguments);
    }),
    "class": "m-2 mb-5 w-14 bg-white p-4 rounded-full shadow-xl cursor-pointer hover:bg-gray-200"
  }, _hoisted_9)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", {
    ref: "canvas",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-full h-full", {
      'cursor-move': _ctx.$store.state.activeMesh
    }])
  }, null, 2
  /* CLASS */
  ), $data.builderToggle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MeshBuilder, {
    key: 0,
    onNewmesh: $options.reloadMeshes,
    onClose: _cache[5] || (_cache[5] = function ($event) {
      return $data.builderToggle = false;
    })
  }, null, 8
  /* PROPS */
  , ["onNewmesh"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
  /* NEED_PATCH */
  );
}

/***/ }),

/***/ "./resources/js/fructColor.js":
/*!************************************!*\
  !*** ./resources/js/fructColor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function onFullScreenChange() {
  var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

  if (fullscreenElement) {
    store.state.fullscreen = true;
  } else {
    store.state.fullscreen = false;
  }

  window.dispatchEvent(new Event('resize'));
}

function requestFullScreen(element) {
  // Supports most browsers and their versions.
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

  if (requestMethod) {
    // Native full screen.
    requestMethod.call(element);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // Older IE.
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

function loaderFile(file) {
  document.addEventListener("fullscreenchange", onFullScreenChange, false);
  document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
  document.addEventListener("mozfullscreenchange", onFullScreenChange, false);

  window.onkeyup = function (event) {
    if (event.keyCode == 32) {
      if (store.state.fullscreen) {
        closeFullscreen();
      } else {
        requestFullScreen(file);
      }
    }

    if (event.keyCode == 107) {
      if (store.state.inspector) {
        scene.debugLayer.show({
          embedMode: true
        });
        window.dispatchEvent(new Event('resize'));
      } else {
        scene.debugLayer.hide();
        window.dispatchEvent(new Event('resize'));
      }

      store.state.inspector = !store.state.inspector;
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loaderFile: loaderFile,
  requestFullScreen: requestFullScreen,
  closeFullscreen: closeFullscreen
});

/***/ }),

/***/ "./resources/js/scene/Assets/Actions.js":
/*!**********************************************!*\
  !*** ./resources/js/scene/Assets/Actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  }

  _createClass(_default, [{
    key: "hover",
    value: function hover(mesh, scene) {
      var material = mesh.material;
      mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnPointerOverTrigger
      }, function () {
        if (scene.activeMesh != mesh) mesh.material = scene.getMaterialByName('hover');
      }));
      mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnPointerOutTrigger
      }, function () {
        if (scene.activeMesh != mesh) mesh.material = material;
      }));
    }
  }, {
    key: "animate",
    value: function animate(parametr, property, keysArr) {
      this.animation = new BABYLON.Animation("newBlink", parametr, 60, property, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      this.animation.setKeys(keysArr);
      this.animationGroup = new BABYLON.AnimationGroup("newBlinkGroup");
    }
  }, {
    key: "animatePlay",
    value: function animatePlay(mesh) {
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

/***/ "./resources/js/scene/Assets/Grid.js":
/*!*******************************************!*\
  !*** ./resources/js/scene/Assets/Grid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default(_ref) {
    var _ref$lines = _ref.lines,
        lines = _ref$lines === void 0 ? false : _ref$lines,
        _ref$grid = _ref.grid,
        grid = _ref$grid === void 0 ? false : _ref$grid;

    _classCallCheck(this, _default);

    if (lines) this.Lines();
    if (grid) this.Grid();
  }

  _createClass(_default, [{
    key: "Lines",
    value: function Lines() {
      var pointsX = [new BABYLON.Vector3(-300, 0, 0), new BABYLON.Vector3(300, 0, 0)];
      var colorsX = [new BABYLON.Color4(0.5, 0, 0, 0.3), new BABYLON.Color4(0.5, 0, 0, 0.3)];
      var linex = BABYLON.MeshBuilder.CreateLines("lineX", {
        points: pointsX,
        colors: colorsX
      });
      linex.isPickable = false;
      linex.position.y = 0.002;
      var pointsZ = [new BABYLON.Vector3(0, 0, -300), new BABYLON.Vector3(0, 0, 300)];
      var colorZ = [new BABYLON.Color4(0, 0, 0.5, 0.3), new BABYLON.Color4(0, 0, 0.5, 0.3)];
      var linez = BABYLON.MeshBuilder.CreateLines("lineZ", {
        points: pointsZ,
        colors: colorZ
      });
      linez.isPickable = false;
      linez.position.y = 0.002;
    }
  }, {
    key: "Grid",
    value: function Grid() {
      var groundMaterial = new BABYLON.GridMaterial("groundMaterial");
      groundMaterial.majorUnitFrequency = 1;
      groundMaterial.minorUnitVisibility = 0.1;
      groundMaterial.gridRatio = 1;
      groundMaterial.backFaceCulling = false;
      groundMaterial.mainColor = new BABYLON.Color3(1, 1, 1);
      groundMaterial.lineColor = new BABYLON.Color3(1.0, 1.0, 1.0);
      groundMaterial.opacity = 0.3;
      var ground = BABYLON.Mesh.CreateGround("GridMain", 20000, 20000, 2);
      ground.position.y = 0.001;
      ground.material = groundMaterial;
      ground.isPickable = false;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Assets/Materials.js":
/*!************************************************!*\
  !*** ./resources/js/scene/Assets/Materials.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  hover.diffuseColor = new BABYLON.Color3(1, 1, 0);
  hover.specularColor = new BABYLON.Color3(0, 0, 0); //fructColor

  _fructColor__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (fruct) {
    var myMaterial = new BABYLON.StandardMaterial(fruct.name, scene);
    myMaterial.diffuseColor = BABYLON.Color3.FromHexString(fruct.color).toLinearSpace();
  });
  var BluePoints = new BABYLON.StandardMaterial('BluePoints', this.scene);
  BluePoints.diffuseColor = BABYLON.Color3.FromHexString('#3268D1');
  BluePoints.specularColor = new BABYLON.Color3(0, 0, 0);
  new BABYLON.StandardMaterial("animated", this.scene);
});



/***/ }),

/***/ "./resources/js/scene/Mainscene/Assets/ImportMeshes.js":
/*!*************************************************************!*\
  !*** ./resources/js/scene/Mainscene/Assets/ImportMeshes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var _default = /*#__PURE__*/function () {
  function _default() {
    var _this = this;

    _classCallCheck(this, _default);

    this.Import();
    scene.onDataLoadedObservable.add(function () {
      _this.hideMeshes(['plant', 'house']);
    });
  }

  _createClass(_default, [{
    key: "Import",
    value: function Import() {
      BABYLON.SceneLoader.AppendAsync('./models/assets.glb', undefined, scene, function (event) {
        var percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0;
      }, ".glb");
    }
  }, {
    key: "hideMeshes",
    value: function hideMeshes(meshNames) {
      meshNames.forEach(function (meshname) {
        var mesh = scene.getNodeByName(meshname);
        mesh.setAbsolutePosition(1000, mesh.position.y, 1000);
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Mainscene/Assets/Meshes.js":
/*!*******************************************************!*\
  !*** ./resources/js/scene/Mainscene/Assets/Meshes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Assets/Actions */ "./resources/js/scene/Assets/Actions.js");
/* harmony import */ var _NativeMeshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NativeMeshes */ "./resources/js/scene/Mainscene/Assets/NativeMeshes.js");
/* harmony import */ var _ImportMeshes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImportMeshes */ "./resources/js/scene/Mainscene/Assets/ImportMeshes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "actions", new _Assets_Actions__WEBPACK_IMPORTED_MODULE_1__["default"]());

    this["native"] = new _NativeMeshes__WEBPACK_IMPORTED_MODULE_2__["default"]();
    new _ImportMeshes__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.PickingMesh();
  }

  _createClass(_default, [{
    key: "numRound",
    value: function numRound(num, precision) {
      return Math.round(num / precision) * precision;
    }
  }, {
    key: "newMesh",
    value: function newMesh(name, parent, event) {
      var getmesh = scene.getNodeByName(parent);
      var mesh = getmesh.clone(name + Date.now());
      var material = scene.getMaterialByName(name);
      if (material) mesh.material = scene.getMaterialByName(name);
      store.state.activeMesh = true;
      this.dragnDrop(mesh, parent, event);
    }
  }, {
    key: "dragnDrop",
    value: function dragnDrop(mesh, parent, event) {
      var _this = this;

      mesh.visibility = 0.5;

      scene.onPointerMove = function (a, pickInfo) {
        if (pickInfo.pickedPoint) {
          var coorX = _this.numRound(pickInfo.pickedPoint.x, 0.5);

          var coorZ = _this.numRound(pickInfo.pickedPoint.z, 0.5);

          mesh.setAbsolutePosition(coorX, mesh.position.y, coorZ);
        }
      };

      scene.simulatePointerMove(scene.pick(event.clientX, event.clientY));

      scene.onPointerPick = function (event) {
        if (!store.state.activeMesh) return;

        if (event.button == 0) {
          mesh.visibility = 1;
          mesh.actionManager = new BABYLON.ActionManager(scene);

          _this.actions.hover(mesh, scene);

          _this.saveMeshProperties(mesh, parent);
        }

        if (event.button == 2) {
          mesh.dispose();
        }

        scene.onPointerMove = null;
        store.state.activeMesh = false;
        scene.onPointerPick = null;
      };
    }
  }, {
    key: "saveMeshProperties",
    value: function () {
      var _saveMeshProperties = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(mesh, parent) {
        var name, material, position;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = mesh.name;
                material = mesh.material.name;
                position = mesh.absolutePosition;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/savemeshes', {
                  name: name,
                  position: position,
                  material: material,
                  parent: parent
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function saveMeshProperties(_x, _x2) {
        return _saveMeshProperties.apply(this, arguments);
      }

      return saveMeshProperties;
    }()
  }, {
    key: "PickingMesh",
    value: function PickingMesh() {
      scene.onPointerDown = function (event, pick) {
        if (pick.pickedMesh) console.log(pick.pickedMesh.name);
      };
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Mainscene/Assets/NativeMeshes.js":
/*!*************************************************************!*\
  !*** ./resources/js/scene/Mainscene/Assets/NativeMeshes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Assets_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Assets/Actions */ "./resources/js/scene/Assets/Actions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  function _default() {
    var _this = this;

    _classCallCheck(this, _default);

    _defineProperty(this, "actions", new _Assets_Actions__WEBPACK_IMPORTED_MODULE_1__["default"]());

    scene.onDataLoadedObservable.add(function () {
      _this._createGround();
    });
  }

  _createClass(_default, [{
    key: "_createGround",
    value: function _createGround() {
      var ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 1000,
        height: 1000
      }, scene);
      ground.actionManager = new BABYLON.ActionManager(scene);
      ground.material = scene.getMaterialByName('ground');
    }
  }, {
    key: "createMesh",
    value: function createMesh(meshes) {
      if (scene.getNodeByName(meshes.name)) return;
      var readypoints = [];
      var points = JSON.parse(meshes.points);
      points.forEach(function (point) {
        readypoints.push(new BABYLON.Vector3(point.x, point.y, point.z));
      });
      var customMesh = BABYLON.MeshBuilder.ExtrudePolygon(meshes.name, {
        shape: readypoints,
        depth: 5,
        wrap: true
      }, scene);
      customMesh.scaling = new BABYLON.Vector3(1, 1, -1);
      customMesh.material = scene.getMaterialByName('building');
      customMesh.position.y = 0.01;
      customMesh.position.x = 1000;
      customMesh.position.z = 1000;
      customMesh.rotation.x = Math.PI;
    }
  }, {
    key: "getMeshes",
    value: function () {
      var _getMeshes = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this2 = this;

        var meshes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/getactivemeshes');

              case 2:
                meshes = _context.sent;
                meshes.data.forEach(function (mesh) {
                  var getmesh = scene.getNodeByName(mesh.parentname);
                  var mymesh = getmesh.clone(mesh.name);
                  mymesh.material = scene.getMaterialByName(mesh.materialname);
                  var position = JSON.parse(mesh.position);
                  mymesh.setAbsolutePosition(position._x, position._y, position._z);
                  mymesh.actionManager = new BABYLON.ActionManager(scene);

                  _this2.actions.hover(mymesh, scene);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getMeshes() {
        return _getMeshes.apply(this, arguments);
      }

      return getMeshes;
    }()
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Mainscene/Canvas.js":
/*!************************************************!*\
  !*** ./resources/js/scene/Mainscene/Canvas.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _engine_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Scene */ "./resources/js/scene/Mainscene/engine/Scene.js");
/* harmony import */ var _engine_Light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/Light */ "./resources/js/scene/Mainscene/engine/Light.js");
/* harmony import */ var _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Meshes */ "./resources/js/scene/Mainscene/Assets/Meshes.js");
/* harmony import */ var _engine_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/Camera */ "./resources/js/scene/Mainscene/engine/Camera.js");
/* harmony import */ var _Assets_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/Grid */ "./resources/js/scene/Assets/Grid.js");
/* harmony import */ var _Assets_Materials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/Materials */ "./resources/js/scene/Assets/Materials.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var SceneClass = new _engine_Scene__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var CameraClass = new _engine_Camera__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var MeshesClass = new _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__["default"](CameraClass);
  var LightClass = new _engine_Light__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _Assets_Materials__WEBPACK_IMPORTED_MODULE_5__["default"](scene);
  new _Assets_Grid__WEBPACK_IMPORTED_MODULE_4__["default"]({
    lines: true,
    grid: true
  });
  return {
    Scene: SceneClass,
    Camera: CameraClass,
    Light: LightClass,
    Meshes: MeshesClass
  };
} // scene.onDataLoadedObservable.add(function(){
//    console.log('onDataLoadedObservable');
// })
// scene.executeWhenReady(function(){
//    console.log('executeWhenReadySearch');
// })

/***/ }),

/***/ "./resources/js/scene/Mainscene/engine/Camera.js":
/*!*******************************************************!*\
  !*** ./resources/js/scene/Mainscene/engine/Camera.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "camera", new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, 0, 40, new BABYLON.Vector3(0, 0, 0)));

    this.createCamera();
    this.limits();
  }

  _createClass(_default, [{
    key: "createCamera",
    value: function createCamera() {
      var _this = this;

      this.camera.attachControl(canvas, true);
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
      var proportion = canvas.width / canvas.height;
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
      this.camera.upperRadiusLimit = 120; // this.camera.lowerAlphaLimit = -Math.PI/2
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

/***/ "./resources/js/scene/Mainscene/engine/Light.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Mainscene/engine/Light.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/scene/Mainscene/engine/Scene.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Mainscene/engine/Scene.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

    this.createScene();
    this.setEnvironment();
  }

  _createClass(_default, [{
    key: "createScene",
    value: function createScene() {
      var engine = new BABYLON.Engine(canvas, true);
      window.scene = new BABYLON.Scene(engine);
      engine.runRenderLoop(function () {
        scene.render();
      });
      window.addEventListener("resize", function () {
        engine.resize();
      });
    }
  }, {
    key: "setEnvironment",
    value: function setEnvironment() {
      var hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("./textures/hdrmini.env", scene);
      scene.environmentTexture = hdr;
      scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/MeshBuilder/Assets/BuilderMeshes.js":
/*!****************************************************************!*\
  !*** ./resources/js/scene/MeshBuilder/Assets/BuilderMeshes.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _Assets_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Assets/Actions */ "./resources/js/scene/Assets/Actions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  function _default(scene) {
    _classCallCheck(this, _default);

    _defineProperty(this, "points", []);

    _defineProperty(this, "finishedPoints", []);

    _defineProperty(this, "actions", new _Assets_Actions__WEBPACK_IMPORTED_MODULE_0__["default"]());

    this.scene = scene;
    this.createGround();
    this.onKeyboard();
    this.onDoubleClick();
    this.onClick();
  }

  _createClass(_default, [{
    key: "onClick",
    value: function onClick() {
      var _this = this;

      this.scene.onPointerDown = function (event, pickInfo) {
        //picked active point
        if (pickInfo.pickedMesh.type == 'linepoint') {
          var mesh = pickInfo.pickedMesh;
          mesh.material = _this.scene.getMaterialByName('animated'); // mishkani ong tomonini bosganda active elementni ochiramiz

          if (_this.scene.activeMesh && mesh != _this.scene.activeMesh) {
            _this.clearActiveMesh();
          }

          _this.actions.animate('material.diffuseColor', BABYLON.Animation.ANIMATIONTYPE_COLOR3, [{
            frame: 0,
            value: new BABYLON.Color3(0, 1, 0)
          }, {
            frame: 60,
            value: new BABYLON.Color3(0, 0, 0)
          }]);

          _this.scene.activeMesh = mesh;

          _this.actions.animatePlay(mesh);

          return;
        } //mishkani ong tomonini bosganda active elementni ochiramiz


        if (event.button == 2 && _this.scene.activeMesh) {
          _this.clearActiveMesh();
        }
      };
    }
  }, {
    key: "onDoubleClick",
    value: function onDoubleClick() {
      var _this2 = this;

      this.scene.onPointerObservable.add(function (click) {
        if (click.type == BABYLON.PointerEventTypes.POINTERDOUBLETAP) {
          var pickedPoint = _this2.gridCoords(click.pickInfo); //agar active element bolsa nima qilamiz ?


          if (_this2.scene.activeMesh) {
            var index = _this2.points.findIndex(function (point) {
              return point.mesh === _this2.scene.activeMesh;
            });

            _this2.points[index].mesh.position = pickedPoint;
            _this2.points[index].coordinate = pickedPoint;

            _this2.meshBuilder(_this2.points);

            _this2.clearActiveMesh();

            return;
          }

          if (click.pickInfo.pickedMesh.name != 'ground' || event.button != 0) return;

          _this2.createCube(pickedPoint);

          _this2.meshBuilder(_this2.points);
        }
      });
    }
  }, {
    key: "clearActiveMesh",
    value: function clearActiveMesh() {
      this.actions.animateStop();
      this.scene.activeMesh.material = this.scene.getMaterialByName('BluePoints');
      this.scene.activeMesh = null;
    }
  }, {
    key: "onKeyboard",
    value: function onKeyboard() {
      var _this3 = this;

      this.scene.onPreKeyboardObservable.add(function (press) {
        if (press.type == 2 && press.event.code == "KeyX") {
          if (_this3.scene.activeMesh) {
            var index = _this3.points.findIndex(function (point) {
              return point.mesh === _this3.scene.activeMesh;
            });

            _this3.points[index].mesh.dispose();

            _this3.points.splice(index, 1);

            _this3.meshBuilder(_this3.points);

            _this3.scene.activeMesh = null;
          }
        }
      });
    }
  }, {
    key: "createCube",
    value: function createCube(coordinate) {
      var box = BABYLON.MeshBuilder.CreateBox("cubicpoints", {
        height: 0.4,
        width: 0.4,
        size: 0.4
      }, this.scene);
      this.points.push({
        mesh: box,
        coordinate: coordinate
      });
      box.type = 'linepoint';
      box.material = this.scene.getMaterialByName('BluePoints');
      box.position = coordinate;
      box.position.y = 1;
      box.actionManager = new BABYLON.ActionManager(this.scene);
      this.actions.hover(box, this.scene);
    }
  }, {
    key: "meshBuilder",
    value: function meshBuilder(points) {
      var _this4 = this;

      this.finishedPoints = [];
      points.forEach(function (element) {
        _this4.finishedPoints.push(element.coordinate);
      });
      if (this.finishedPoints.length < 2) return;
      var oldPoly = this.scene.getNodeByName('line');
      if (oldPoly) oldPoly.dispose();
      var poly = BABYLON.MeshBuilder.CreateLines("line", {
        points: this.finishedPoints
      }, this.scene);
      poly.isPickable = false;
    }
  }, {
    key: "createGround",
    value: function createGround() {
      var ground = BABYLON.MeshBuilder.CreateGround("ground", {
        width: 1000,
        height: 1000
      }, this.scene);
      ground.actionManager = new BABYLON.ActionManager(this.scene);
      var material = new BABYLON.StandardMaterial("material", this.scene);
      material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);
      material.specularColor = new BABYLON.Color3(0, 0, 0);
      ground.material = material;
    }
  }, {
    key: "numRound",
    value: function numRound(num, precision) {
      return Math.round(num / precision) * precision;
    }
  }, {
    key: "gridCoords",
    value: function gridCoords(pickInfo) {
      var coorX = this.numRound(pickInfo.pickedPoint.x, 1);
      var coorZ = this.numRound(pickInfo.pickedPoint.z, 1);
      return new BABYLON.Vector3(coorX, 1, coorZ);
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      var points = [];
      this.finishedPoints.forEach(function (point) {
        points.push({
          x: point.x,
          y: point.y,
          z: point.z
        });
      });
      return points;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/MeshBuilder/BuilderBundle.js":
/*!*********************************************************!*\
  !*** ./resources/js/scene/MeshBuilder/BuilderBundle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Engine_BuilderScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Engine/BuilderScene */ "./resources/js/scene/MeshBuilder/Engine/BuilderScene.js");
/* harmony import */ var _Engine_BuilderLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Engine/BuilderLight */ "./resources/js/scene/MeshBuilder/Engine/BuilderLight.js");
/* harmony import */ var _Assets_BuilderMeshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/BuilderMeshes */ "./resources/js/scene/MeshBuilder/Assets/BuilderMeshes.js");
/* harmony import */ var _Engine_BuilderCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Engine/BuilderCamera */ "./resources/js/scene/MeshBuilder/Engine/BuilderCamera.js");
/* harmony import */ var _Assets_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/Grid */ "./resources/js/scene/Assets/Grid.js");
/* harmony import */ var _Assets_Materials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/Materials */ "./resources/js/scene/Assets/Materials.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(canvas) {
  var SceneClass = new _Engine_BuilderScene__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
  var CameraClass = new _Engine_BuilderCamera__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
  var MeshesClass = new _Assets_BuilderMeshes__WEBPACK_IMPORTED_MODULE_2__["default"](SceneClass.scene);
  var LightClass = new _Engine_BuilderLight__WEBPACK_IMPORTED_MODULE_1__["default"](); //grid

  new _Assets_Grid__WEBPACK_IMPORTED_MODULE_4__["default"]({
    lines: false,
    grid: true
  });
  new _Assets_Materials__WEBPACK_IMPORTED_MODULE_5__["default"](SceneClass.scene);
  return {
    Scene: SceneClass,
    Camera: CameraClass,
    Light: LightClass,
    Meshes: MeshesClass
  };
}

/***/ }),

/***/ "./resources/js/scene/MeshBuilder/Engine/BuilderCamera.js":
/*!****************************************************************!*\
  !*** ./resources/js/scene/MeshBuilder/Engine/BuilderCamera.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

    this.createCamera(canvas);
    this.limits();
  }

  _createClass(_default, [{
    key: "createCamera",
    value: function createCamera(canvas) {
      var _this = this;

      this.camera.attachControl(canvas, true);
      this.camera.mode = 1;
      this.camera.onViewMatrixChangedObservable.add(function () {
        _this.orthographic(canvas);
      }); //listener for resize orthographic camera

      window.addEventListener("resize", function () {
        _this.orthographic(canvas);
      });
    }
  }, {
    key: "orthographic",
    value: function orthographic(canvas) {
      var proportion = canvas.width / canvas.height;
      this.camera.orthoTop = this.camera.radius / proportion;
      this.camera.orthoBottom = -this.camera.radius / proportion;
      this.camera.orthoLeft = -this.camera.radius;
      this.camera.orthoRight = this.camera.radius;
    }
  }, {
    key: "limits",
    value: function limits() {
      this.camera.useBouncingBehavior = true;
      this.camera.lowerRadiusLimit = 5;
      this.camera.upperRadiusLimit = 50;
      this.camera.lowerAlphaLimit = -Math.PI / 2;
      this.camera.upperAlphaLimit = -Math.PI / 2;
      this.camera.lowerBetaLimit = 0;
      this.camera.upperBetaLimit = 0; // upperRadiusLimit

      this.camera.inputs.attached.keyboard.detachControl(); // this.camera.inputs.attached.mousewheel.detachControl();

      this.camera.inputs.attached.pointers.buttons = [1, 2]; // console.log(this.camera.inputs.attached.mousewheel);
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/MeshBuilder/Engine/BuilderLight.js":
/*!***************************************************************!*\
  !*** ./resources/js/scene/MeshBuilder/Engine/BuilderLight.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/scene/MeshBuilder/Engine/BuilderScene.js":
/*!***************************************************************!*\
  !*** ./resources/js/scene/MeshBuilder/Engine/BuilderScene.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

    this.MeshBuilderScene(canvas);
  }

  _createClass(_default, [{
    key: "MeshBuilderScene",
    value: function MeshBuilderScene(canvas) {
      var _this = this;

      BABYLON.Scene.DoubleClickDelay = 600;
      this.engine = new BABYLON.Engine(canvas, true);
      this.scene = new BABYLON.Scene(this.engine); // this.scene.debugLayer.show({
      //    embedMode: true,
      // });

      this.engine.runRenderLoop(function () {
        _this.scene.render();
      });
      window.addEventListener("resize", function () {
        _this.engine.resize();
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.imgwhite{\r\n      filter: brightness(0) invert(1);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbutton, input, optgroup, select, textarea{\r\n    color: black;\n}\ncanvas{\r\n    outline: none;\n}\n.menu{\r\n\tleft: 80px;\r\n\twidth: 170px;\n}\n.menu::after{\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\ttop: 19px;\r\n\tleft: -20px;\r\n\tborder: 10px solid transparent;\r\n\tborder-right: 10px solid #f3f4f6;\n}\n.color{\r\n\theight: 20px;\r\n\twidth: 50px;\r\n\tdisplay: inline-block;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_style_index_0_id_d2459e5a_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_style_index_0_id_d2459e5a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_style_index_0_id_d2459e5a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_style_index_0_id_26eb2154_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_style_index_0_id_26eb2154_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_style_index_0_id_26eb2154_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/MeshBuilder.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/MeshBuilder.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeshBuilder.vue?vue&type=template&id=d2459e5a */ "./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a");
/* harmony import */ var _MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshBuilder.vue?vue&type=script&lang=js */ "./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js");
/* harmony import */ var _MeshBuilder_vue_vue_type_style_index_0_id_d2459e5a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css */ "./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css");
/* harmony import */ var C_AMD_OSPanel_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_AMD_OSPanel_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/MeshBuilder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Configurator.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/Configurator.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Configurator_vue_vue_type_template_id_26eb2154_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Configurator.vue?vue&type=template&id=26eb2154&lang=true */ "./resources/js/views/Configurator.vue?vue&type=template&id=26eb2154&lang=true");
/* harmony import */ var _Configurator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Configurator.vue?vue&type=script&lang=js */ "./resources/js/views/Configurator.vue?vue&type=script&lang=js");
/* harmony import */ var _Configurator_vue_vue_type_style_index_0_id_26eb2154_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css */ "./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css");
/* harmony import */ var C_AMD_OSPanel_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_AMD_OSPanel_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Configurator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Configurator_vue_vue_type_template_id_26eb2154_lang_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Configurator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MeshBuilder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Configurator.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Configurator.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Configurator.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MeshBuilder.vue?vue&type=template&id=d2459e5a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a");


/***/ }),

/***/ "./resources/js/views/Configurator.vue?vue&type=template&id=26eb2154&lang=true":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Configurator.vue?vue&type=template&id=26eb2154&lang=true ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_template_id_26eb2154_lang_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_template_id_26eb2154_lang_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Configurator.vue?vue&type=template&id=26eb2154&lang=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=template&id=26eb2154&lang=true");


/***/ }),

/***/ "./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_style_index_0_id_d2459e5a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=style&index=0&id=d2459e5a&lang=css");


/***/ }),

/***/ "./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Configurator_vue_vue_type_style_index_0_id_26eb2154_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Configurator.vue?vue&type=style&index=0&id=26eb2154&lang=css");


/***/ })

}]);