"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Constructor_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_UploadImage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/UploadImage.vue */ "./resources/js/components/UploadImage.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      interval: null
    };
  },
  mounted: function mounted() {
    this.engine = Engine.Meshes;
  },
  unmounted: function unmounted() {
    this.engine.clearActiveMesh();
  },
  methods: {
    edit: function edit() {
      var _this = this;

      store.state.mesh.active.scaling.y = store.state.mesh.info.height;
      if (this.interval) clearTimeout(this.interval);
      this.interval = setTimeout(function () {
        if (store.state.mesh.active) {
          _this.engine.editMesh({
            name: store.state.mesh.active.name,
            height: store.state.mesh.info.height,
            username: store.state.mesh.info.username,
            plantTime: store.state.mesh.info.plantTime
          });
        }
      }, 800);
    },
    change: function change() {
      this.engine.editMesh({
        name: store.state.mesh.active.name,
        height: store.state.mesh.info.height,
        username: store.state.mesh.info.username,
        plantTime: store.state.mesh.info.plantTime
      });
    }
  },
  components: {
    Uploader: _components_UploadImage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  props: ['id'],
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
                return axios.get("/api/getallfinal/".concat(_this.id));

              case 3:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                console.log(data);
                meshName = 'createdMesh' + data.length;

                if (!(points.length > 2)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 10;
                return axios.post("/api/createparent", {
                  points: points,
                  name: meshName,
                  clientname: _this.clientname,
                  id: _this.id
                });

              case 10:
                _this.$emit('newmesh');

                _this.$emit('close');

              case 12:
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UploadImage.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UploadImage.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      images: [],
      files: [],
      bool: true
    };
  },
  mounted: function mounted() {
    this.images = store.state.mesh.images;
    this.mainImage(this.images[this.images.length - 1]);
  },
  methods: {
    onchange: function onchange() {
      this.addfiles(this.$refs.fileInput.files);
      this.sendFilesToServer(this.files);
      this.mainImage(this.images[this.images.length - 1]);
      this.$refs.fileInput.value = null;
    },
    addfiles: function addfiles(imagesArr) {
      var arr = {
        files: []
      };

      for (var i = 0; i < imagesArr.length; i++) {
        arr.files.push(imagesArr[i]);
      }

      for (var _i in arr.files) {
        this.files.push(arr.files[_i]);
      }
    },
    sendFilesToServer: function sendFilesToServer(files) {
      var _this = this;

      var formdata = new FormData();
      formdata.append("name", store.state.mesh.active.name);

      for (var i in files) {
        formdata.append("image[".concat(i, "]"), files[i]);
      }

      axios.post("/api/upload", formdata).then(function (response) {
        _this.images = response.data;
        _this.files = [];

        _this.mainImage(_this.images[_this.images.length - 1]);
      });
    },
    deleteInServer: function deleteInServer() {
      axios.post("/api/deleteimages", {
        list: this.images,
        name: store.state.mesh.active.name
      });
    },
    deleteImage: function deleteImage(i) {
      if (this.images[i] == this.$refs.imagePreview.getAttribute('src')) {
        this.images.splice(i, 1);
        this.mainImage(this.images[this.images.length - 1]);
        this.deleteInServer();
        return;
      }

      this.images.splice(i, 1);
      this.deleteInServer();
    },
    mainImage: function mainImage(imageblob) {
      var _this2 = this;

      if (imageblob == null) return;
      console.log(this.$refs.imagePreview.getAttribute('src'), imageblob);
      if (this.$refs.imagePreview.getAttribute('src') == imageblob) return;
      this.bool = false;
      setTimeout(function () {
        if (_this2.$refs.imagePreview) {
          imageblob == undefined ? _this2.$refs.imagePreview.src = "/images/default.jpg" : _this2.$refs.imagePreview.src = imageblob;
          _this2.bool = true;
        }
      }, 200);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Constructor.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Constructor.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _components_ConstructorPanel_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/ConstructorPanel.vue */ "./resources/js/components/ConstructorPanel.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['id'],
  data: function data() {
    return {
      fructs: _fructColor__WEBPACK_IMPORTED_MODULE_3__["default"],
      fructMenu: false,
      customMenu: false,
      builderToggle: false,
      customMeshes: [],
      engine: null,
      onload: null
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios.get("/api/territories/getone/".concat(_this.id));

            case 2:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;

              if (data == false) {
                router.push({
                  name: 'territories'
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  mounted: function mounted() {
    var _this2 = this;

    window.canvas = this.$refs.canvas;
    window.Engine = (0,_scene_Mainscene_Canvas__WEBPACK_IMPORTED_MODULE_2__["default"])();
    _hotkeys__WEBPACK_IMPORTED_MODULE_1__["default"].loaderFile(scene);
    Engine.Meshes.id = this.id;
    scene.onDataLoadedObservable.add(function () {
      _this2.onload = true;
      var Native = Engine.Meshes["native"];
      Native.getMeshes(_this2.id);
    });
    this.reloadMeshes();
  },
  methods: {
    addFruct: function addFruct(fruct, plant) {
      this.fructMenu = false;
      var meshClass = Engine.Meshes;
      meshClass.newMesh(fruct, plant, event, this.id);
    },
    addBuilding: function addBuilding(build, house) {
      this.customMenu = false;
      var meshClass = Engine.Meshes;
      meshClass.newMesh(build, house, event, this.id);
    },
    openMeshBuilder: function openMeshBuilder() {
      this.builderToggle = !this.builderToggle;
    },
    reloadMeshes: function reloadMeshes() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _yield$axios$get2, data, Native;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.customMeshes = [];
                _context2.next = 3;
                return axios.get("/api/getparents/".concat(_this3.id));

              case 3:
                _yield$axios$get2 = _context2.sent;
                data = _yield$axios$get2.data;
                Native = Engine.Meshes["native"];
                data.forEach(function (element) {
                  Native.createMesh(element);

                  _this3.customMeshes.push({
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
    }
  },
  components: {
    MeshBuilder: _components_MeshBuilder_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ConstructorPanel: _components_ConstructorPanel_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=template&id=58d19b95":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=template&id=58d19b95 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-1/6 flex flex-col h-full p-1 bg-gray-200"
};
var _hoisted_2 = {
  "class": "h-full px-3 pt-3"
};
var _hoisted_3 = {
  "class": "bg-green-600 p-3 -m-5 flex justify-center mb-5"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/lotus.png",
  "class": "mr-3 inline w-8"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Yashil Makon ");

var _hoisted_6 = {
  key: 0
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-center font-bold uppercase text-white py-2 bg-green-600 mb-4 rounded"
}, "Tanlangan obyekt", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "names",
  "class": "text-sm text-gray-400"
}, "Obyekt nomi", -1
/* HOISTED */
);

var _hoisted_9 = {
  key: 0
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "height",
  "class": "text-sm text-gray-400"
}, "Bino Balandligi", -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 1
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "height",
  "class": "text-sm text-gray-400"
}, "Ekilgan sana", -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 2
};
var _hoisted_14 = {
  "class": "flex-grow"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_Uploader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Uploader");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/",
    "class": "text-green-100 uppercase font-dancing flex items-center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4, _hoisted_5];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "opacity",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.$store.state.mesh.info ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        placeholder: "Obyekt nomi",
        id: "names",
        "class": "rounded border-b border-green-600 my-1 outline-none p-2 w-full",
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return _ctx.$store.state.mesh.info.username = $event;
        }),
        onChange: _cache[1] || (_cache[1] = function () {
          return $options.change && $options.change.apply($options, arguments);
        }),
        onKeyup: _cache[2] || (_cache[2] = function () {
          return $options.edit && $options.edit.apply($options, arguments);
        })
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.$store.state.mesh.info.username]])]), _ctx.$store.state.mesh.info.parentname != 'plant' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_9, [_hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        placeholder: "Bino Balandligi",
        id: "height",
        "class": "rounded border-b border-green-600 my-1 outline-none p-2 w-full",
        type: "number",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return _ctx.$store.state.mesh.info.height = $event;
        }),
        onChange: _cache[4] || (_cache[4] = function () {
          return $options.change && $options.change.apply($options, arguments);
        }),
        onKeyup: _cache[5] || (_cache[5] = function () {
          return $options.edit && $options.edit.apply($options, arguments);
        })
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.$store.state.mesh.info.height]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$store.state.mesh.info.parentname == 'plant' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        placeholder: "Bino Balandligi",
        id: "height",
        "class": "rounded border-b border-green-600 my-1 outline-none p-2 w-full",
        type: "date",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return _ctx.$store.state.mesh.info.plantTime = $event;
        }),
        onChange: _cache[7] || (_cache[7] = function () {
          return $options.change && $options.change.apply($options, arguments);
        }),
        onKeyup: _cache[8] || (_cache[8] = function () {
          return $options.edit && $options.edit.apply($options, arguments);
        })
      }, null, 544
      /* HYDRATE_EVENTS, NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.$store.state.mesh.info.plantTime]])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$store.state.mesh.info.parentname == 'plant' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", _hoisted_13, [_ctx.$store.state.mesh.images ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Uploader, {
        key: 0
      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "rounded uppercase shadow-xl w-full p-3 py-2 text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white",
    onClick: _cache[9] || (_cache[9] = function ($event) {
      return _ctx.$store.dispatch('logout');
    })
  }, "Chiqish")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "my-3"
};
var _hoisted_2 = {
  "for": "fileinp",
  "class": "mb-2 cursor-pointer hover:opacity-80 block shadow-lg text-center"
};
var _hoisted_3 = {
  "class": "rounded w-full h-40 object-cover inline-block",
  ref: "imagePreview",
  src: "/images/default.jpg"
};
var _hoisted_4 = {
  key: 0,
  "class": "w-full px-1 whitespace-nowrap overflow-hidden overflow-x-scroll my-2"
};
var _hoisted_5 = ["src", "onClick"];
var _hoisted_6 = ["onClick"];

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/trash-bin.png",
  "class": "w-4"
}, null, -1
/* HOISTED */
);

var _hoisted_8 = [_hoisted_7];

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", {
  "class": "flex justify-end"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "for": "fileinp",
  "class": "imageadd cursor-pointer bg-green-500 shadow hover:bg-green-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "fill-current w-5 text-white",
  fill: "#000000",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "48px",
  height: "48px",
  "fill-rule": "evenodd"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
})])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade",
    mode: "out-in"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", _hoisted_3, null, 512
      /* NEED_PATCH */
      ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.bool]])];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    id: "fileinp",
    type: "file",
    multiple: "",
    ref: "fileInput",
    accept: "image/png, image/gif, image/jpeg",
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.onchange && $options.onchange.apply($options, arguments);
    }),
    hidden: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), $data.images.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.images, function (image, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("main", {
      "class": "relative inline-block w-1/3",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: image,
      onClick: function onClick($event) {
        return $options.mainImage(image);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'pl-2': i != 0
      }, "cursor-pointer hover:opacity-80 object-cover w-full h-20"])
    }, null, 10
    /* CLASS, PROPS */
    , _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "absolute bottom-0 right-0 p-1",
      onClick: function onClick($event) {
        return $options.deleteImage(i);
      }
    }, _hoisted_8, 8
    /* PROPS */
    , _hoisted_6)]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_9]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Constructor.vue?vue&type=template&id=292f6aab":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Constructor.vue?vue&type=template&id=292f6aab ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

  var _component_ConstructorPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ConstructorPanel");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
      'cursor-move': _ctx.$store.state.drag
    }])
  }, null, 2
  /* CLASS */
  ), $data.builderToggle ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_MeshBuilder, {
    key: 0,
    id: $props.id,
    onNewmesh: $options.reloadMeshes,
    onClose: _cache[5] || (_cache[5] = function ($event) {
      return $data.builderToggle = false;
    })
  }, null, 8
  /* PROPS */
  , ["id", "onNewmesh"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 512
  /* NEED_PATCH */
  ), $data.onload ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_ConstructorPanel, {
    key: 0
  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
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
  color: '#ba2222'
}, {
  name: 'nok',
  color: '#ba2222'
}, {
  name: 'tut',
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

/***/ "./resources/js/scene/Addons/Grid.js":
/*!*******************************************!*\
  !*** ./resources/js/scene/Addons/Grid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/scene/Mainscene/Assets/ImportMeshes.js":
/*!*************************************************************!*\
  !*** ./resources/js/scene/Mainscene/Assets/ImportMeshes.js ***!
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
      BABYLON.SceneLoader.AppendAsync('/models/assets.glb', undefined, scene, function (event) {
        var percentage = event.lengthComputable ? event.loaded / event.total * 100 : 0;
      }, ".glb");
    }
  }, {
    key: "hideMeshes",
    value: function hideMeshes(meshNames) {
      meshNames.forEach(function (meshname) {
        var mesh = scene.getNodeByName(meshname);
        mesh.setAbsolutePosition(40000, mesh.position.y, 40000);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Addons_Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Addons/Actions */ "./resources/js/scene/Addons/Actions.js");
/* harmony import */ var _NativeMeshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NativeMeshes */ "./resources/js/scene/Mainscene/Assets/NativeMeshes.js");
/* harmony import */ var _ImportMeshes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImportMeshes */ "./resources/js/scene/Mainscene/Assets/ImportMeshes.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function numRound(num, precision) {
  var number = Math.round(num / precision) * precision;
  if (number == 0) number = 0.0001;
  return number;
}






var _default = /*#__PURE__*/function () {
  function _default() {
    var _this = this;

    _classCallCheck(this, _default);

    this["native"] = new _NativeMeshes__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.actions = new _Addons_Actions__WEBPACK_IMPORTED_MODULE_1__["default"](scene);
    new _ImportMeshes__WEBPACK_IMPORTED_MODULE_3__["default"]();
    scene.onPreKeyboardObservable.add(function (keyboard) {
      if (keyboard.type == 2 && keyboard.event.code == 'KeyX' && store.state.mesh.active) _this.meshDelete(store.state.mesh.active);
    });
    this.pickForDrag();
  }

  _createClass(_default, [{
    key: "pickForDrag",
    value: function pickForDrag() {
      var _this2 = this;

      scene.onPointerPick = function (event, pick) {
        var mesh = pick.pickedMesh;
        if (event.button == 0 || event.button == 2) _this2.clearActiveMesh();

        if (mesh && mesh.name != "ground") {
          if (event.shiftKey && event.button == 0) {
            store.state.mesh.active = mesh; //active Element

            _this2.position = mesh.absolutePosition.clone();

            _this2.drag(mesh);

            _this2.drop(mesh);
          } else if (event.button == 0) {
            _this2.getMesh(mesh);

            store.state.mesh.active = mesh;
            scene.activeMesh = mesh;

            _this2.actions.animatePlay(mesh, true);
          }
        }
      };
    }
  }, {
    key: "clearActiveMesh",
    value: function clearActiveMesh() {
      if (store.state.mesh.active) {
        this.actions.animateStop();
        scene.activeMesh.material = scene.activeMesh.mainmaterial;
        scene.activeMesh = null;
        store.state.mesh.active = null;
        store.state.mesh.info = null;
      }
    }
  }, {
    key: "newMesh",
    value: function newMesh(name, parent, event, id) {
      this.id = id;
      this.clearActiveMesh();
      scene.onPointerPick = null;
      var getmesh = scene.getNodeByName(parent); //tanlash

      var mesh = getmesh.clone(name + Date.now()); //Kopiya qilish

      mesh.visibility = 0.5; // Muhim Emas

      var material = scene.getMaterialByName(name); //material qidirish

      if (material) {
        //Material bolsa ulash
        mesh.material = material;
        mesh.mainmaterial = material;
      }

      store.state.mesh.active = mesh; //Active ELement bor
      //Mishka sceneda yurganda

      this.drag(mesh, true, event);
      this.drop(mesh, parent);
    }
  }, {
    key: "drag",
    value: function drag(mesh) {
      var simulate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var event = arguments.length > 2 ? arguments[2] : undefined;
      store.state.drag = true; //Cursor Drag
      //Mishka sceneda yurganda

      scene.onPointerMove = function (a, pickInfo) {
        if (pickInfo.pickedPoint) {
          var coorX = numRound(pickInfo.pickedPoint.x, 0.5);
          var coorZ = numRound(pickInfo.pickedPoint.z, 0.5);
          mesh.setAbsolutePosition(coorX, mesh.position.y, coorZ);
        }
      };

      if (simulate) scene.simulatePointerMove(scene.pick(event.clientX, event.clientY));
    }
  }, {
    key: "drop",
    value: function drop(mesh) {
      var _this3 = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      scene.onPointerPick = function (event) {
        if (store.state.mesh.active == null) return;

        if (event.button == 0) {
          if (parent) {
            mesh.visibility = 1;
            mesh.actionManager = new BABYLON.ActionManager(scene);

            _this3.actions.hover(mesh);

            _this3.saveMeshProps(mesh, parent);
          } else {
            _this3.editMeshProps(mesh);
          }
        }

        if (event.button == 2) {
          if (parent) mesh.dispose();else mesh.setAbsolutePosition(_this3.position);
        }

        scene.onPointerMove = null;
        store.state.mesh.active = null;
        store.state.drag = null;

        _this3.pickForDrag();
      };
    }
  }, {
    key: "saveMeshProps",
    value: function () {
      var _saveMeshProps = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(mesh, parent) {
        var name, material, position;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = mesh.name;
                material = mesh.material.name;
                position = mesh.absolutePosition;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/createfinal', {
                  name: name,
                  position: position,
                  material: material,
                  parent: parent,
                  id: this.id
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveMeshProps(_x, _x2) {
        return _saveMeshProps.apply(this, arguments);
      }

      return saveMeshProps;
    }() //GetMesh

  }, {
    key: "getMesh",
    value: function () {
      var _getMesh = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(mesh) {
        var name, _yield$axios$post, data, images;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                store.state.mesh.images = null;
                name = mesh.name;
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/getonefinal', {
                  id: this.id,
                  name: name
                });

              case 4:
                _yield$axios$post = _context2.sent;
                data = _yield$axios$post.data;
                store.state.mesh.info = data;

                if (!(data.parentname == 'plant')) {
                  _context2.next = 14;
                  break;
                }

                _context2.next = 10;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/getimages', {
                  id: this.id,
                  name: name
                });

              case 10:
                images = _context2.sent;
                store.state.mesh.images = images.data;
                _context2.next = 15;
                break;

              case 14:
                store.state.mesh.images = [];

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getMesh(_x3) {
        return _getMesh.apply(this, arguments);
      }

      return getMesh;
    }() //GetMesh End

  }, {
    key: "editMesh",
    value: function () {
      var _editMesh = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(_ref) {
        var name, height, username, plantTime;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                name = _ref.name, height = _ref.height, username = _ref.username, plantTime = _ref.plantTime;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/editfinalprops', {
                  id: this.id,
                  name: name,
                  height: height,
                  username: username,
                  plantTime: plantTime
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function editMesh(_x4) {
        return _editMesh.apply(this, arguments);
      }

      return editMesh;
    }()
  }, {
    key: "editMeshProps",
    value: function () {
      var _editMeshProps = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(mesh) {
        var name, position;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                name = mesh.name;
                position = mesh.absolutePosition;
                _context4.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/editfinalposition', {
                  id: this.id,
                  name: name,
                  position: position
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function editMeshProps(_x5) {
        return _editMeshProps.apply(this, arguments);
      }

      return editMeshProps;
    }()
  }, {
    key: "meshDelete",
    value: function () {
      var _meshDelete = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(mesh) {
        var name;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                name = mesh.name;
                this.clearActiveMesh();
                mesh.dispose();
                _context5.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/deleteonefinal', {
                  id: this.id,
                  name: name
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function meshDelete(_x6) {
        return _meshDelete.apply(this, arguments);
      }

      return meshDelete;
    }()
  }]);

  return _default;
}();



/***/ }),

/***/ "./resources/js/scene/Mainscene/Assets/NativeMeshes.js":
/*!*************************************************************!*\
  !*** ./resources/js/scene/Mainscene/Assets/NativeMeshes.js ***!
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
  function _default() {
    var _this = this;

    _classCallCheck(this, _default);

    this.actions = new _Addons_Actions__WEBPACK_IMPORTED_MODULE_1__["default"](scene);
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
    value: function createMesh(mesh) {
      if (scene.getNodeByName(mesh.name)) return;
      var readypoints = [];
      var points = JSON.parse(mesh.points);
      points.forEach(function (point) {
        readypoints.push(new BABYLON.Vector3(point.x, point.y, point.z));
      });
      var customMesh = BABYLON.MeshBuilder.ExtrudePolygon(mesh.name, {
        shape: readypoints,
        depth: 5,
        wrap: true
      }, scene);
      customMesh.scaling = new BABYLON.Vector3(1, 1, -1);
      customMesh.material = scene.getMaterialByName('building');
      customMesh.mainmaterial = scene.getMaterialByName('building');
      customMesh.position.y = 0.01;
      customMesh.position.x = 40000;
      customMesh.position.z = 40000;
      customMesh.rotation.x = Math.PI;
    }
  }, {
    key: "getMeshes",
    value: function () {
      var _getMeshes = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
        var _this2 = this;

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
                  var getmesh = scene.getNodeByName(mesh.parentname);
                  var mymesh = getmesh.clone(mesh.name);
                  mymesh.material = scene.getMaterialByName(mesh.materialname);
                  mymesh.mainmaterial = scene.getMaterialByName(mesh.materialname);
                  mymesh.setAbsolutePosition(position._x, position._y, position._z);

                  if (mesh.parentname == 'plant') {
                    mymesh.scaling.y = 1;
                  } else {
                    mymesh.scaling.y = mesh.height;
                  }

                  mymesh.actionManager = new BABYLON.ActionManager(scene);

                  _this2.actions.hover(mymesh);
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

/***/ "./resources/js/scene/Mainscene/Canvas.js":
/*!************************************************!*\
  !*** ./resources/js/scene/Mainscene/Canvas.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _engine_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/Scene */ "./resources/js/scene/Mainscene/engine/Scene.js");
/* harmony import */ var _engine_Light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/Light */ "./resources/js/scene/Mainscene/engine/Light.js");
/* harmony import */ var _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Meshes */ "./resources/js/scene/Mainscene/Assets/Meshes.js");
/* harmony import */ var _engine_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/Camera */ "./resources/js/scene/Mainscene/engine/Camera.js");
/* harmony import */ var _Addons_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Addons/Grid */ "./resources/js/scene/Addons/Grid.js");
/* harmony import */ var _Addons_Materials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Addons/Materials */ "./resources/js/scene/Addons/Materials.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var SceneClass = new _engine_Scene__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var CameraClass = new _engine_Camera__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var MeshesClass = new _Assets_Meshes__WEBPACK_IMPORTED_MODULE_2__["default"](CameraClass);
  var LightClass = new _engine_Light__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _Addons_Materials__WEBPACK_IMPORTED_MODULE_5__["default"](scene);
  new _Addons_Grid__WEBPACK_IMPORTED_MODULE_4__["default"]({
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

/***/ "./resources/js/scene/Mainscene/engine/Light.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Mainscene/engine/Light.js ***!
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

/***/ "./resources/js/scene/Mainscene/engine/Scene.js":
/*!******************************************************!*\
  !*** ./resources/js/scene/Mainscene/engine/Scene.js ***!
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
      var hdr = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/hdrmini.env", scene);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _Addons_Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Addons/Actions */ "./resources/js/scene/Addons/Actions.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default = /*#__PURE__*/function () {
  function _default(scene) {
    _classCallCheck(this, _default);

    _defineProperty(this, "points", []);

    _defineProperty(this, "finishedPoints", []);

    this.scene = scene;
    this.actions = new _Addons_Actions__WEBPACK_IMPORTED_MODULE_0__["default"](scene);
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
          var mesh = pickInfo.pickedMesh; // mishkani ong tomonini bosganda active elementni ochiramiz

          if (_this.scene.activeMesh && mesh != _this.scene.activeMesh) {
            _this.clearActiveMesh();
          }

          _this.scene.activeMesh = mesh;

          _this.actions.animatePlay(mesh, true);

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
      this.actions.hover(box);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Engine_BuilderScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Engine/BuilderScene */ "./resources/js/scene/MeshBuilder/Engine/BuilderScene.js");
/* harmony import */ var _Engine_BuilderLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Engine/BuilderLight */ "./resources/js/scene/MeshBuilder/Engine/BuilderLight.js");
/* harmony import */ var _Assets_BuilderMeshes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/BuilderMeshes */ "./resources/js/scene/MeshBuilder/Assets/BuilderMeshes.js");
/* harmony import */ var _Engine_BuilderCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Engine/BuilderCamera */ "./resources/js/scene/MeshBuilder/Engine/BuilderCamera.js");
/* harmony import */ var _Addons_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Addons/Grid */ "./resources/js/scene/Addons/Grid.js");
/* harmony import */ var _Addons_Materials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Addons/Materials */ "./resources/js/scene/Addons/Materials.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(canvas) {
  var SceneClass = new _Engine_BuilderScene__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
  var CameraClass = new _Engine_BuilderCamera__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);
  var MeshesClass = new _Assets_BuilderMeshes__WEBPACK_IMPORTED_MODULE_2__["default"](SceneClass.scene);
  var LightClass = new _Engine_BuilderLight__WEBPACK_IMPORTED_MODULE_1__["default"](); //grid

  new _Addons_Grid__WEBPACK_IMPORTED_MODULE_4__["default"]({
    lines: false,
    grid: true
  });
  new _Addons_Materials__WEBPACK_IMPORTED_MODULE_5__["default"](SceneClass.scene);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/* полоса прокрутки (скроллбар) */\n::-webkit-scrollbar {\r\n    width: 6px; /* ширина для вертикального скролла */\r\n    height: 6px; /* высота для горизонтального скролла */\r\n    background-color: #aaa;\n}\r\n\r\n/* ползунок скроллбара */\n::-webkit-scrollbar-thumb {\r\n    background-color: #05ae23;\n}\n::-webkit-scrollbar-thumb:hover {\r\n    background-color: #253861;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_style_index_0_id_58d19b95_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_style_index_0_id_58d19b95_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_style_index_0_id_58d19b95_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/ConstructorPanel.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ConstructorPanel.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConstructorPanel_vue_vue_type_template_id_58d19b95__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConstructorPanel.vue?vue&type=template&id=58d19b95 */ "./resources/js/components/ConstructorPanel.vue?vue&type=template&id=58d19b95");
/* harmony import */ var _ConstructorPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConstructorPanel.vue?vue&type=script&lang=js */ "./resources/js/components/ConstructorPanel.vue?vue&type=script&lang=js");
/* harmony import */ var _ConstructorPanel_vue_vue_type_style_index_0_id_58d19b95_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css */ "./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ConstructorPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ConstructorPanel_vue_vue_type_template_id_58d19b95__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ConstructorPanel.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/MeshBuilder.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/MeshBuilder.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeshBuilder.vue?vue&type=template&id=d2459e5a */ "./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a");
/* harmony import */ var _MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshBuilder.vue?vue&type=script&lang=js */ "./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/MeshBuilder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/UploadImage.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/UploadImage.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UploadImage_vue_vue_type_template_id_46aa7c82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadImage.vue?vue&type=template&id=46aa7c82 */ "./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82");
/* harmony import */ var _UploadImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadImage.vue?vue&type=script&lang=js */ "./resources/js/components/UploadImage.vue?vue&type=script&lang=js");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UploadImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UploadImage_vue_vue_type_template_id_46aa7c82__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/UploadImage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/Constructor.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Constructor.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Constructor_vue_vue_type_template_id_292f6aab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constructor.vue?vue&type=template&id=292f6aab */ "./resources/js/views/Constructor.vue?vue&type=template&id=292f6aab");
/* harmony import */ var _Constructor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constructor.vue?vue&type=script&lang=js */ "./resources/js/views/Constructor.vue?vue&type=script&lang=js");
/* harmony import */ var D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_media_openserver_domains_greencity_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Constructor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Constructor_vue_vue_type_template_id_292f6aab__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/Constructor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ConstructorPanel.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ConstructorPanel.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConstructorPanel.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MeshBuilder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/UploadImage.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/UploadImage.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UploadImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UploadImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UploadImage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UploadImage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/views/Constructor.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/views/Constructor.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Constructor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Constructor_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Constructor.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Constructor.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ConstructorPanel.vue?vue&type=template&id=58d19b95":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ConstructorPanel.vue?vue&type=template&id=58d19b95 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_template_id_58d19b95__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_template_id_58d19b95__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConstructorPanel.vue?vue&type=template&id=58d19b95 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=template&id=58d19b95");


/***/ }),

/***/ "./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MeshBuilder_vue_vue_type_template_id_d2459e5a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MeshBuilder.vue?vue&type=template&id=d2459e5a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/MeshBuilder.vue?vue&type=template&id=d2459e5a");


/***/ }),

/***/ "./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UploadImage_vue_vue_type_template_id_46aa7c82__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UploadImage_vue_vue_type_template_id_46aa7c82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UploadImage.vue?vue&type=template&id=46aa7c82 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82");


/***/ }),

/***/ "./resources/js/views/Constructor.vue?vue&type=template&id=292f6aab":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Constructor.vue?vue&type=template&id=292f6aab ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Constructor_vue_vue_type_template_id_292f6aab__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Constructor_vue_vue_type_template_id_292f6aab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Constructor.vue?vue&type=template&id=292f6aab */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/Constructor.vue?vue&type=template&id=292f6aab");


/***/ }),

/***/ "./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ConstructorPanel_vue_vue_type_style_index_0_id_58d19b95_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ConstructorPanel.vue?vue&type=style&index=0&id=58d19b95&lang=css");


/***/ })

}]);