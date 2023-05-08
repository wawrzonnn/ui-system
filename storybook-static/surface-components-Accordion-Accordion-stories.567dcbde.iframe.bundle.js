/*! For license information please see surface-components-Accordion-Accordion-stories.567dcbde.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkui_system = self.webpackChunkui_system || []).push([
  [511],
  {
    "./src/surface-components/Accordion/Accordion.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Accordion_stories,
        });
      var react = __webpack_require__("./node_modules/react/index.js"),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        Accordion_module = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/surface-components/Accordion/Accordion.module.css"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Accordion_module.Z, options);
      const Accordion_Accordion_module =
        Accordion_module.Z && Accordion_module.Z.locals
          ? Accordion_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Arrow = function Arrow() {
          return (0, jsx_runtime.jsx)("svg", {
            width: "12",
            height: "8",
            viewBox: "0 0 12 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, jsx_runtime.jsx)("path", {
              d: "M1.41 0.295002L-2.62268e-07 1.705L6 7.705L12 1.705L10.59 0.295002L6 4.875L1.41 0.295002Z",
              fill: "#1C1B1F",
            }),
          });
        };
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                  arr["@@iterator"];
            if (null != _i) {
              var _s,
                _e,
                _x,
                _r,
                _arr = [],
                _n = !0,
                _d = !1;
              try {
                if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
                  if (Object(_i) !== _i) return;
                  _n = !1;
                } else
                  for (
                    ;
                    !(_n = (_s = _x.call(_i)).done) &&
                    (_arr.push(_s.value), _arr.length !== i);
                    _n = !0
                  );
              } catch (err) {
                (_d = !0), (_e = err);
              } finally {
                try {
                  if (
                    !_n &&
                    null != _i.return &&
                    ((_r = _i.return()), Object(_r) !== _r)
                  )
                    return;
                } finally {
                  if (_d) throw _e;
                }
              }
              return _arr;
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      Arrow.displayName = "Arrow";
      var _Default$parameters,
        _Default$parameters2,
        _Default$parameters2$,
        Accordion = function Accordion(_ref) {
          var header = _ref.header,
            _ref$defaultOpen = _ref.defaultOpen,
            defaultOpen = void 0 !== _ref$defaultOpen && _ref$defaultOpen,
            children = _ref.children,
            _useState2 = _slicedToArray((0, react.useState)(defaultOpen), 2),
            isOpen = _useState2[0],
            setIsOpen = _useState2[1];
          return (0, jsx_runtime.jsxs)("div", {
            className: Accordion_Accordion_module.default,
            children: [
              (0, jsx_runtime.jsxs)("div", {
                className: Accordion_Accordion_module.header,
                onClick: function handleSwitch() {
                  setIsOpen(!isOpen);
                },
                children: [
                  (0, jsx_runtime.jsx)("span", { children: header }),
                  (0, jsx_runtime.jsx)("span", {
                    children: (0, jsx_runtime.jsx)(Arrow, {}),
                  }),
                ],
              }),
              isOpen &&
                (0, jsx_runtime.jsx)("div", {
                  className: Accordion_Accordion_module.content,
                  children,
                }),
            ],
          });
        };
      Accordion.displayName = "Accordion";
      try {
        (Accordion.displayName = "Accordion"),
          (Accordion.__docgenInfo = {
            description: "",
            displayName: "Accordion",
            props: {
              header: {
                defaultValue: null,
                description: "",
                name: "header",
                required: !0,
                type: { name: "string" },
              },
              defaultOpen: {
                defaultValue: { value: "false" },
                description: "",
                name: "defaultOpen",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/surface-components/Accordion/Accordion.tsx#Accordion"
            ] = {
              docgenInfo: Accordion.__docgenInfo,
              name: "Accordion",
              path: "src/surface-components/Accordion/Accordion.tsx#Accordion",
            });
      } catch (__react_docgen_typescript_loader_error) {}
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
      const Accordion_stories = { component: Accordion };
      var Default = function Default() {
        return (0, jsx_runtime.jsx)(Accordion, {
          header: "Accordion 1",
          defaultOpen: !1,
          children: (0, jsx_runtime.jsx)("span", {
            children:
              "The accordion component allows the user to show and hide sections of related content on a page.",
          }),
        });
      };
      (Default.displayName = "Default"),
        (Default.args = { defaultOpen: !1 }),
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
                      '() => {\n  return <Accordion header={"Accordion 1"} defaultOpen={false}>\r\n      <span>\r\n        The accordion component allows the user to show and hide sections of\r\n        related content on a page.\r\n      </span>\r\n    </Accordion>;\n}',
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
        ));
      var __namedExportsOrder = ["Default"];
    },
    "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/surface-components/Accordion/Accordion.module.css":
      (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"
            ),
          _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.src-surface-components-Accordion-Accordion-module__default--DDsBp {\n  display: flex;\n  flex-direction: column;\n  max-width: 486px;\n  background: #ffffff;\n  border: 1px solid #e6e1e5;\n  padding: 10px;\n}\n\n.src-surface-components-Accordion-Accordion-module__header--FAGyV {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: "Inter";\n  font-weight: 500;\n  line-height: 24px;\n}\n\n.src-surface-components-Accordion-Accordion-module__content--nEQhH {\n  font-family: "Inter";\n  font-weight: 400;\n  line-height: 24px;\n  margin-top: 10px;\n}\n',
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/surface-components/Accordion/Accordion.module.css",
            ],
            names: [],
            mappings:
              "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;AAClB",
            sourcesContent: [
              '.default {\n  display: flex;\n  flex-direction: column;\n  max-width: 486px;\n  background: #ffffff;\n  border: 1px solid #e6e1e5;\n  padding: 10px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-family: "Inter";\n  font-weight: 500;\n  line-height: 24px;\n}\n\n.content {\n  font-family: "Inter";\n  font-weight: 400;\n  line-height: 24px;\n  margin-top: 10px;\n}\n',
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            default:
              "src-surface-components-Accordion-Accordion-module__default--DDsBp",
            header:
              "src-surface-components-Accordion-Accordion-module__header--FAGyV",
            content:
              "src-surface-components-Accordion-Accordion-module__content--nEQhH",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js":
      (module) => {
        module.exports = function (cssWithMappingToString) {
          var list = [];
          return (
            (list.toString = function toString() {
              return this.map(function (item) {
                var content = "",
                  needLayer = void 0 !== item[5];
                return (
                  item[4] && (content += "@supports (".concat(item[4], ") {")),
                  item[2] && (content += "@media ".concat(item[2], " {")),
                  needLayer &&
                    (content += "@layer".concat(
                      item[5].length > 0 ? " ".concat(item[5]) : "",
                      " {"
                    )),
                  (content += cssWithMappingToString(item)),
                  needLayer && (content += "}"),
                  item[2] && (content += "}"),
                  item[4] && (content += "}"),
                  content
                );
              }).join("");
            }),
            (list.i = function i(modules, media, dedupe, supports, layer) {
              "string" == typeof modules &&
                (modules = [[null, modules, void 0]]);
              var alreadyImportedModules = {};
              if (dedupe)
                for (var k = 0; k < this.length; k++) {
                  var id = this[k][0];
                  null != id && (alreadyImportedModules[id] = !0);
                }
              for (var _k = 0; _k < modules.length; _k++) {
                var item = [].concat(modules[_k]);
                (dedupe && alreadyImportedModules[item[0]]) ||
                  (void 0 !== layer &&
                    (void 0 === item[5] ||
                      (item[1] = "@layer"
                        .concat(
                          item[5].length > 0 ? " ".concat(item[5]) : "",
                          " {"
                        )
                        .concat(item[1], "}")),
                    (item[5] = layer)),
                  media &&
                    (item[2]
                      ? ((item[1] = "@media "
                          .concat(item[2], " {")
                          .concat(item[1], "}")),
                        (item[2] = media))
                      : (item[2] = media)),
                  supports &&
                    (item[4]
                      ? ((item[1] = "@supports ("
                          .concat(item[4], ") {")
                          .concat(item[1], "}")),
                        (item[4] = supports))
                      : (item[4] = "".concat(supports))),
                  list.push(item));
              }
            }),
            list
          );
        };
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js":
      (module) => {
        module.exports = function (item) {
          var content = item[1],
            cssMapping = item[3];
          if (!cssMapping) return content;
          if ("function" == typeof btoa) {
            var base64 = btoa(
                unescape(encodeURIComponent(JSON.stringify(cssMapping)))
              ),
              data =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  base64
                ),
              sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      (module) => {
        var stylesInDOM = [];
        function getIndexByIdentifier(identifier) {
          for (var result = -1, i = 0; i < stylesInDOM.length; i++)
            if (stylesInDOM[i].identifier === identifier) {
              result = i;
              break;
            }
          return result;
        }
        function modulesToDom(list, options) {
          for (
            var idCountMap = {}, identifiers = [], i = 0;
            i < list.length;
            i++
          ) {
            var item = list[i],
              id = options.base ? item[0] + options.base : item[0],
              count = idCountMap[id] || 0,
              identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var indexByIdentifier = getIndexByIdentifier(identifier),
              obj = {
                css: item[1],
                media: item[2],
                sourceMap: item[3],
                supports: item[4],
                layer: item[5],
              };
            if (-1 !== indexByIdentifier)
              stylesInDOM[indexByIdentifier].references++,
                stylesInDOM[indexByIdentifier].updater(obj);
            else {
              var updater = addElementStyle(obj, options);
              (options.byIndex = i),
                stylesInDOM.splice(i, 0, {
                  identifier,
                  updater,
                  references: 1,
                });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function addElementStyle(obj, options) {
          var api = options.domAPI(options);
          api.update(obj);
          return function updater(newObj) {
            if (newObj) {
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              )
                return;
              api.update((obj = newObj));
            } else api.remove();
          };
        }
        module.exports = function (list, options) {
          var lastIdentifiers = modulesToDom(
            (list = list || []),
            (options = options || {})
          );
          return function update(newList) {
            newList = newList || [];
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var index = getIndexByIdentifier(lastIdentifiers[i]);
              stylesInDOM[index].references--;
            }
            for (
              var newLastIdentifiers = modulesToDom(newList, options), _i = 0;
              _i < lastIdentifiers.length;
              _i++
            ) {
              var _index = getIndexByIdentifier(lastIdentifiers[_i]);
              0 === stylesInDOM[_index].references &&
                (stylesInDOM[_index].updater(), stylesInDOM.splice(_index, 1));
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js":
      (module) => {
        var memo = {};
        module.exports = function insertBySelector(insert, style) {
          var target = (function getTarget(target) {
            if (void 0 === memo[target]) {
              var styleTarget = document.querySelector(target);
              if (
                window.HTMLIFrameElement &&
                styleTarget instanceof window.HTMLIFrameElement
              )
                try {
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  styleTarget = null;
                }
              memo[target] = styleTarget;
            }
            return memo[target];
          })(insert);
          if (!target)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          target.appendChild(style);
        };
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js":
      (module) => {
        module.exports = function insertStyleElement(options) {
          var element = document.createElement("style");
          return (
            options.setAttributes(element, options.attributes),
            options.insert(element, options.options),
            element
          );
        };
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = function setAttributesWithoutAttributes(styleElement) {
          var nonce = __webpack_require__.nc;
          nonce && styleElement.setAttribute("nonce", nonce);
        };
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js":
      (module) => {
        module.exports = function domAPI(options) {
          if ("undefined" == typeof document)
            return {
              update: function update() {},
              remove: function remove() {},
            };
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              !(function apply(styleElement, options, obj) {
                var css = "";
                obj.supports &&
                  (css += "@supports (".concat(obj.supports, ") {")),
                  obj.media && (css += "@media ".concat(obj.media, " {"));
                var needLayer = void 0 !== obj.layer;
                needLayer &&
                  (css += "@layer".concat(
                    obj.layer.length > 0 ? " ".concat(obj.layer) : "",
                    " {"
                  )),
                  (css += obj.css),
                  needLayer && (css += "}"),
                  obj.media && (css += "}"),
                  obj.supports && (css += "}");
                var sourceMap = obj.sourceMap;
                sourceMap &&
                  "undefined" != typeof btoa &&
                  (css +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(
                        unescape(encodeURIComponent(JSON.stringify(sourceMap)))
                      ),
                      " */"
                    )),
                  options.styleTagTransform(css, styleElement, options.options);
              })(styleElement, options, obj);
            },
            remove: function remove() {
              !(function removeStyleElement(styleElement) {
                if (null === styleElement.parentNode) return !1;
                styleElement.parentNode.removeChild(styleElement);
              })(styleElement);
            },
          };
        };
      },
    "./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js":
      (module) => {
        module.exports = function styleTagTransform(css, styleElement) {
          if (styleElement.styleSheet) styleElement.styleSheet.cssText = css;
          else {
            for (; styleElement.firstChild; )
              styleElement.removeChild(styleElement.firstChild);
            styleElement.appendChild(document.createTextNode(css));
          }
        };
      },
    "./node_modules/react/cjs/react-jsx-runtime.production.min.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      var f = __webpack_require__("./node_modules/react/index.js"),
        k = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        m = Object.prototype.hasOwnProperty,
        n =
          f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = "" + g),
        void 0 !== a.key && (e = "" + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps)
          for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return {
          $$typeof: k,
          type: c,
          key: e,
          ref: h,
          props: d,
          _owner: n.current,
        };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    "./node_modules/react/jsx-runtime.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__(
        "./node_modules/react/cjs/react-jsx-runtime.production.min.js"
      );
    },
  },
]);
