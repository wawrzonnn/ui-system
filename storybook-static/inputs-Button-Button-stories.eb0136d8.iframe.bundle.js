"use strict";
(self.webpackChunkui_system = self.webpackChunkui_system || []).push([
  [774],
  {
    "./src/inputs/Button/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Icon: () => Icon,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _Default$parameters,
        _Default$parameters2,
        _Default$parameters2$,
        _Icon$parameters,
        _Icon$parameters2,
        _Icon$parameters2$doc,
        _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/inputs/Button/Button.tsx"
        ),
        _assets_Icons_Settings__WEBPACK_IMPORTED_MODULE_2__ =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./src/assets/Icons/Settings.tsx")),
        _Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./src/inputs/Button/Button.module.css"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      function _typeof(obj) {
        return (
          (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                }),
          _typeof(obj)
        );
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          (key = (function _toPropertyKey(arg) {
            var key = (function _toPrimitive(input, hint) {
              if ("object" !== _typeof(input) || null === input) return input;
              var prim = input[Symbol.toPrimitive];
              if (void 0 !== prim) {
                var res = prim.call(input, hint || "default");
                if ("object" !== _typeof(res)) return res;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === hint ? String : Number)(input);
            })(arg, "string");
            return "symbol" === _typeof(key) ? key : String(key);
          })(key)) in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      const __WEBPACK_DEFAULT_EXPORT__ = {
        component: _Button__WEBPACK_IMPORTED_MODULE_0__.z,
      };
      var Default = function Default(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_0__.z,
          _objectSpread(
            _objectSpread({ isLoading: !1, variant: "primary" }, args),
            {},
            {
              onClick: function onClick() {
                return console.log("clicked");
              },
              children: "Button",
            }
          )
        );
      };
      (Default.displayName = "Default"),
        (Default.args = { variant: "primary", disabled: !1, isLoading: !1 });
      var Icon = function Icon(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          _Button__WEBPACK_IMPORTED_MODULE_0__.z,
          _objectSpread(
            _objectSpread({ isLoading: !1, variant: "primary" }, args),
            {},
            {
              onClick: function onClick() {
                return console.log("clicked");
              },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                  {
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                      "span",
                      {
                        className:
                          _Button_Button_module_css__WEBPACK_IMPORTED_MODULE_3__
                            .Z.icon,
                        children: (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                          _assets_Icons_Settings__WEBPACK_IMPORTED_MODULE_2__.Z,
                          {}
                        ),
                      }
                    ),
                  }
                ),
                "Button",
              ],
            }
          )
        );
      };
      (Icon.displayName = "Icon"),
        (Icon.args = { variant: "primary", disabled: !1, isLoading: !1 }),
        (Default.parameters = _objectSpread(
          _objectSpread({}, Default.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_Default$parameters = Default.parameters) ||
                  void 0 === _Default$parameters
                  ? void 0
                  : _Default$parameters.docs
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      'args => <Button isLoading={false} variant={"primary"} {...args} onClick={() => console.log("clicked")}>\r\n    Button\r\n  </Button>',
                  },
                  null === (_Default$parameters2 = Default.parameters) ||
                    void 0 === _Default$parameters2 ||
                    null ===
                      (_Default$parameters2$ = _Default$parameters2.docs) ||
                    void 0 === _Default$parameters2$
                    ? void 0
                    : _Default$parameters2$.source
                ),
              }
            ),
          }
        )),
        (Icon.parameters = _objectSpread(
          _objectSpread({}, Icon.parameters),
          {},
          {
            docs: _objectSpread(
              _objectSpread(
                {},
                null === (_Icon$parameters = Icon.parameters) ||
                  void 0 === _Icon$parameters
                  ? void 0
                  : _Icon$parameters.docs
              ),
              {},
              {
                source: _objectSpread(
                  {
                    originalSource:
                      'args => <Button isLoading={false} variant={"primary"} {...args} onClick={() => console.log("clicked")}>\r\n    <>\r\n      <span className={styles.icon}>\r\n        <Settings />\r\n      </span>\r\n    </>\r\n    Button\r\n  </Button>',
                  },
                  null === (_Icon$parameters2 = Icon.parameters) ||
                    void 0 === _Icon$parameters2 ||
                    null === (_Icon$parameters2$doc = _Icon$parameters2.docs) ||
                    void 0 === _Icon$parameters2$doc
                    ? void 0
                    : _Icon$parameters2$doc.source
                ),
              }
            ),
          }
        ));
      var __namedExportsOrder = ["Default", "Icon"];
    },
    "./src/assets/Icons/Settings.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Settings });
      __webpack_require__("./node_modules/react/index.js");
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Settings = function Settings() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            "svg",
            {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                "path",
                {
                  d: "M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z",
                  fill: "black",
                }
              ),
            }
          );
        };
      Settings.displayName = "Settings";
    },
  },
]);
