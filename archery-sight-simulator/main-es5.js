function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-lg-7\">\n      <canvas #canvas id=\"canvas\" width=\"640\" height=\"480\">\n        Sorry, your browser doesn't support the &lt;canvas&gt; element.\n      </canvas>\n    </div>\n    <div class=\"col-xs-12 col-lg-5\">\n      <div class=\"form-group row\">\n        <div class=\"col-xs-12 col-lg-6\">\n          <label for=\"targetDistance\">Target Distance</label>\n          <input id=\"targetDistance\" class=\"form-control\" type=\"number\" min=\"1\" max=\"200\" [(ngModel)]=\"targetDistance\" (keyup.enter)=\"calculate()\">\n          <small class=\"form-text text-muted\">\n            Distance from the shooting line to the target face in meters.\n          </small>\n        </div>\n        <div class=\"col-xs-12 col-lg-6\">\n          <label for=\"targetDiameter\">Target Diameter</label>\n          <input id=\"targetDiameter\" class=\"form-control\" type=\"number\" min=\"1\" max=\"122\" [(ngModel)]=\"targetDiameter\" (keyup.enter)=\"calculate()\">\n          <small class=\"form-text text-muted\">\n            Target face diameter in centimeters.\n          </small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"eyePinDistance\">Eye to Pin Distance</label>\n        <input id=\"eyePinDistance\" class=\"form-control\" type=\"number\" min=\"1\" max=\"200\" step=\"0.1\" [(ngModel)]=\"eyePinDistance\" (keyup.enter)=\"calculate()\">\n        <small class=\"form-text text-muted\">\n          Distance from archer's (aiming) eye to the sight pin/aperture in centimeters.\n          An easy way to get a reasonable approximation for this for a recurve archer is to measure the distance\n          from the clicker blade to the sight pin, then add this distance to the archer's arrow length.\n        </small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"apertureInnerDiameter\">Aperture Inner Diameter</label>\n        <input id=\"apertureInnerDiameter\" class=\"form-control\" type=\"number\" min=\"1\" max=\"50\" step=\"0.1\" [(ngModel)]=\"apertureDiameter\" (keyup.enter)=\"calculate()\">\n        <small class=\"form-text text-muted\">\n          Inner diameter of the sight aperture in millimeters.\n        </small>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-xs-12 col-lg-6\">\n          <label for=\"apertureRingThickness\">Aperture Ring Thickness</label>\n          <input id=\"apertureRingThickness\" class=\"form-control\" type=\"number\" min=\"1\" max=\"5\" step=\"0.1\" [(ngModel)]=\"apertureRingThickness\" (keyup.enter)=\"calculate()\">\n          <small class=\"form-text text-muted\">\n            Thickness of aperture ring in millimeters.\n          </small>\n        </div>\n        <div class=\"col-xs-12 col-lg-6\">\n          <label for=\"apertureColour\">Aperture Colour</label>\n          <p>\n            <select id=\"apertureColour\" [(ngModel)]=\"apertureColour\">\n              <option value=\"chartreuse\">Flo. Green</option>\n              <option value=\"crimson\">Dark Red</option>\n              <option value=\"red\">Bright Red</option>\n              <option value=\"darkorange\">Orange</option>\n              <option value=\"gold\">Yellow</option>\n              <option value=\"cornflowerblue\">Blue</option>\n              <option value=\"black\">Black</option>\n              <option value=\"grey\">Grey</option>\n            </select>\n          </p>\n          <small class=\"form-text text-muted\">\n            Colour of aperture ring.\n          </small>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-xs-12\">\n          <label for=\"reticleType\">Reticle Type</label>\n          <p>\n            <select [(ngModel)]=\"reticleType\">\n              <option value=\"\">None (Open Ring)</option>\n              <option value=\"dot\">Dot (Lens Sticker)</option>\n            </select>\n          </p>\n        </div>\n        <div class=\"row\" *ngIf=\"!!reticleType\">\n          <div class=\"col-xs-12 col-lg-6\" *ngIf=\"!!reticleType\">\n            <label for=\"reticleSize\">Reticle Size</label>\n            <input id=\"reticleSize\" class=\"form-control\" type=\"number\" min=\"0.1\" max=\"5\" step=\"0.1\" [(ngModel)]=\"reticleSize\">\n            <small class=\"form-text text-muted\">\n              Diameter of aiming reticle in millimeters.\n            </small>\n          </div>\n          <div class=\"col-xs-12 col-lg-6\">\n            <label for=\"reticleColour\">Reticle Colour</label>\n            <p>\n              <select id=\"reticleColour\" [(ngModel)]=\"reticleColour\">\n                <option value=\"chartreuse\">Flo. Green</option>\n                <option value=\"crimson\">Dark Red</option>\n                <option value=\"red\">Bright Red</option>\n                <option value=\"darkorange\">Orange</option>\n                <option value=\"gold\">Yellow</option>\n                <option value=\"cornflowerblue\">Blue</option>\n                <option value=\"black\">Black</option>\n                <option value=\"grey\">Grey</option>\n              </select>\n            </p>\n            <small class=\"form-text text-muted\">\n              Colour of aiming reticle.\n            </small>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" value=\"Calculate\" (click)=\"calculate()\">\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var routes = [{
      path: '',
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.less":
  /*!************************************!*\
    !*** ./src/app/app.component.less ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "canvas {\n  background-color: ghostwhite;\n  border: 1px solid grey;\n  width: 100%;\n  height: auto;\n}\n.row {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJldy93b3Jrc3BhY2UvYXJjaGVyeS1zaWdodC1zaW11bGF0b3Ivc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucm93IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiIsImNhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdob3N0d2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucm93IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.targetDistance = 70;
        this.targetDiameter = 122;
        this.eyePinDistance = 100;
        this.apertureDiameter = 10;
        this.apertureRingThickness = 1;
        this.apertureColour = 'chartreuse';
        this.reticleType = '';
        this.reticleSize = 1;
        this.reticleColour = 'black';
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.context = this.canvas.nativeElement.getContext('2d');
          this.calculate();
        }
      }, {
        key: "calculate",
        value: function calculate() {
          this.clearCanvas();
          console.log('Calculating', {
            targetDistance: this.targetDistance,
            targetDiameter: this.targetDiameter,
            eyePinDistance: this.eyePinDistance,
            apertureDiameter: this.apertureDiameter
          });
          this.drawTarget();
          this.drawAperture();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "drawTarget",
        value: function drawTarget() {
          var black = '#302e2c';
          var blue = '#00b4e4';
          var red = '#f65058';
          var gold = '#ffe552';
          this.drawConcentricRing(0, black, true);
          this.drawConcentricRing(0, 'white', false);
          this.drawConcentricRing(1, black, true);
          this.drawConcentricRing(1, 'white', false);
          this.drawConcentricRing(2, 'white', true);
          this.drawConcentricRing(2, black, false);
          this.drawConcentricRing(3, 'white', true);
          this.drawConcentricRing(3, black, false);
          this.drawConcentricRing(4, black, true);
          this.drawConcentricRing(4, blue, false);
          this.drawConcentricRing(5, black, true);
          this.drawConcentricRing(5, blue, false);
          this.drawConcentricRing(6, black, true);
          this.drawConcentricRing(6, red, false);
          this.drawConcentricRing(7, black, true);
          this.drawConcentricRing(7, red, false);
          this.drawConcentricRing(8, black, true);
          this.drawConcentricRing(8, gold, false);
          this.drawConcentricRing(9, black, true);
          this.drawConcentricRing(9, gold, false);
        }
      }, {
        key: "drawAperture",
        value: function drawAperture() {
          // work in cm
          var targetDistance = this.targetDistance * 100;
          var targetAngleDeg = 2 * Math.atan(this.targetDiameter / (2 * targetDistance));
          var apertureOuterDiameter = this.apertureDiameter / 10 + this.apertureRingThickness / 10;
          var apertureOuterAngle = 2 * Math.atan(apertureOuterDiameter / (2 * this.eyePinDistance));
          var apertureInnerDiameter = this.apertureDiameter / 10;
          var apertureInnerAngle = 2 * Math.atan(apertureInnerDiameter / (2 * this.eyePinDistance));
          var apertureOuterApparent = Math.abs(2 * targetDistance * Math.tan(apertureOuterAngle / 2));
          var apertureInnerApparent = Math.abs(2 * targetDistance * Math.tan(apertureInnerAngle / 2));
          var apertureOuterCanvasScaled = apertureOuterApparent / this.targetDiameter * this.getTargetRadius();
          var apertureInnerCanvasScaled = apertureInnerApparent / this.targetDiameter * this.getTargetRadius();
          console.log({
            targetAngleDeg: targetAngleDeg,
            apertureInnerAngle: apertureInnerAngle
          });
          this.context.beginPath();
          this.context.arc(this.getCanvcasCenter().first, this.getCanvcasCenter().second, apertureOuterCanvasScaled, 0, 2 * Math.PI, false);
          this.context.arc(this.getCanvcasCenter().first, this.getCanvcasCenter().second, apertureInnerCanvasScaled, 0, 2 * Math.PI, true);
          this.context.fillStyle = this.apertureColour;
          this.context.fill();
          this.drawReticle();
        }
      }, {
        key: "drawReticle",
        value: function drawReticle() {
          if (!this.reticleType) {
            return;
          }

          var targetDistance = this.targetDistance * 100;
          var targetAngleDeg = 2 * Math.atan(this.targetDiameter / (2 * targetDistance));
          var reticleSize = this.reticleSize / 10;
          var reticleAngle = 2 * Math.atan(reticleSize / (2 * this.eyePinDistance));
          var reticleApparent = Math.abs(2 * targetDistance * Math.tan(reticleAngle / 2));
          var reticleCanvasScaled = reticleApparent / this.targetDiameter * this.getTargetRadius();
          this.context.beginPath();
          this.context.arc(this.getCanvcasCenter().first, this.getCanvcasCenter().second, reticleCanvasScaled, 0, 2 * Math.PI, false);
          this.context.fillStyle = this.reticleColour;
          this.context.fill();
        }
      }, {
        key: "drawConcentricRing",
        value: function drawConcentricRing(idx, color) {
          var divider = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var maxRadius = this.getTargetRadius();
          var radius = maxRadius - maxRadius / 10 * idx;
          this.context.beginPath();
          this.context.lineWidth = 1;
          this.context.arc(this.getCanvcasCenter().first, this.getCanvcasCenter().second, radius, 0, 2 * Math.PI);

          if (divider) {
            this.context.strokeStyle = color;
            this.context.closePath();
            this.context.stroke();
          } else {
            this.context.fillStyle = color;
            this.context.fill();
          }
        }
      }, {
        key: "clearCanvas",
        value: function clearCanvas() {
          var canvasWidth = this.canvas.nativeElement.width;
          var canvasHeight = this.canvas.nativeElement.height;
          this.context.clearRect(0, 0, canvasWidth, canvasHeight);
        }
      }, {
        key: "getTargetRadius",
        value: function getTargetRadius() {
          var canvasWidth = this.canvas.nativeElement.width;
          var canvasHeight = this.canvas.nativeElement.height;
          var maxRadius = Math.min(canvasWidth, canvasHeight) / 2;
          return maxRadius;
        }
      }, {
        key: "getCanvcasCenter",
        value: function getCanvcasCenter() {
          var canvasWidth = this.canvas.nativeElement.width;
          var canvasHeight = this.canvas.nativeElement.height;
          return {
            first: canvasWidth / 2,
            second: canvasHeight / 2
          };
        }
      }]);

      return AppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      static: false
    })], AppComponent.prototype, "canvas", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.less */
      "./src/app/app.component.less")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/andrew/workspace/archery-sight-simulator/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map