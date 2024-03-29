/*! For license information please see data-display-Table-Table-stories.da87b4aa.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkui_system = self.webpackChunkui_system || []).push([
  [391],
  {
    "./src/data-display/Table/Table.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Template: () => Template,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
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
        Table_module = __webpack_require__(
          "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/data-display/Table/Table.module.css"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(Table_module.Z, options);
      const Table_Table_module =
        Table_module.Z && Table_module.Z.locals
          ? Table_module.Z.locals
          : void 0;
      var jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Table = function Table(_ref) {
          var children = _ref.children;
          return (0, jsx_runtime.jsx)("table", {
            className: Table_Table_module.table,
            children,
          });
        };
      Table.displayName = "Table";
      var TableHead = function TableHead(_ref2) {
        var children = _ref2.children;
        return (0, jsx_runtime.jsx)("thead", {
          className: Table_Table_module.tableHead,
          children,
        });
      };
      TableHead.displayName = "TableHead";
      var TableRow = function TableRow(_ref3) {
        var children = _ref3.children;
        return (0, jsx_runtime.jsx)("tr", {
          className: Table_Table_module.tableRow,
          children,
        });
      };
      TableRow.displayName = "TableRow";
      var TableBody = function TableBody(_ref4) {
        var children = _ref4.children;
        return (0, jsx_runtime.jsx)("tbody", { children });
      };
      TableBody.displayName = "TableBody";
      var _Template$parameters,
        _Template$parameters2,
        _Template$parameters3,
        TableCell = function TableCell(_ref5) {
          var align = _ref5.align,
            children = _ref5.children;
          return (0, jsx_runtime.jsx)("div", {
            className: Table_Table_module.tableCell,
            children: (0, jsx_runtime.jsx)("td", {
              style: { textAlign: align },
              children,
            }),
          });
        };
      TableCell.displayName = "TableCell";
      try {
        (Table.displayName = "Table"),
          (Table.__docgenInfo = {
            description: "",
            displayName: "Table",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/data-display/Table/Table.tsx#Table"] =
              {
                docgenInfo: Table.__docgenInfo,
                name: "Table",
                path: "src/data-display/Table/Table.tsx#Table",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TableHead.displayName = "TableHead"),
          (TableHead.__docgenInfo = {
            description: "",
            displayName: "TableHead",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Table/Table.tsx#TableHead"
            ] = {
              docgenInfo: TableHead.__docgenInfo,
              name: "TableHead",
              path: "src/data-display/Table/Table.tsx#TableHead",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TableRow.displayName = "TableRow"),
          (TableRow.__docgenInfo = {
            description: "",
            displayName: "TableRow",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Table/Table.tsx#TableRow"
            ] = {
              docgenInfo: TableRow.__docgenInfo,
              name: "TableRow",
              path: "src/data-display/Table/Table.tsx#TableRow",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TableBody.displayName = "TableBody"),
          (TableBody.__docgenInfo = {
            description: "",
            displayName: "TableBody",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Table/Table.tsx#TableBody"
            ] = {
              docgenInfo: TableBody.__docgenInfo,
              name: "TableBody",
              path: "src/data-display/Table/Table.tsx#TableBody",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TableCell.displayName = "TableCell"),
          (TableCell.__docgenInfo = {
            description: "",
            displayName: "TableCell",
            props: {
              align: {
                defaultValue: null,
                description: "",
                name: "align",
                required: !0,
                type: {
                  name: "enum",
                  value: [
                    { value: '"left"' },
                    { value: '"center"' },
                    { value: '"right"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Table/Table.tsx#TableCell"
            ] = {
              docgenInfo: TableCell.__docgenInfo,
              name: "TableCell",
              path: "src/data-display/Table/Table.tsx#TableCell",
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
      const Table_stories = { component: Table };
      var rows = [
          {
            breed: "Cocker Spaniel",
            name: "Richard",
            weight: 15,
            height: 31,
            chip: !0,
            ower: !1,
          },
          {
            breed: "Labrador Retriever",
            name: "Fifi",
            weight: 25,
            height: 42,
            chip: !0,
            ower: !0,
          },
          {
            breed: "German Shepherd",
            name: "Chaps",
            weight: 26,
            height: 57,
            chip: !1,
            ower: !1,
          },
          {
            breed: "Dog",
            name: "Reksio",
            weight: 36,
            height: 56,
            chip: !1,
            ower: !0,
          },
          {
            breed: "Golden Retriever",
            name: "Mufasa",
            weight: 49,
            height: 24,
            chip: !0,
            ower: !1,
          },
        ],
        Template = function Template() {
          return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: (0, jsx_runtime.jsxs)(Table, {
              children: [
                (0, jsx_runtime.jsx)(TableHead, {
                  children: (0, jsx_runtime.jsxs)(TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell, {
                        align: "left",
                        children: "Dog’s breed",
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        align: "right",
                        children: "Name",
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        align: "right",
                        children: "Weight (kg)",
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        align: "right",
                        children: "Height (cm)",
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        align: "right",
                        children: "Chip",
                      }),
                      (0, jsx_runtime.jsx)(TableCell, {
                        align: "right",
                        children: "Ower",
                      }),
                    ],
                  }),
                }),
                (0, jsx_runtime.jsx)(TableBody, {
                  children: rows.map(function (row) {
                    return (0,
                    jsx_runtime.jsxs)(TableRow, { children: [(0, jsx_runtime.jsx)(TableCell, { align: "left", children: row.breed }), (0, jsx_runtime.jsx)(TableCell, { align: "right", children: row.name }), (0, jsx_runtime.jsx)(TableCell, { align: "right", children: row.weight }), (0, jsx_runtime.jsx)(TableCell, { align: "right", children: row.height }), (0, jsx_runtime.jsx)(TableCell, { align: "right", children: row.chip ? "Yes" : "No" }), (0, jsx_runtime.jsx)(TableCell, { align: "right", children: row.ower ? "Yes" : "No" })] }, row.breed);
                  }),
                }),
              ],
            }),
          });
        };
      Template.parameters = _objectSpread(
        _objectSpread({}, Template.parameters),
        {},
        {
          docs: _objectSpread(
            _objectSpread(
              {},
              null === (_Template$parameters = Template.parameters) ||
                void 0 === _Template$parameters
                ? void 0
                : _Template$parameters.docs
            ),
            {},
            {
              source: _objectSpread(
                {
                  originalSource:
                    '() => <>\r\n    <Table>\r\n      <TableHead>\r\n        <TableRow>\r\n          <TableCell align="left">Dog’s breed</TableCell>\r\n          <TableCell align="right">Name</TableCell>\r\n          <TableCell align="right">Weight (kg)</TableCell>\r\n          <TableCell align="right">Height (cm)</TableCell>\r\n          <TableCell align="right">Chip</TableCell>\r\n          <TableCell align="right">Ower</TableCell>\r\n        </TableRow>\r\n      </TableHead>\r\n      <TableBody>\r\n        {rows.map(row => <TableRow key={row.breed}>\r\n            <TableCell align="left">{row.breed}</TableCell>\r\n            <TableCell align="right">{row.name}</TableCell>\r\n            <TableCell align="right">{row.weight}</TableCell>\r\n            <TableCell align="right">{row.height}</TableCell>\r\n            <TableCell align="right">{row.chip ? "Yes" : "No"}</TableCell>\r\n            <TableCell align="right">{row.ower ? "Yes" : "No"}</TableCell>\r\n          </TableRow>)}\r\n      </TableBody>\r\n    </Table>\r\n  </>',
                },
                null === (_Template$parameters2 = Template.parameters) ||
                  void 0 === _Template$parameters2 ||
                  null ===
                    (_Template$parameters3 = _Template$parameters2.docs) ||
                  void 0 === _Template$parameters3
                  ? void 0
                  : _Template$parameters3.source
              ),
            }
          ),
        }
      );
      var __namedExportsOrder = ["Template"];
    },
    "./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./src/data-display/Table/Table.module.css":
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
          '.src-data-display-Table-Table-module__table--hJPvv {\n  border-spacing: 0px;\n  outline: 1.5px solid #1c1b1f;\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.src-data-display-Table-Table-module__tableHead--RXftx {\n  background: #1c1b1f;\n  color: #ffffff;\n  height: 56px;\n  border-spacing: 0;\n}\n\n.src-data-display-Table-Table-module__tableRow--DRBjg {\n  outline: 0.1px solid #1c1b1f;\n  display: flex;\n}\n\n.src-data-display-Table-Table-module__tableCell--_W9rH {\n  padding: 15px 10px;\n  font-size: 14px;\n  line-height: 20px;\n  width: 150px;\n  display: flex;\n  justify-content: center;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/data-display/Table/Table.module.css"],
            names: [],
            mappings:
              "AAAA;EACE,mBAAmB;EACnB,4BAA4B;EAC5B,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB",
            sourcesContent: [
              '.table {\n  border-spacing: 0px;\n  outline: 1.5px solid #1c1b1f;\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.tableHead {\n  background: #1c1b1f;\n  color: #ffffff;\n  height: 56px;\n  border-spacing: 0;\n}\n\n.tableRow {\n  outline: 0.1px solid #1c1b1f;\n  display: flex;\n}\n\n.tableCell {\n  padding: 15px 10px;\n  font-size: 14px;\n  line-height: 20px;\n  width: 150px;\n  display: flex;\n  justify-content: center;\n}\n',
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            table: "src-data-display-Table-Table-module__table--hJPvv",
            tableHead: "src-data-display-Table-Table-module__tableHead--RXftx",
            tableRow: "src-data-display-Table-Table-module__tableRow--DRBjg",
            tableCell: "src-data-display-Table-Table-module__tableCell--_W9rH",
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
