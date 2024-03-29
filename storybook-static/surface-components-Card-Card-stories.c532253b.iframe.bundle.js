"use strict";
(self.webpackChunkui_system = self.webpackChunkui_system || []).push([
  [697],
  {
    "./src/surface-components/Card/Card.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        });
      __webpack_require__("./node_modules/react/index.js");
      var injectStylesIntoStyleTag = __webpack_require__(
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
        Card_module = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/surface-components/Card/Card.module.css"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Card_module.Z, options);
      const Card_Card_module =
        Card_module.Z && Card_module.Z.locals ? Card_module.Z.locals : void 0;
      var bind = __webpack_require__("./node_modules/classnames/bind.js"),
        bind_default = __webpack_require__.n(bind),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        cx = bind_default().bind(Card_Card_module),
        Card = function Card(_ref) {
          var fullWidth = _ref.fullWidth,
            children = _ref.children,
            cardClasses = cx({
              cardFullWidth: fullWidth,
              cardFixedWidth: !fullWidth,
            });
          return (0, jsx_runtime.jsx)("div", {
            className: cardClasses,
            children,
          });
        };
      Card.displayName = "Card";
      var CardImage = function CardImage(_ref2) {
        var url = _ref2.url,
          alt = _ref2.alt;
        return (0, jsx_runtime.jsx)("img", {
          src: url,
          alt,
          className: Card_Card_module.cardImage,
        });
      };
      CardImage.displayName = "CardImage";
      var CardContent = function CardContent(_ref3) {
        var children = _ref3.children;
        return (0, jsx_runtime.jsx)("div", {
          className: Card_Card_module.cardContent,
          children,
        });
      };
      CardContent.displayName = "CardContent";
      try {
        (Card.displayName = "Card"),
          (Card.__docgenInfo = {
            description: "",
            displayName: "Card",
            props: {
              fullWidth: {
                defaultValue: null,
                description: "",
                name: "fullWidth",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/surface-components/Card/Card.tsx#Card"
            ] = {
              docgenInfo: Card.__docgenInfo,
              name: "Card",
              path: "src/surface-components/Card/Card.tsx#Card",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (CardImage.displayName = "CardImage"),
          (CardImage.__docgenInfo = {
            description: "",
            displayName: "CardImage",
            props: {
              url: {
                defaultValue: null,
                description: "",
                name: "url",
                required: !0,
                type: { name: "string" },
              },
              alt: {
                defaultValue: null,
                description: "",
                name: "alt",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/surface-components/Card/Card.tsx#CardImage"
            ] = {
              docgenInfo: CardImage.__docgenInfo,
              name: "CardImage",
              path: "src/surface-components/Card/Card.tsx#CardImage",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (CardContent.displayName = "CardContent"),
          (CardContent.__docgenInfo = {
            description: "",
            displayName: "CardContent",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/surface-components/Card/Card.tsx#CardContent"
            ] = {
              docgenInfo: CardContent.__docgenInfo,
              name: "CardContent",
              path: "src/surface-components/Card/Card.tsx#CardContent",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var _Default$parameters,
        _Default$parameters2,
        _Default$parameters2$,
        Button = __webpack_require__("./src/inputs/Button/Button.tsx"),
        AvatarTemplate = __webpack_require__(
          "./src/assets/images/AvatarTemplate.jpg"
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
      var Card_stories_cx = bind_default().bind(Card_Card_module);
      const Card_stories = { component: Card };
      var Default = function Default(_ref) {
        var fullWidth = _ref.fullWidth,
          buttonsWrapperClasses = Card_stories_cx({
            buttonsWrapper: !0,
            buttonsWrapperFixedWidth: !fullWidth,
          });
        return (0, jsx_runtime.jsxs)(Card, {
          fullWidth,
          children: [
            (0, jsx_runtime.jsx)(CardImage, {
              url: AvatarTemplate,
              alt: "Default Avatar",
            }),
            (0, jsx_runtime.jsxs)(CardContent, {
              children: [
                (0, jsx_runtime.jsx)("h1", { children: "Card name" }),
                (0, jsx_runtime.jsx)("p", {
                  children:
                    "Card description goes here and it can be as long as it needs and so on.",
                }),
                (0, jsx_runtime.jsxs)("div", {
                  className: buttonsWrapperClasses,
                  children: [
                    (0, jsx_runtime.jsx)(Button.z, {
                      onClick: function onClick() {
                        console.log("Clicked!");
                      },
                      variant: "primary",
                      children: "Primary Button",
                    }),
                    (0, jsx_runtime.jsx)(Button.z, {
                      onClick: function onClick() {
                        console.log("Clicked!");
                      },
                      variant: "secondary",
                      children: "Secondary Button",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      (Default.displayName = "Default"),
        (Default.args = { fullWidth: !1 }),
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
                      '({\n  fullWidth\n}) => {\n  const buttonsWrapperClasses = cx({\n    buttonsWrapper: true,\n    buttonsWrapperFixedWidth: !fullWidth\n  });\n  return <Card fullWidth={fullWidth}>\r\n      <CardImage url={AvatarTemplate} alt={"Default Avatar"} />\r\n      <CardContent>\r\n        <h1>Card name</h1>\r\n        <p>\r\n          Card description goes here and it can be as long as it needs and so\r\n          on.\r\n        </p>\r\n        <div className={buttonsWrapperClasses}>\r\n          <Button onClick={() => {\n          console.log("Clicked!");\n        }} variant={"primary"}>\r\n            Primary Button\r\n          </Button>\r\n          <Button onClick={() => {\n          console.log("Clicked!");\n        }} variant={"secondary"}>\r\n            Secondary Button\r\n          </Button>\r\n        </div>\r\n      </CardContent>\r\n    </Card>;\n}',
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
    "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/surface-components/Card/Card.module.css":
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
          ".src-surface-components-Card-Card-module__cardFullWidth--Lpj8Q {\n  border: 1px solid #000000;\n  display: inline-block;\n}\n\n.src-surface-components-Card-Card-module__cardFullWidth--Lpj8Q:hover {\n  box-shadow: 4px 4px 0px #000000;\n}\n\n.src-surface-components-Card-Card-module__cardFixedWidth--stTq_ {\n  border: 1px solid #000000;\n  display: flex;\n  flex-direction: column;\n  max-width: 270px;\n}\n\n.src-surface-components-Card-Card-module__cardFixedWidth--stTq_:hover {\n  box-shadow: 4px 4px 0px #000000;\n}\n\n.src-surface-components-Card-Card-module__cardFullWidth--Lpj8Q img {\n  width: 100%;\n}\n\n.src-surface-components-Card-Card-module__cardContent--QKvWh {\n  width: 100%;\n}\n\n.src-surface-components-Card-Card-module__cardContent--QKvWh p,\nh1 {\n  margin: 20px 15px;\n}\n\n.src-surface-components-Card-Card-module__buttonsWrapper--IJtEZ {\n  width: 100%;\n  display: flex;\n  margin-top: 10px;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.src-surface-components-Card-Card-module__buttonsWrapperFixedWidth--_e8G1 {\n  flex-wrap: wrap;\n}\n\n.src-surface-components-Card-Card-module__buttonsWrapper--IJtEZ button {\n  width: 100%;\n  margin: 10px;\n}\n\n.src-surface-components-Card-Card-module__buttonsWrapper--IJtEZ:nth-last-child(1) {\n  margin-bottom: 10px;\n}\n",
          "",
          {
            version: 3,
            sources: [
              "webpack://./src/surface-components/Card/Card.module.css",
            ],
            names: [],
            mappings:
              "AAAA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB",
            sourcesContent: [
              ".cardFullWidth {\n  border: 1px solid #000000;\n  display: inline-block;\n}\n\n.cardFullWidth:hover {\n  box-shadow: 4px 4px 0px #000000;\n}\n\n.cardFixedWidth {\n  border: 1px solid #000000;\n  display: flex;\n  flex-direction: column;\n  max-width: 270px;\n}\n\n.cardFixedWidth:hover {\n  box-shadow: 4px 4px 0px #000000;\n}\n\n.cardFullWidth img {\n  width: 100%;\n}\n\n.cardContent {\n  width: 100%;\n}\n\n.cardContent p,\nh1 {\n  margin: 20px 15px;\n}\n\n.buttonsWrapper {\n  width: 100%;\n  display: flex;\n  margin-top: 10px;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.buttonsWrapperFixedWidth {\n  flex-wrap: wrap;\n}\n\n.buttonsWrapper button {\n  width: 100%;\n  margin: 10px;\n}\n\n.buttonsWrapper:nth-last-child(1) {\n  margin-bottom: 10px;\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            cardFullWidth:
              "src-surface-components-Card-Card-module__cardFullWidth--Lpj8Q",
            cardFixedWidth:
              "src-surface-components-Card-Card-module__cardFixedWidth--stTq_",
            cardContent:
              "src-surface-components-Card-Card-module__cardContent--QKvWh",
            buttonsWrapper:
              "src-surface-components-Card-Card-module__buttonsWrapper--IJtEZ",
            buttonsWrapperFixedWidth:
              "src-surface-components-Card-Card-module__buttonsWrapperFixedWidth--_e8G1",
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./src/assets/images/AvatarTemplate.jpg": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports =
        __webpack_require__.p + "static/media/AvatarTemplate.15bd5511.jpg";
    },
  },
]);
