"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Territory_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['itemCount'],
  data: function data() {
    return {
      prosent: 0,
      endItem: null,
      slots: null
    };
  },
  computed: {
    transform: function transform() {
      return {
        transform: "translateX(".concat(this.prosent, "%)")
      };
    },
    casr: function casr() {
      var count = this.$refs.mainBlock.children.length;
      if (count % this.itemCount == 0) return 0;
      return this.itemCount - count % this.itemCount;
    }
  },
  mounted: function mounted() {
    this.slots = this.$refs.mainBlock.children.length;
    var countItem = this.$refs.mainBlock.children.length - this.itemCount; //10 - 4

    var viewItem = this.itemCount;
    this.endItem = -countItem * 100 / viewItem;
  },
  methods: {
    next: function next() {
      if (this.endItem < this.prosent) {
        console.log(this.endItem, this.prosent);
        this.prosent -= (100 / this.itemCount).toFixed(2);

        if (Math.abs(this.prosent.toFixed(2)) > 99) {
          this.prosent = -Math.ceil(Math.abs(this.prosent.toFixed(2)));
        }
      }
    },
    prev: function prev() {
      if (this.prosent < 0) {
        this.prosent += 100 / this.itemCount;
        this.prosent = +this.prosent.toFixed(2);

        if (this.prosent < 0 && this.prosent > -1) {
          this.prosent = 0;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ImageViewer.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ImageViewer.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Carusel.vue */ "./resources/js/components/Carusel.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Carusel: _components_Carusel_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    console.log(this.$store.state.images);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InformationPanel.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InformationPanel.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['path'],
  data: function data() {
    return {
      information: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get(_this.path);

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              _this.information = data;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Territory.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Territory.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scene_Userscene_Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene/Userscene/Canvas */ "./resources/js/scene/Userscene/Canvas.js");
/* harmony import */ var _hotkeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hotkeys */ "./resources/js/hotkeys.js");
/* harmony import */ var _components_Authentication_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Authentication.vue */ "./resources/js/components/Authentication.vue");
/* harmony import */ var _components_ImageViewer_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ImageViewer.vue */ "./resources/js/components/ImageViewer.vue");
/* harmony import */ var _components_InformationPanel_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/InformationPanel.vue */ "./resources/js/components/InformationPanel.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["id"],
  data: function data() {
    return {
      territory: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.Engine = (0,_scene_Userscene_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.$refs.BuilderCanvas);
              _hotkeys__WEBPACK_IMPORTED_MODULE_2__["default"].loaderFile(_this.Engine.Scene.scene);

              _this.Engine.Scene.scene.onReadyObservable.add( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this.getParents();

                      case 2:
                        _context.next = 4;
                        return _this.getActive();

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));

              _context2.next = 5;
              return axios.get("/api/territories/get/".concat(_this.id));

            case 5:
              _yield$axios$get = _context2.sent;
              data = _yield$axios$get.data;
              _this.territory = data;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  methods: {
    getParents: function getParents() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$axios$get2, data, Native;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this2.customMeshes = [];
                _context3.next = 3;
                return axios.get("/api/getparents/".concat(_this2.id));

              case 3:
                _yield$axios$get2 = _context3.sent;
                data = _yield$axios$get2.data;
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
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getActive: function getActive() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var Native;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                Native = _this3.Engine.Meshes;
                Native.getMeshes(_this3.id);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  },
  components: {
    ImageViewer: _components_ImageViewer_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Authentication: _components_Authentication_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    InfoPanel: _components_InformationPanel_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
var _hoisted_3 = {
  key: 0,
  "class": "custom-btn",
  href: "/territories"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Uchastkalar ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "gg-clapper-board ml-3"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_4, _hoisted_5];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Chiqish ");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "gg-log-out ml-3 mr-1"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = [_hoisted_7, _hoisted_8];
var _hoisted_10 = {
  key: 1,
  "class": "flex"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Kirish ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "gg-log-in ml-5 mr-0"
}, null, -1
/* HOISTED */
);

function render(_ctx, _cache) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [_ctx.$store.state.user ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [_ctx.$route.name != 'territories' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_3, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$store.dispatch('logout');
    }),
    "class": "custom-btn ml-4"
  }, _hoisted_9)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "custom-btn",
    to: "/login"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11, _hoisted_12];
    }),
    _: 1
    /* STABLE */

  })]))]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex justify-between items-center relative"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/leftang.png",
  "class": "w-2/3 btns"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  "class": "overflow-hidden flex-grow"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/leftang.png",
  "class": "w-2/3"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fades",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.prosent != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.prev && $options.prev.apply($options, arguments);
        }),
        "class": "absolute left-ang w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"
      }, _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
    ref: "mainBlock",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.transform),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
      '-ml-2': $data.prosent == 0
    }, "whitespace-nowrap easy-transition"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")], 6
  /* CLASS, STYLE */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fades",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [$data.prosent != $data.endItem && $data.slots > $props.itemCount ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[1] || (_cache[1] = function () {
          return $options.next && $options.next.apply($options, arguments);
        }),
        "class": "absolute right-ang w-10 py-2 bg-gray-100 rounded-full flex items-center justify-center"
      }, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ImageViewer.vue?vue&type=template&id=4dc3a3b2":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ImageViewer.vue?vue&type=template&id=4dc3a3b2 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "absolute bottom-0 right-2 p-2 bg-gray-200 font-medium text-gray-700"
};
var _hoisted_2 = {
  "class": "bg-white h-96"
};
var _hoisted_3 = ["src"];

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/close.png",
  "class": "imgwhite w-4"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = [_hoisted_4];

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "h-96 text-4xl flex items-center justify-center font-bold uppercase text-gray-300"
}, " Rasm kiritilmagan ", -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/close.png",
  "class": "imgwhite w-4"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Carusel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Carusel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.$store.state.images && _ctx.$store.state.images.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
        key: 0,
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.$store.state.images = null;
        }),
        "class": "fixed flex items-center top-0 left-0 bg-black bg-opacity-60 w-full h-full z-50"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "px-20 py-8 bg-black bg-opacity-30 shadow w-full",
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carusel, {
        "class": "w-full",
        itemCount: 3
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$store.state.images, function (image) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
              key: image,
              "class": "inline-block relative w-1/3 px-2"
            }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(image.created), 1
            /* TEXT */
            ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
              src: image.img,
              "class": "object-cover w-full h-full border-2 border-gray-200"
            }, null, 8
            /* PROPS */
            , _hoisted_3)])]);
          }), 128
          /* KEYED_FRAGMENT */
          ))];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return _ctx.$store.state.images = null;
        }),
        "class": "absolute flex items-center justify-center top-0 right-0 bg-red-700 p-2 px-4 m-3 shadow-xl hover:bg-red-500"
      }, _hoisted_5)])])) : _ctx.$store.state.images && _ctx.$store.state.images.length == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
        key: 1,
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return _ctx.$store.state.images = null;
        }),
        "class": "fixed flex items-center top-0 left-0 bg-black bg-opacity-60 w-full h-full z-50"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "px-20 py-8 bg-black bg-opacity-30 shadow w-full",
        onClick: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"]))
      }, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return _ctx.$store.state.images = null;
        }),
        "class": "absolute flex items-center justify-center top-0 right-0 bg-red-700 p-2 px-4 m-3 shadow-xl hover:bg-red-500"
      }, _hoisted_8)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  });
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InformationPanel.vue?vue&type=template&id=18e6b6a3":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InformationPanel.vue?vue&type=template&id=18e6b6a3 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "fixed top-20 right-2 mr-16 bg-black bg-opacity-25 px-4 py-4 text-gray-200 shadow-inner rounded w-64"
};
var _hoisted_2 = {
  "class": "flex justify-between items-center mb-4"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Umumiy daraxtlar ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex justify-between items-center my-4"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Mevali daraxtlar ", -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "flex justify-between items-center mt-4 mb-2"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, " Manzarali daraxtlar ", -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.information ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.information.all) + " ta ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.information.mevali) + " ta ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.information.manzarali) + " ta ", 1
  /* TEXT */
  )])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Territory.vue?vue&type=template&id=2f9045ea":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Territory.vue?vue&type=template&id=2f9045ea ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed flex top-0 left-16 m-4 items-center"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "gg-chevron-left mr-3"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Orqaga ");

var _hoisted_4 = [_hoisted_2, _hoisted_3];
var _hoisted_5 = {
  key: 0,
  "class": "font-medium text-xl ml-10 text-gray-600"
};
var _hoisted_6 = {
  "class": "h-full w-full border-transparent",
  ref: "BuilderCanvas"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ImageViewer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ImageViewer");

  var _component_InfoPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InfoPanel");

  var _component_Authentication = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Authentication");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ImageViewer), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InfoPanel, {
    path: "/api/territories/get/".concat(this.id)
  }, null, 8
  /* PROPS */
  , ["path"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$router.go(-1);
    }),
    "class": "custom-btn pl-2",
    to: "/"
  }, _hoisted_4), $data.territory ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.territory.name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Authentication), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("canvas", _hoisted_6, null, 512
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
  color: '#8DA35F'
}, {
  name: 'behi',
  color: '#fdeb1c'
}, {
  name: 'shaftoli',
  color: '#ba2222'
}, {
  name: 'qayragoch',
  color: '#32452E'
}, {
  name: 'archa',
  color: '#47BE60'
}, {
  name: 'gilos',
  color: '#3E4AAD'
}, {
  name: 'nok',
  color: '#CF9D46'
}, {
  name: 'tut',
  color: '#EEEDED'
}, {
  name: "o'rik",
  color: '#FFAFAF'
}, {
  name: "gujum",
  color: '#6BD0FF'
}, {
  name: "sasna",
  color: '#000000'
}, {
  name: "akatsiya",
  color: '#fd0b1c'
}, {
  name: "yasin",
  color: '#F3CE56'
}, {
  name: "jiyda",
  color: '#A43481'
}, {
  name: "yovvoyi terak",
  color: '#729AB0'
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

      mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnPointerOverTrigger
      }, function () {
        if (_this.scene.activeMesh != mesh) mesh.material = _this.scene.getMaterialByName('hover');
      }));
      mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        trigger: BABYLON.ActionManager.OnPointerOutTrigger
      }, function () {
        if (_this.scene.activeMesh != mesh) {
          mesh.material = mesh.mainmaterial;
        }
      }));
    }
  }, {
    key: "hoverNode",
    value: function hoverNode(node) {
      var _this2 = this;

      node.forEach(function (mesh) {
        mesh.mainmaterial = mesh.material;
        mesh.actionManager = new BABYLON.ActionManager(_this2.scene);
        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
          trigger: BABYLON.ActionManager.OnPointerOverTrigger
        }, function () {
          var hover = true;

          if (_this2.scene.activeMesh && mesh.parent == _this2.scene.activeMesh) {
            hover = false;
          }

          if (hover) {
            var allMeshes = mesh.parent._children;
            allMeshes.forEach(function (mesh) {
              mesh.material = _this2.scene.getMaterialByName('hover');
            });
          }
        }));
        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
          trigger: BABYLON.ActionManager.OnPointerOutTrigger
        }, function () {
          var hover = true;

          if (_this2.scene.activeMesh && mesh.parent == _this2.scene.activeMesh) {
            hover = false;
          }

          if (hover) {
            var allMeshes = mesh.parent._children;
            allMeshes.forEach(function (mesh) {
              mesh.material = mesh.mainmaterial;
            });
          }
        }));
      });
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
    value: function animatePlay(meshOrNode) {
      var _this3 = this;

      var select = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var node = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (select) {
        this.animate('material.diffuseColor', BABYLON.Animation.ANIMATIONTYPE_COLOR3);
      }

      if (node == true) {
        // bu yerda meshOrNode = node
        meshOrNode.forEach(function (element) {
          element.material = _this3.scene.getMaterialByName('animated');

          _this3.animationGroup.addTargetedAnimation(_this3.animation, element);
        });
      } else {
        // bu yerda meshOrNode = mesh
        meshOrNode.material = this.scene.getMaterialByName('animated');
        this.animationGroup.addTargetedAnimation(this.animation, meshOrNode);
      }

      this.animationGroup.play(true);
    }
  }, {
    key: "animateStop",
    value: function animateStop() {
      this.animationGroup.stop();
      this.animationGroup.dispose();

      if (this.scene.activeMesh._isMesh) {
        this.scene.activeMesh.material = this.scene.activeMesh.mainmaterial;
      } else {
        this.scene.activeMesh._children.forEach(function (mesh) {
          mesh.material = mesh.mainmaterial;
        });
      }
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
  building.specularColor = new BABYLON.Color3(0, 0, 0); //green

  var green = new BABYLON.StandardMaterial("green", scene);
  green.diffuseColor = new BABYLON.Color3.FromHexString('#79FFAD');
  green.specularColor = new BABYLON.Color3(0, 0, 0); //ground

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./resources/js/store/index.js");
/* harmony import */ var _Addons_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Addons/Actions */ "./resources/js/scene/Addons/Actions.js");
/* harmony import */ var _ImportMeshes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImportMeshes */ "./resources/js/scene/Userscene/Assets/ImportMeshes.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var _default = /*#__PURE__*/function () {
  function _default(scene) {
    _classCallCheck(this, _default);

    this.scene = scene;
    this.actions = new _Addons_Actions__WEBPACK_IMPORTED_MODULE_3__["default"](scene);
    this.pickidMesh();
    new _ImportMeshes__WEBPACK_IMPORTED_MODULE_4__["default"](scene);
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
      customMesh.material.sideOrientation = 2;
      customMesh.material.backFaceCulling = false;
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
                return axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/getallfinal/".concat(id));

              case 2:
                meshes = _context.sent;
                meshes.data.forEach(function (mesh) {
                  var position = JSON.parse(mesh.position);

                  var getmesh = _this.scene.getNodeByName(mesh.parentname);

                  var mymesh;
                  if (getmesh) mymesh = getmesh.clone(mesh.name);
                  mymesh.setAbsolutePosition(isNumber(position._x), isNumber(0.01), isNumber(position._z));
                  mymesh.hovered = mesh.hovered;

                  if (mesh.parentname == 'plant') {
                    mymesh.scaling.y = 1;
                  } else {
                    mymesh.scaling.y = mesh.height;
                  }

                  mymesh.actionManager = new BABYLON.ActionManager(_this.scene);

                  if (mesh.hovered == true) {
                    mymesh.material = _this.scene.getMaterialByName('green');
                    mymesh.mainmaterial = _this.scene.getMaterialByName('green');

                    _this.actions.hover(mymesh);
                  } else {
                    mymesh.material = _this.scene.getMaterialByName(mesh.materialname);
                    mymesh.mainmaterial = _this.scene.getMaterialByName(mesh.materialname);
                  }
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
  }, {
    key: "pickidMesh",
    value: function pickidMesh() {
      var _this2 = this;

      this.scene.onPointerPick = function (event, pick) {
        var mesh = pick.pickedMesh;

        if (mesh && mesh.hovered == true) {
          _this2.getImages(mesh.name);
        }
      };
    }
  }, {
    key: "getImages",
    value: function () {
      var _getImages = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(name) {
        var _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/getimages', {
                  name: name
                });

              case 2:
                _yield$axios$post = _context2.sent;
                data = _yield$axios$post.data;
                _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.images = data;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getImages(_x2) {
        return _getImages.apply(this, arguments);
      }

      return getImages;
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

    _defineProperty(this, "camera", new BABYLON.ArcRotateCamera("camera", -1.871, 0.430, 160.000, new BABYLON.Vector3(0, 0, 0)));

    this.canvas = canvas;
    this.createCamera();
    this.limits();
  }

  _createClass(_default, [{
    key: "createCamera",
    value: function createCamera() {
      var _this = this;

      this.camera.attachControl(this.canvas, true); // this.camera.mode = 1

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

      this.camera.lowerBetaLimit = 0;
      this.camera.upperBetaLimit = Math.PI / 2.5; // upperRadiusLimit

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
  }

  _createClass(_default, [{
    key: "createScene",
    value: function createScene() {
      var _this = this;

      var engine = new BABYLON.Engine(this.canvas, true);
      engine.enableOfflineSupport = false;
      this.scene = new BABYLON.Scene(engine);
      this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8, 1);
      engine.runRenderLoop(function () {
        _this.scene.render();
      });
      window.addEventListener("resize", function () {
        engine.resize();
      });
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btns{\r\n\ttransform: scale(-1);\r\n   position: relative;\r\n   top: 1px;\n}\n.fades-enter-active,\r\n.fades-leave-active {\r\n  transition: 1s ease;\n}\n.fades-enter-from,\r\n.fades-leave-to {\r\n  opacity: 0;\r\n  transform: scaleX(0);\r\n  width: 0;\n}\n.easy-transition{\r\n   transition: .5s;\n}\n.left-ang {\r\n\tleft: -50px;\r\n\ttransform: translateY(-50%);\r\n\ttop: 50%;\n}\n.right-ang {\r\n\tright: -50px;\r\n\ttransform: translateY(-50%);\r\n\ttop: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Authentication_vue_vue_type_template_id_e76b5cba__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Authentication.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Carusel.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Carusel.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carusel.vue?vue&type=template&id=1bf5d304 */ "./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304");
/* harmony import */ var _Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carusel.vue?vue&type=script&lang=js */ "./resources/js/components/Carusel.vue?vue&type=script&lang=js");
/* harmony import */ var _Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css */ "./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Carusel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ImageViewer.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ImageViewer.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImageViewer_vue_vue_type_template_id_4dc3a3b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageViewer.vue?vue&type=template&id=4dc3a3b2 */ "./resources/js/components/ImageViewer.vue?vue&type=template&id=4dc3a3b2");
/* harmony import */ var _ImageViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageViewer.vue?vue&type=script&lang=js */ "./resources/js/components/ImageViewer.vue?vue&type=script&lang=js");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ImageViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImageViewer_vue_vue_type_template_id_4dc3a3b2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ImageViewer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/InformationPanel.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/InformationPanel.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InformationPanel_vue_vue_type_template_id_18e6b6a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InformationPanel.vue?vue&type=template&id=18e6b6a3 */ "./resources/js/components/InformationPanel.vue?vue&type=template&id=18e6b6a3");
/* harmony import */ var _InformationPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InformationPanel.vue?vue&type=script&lang=js */ "./resources/js/components/InformationPanel.vue?vue&type=script&lang=js");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_InformationPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_InformationPanel_vue_vue_type_template_id_18e6b6a3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/InformationPanel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Territory.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Territory.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Territory_vue_vue_type_template_id_2f9045ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Territory.vue?vue&type=template&id=2f9045ea */ "./resources/js/views/Territory.vue?vue&type=template&id=2f9045ea");
/* harmony import */ var _Territory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Territory.vue?vue&type=script&lang=js */ "./resources/js/views/Territory.vue?vue&type=script&lang=js");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Territory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Territory_vue_vue_type_template_id_2f9045ea__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Territory.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Carusel.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Carusel.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ImageViewer.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ImageViewer.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageViewer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ImageViewer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/InformationPanel.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/InformationPanel.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationPanel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InformationPanel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Territory.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/views/Territory.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Territory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Territory_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Territory.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Territory.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_template_id_1bf5d304__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=template&id=1bf5d304 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=template&id=1bf5d304");


/***/ }),

/***/ "./resources/js/components/ImageViewer.vue?vue&type=template&id=4dc3a3b2":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ImageViewer.vue?vue&type=template&id=4dc3a3b2 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewer_vue_vue_type_template_id_4dc3a3b2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImageViewer_vue_vue_type_template_id_4dc3a3b2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImageViewer.vue?vue&type=template&id=4dc3a3b2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ImageViewer.vue?vue&type=template&id=4dc3a3b2");


/***/ }),

/***/ "./resources/js/components/InformationPanel.vue?vue&type=template&id=18e6b6a3":
/*!************************************************************************************!*\
  !*** ./resources/js/components/InformationPanel.vue?vue&type=template&id=18e6b6a3 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationPanel_vue_vue_type_template_id_18e6b6a3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_InformationPanel_vue_vue_type_template_id_18e6b6a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./InformationPanel.vue?vue&type=template&id=18e6b6a3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/InformationPanel.vue?vue&type=template&id=18e6b6a3");


/***/ }),

/***/ "./resources/js/views/Territory.vue?vue&type=template&id=2f9045ea":
/*!************************************************************************!*\
  !*** ./resources/js/views/Territory.vue?vue&type=template&id=2f9045ea ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Territory_vue_vue_type_template_id_2f9045ea__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Territory_vue_vue_type_template_id_2f9045ea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Territory.vue?vue&type=template&id=2f9045ea */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Territory.vue?vue&type=template&id=2f9045ea");


/***/ }),

/***/ "./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Carusel_vue_vue_type_style_index_0_id_1bf5d304_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Carusel.vue?vue&type=style&index=0&id=1bf5d304&lang=css");


/***/ })

}]);