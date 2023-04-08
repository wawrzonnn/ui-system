(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    "./.storybook/preview.js-generated-config-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          "parameters",
          function () {
            return parameters;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.filter.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.for-each.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-properties.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.define-property.js"
        );
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/ },
          },
        };
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
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case "args":
            return Object(ClientApi.d)(value);
          case "argTypes":
            return Object(ClientApi.b)(value);
          case "decorators":
            return value.forEach(function (decorator) {
              return Object(ClientApi.f)(decorator, !1);
            });
          case "loaders":
            return value.forEach(function (loader) {
              return Object(ClientApi.g)(loader, !1);
            });
          case "parameters":
            return Object(ClientApi.h)(
              (function _objectSpread(target) {
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
              })({}, value),
              !1
            );
          case "argTypesEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case "argsEnhancers":
            return value.forEach(function (enhancer) {
              return Object(ClientApi.e)(enhancer);
            });
          case "render":
            return Object(ClientApi.i)(value);
          case "globals":
          case "globalTypes":
            var v = {};
            return (v[key] = value), Object(ClientApi.h)(v, !1);
          case "__namedExportsOrder":
          case "decorateStory":
          case "renderToDOM":
            return null;
          default:
            return console.log(key + " was not supported :( !");
        }
      });
    },
    "./generated-stories-entry.js": function (
      module,
      exports,
      __webpack_require__
    ) {
      "use strict";
      (function (module) {
        (0,
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/index.js"
        ).configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"
            ),
          ],
          module,
          !1
        );
      }).call(
        this,
        __webpack_require__("./node_modules/webpack/buildin/module.js")(module)
      );
    },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/data-display/Avatar/Avatar.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap);",
        ]),
          exports.push([
            module.i,
            '.src-data-display-Avatar-Avatar-module__avatar--16oxw {\n  border-radius: 50%;\n}\n\n.src-data-display-Avatar-Avatar-module__big--1VI93 {\n  width: 40px;\n  height: 40px;\n}\n\n.src-data-display-Avatar-Avatar-module__medium--J2z1p {\n  width: 32px;\n  height: 32px;\n}\n\n.src-data-display-Avatar-Avatar-module__small--3vJ27 {\n  width: 24px;\n  height: 24px;\n}\n\n.src-data-display-Avatar-Avatar-module__avatarContainer--1ZVka {\n  background-color: tomato;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  color: #ffffff;\n  background: #23a094;\n}\n',
            "",
          ]),
          (exports.locals = {
            avatar: "src-data-display-Avatar-Avatar-module__avatar--16oxw",
            big: "src-data-display-Avatar-Avatar-module__big--1VI93",
            medium: "src-data-display-Avatar-Avatar-module__medium--J2z1p",
            small: "src-data-display-Avatar-Avatar-module__small--3vJ27",
            avatarContainer:
              "src-data-display-Avatar-Avatar-module__avatarContainer--1ZVka",
          }),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/data-display/List/List.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          '.src-data-display-List-List-module__list--2lu2M {\n  list-style: none;\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n}\n\n.src-data-display-List-List-module__listItem--T9Etz {\n  display: flex;\n}\n\n.src-data-display-List-List-module__switchContainer--2G-Bb {\n  margin-right: 10px;\n}\n\n.src-data-display-List-List-module__checkboxContainer--lq_Vm {\n  margin-left: 10px;\n}\n\n.src-data-display-List-List-module__header--153y6 {\n  font-size: 16px;\n  line-height: 24px;\n  color: #000000;\n  margin: 0;\n}\n\n.src-data-display-List-List-module__supportText--36aL4 {\n  font-size: 14px;\n  line-height: 20px;\n  color: #787579;\n  margin: 0;\n}\n',
          "",
        ]),
          (exports.locals = {
            list: "src-data-display-List-List-module__list--2lu2M",
            listItem: "src-data-display-List-List-module__listItem--T9Etz",
            switchContainer:
              "src-data-display-List-List-module__switchContainer--2G-Bb",
            checkboxContainer:
              "src-data-display-List-List-module__checkboxContainer--lq_Vm",
            header: "src-data-display-List-List-module__header--153y6",
            supportText:
              "src-data-display-List-List-module__supportText--36aL4",
          }),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/data-display/Table/Table.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          ".src-data-display-Table-Table-module__table--22_SY {\n  border-spacing: 0px;\n  outline: 1.5px solid #1c1b1f;\n}\n\n.src-data-display-Table-Table-module__tableHead--B9g5- {\n  background: #1c1b1f;\n  color: #ffffff;\n  height: 56px;\n  border-spacing: 0;\n}\n\n.src-data-display-Table-Table-module__tableRow--5PHPz {\n  outline: 0.1px solid #1c1b1f;\n  display: flex;\n}\n\n.src-data-display-Table-Table-module__tableCell--3SPh3 {\n  padding: 15px 10px;\n  font-size: 14px;\n  line-height: 20px;\n  width: 150px;\n  display: flex;\n  justify-content: center;\n}\n",
          "",
        ]),
          (exports.locals = {
            table: "src-data-display-Table-Table-module__table--22_SY",
            tableHead: "src-data-display-Table-Table-module__tableHead--B9g5-",
            tableRow: "src-data-display-Table-Table-module__tableRow--5PHPz",
            tableCell: "src-data-display-Table-Table-module__tableCell--3SPh3",
          }),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/Button/Button.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap);",
        ]),
          exports.push([
            module.i,
            ".src-inputs-Button-Button-module__buttons--2UXqs {\n  min-width: 103px;\n  font-weight: 500;\n  padding: 10px 24px;\n  font-size: 14px;\n  line-height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-inputs-Button-Button-module__buttons--2UXqs:hover .src-inputs-Button-Button-module__iconPlus--gB6NR svg path {\n  fill: #ffffff;\n}\n.src-inputs-Button-Button-module__button__container--1aRYo {\n  display: flex;\n}\n.src-inputs-Button-Button-module__primary--2qTp3 {\n  color: black;\n  background-color: #ffffff;\n  border: 1px solid #000000;\n}\n\n.src-inputs-Button-Button-module__primary--2qTp3:hover {\n  background: #b23386;\n  border: 1px solid #000000;\n  color: #ffffff;\n  box-shadow: 4px 4px 0px #000000;\n}\n.src-inputs-Button-Button-module__secondary--2-cRU {\n  color: black;\n  border: 1px solid #90a8ed;\n  background: #ffffff;\n}\n\n.src-inputs-Button-Button-module__secondary--2-cRU:hover {\n  background: #90a8ed;\n  box-shadow: 4px 4px 0px #000000;\n  color: #ffffff;\n}\n\n.src-inputs-Button-Button-module__disabled--2h0XM,\n.src-inputs-Button-Button-module__disabled--2h0XM:hover {\n  background: #e6e1e5;\n  color: #1c1b1f;\n  opacity: 0.38;\n  box-shadow: none;\n}\n\n.src-inputs-Button-Button-module__isLoading--3pXyz,\n.src-inputs-Button-Button-module__isLoading--3pXyz:hover {\n  background: #ff90e8;\n  color: white;\n  box-shadow: none;\n  border: none;\n}\n\n.src-inputs-Button-Button-module__icon--3JwzY {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 6px;\n}\n\n.src-inputs-Button-Button-module__iconSpinner--FHDLY {\n  animation: src-inputs-Button-Button-module__spin--1QbkH 1.5s linear infinite;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 6px;\n}\n\n@keyframes src-inputs-Button-Button-module__spin--1QbkH {\n  to {\n    transform: rotate(360deg);\n  }\n}\n",
            "",
          ]),
          (exports.locals = {
            buttons: "src-inputs-Button-Button-module__buttons--2UXqs",
            iconPlus: "src-inputs-Button-Button-module__iconPlus--gB6NR",
            button__container:
              "src-inputs-Button-Button-module__button__container--1aRYo",
            primary: "src-inputs-Button-Button-module__primary--2qTp3",
            secondary: "src-inputs-Button-Button-module__secondary--2-cRU",
            disabled: "src-inputs-Button-Button-module__disabled--2h0XM",
            isLoading: "src-inputs-Button-Button-module__isLoading--3pXyz",
            icon: "src-inputs-Button-Button-module__icon--3JwzY",
            iconSpinner: "src-inputs-Button-Button-module__iconSpinner--FHDLY",
            spin: "src-inputs-Button-Button-module__spin--1QbkH",
          }),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/Checkbox/Checkbox.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          '.src-inputs-Checkbox-Checkbox-module__checkbox--2f_C7 {\n  border-radius: 2px;\n  accent-color: #b23386;\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  color: #000000;\n  display: flex;\n}\n\n.src-inputs-Checkbox-Checkbox-module__label--Oo1a_ {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n',
          "",
        ]),
          (exports.locals = {
            checkbox: "src-inputs-Checkbox-Checkbox-module__checkbox--2f_C7",
            label: "src-inputs-Checkbox-Checkbox-module__label--Oo1a_",
          }),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/Switch/Switch.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          '.src-inputs-Switch-Switch-module__switch--XFTfW {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 32px;\n}\n\n.src-inputs-Switch-Switch-module__switch--XFTfW .src-inputs-Switch-Switch-module__input--ZKnJv {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.src-inputs-Switch-Switch-module__slider--3Vc57 {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(178, 51, 134, 0.3);\n  transition: 0.4s;\n  border-radius: 34px;\n  border: 2px solid #000000;\n}\n\n.src-inputs-Switch-Switch-module__slider--3Vc57:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 2px;\n  bottom: 6.9px;\n  background-color: black;\n  transition: 0.4s;\n  border-radius: 50%;\n}\n\n.src-inputs-Switch-Switch-module__input--ZKnJv:checked + .src-inputs-Switch-Switch-module__slider--3Vc57 {\n  background: #b23386;\n  border-radius: 100px;\n}\n\n.src-inputs-Switch-Switch-module__input--ZKnJv:checked + .src-inputs-Switch-Switch-module__slider--3Vc57:before {\n  transform: translateX(20px);\n  height: 24px;\n  width: 24px;\n  background-color: white;\n  bottom: 2.5px;\n}\n\n.src-inputs-Switch-Switch-module__disabled--1vd7T {\n  opacity: 0.28;\n}\n',
          "",
        ]),
          (exports.locals = {
            switch: "src-inputs-Switch-Switch-module__switch--XFTfW",
            input: "src-inputs-Switch-Switch-module__input--ZKnJv",
            slider: "src-inputs-Switch-Switch-module__slider--3Vc57",
            disabled: "src-inputs-Switch-Switch-module__disabled--1vd7T",
          }),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/TextField/TextField.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap);",
        ]),
          exports.push([
            module.i,
            '* {\n  font-family: "Inter";\n  font-weight: 400;\n}\n\n.src-inputs-TextField-TextField-module__inputWrapper--2HwSF {\n  font-family: "Inter";\n  position: relative;\n  display: inline-block;\n  border-radius: 0px;\n  border: 1px solid #484649;\n}\n\n.src-inputs-TextField-TextField-module__baseLabel--iJiac {\n  display: block;\n  transition: 0.3s;\n}\n\n.src-inputs-TextField-TextField-module__inputWrapper--2HwSF input {\n  display: block;\n  min-width: 210px;\n  padding: 16px;\n  font-weight: 400;\n  font-size: 16px;\n  color: #000000;\n  padding-left: 30px;\n}\n\n.src-inputs-TextField-TextField-module__labelActive--3wsxN {\n  z-index: 2;\n  position: absolute;\n  top: -8px;\n  left: 16px;\n  padding: 0 4px;\n  background-color: white;\n  font-size: 12px;\n}\n\n.src-inputs-TextField-TextField-module__labelInactive--2y0IW {\n  z-index: 2;\n  position: absolute;\n  top: 17px;\n  left: 16px;\n  padding: 0 4px;\n  font-size: 16px;\n  padding-left: 15px;\n}\n\n.src-inputs-TextField-TextField-module__labelFocused--2lhAY {\n  color: #23a094;\n}\n\n.src-inputs-TextField-TextField-module__inputFocused--38WkF {\n  border: 1px solid #23a094;\n  outline: #23a094;\n}\n\n.src-inputs-TextField-TextField-module__inputError--2UJ1o {\n  border: 1px solid #b3261e;\n  outline: #b3261e;\n}\n\n.src-inputs-TextField-TextField-module__labelError--4DkhJ {\n  color: #b3261e;\n}\n\n.src-inputs-TextField-TextField-module__labelDisabled--379Ks,\n.src-inputs-TextField-TextField-module__inputDisabled--2Lr61 {\n  opacity: 38%;\n}\n\n.src-inputs-TextField-TextField-module__errorMessage--2YZGK {\n  position: absolute;\n  top: 60px;\n  color: #b3261e;\n  left: 20px;\n  font-size: 10px;\n}\n\n.src-inputs-TextField-TextField-module__hintMessage--2KALb {\n  position: absolute;\n  top: 60px;\n  left: 20px;\n  font-family: "Inter";\n  font-style: normal;\n  line-height: 16px;\n  color: #605d62;\n  font-weight: 400;\n  font-size: 10px;\n}\n\n.src-inputs-TextField-TextField-module__errorIcon--2Feh2,\n.src-inputs-TextField-TextField-module__deleteIcon--l3I8J {\n  position: absolute;\n  left: 235px;\n  top: 17px;\n}\n\n.src-inputs-TextField-TextField-module__searchIcon--31P2_ {\n  position: absolute;\n  left: 8px;\n  top: 19px;\n}\n\n.src-inputs-TextField-TextField-module__searchIconDisabled--usWK8 {\n  position: absolute;\n  left: 8px;\n  top: 19px;\n  opacity: 38%;\n}\n',
            "",
          ]),
          (exports.locals = {
            inputWrapper:
              "src-inputs-TextField-TextField-module__inputWrapper--2HwSF",
            baseLabel:
              "src-inputs-TextField-TextField-module__baseLabel--iJiac",
            labelActive:
              "src-inputs-TextField-TextField-module__labelActive--3wsxN",
            labelInactive:
              "src-inputs-TextField-TextField-module__labelInactive--2y0IW",
            labelFocused:
              "src-inputs-TextField-TextField-module__labelFocused--2lhAY",
            inputFocused:
              "src-inputs-TextField-TextField-module__inputFocused--38WkF",
            inputError:
              "src-inputs-TextField-TextField-module__inputError--2UJ1o",
            labelError:
              "src-inputs-TextField-TextField-module__labelError--4DkhJ",
            labelDisabled:
              "src-inputs-TextField-TextField-module__labelDisabled--379Ks",
            inputDisabled:
              "src-inputs-TextField-TextField-module__inputDisabled--2Lr61",
            errorMessage:
              "src-inputs-TextField-TextField-module__errorMessage--2YZGK",
            hintMessage:
              "src-inputs-TextField-TextField-module__hintMessage--2KALb",
            errorIcon:
              "src-inputs-TextField-TextField-module__errorIcon--2Feh2",
            deleteIcon:
              "src-inputs-TextField-TextField-module__deleteIcon--l3I8J",
            searchIcon:
              "src-inputs-TextField-TextField-module__searchIcon--31P2_",
            searchIconDisabled:
              "src-inputs-TextField-TextField-module__searchIconDisabled--usWK8",
          }),
          (module.exports = exports);
      },
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/navigation/Link/Link.module.css":
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          "./node_modules/css-loader/dist/runtime/api.js"
        )(!1)).push([
          module.i,
          "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap);",
        ]),
          exports.push([
            module.i,
            '.src-navigation-Link-Link-module__linkGlobal--2M2Ig {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-decoration: none;\n  display: flex;\n}\n\n.src-navigation-Link-Link-module__linkGlobal--2M2Ig:hover {\n  text-decoration: underline;\n}\n\n.src-navigation-Link-Link-module__linkEnabled--1u7RF {\n  color: #b23386;\n}\n\n.src-navigation-Link-Link-module__linkDisabled--2398A,\n.src-navigation-Link-Link-module__linkDisabled--2398A svg path {\n  color: #1c1b1f;\n  opacity: 0.38;\n}\n\n.src-navigation-Link-Link-module__linkDisabled--2398A:hover {\n  text-decoration: none;\n}\n\n.src-navigation-Link-Link-module__iconSettings--2mlia {\n  display: flex;\n  margin-right: 6px;\n  justify-content: center;\n  align-items: center;\n}\n\n.src-navigation-Link-Link-module__iconSettings--2mlia svg path {\n  fill: #b23386;\n}\n',
            "",
          ]),
          (exports.locals = {
            linkGlobal: "src-navigation-Link-Link-module__linkGlobal--2M2Ig",
            linkEnabled: "src-navigation-Link-Link-module__linkEnabled--1u7RF",
            linkDisabled:
              "src-navigation-Link-Link-module__linkDisabled--2398A",
            iconSettings:
              "src-navigation-Link-Link-module__iconSettings--2mlia",
          }),
          (module.exports = exports);
      },
    "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./data-display/Avatar/Avatar.stories.tsx":
            "./src/data-display/Avatar/Avatar.stories.tsx",
          "./data-display/List/List.stories.tsx":
            "./src/data-display/List/List.stories.tsx",
          "./data-display/Table/Table.stories.tsx":
            "./src/data-display/Table/Table.stories.tsx",
          "./inputs/Button/Button.stories.tsx":
            "./src/inputs/Button/Button.stories.tsx",
          "./inputs/Checkbox/Checkbox.stories.tsx":
            "./src/inputs/Checkbox/Checkbox.stories.tsx",
          "./inputs/Switch/Switch.stories.tsx":
            "./src/inputs/Switch/Switch.stories.tsx",
          "./inputs/TextField/TextField.stories.tsx":
            "./src/inputs/TextField/TextField.stories.tsx",
          "./navigation/Link/Link.stories.tsx":
            "./src/navigation/Link/Link.stories.tsx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$");
      },
    "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":
      function (module, exports, __webpack_require__) {
        var map = {
          "./Introduction.stories.mdx": "./src/Introduction.stories.mdx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$");
      },
    "./src/Introduction.stories.mdx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "__page", function () {
          return __page;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          "./node_modules/@mdx-js/react/index.js"
        ),
        _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            "./node_modules/@storybook/addon-docs/dist/esm/index.js"
          ),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__("./src/assets/code-brackets.svg"),
        _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8__
          ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          "./src/assets/colors.svg"
        ),
        _assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            _assets_colors_svg__WEBPACK_IMPORTED_MODULE_9__
          ),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__("./src/assets/comments.svg"),
        _assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            _assets_comments_svg__WEBPACK_IMPORTED_MODULE_10__
          ),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__("./src/assets/direction.svg"),
        _assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(
            _assets_direction_svg__WEBPACK_IMPORTED_MODULE_11__
          ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          "./src/assets/flow.svg"
        ),
        _assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_12__),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          "./src/assets/plugin.svg"
        ),
        _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default =
          __webpack_require__.n(
            _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13__
          ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          "./src/assets/repo.svg"
        ),
        _assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default =
          __webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_14__),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__("./src/assets/stackalt.svg"),
        _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default =
          __webpack_require__.n(
            _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15__
          ),
        _excluded = ["components"];
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var layoutProps = {};
      function MDXContent(_ref) {
        var components = _ref.components,
          props = _objectWithoutProperties(_ref, _excluded);
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
          "wrapper",
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: "MDXLayout",
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.b,
            { title: "Example/Introduction", mdxType: "Meta" }
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "style",
            null,
            "\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "h1",
            { id: "welcome-to-storybook" },
            "Welcome to Storybook"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "p",
            null,
            "Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "strong",
              { parentName: "p" },
              "stories"
            ),
            " to revisit during development, testing, or QA."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "p",
            null,
            "Browse example stories now by navigating to them in the sidebar.\nView their code in the ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "inlineCode",
              { parentName: "p" },
              "stories"
            ),
            " directory to learn how they work.\nWe recommend building UIs with a ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                parentName: "p",
                href: "https://componentdriven.org",
                target: "_blank",
                rel: "nofollow noopener noreferrer",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "strong",
                { parentName: "a" },
                "component-driven"
              )
            ),
            " process starting with atomic components and ending with pages."
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "div",
            { className: "subheading" },
            "Configure"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "div",
            { className: "link-list" },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/addons/addon-types",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_plugin_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
                alt: "plugin",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "Presets for popular tools"
                ),
                "Easy setup for TypeScript, SCSS and more."
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/configure/webpack",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
                alt: "Build",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "Build configuration"
                ),
                "How to customize webpack and Babel"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/configure/styling-and-css",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_colors_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
                alt: "colors",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "Styling"
                ),
                "How to load and configure CSS libraries"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_flow_svg__WEBPACK_IMPORTED_MODULE_12___default.a,
                alt: "flow",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "Data"
                ),
                "Providers and mocking for data libraries"
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "div",
            { className: "subheading" },
            "Learn"
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "div",
            { className: "link-list" },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/docs",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_repo_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
                alt: "repo",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "Storybook documentation"
                ),
                "Configure, customize, and extend"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://storybook.js.org/tutorials/",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_direction_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
                alt: "direction",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "In-depth guides"
                ),
                "Best practices from leading teams"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://github.com/storybookjs/storybook",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
                alt: "code",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "GitHub project"
                ),
                "View the source and add issues"
              )
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "a",
              {
                className: "link-item",
                href: "https://discord.gg/storybook",
                target: "_blank",
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)("img", {
                src: _assets_comments_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
                alt: "comments",
              }),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                "span",
                null,
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  "strong",
                  null,
                  "Discord chat"
                ),
                "Chat with maintainers and the community"
              )
            )
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
            "div",
            { className: "tip-wrapper" },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "span",
              { className: "tip" },
              "Tip"
            ),
            "Edit the Markdown in",
            " ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
              "code",
              null,
              "stories/Introduction.stories.mdx"
            )
          )
        );
      }
      (MDXContent.displayName = "MDXContent"), (MDXContent.isMDXComponent = !0);
      var __page = function __page() {
        throw new Error("Docs-only story");
      };
      __page.parameters = { docsOnly: !0 };
      var componentMeta = {
          title: "Example/Introduction",
          includeStories: ["__page"],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = Object.assign(
          {},
          componentMeta.parameters.docs || {},
          {
            page: function page() {
              return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  mdxStoryNameToKey: mdxStoryNameToKey,
                  mdxComponentAnnotations: componentMeta,
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_6__.mdx)(
                  MDXContent,
                  null
                )
              );
            },
          }
        )),
        (__webpack_exports__.default = componentMeta);
    },
    "./src/assets/Icons/Settings.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return Settings;
      });
      __webpack_require__("./node_modules/react/index.js");
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Settings = function Settings() {
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            "svg",
            {
              width: "12",
              height: "12",
              viewBox: "0 0 12 12",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: Object(
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx
              )("path", {
                d: "M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z",
                fill: "black",
              }),
            }
          );
        };
      Settings.displayName = "Settings";
    },
    "./src/assets/code-brackets.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/code-brackets.2e1112d7.svg";
    },
    "./src/assets/colors.svg": function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + "static/media/colors.a4bd0486.svg";
    },
    "./src/assets/comments.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/comments.a3859089.svg";
    },
    "./src/assets/direction.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/direction.b770f9af.svg";
    },
    "./src/assets/flow.svg": function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + "static/media/flow.edad2ac1.svg";
    },
    "./src/assets/images/AvatarTemplate.jpg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/AvatarTemplate.1d2c954d.jpg";
    },
    "./src/assets/plugin.svg": function (module, exports, __webpack_require__) {
      module.exports =
        __webpack_require__.p + "static/media/plugin.d494b228.svg";
    },
    "./src/assets/repo.svg": function (module, exports, __webpack_require__) {
      module.exports = __webpack_require__.p + "static/media/repo.6d496322.svg";
    },
    "./src/assets/stackalt.svg": function (
      module,
      exports,
      __webpack_require__
    ) {
      module.exports =
        __webpack_require__.p + "static/media/stackalt.dba9fbb3.svg";
    },
    "./src/data-display/Avatar/Avatar.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/data-display/Avatar/Avatar.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/data-display/Avatar/Avatar.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Avatar_stories_Default;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var Avatar_module = __webpack_require__(
          "./src/data-display/Avatar/Avatar.module.css"
        ),
        Avatar_module_default = __webpack_require__.n(Avatar_module),
        bind = __webpack_require__("./node_modules/classnames/bind.js"),
        bind_default = __webpack_require__.n(bind),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        cx = bind_default.a.bind(Avatar_module_default.a),
        Avatar_Avatar = function Avatar(_ref) {
          var _cx,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "big" : _ref$size,
            src = _ref.src,
            alt = _ref.alt,
            avatarClasses = cx(
              (((_cx = { avatar: !0 })[size] = !0),
              (_cx.avatarContainer = !src),
              (_cx.avatarPlaceholder = !src),
              _cx)
            );
          return src
            ? Object(jsx_runtime.jsx)("img", {
                className: avatarClasses,
                src: src,
                alt: alt,
              })
            : Object(jsx_runtime.jsx)("div", {
                className: avatarClasses,
                children: Object(jsx_runtime.jsx)("span", { children: "A" }),
              });
        };
      try {
        (Avatar_Avatar.displayName = "Avatar"),
          (Avatar_Avatar.__docgenInfo = {
            description: "",
            displayName: "Avatar",
            props: {
              src: {
                defaultValue: null,
                description: "",
                name: "src",
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
              size: {
                defaultValue: { value: "big" },
                description: "",
                name: "size",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"big"' },
                    { value: '"medium"' },
                    { value: '"small"' },
                  ],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Avatar/Avatar.tsx#Avatar"
            ] = {
              docgenInfo: Avatar_Avatar.__docgenInfo,
              name: "Avatar",
              path: "src/data-display/Avatar/Avatar.tsx#Avatar",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var AvatarTemplate = __webpack_require__(
          "./src/assets/images/AvatarTemplate.jpg"
        ),
        AvatarTemplate_default = __webpack_require__.n(AvatarTemplate),
        Avatar_stories_Default =
          ((__webpack_exports__.default = {
            component: Avatar_Avatar,
            argTypes: {
              src: {
                control: {
                  type: "radio",
                  labels: { none: "None", image: "AvatarTemplate" },
                },
              },
            },
          }),
          function Default(args) {
            return Object(jsx_runtime.jsx)(
              Avatar_Avatar,
              Object.assign(
                { src: AvatarTemplate_default.a, alt: "handsome boy" },
                args,
                { children: "fdggfd" }
              )
            );
          });
      (Avatar_stories_Default.displayName = "Default"),
        (Avatar_stories_Default.args = {
          size: "big",
          src: AvatarTemplate_default.a,
          alt: "sumick",
        }),
        (Avatar_stories_Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Avatar src={AvatarTemplate} alt={"handsome boy"} {...args}>\n    fdggfd\n  </Avatar>\n)',
            },
          },
          Avatar_stories_Default.parameters
        ));
    },
    "./src/data-display/List/List.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/data-display/List/List.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/data-display/List/List.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return List_stories_Default;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          "ListItemSwitch",
          function () {
            return List_stories_ListItemSwitch;
          }
        ),
        __webpack_require__.d(
          __webpack_exports__,
          "ListItemCheckbox",
          function () {
            return List_stories_ListItemCheckbox;
          }
        );
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js");
      var List_module = __webpack_require__(
          "./src/data-display/List/List.module.css"
        ),
        List_module_default = __webpack_require__.n(List_module),
        jsx_runtime =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/react/jsx-runtime.js")),
        List_List = function List(_ref) {
          var children = _ref.children;
          return Object(jsx_runtime.jsx)("ul", {
            className: List_module_default.a.list,
            children: children,
          });
        };
      List_List.displayName = "List";
      var List_ListItem = function ListItem(_ref2) {
        var children = _ref2.children;
        return Object(jsx_runtime.jsx)("li", {
          className: List_module_default.a.listItem,
          children: children,
        });
      };
      List_ListItem.displayName = "ListItem";
      try {
        (List_List.displayName = "List"),
          (List_List.__docgenInfo = {
            description: "",
            displayName: "List",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/data-display/List/List.tsx#List"] = {
              docgenInfo: List_List.__docgenInfo,
              name: "List",
              path: "src/data-display/List/List.tsx#List",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (List_ListItem.displayName = "ListItem"),
          (List_ListItem.__docgenInfo = {
            description: "",
            displayName: "ListItem",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/List/List.tsx#ListItem"
            ] = {
              docgenInfo: List_ListItem.__docgenInfo,
              name: "ListItem",
              path: "src/data-display/List/List.tsx#ListItem",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Switch = __webpack_require__("./src/inputs/Switch/Switch.tsx"),
        Checkbox = __webpack_require__("./src/inputs/Checkbox/Checkbox.tsx"),
        List_stories_Default =
          ((__webpack_exports__.default = { component: List_List }),
          function Default(args) {
            return Object(jsx_runtime.jsx)(List_List, {
              children: Object(jsx_runtime.jsx)(List_ListItem, {
                children: Object(jsx_runtime.jsxs)("div", {
                  children: [
                    Object(jsx_runtime.jsx)("h3", {
                      className: List_module_default.a.header,
                      children: args.header,
                    }),
                    Object(jsx_runtime.jsx)("p", {
                      className: List_module_default.a.supportText,
                      children: args.supportText,
                    }),
                  ],
                }),
              }),
            });
          });
      (List_stories_Default.displayName = "Default"),
        (List_stories_Default.args = {
          header: "List Item",
          supportText:
            "Supporting line text lorem ipsum dolor sit amet, consectetur",
        });
      var List_stories_ListItemSwitch = function ListItemSwitch(args) {
        return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: Object(jsx_runtime.jsx)(List_List, {
            children: Object(jsx_runtime.jsxs)(List_ListItem, {
              children: [
                Object(jsx_runtime.jsx)("div", {
                  className: List_module_default.a.switchContainer,
                  children: Object(jsx_runtime.jsx)(Switch.a, {
                    label: "",
                    id: "",
                  }),
                }),
                Object(jsx_runtime.jsxs)("div", {
                  children: [
                    Object(jsx_runtime.jsx)("h3", {
                      className: List_module_default.a.header,
                      children: args.header,
                    }),
                    Object(jsx_runtime.jsx)("p", {
                      className: List_module_default.a.supportText,
                      children: args.supportText,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      List_stories_ListItemSwitch.args = {
        header: "List Item",
        supportText:
          "Supporting line text lorem ipsum dolor sit amet, consectetur",
      };
      var List_stories_ListItemCheckbox = function ListItemCheckbox(args) {
        return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: Object(jsx_runtime.jsx)(List_List, {
            children: Object(jsx_runtime.jsxs)(List_ListItem, {
              children: [
                Object(jsx_runtime.jsxs)("div", {
                  children: [
                    Object(jsx_runtime.jsx)("h3", {
                      className: List_module_default.a.header,
                      children: args.header,
                    }),
                    Object(jsx_runtime.jsx)("p", {
                      className: List_module_default.a.supportText,
                      children: args.supportText,
                    }),
                  ],
                }),
                Object(jsx_runtime.jsx)("div", {
                  className: List_module_default.a.checkboxContainer,
                  children: Object(jsx_runtime.jsx)(Checkbox.a, {
                    id: "",
                    name: "",
                    value: "",
                    label: "Checkboc label",
                    checked: !1,
                    disabled: !1,
                  }),
                }),
              ],
            }),
          }),
        });
      };
      (List_stories_ListItemCheckbox.args = {
        header: "List Item",
        supportText:
          "Supporting line text lorem ipsum dolor sit amet, consectetur",
      }),
        (List_stories_Default.parameters = Object.assign(
          {
            storySource: {
              source:
                "(args) => (\n  <List>\n    <ListItem>\n      <div>\n        <h3 className={styles.header}>{args.header}</h3>\n        <p className={styles.supportText}>{args.supportText}</p>\n      </div>\n    </ListItem>\n  </List>\n)",
            },
          },
          List_stories_Default.parameters
        )),
        (List_stories_ListItemSwitch.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <>\n    <List>\n      <ListItem>\n        <div className={styles.switchContainer}>\n          <Switch label={""} id={""} />\n        </div>\n        <div>\n          <h3 className={styles.header}>{args.header}</h3>\n          <p className={styles.supportText}>{args.supportText}</p>\n        </div>\n      </ListItem>\n    </List>\n  </>\n)',
            },
          },
          List_stories_ListItemSwitch.parameters
        )),
        (List_stories_ListItemCheckbox.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <>\n    <List>\n      <ListItem>\n        <div>\n          <h3 className={styles.header}>{args.header}</h3>\n          <p className={styles.supportText}>{args.supportText}</p>\n        </div>\n        <div className={styles.checkboxContainer}>\n          <Checkbox\n            id={""}\n            name={""}\n            value={""}\n            label={"Checkboc label"}\n            checked={false}\n            disabled={false}\n          />\n        </div>\n      </ListItem>\n    </List>\n  </>\n)',
            },
          },
          List_stories_ListItemCheckbox.parameters
        ));
    },
    "./src/data-display/Table/Table.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/data-display/Table/Table.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/data-display/Table/Table.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Template", function () {
          return Table_stories_Template;
        });
      __webpack_require__("./node_modules/core-js/modules/es.array.map.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.assign.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var Table_module = __webpack_require__(
          "./src/data-display/Table/Table.module.css"
        ),
        Table_module_default = __webpack_require__.n(Table_module),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Table_Table = function Table(_ref) {
          var children = _ref.children;
          return Object(jsx_runtime.jsx)("table", {
            className: Table_module_default.a.table,
            children: children,
          });
        };
      Table_Table.displayName = "Table";
      var Table_TableHead = function TableHead(_ref2) {
        var children = _ref2.children;
        return Object(jsx_runtime.jsx)("thead", {
          className: Table_module_default.a.tableHead,
          children: children,
        });
      };
      Table_TableHead.displayName = "TableHead";
      var Table_TableRow = function TableRow(_ref3) {
        var children = _ref3.children;
        return Object(jsx_runtime.jsx)("tr", {
          className: Table_module_default.a.tableRow,
          children: children,
        });
      };
      Table_TableRow.displayName = "TableRow";
      var Table_TableBody = function TableBody(_ref4) {
        var children = _ref4.children;
        return Object(jsx_runtime.jsx)("tbody", { children: children });
      };
      Table_TableBody.displayName = "TableBody";
      var Table_TableCell = function TableCell(_ref5) {
        var align = _ref5.align,
          children = _ref5.children;
        return Object(jsx_runtime.jsx)("div", {
          className: Table_module_default.a.tableCell,
          children: Object(jsx_runtime.jsx)("td", {
            style: { textAlign: align },
            children: children,
          }),
        });
      };
      Table_TableCell.displayName = "TableCell";
      try {
        (Table_Table.displayName = "Table"),
          (Table_Table.__docgenInfo = {
            description: "",
            displayName: "Table",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/data-display/Table/Table.tsx#Table"] =
              {
                docgenInfo: Table_Table.__docgenInfo,
                name: "Table",
                path: "src/data-display/Table/Table.tsx#Table",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Table_TableHead.displayName = "TableHead"),
          (Table_TableHead.__docgenInfo = {
            description: "",
            displayName: "TableHead",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Table/Table.tsx#TableHead"
            ] = {
              docgenInfo: Table_TableHead.__docgenInfo,
              name: "TableHead",
              path: "src/data-display/Table/Table.tsx#TableHead",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Table_TableRow.displayName = "TableRow"),
          (Table_TableRow.__docgenInfo = {
            description: "",
            displayName: "TableRow",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Table/Table.tsx#TableRow"
            ] = {
              docgenInfo: Table_TableRow.__docgenInfo,
              name: "TableRow",
              path: "src/data-display/Table/Table.tsx#TableRow",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Table_TableBody.displayName = "TableBody"),
          (Table_TableBody.__docgenInfo = {
            description: "",
            displayName: "TableBody",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/data-display/Table/Table.tsx#TableBody"
            ] = {
              docgenInfo: Table_TableBody.__docgenInfo,
              name: "TableBody",
              path: "src/data-display/Table/Table.tsx#TableBody",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Table_TableCell.displayName = "TableCell"),
          (Table_TableCell.__docgenInfo = {
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
              docgenInfo: Table_TableCell.__docgenInfo,
              name: "TableCell",
              path: "src/data-display/Table/Table.tsx#TableCell",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { component: Table_Table };
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
        Table_stories_Template = function Template() {
          return Object(jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: Object(jsx_runtime.jsxs)(Table_Table, {
              children: [
                Object(jsx_runtime.jsx)(Table_TableHead, {
                  children: Object(jsx_runtime.jsxs)(Table_TableRow, {
                    children: [
                      Object(jsx_runtime.jsx)(Table_TableCell, {
                        align: "left",
                        children: "Dog’s breed",
                      }),
                      Object(jsx_runtime.jsx)(Table_TableCell, {
                        align: "right",
                        children: "Name",
                      }),
                      Object(jsx_runtime.jsx)(Table_TableCell, {
                        align: "right",
                        children: "Weight (kg)",
                      }),
                      Object(jsx_runtime.jsx)(Table_TableCell, {
                        align: "right",
                        children: "Height (cm)",
                      }),
                      Object(jsx_runtime.jsx)(Table_TableCell, {
                        align: "right",
                        children: "Chip",
                      }),
                      Object(jsx_runtime.jsx)(Table_TableCell, {
                        align: "right",
                        children: "Ower",
                      }),
                    ],
                  }),
                }),
                Object(jsx_runtime.jsx)(Table_TableBody, {
                  children: rows.map(function (row) {
                    return Object(jsx_runtime.jsxs)(
                      Table_TableRow,
                      {
                        children: [
                          Object(jsx_runtime.jsx)(Table_TableCell, {
                            align: "left",
                            children: row.breed,
                          }),
                          Object(jsx_runtime.jsx)(Table_TableCell, {
                            align: "right",
                            children: row.name,
                          }),
                          Object(jsx_runtime.jsx)(Table_TableCell, {
                            align: "right",
                            children: row.weight,
                          }),
                          Object(jsx_runtime.jsx)(Table_TableCell, {
                            align: "right",
                            children: row.height,
                          }),
                          Object(jsx_runtime.jsx)(Table_TableCell, {
                            align: "right",
                            children: row.chip ? "Yes" : "No",
                          }),
                          Object(jsx_runtime.jsx)(Table_TableCell, {
                            align: "right",
                            children: row.ower ? "Yes" : "No",
                          }),
                        ],
                      },
                      row.breed
                    );
                  }),
                }),
              ],
            }),
          });
        };
      Table_stories_Template.parameters = Object.assign(
        {
          storySource: {
            source:
              '() => (\n  <>\n    <Table>\n      <TableHead>\n        <TableRow>\n          <TableCell align="left">Dog’s breed</TableCell>\n          <TableCell align="right">Name</TableCell>\n          <TableCell align="right">Weight (kg)</TableCell>\n          <TableCell align="right">Height (cm)</TableCell>\n          <TableCell align="right">Chip</TableCell>\n          <TableCell align="right">Ower</TableCell>\n        </TableRow>\n      </TableHead>\n      <TableBody>\n        {rows.map((row) => (\n          <TableRow key={row.breed}>\n            <TableCell align="left">{row.breed}</TableCell>\n            <TableCell align="right">{row.name}</TableCell>\n            <TableCell align="right">{row.weight}</TableCell>\n            <TableCell align="right">{row.height}</TableCell>\n            <TableCell align="right">{row.chip ? "Yes" : "No"}</TableCell>\n            <TableCell align="right">{row.ower ? "Yes" : "No"}</TableCell>\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </>\n)',
          },
        },
        Table_stories_Template.parameters
      );
    },
    "./src/inputs/Button/Button.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/Button/Button.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/inputs/Button/Button.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Button_stories_Default;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.bind.js"
        ),
        __webpack_require__("./node_modules/react/index.js");
      var Button_module = __webpack_require__(
          "./src/inputs/Button/Button.module.css"
        ),
        Button_module_default = __webpack_require__.n(Button_module),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Spinner_Spinner = function Spinner() {
          return Object(jsx_runtime.jsx)("svg", {
            "data-testid": "spinner",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(jsx_runtime.jsx)("path", {
              d: "M13 7C13 8.38813 12.5187 9.73332 11.6381 10.8064C10.7574 11.8794 9.532 12.6139 8.17054 12.8847C6.80908 13.1555 5.39584 12.9459 4.17162 12.2915C2.9474 11.6372 1.98794 10.5786 1.45672 9.2961C0.925509 8.01363 0.855406 6.58665 1.25836 5.2583C1.66131 3.92994 2.51239 2.78239 3.66658 2.01119C4.82077 1.23999 6.20666 0.892841 7.5881 1.0289C8.96955 1.16496 10.2611 1.77581 11.2426 2.75737",
              stroke: "white",
              strokeWidth: "2",
            }),
          });
        };
      Spinner_Spinner.displayName = "Spinner";
      var bind = __webpack_require__("./node_modules/classnames/bind.js"),
        cx = __webpack_require__.n(bind).a.bind(Button_module_default.a),
        Button_Button = function Button(_ref) {
          var _cx,
            _ref$type = _ref.type,
            type = void 0 === _ref$type ? "button" : _ref$type,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            isLoading = _ref.isLoading,
            variant = _ref.variant,
            icon = _ref.icon,
            children = _ref.children,
            buttonClasses = cx(
              (((_cx = { buttons: !0 })[variant] = !0),
              (_cx.disabled = disabled),
              (_cx.isLoading = isLoading && !disabled),
              _cx)
            );
          return Object(jsx_runtime.jsx)("button", {
            className: buttonClasses,
            type: type,
            disabled: disabled,
            children:
              !disabled && isLoading
                ? Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      Object(jsx_runtime.jsx)("span", {
                        className: Button_module_default.a.iconSpinner,
                        children: Object(jsx_runtime.jsx)(Spinner_Spinner, {}),
                      }),
                      children,
                    ],
                  })
                : Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      icon &&
                        Object(jsx_runtime.jsx)("span", {
                          className: Button_module_default.a.icon,
                          children: icon,
                        }),
                      children,
                    ],
                  }),
          });
        };
      Button_Button.displayName = "Button";
      try {
        (Button_Button.displayName = "Button"),
          (Button_Button.__docgenInfo = {
            description: "",
            displayName: "Button",
            props: {
              type: {
                defaultValue: { value: "button" },
                description: "",
                name: "type",
                required: !1,
                type: {
                  name: "enum",
                  value: [{ value: '"button"' }, { value: '"submit"' }],
                },
              },
              disabled: {
                defaultValue: { value: "false" },
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              isLoading: {
                defaultValue: null,
                description: "",
                name: "isLoading",
                required: !1,
                type: { name: "boolean" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !0,
                type: {
                  name: "(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void",
                },
              },
              variant: {
                defaultValue: null,
                description: "",
                name: "variant",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"primary"' }, { value: '"secondary"' }],
                },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !1,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/inputs/Button/Button.tsx#Button"] = {
              docgenInfo: Button_Button.__docgenInfo,
              name: "Button",
              path: "src/inputs/Button/Button.tsx#Button",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Settings = __webpack_require__("./src/assets/Icons/Settings.tsx"),
        Button_stories_Default =
          ((__webpack_exports__.default = {
            component: Button_Button,
            argTypes: {
              icon: {
                options: {
                  none: null,
                  Settings: Object(jsx_runtime.jsx)(Settings.a, {}),
                },
              },
            },
          }),
          function Default(args) {
            return Object(jsx_runtime.jsx)(
              Button_Button,
              Object.assign(
                {
                  icon: Object(jsx_runtime.jsx)(Settings.a, {}),
                  isLoading: !1,
                  variant: "primary",
                },
                args,
                {
                  onClick: function onClick() {
                    return console.log("clicked");
                  },
                  children: "Button",
                }
              )
            );
          });
      (Button_stories_Default.displayName = "Default"),
        (Button_stories_Default.args = {
          variant: "primary",
          disabled: !1,
          isLoading: !1,
        }),
        (Button_stories_Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Button\n    icon={<Settings />}\n    isLoading={false}\n    variant={"primary"}\n    {...args}\n    onClick={() => console.log("clicked")}\n  >\n    Button\n  </Button>\n)',
            },
          },
          Button_stories_Default.parameters
        ));
    },
    "./src/inputs/Checkbox/Checkbox.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/Checkbox/Checkbox.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/inputs/Checkbox/Checkbox.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Default;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/inputs/Checkbox/Checkbox.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        component: _Checkbox__WEBPACK_IMPORTED_MODULE_2__.a,
      };
      var Default = function Default(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _Checkbox__WEBPACK_IMPORTED_MODULE_2__.a,
          Object.assign({ value: "", name: "", id: "", label: "" }, args)
        );
      };
      (Default.displayName = "Default"),
        (Default.args = { checked: !0, disabled: !1, label: "Checkbox label" }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Checkbox value={""} name={""} id={""} label={""} {...args} />\n)',
            },
          },
          Default.parameters
        ));
    },
    "./src/inputs/Checkbox/Checkbox.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__("./node_modules/core-js/modules/es.function.name.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.is-array.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__("./src/inputs/Checkbox/Checkbox.module.css"),
        _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(
            _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_12__
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
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
      var Checkbox = function Checkbox(_ref) {
        var label = _ref.label,
          id = _ref.id,
          value = _ref.value,
          name = _ref.name,
          _ref$disabled = _ref.disabled,
          disabled = void 0 !== _ref$disabled && _ref$disabled,
          _ref$checked = _ref.checked,
          checked = void 0 !== _ref$checked && _ref$checked,
          onChange = _ref.onChange,
          _useState2 = _slicedToArray(
            Object(react__WEBPACK_IMPORTED_MODULE_11__.useState)(checked),
            2
          ),
          isChecked = _useState2[0],
          setIsChecked = _useState2[1];
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
          "div",
          {
            className:
              _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_12___default.a
                .checkbox,
            children: Object(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs
            )("label", {
              className:
                _Checkbox_module_css__WEBPACK_IMPORTED_MODULE_12___default.a
                  .label,
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
                  "input",
                  {
                    type: "checkbox",
                    id: id,
                    value: value,
                    name: name,
                    checked: isChecked,
                    disabled: disabled,
                    onChange: function handleChange() {
                      disabled ||
                        (setIsChecked(!isChecked),
                        onChange && onChange(!isChecked));
                    },
                  }
                ),
                label,
              ],
            }),
          }
        );
      };
      (Checkbox.displayName = "Checkbox"), (__webpack_exports__.a = Checkbox);
      try {
        (Checkbox.displayName = "Checkbox"),
          (Checkbox.__docgenInfo = {
            description: "",
            displayName: "Checkbox",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !0,
                type: { name: "string" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !0,
                type: { name: "string" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !0,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: { value: "false" },
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              checked: {
                defaultValue: { value: "false" },
                description: "",
                name: "checked",
                required: !1,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((checked: boolean) => void)" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/inputs/Checkbox/Checkbox.tsx#Checkbox"
            ] = {
              docgenInfo: Checkbox.__docgenInfo,
              name: "Checkbox",
              path: "src/inputs/Checkbox/Checkbox.tsx#Checkbox",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/inputs/Switch/Switch.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/Switch/Switch.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/inputs/Switch/Switch.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Default;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/inputs/Switch/Switch.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      __webpack_exports__.default = {
        component: _Switch__WEBPACK_IMPORTED_MODULE_2__.a,
      };
      var Default = function Default(args) {
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
          _Switch__WEBPACK_IMPORTED_MODULE_2__.a,
          Object.assign(
            { id: "", label: "", onChange: function onChange() {} },
            args
          )
        );
      };
      (Default.displayName = "Default"),
        (Default.args = { checked: !1, disabled: !1 }),
        (Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => {\n  return <Switch id={""} label={""} onChange={() => {}} {...args} />;\n}',
            },
          },
          Default.parameters
        ));
    },
    "./src/inputs/Switch/Switch.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__(
        "./node_modules/core-js/modules/es.array.is-array.js"
      ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          "./node_modules/react/index.js"
        ),
        _Switch_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          "./src/inputs/Switch/Switch.module.css"
        ),
        _Switch_module_css__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(
            _Switch_module_css__WEBPACK_IMPORTED_MODULE_12__
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
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
      var Switch = function Switch(_ref) {
        var label = _ref.label,
          _ref$disabled = _ref.disabled,
          disabled = void 0 !== _ref$disabled && _ref$disabled,
          onChange = _ref.onChange,
          id = _ref.id,
          _useState2 = _slicedToArray(
            Object(react__WEBPACK_IMPORTED_MODULE_11__.useState)(!1),
            2
          ),
          checked = _useState2[0],
          setChecked = _useState2[1];
        return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(
          "label",
          {
            className:
              _Switch_module_css__WEBPACK_IMPORTED_MODULE_12___default.a.switch,
            children: [
              label,
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
                "input",
                {
                  className:
                    _Switch_module_css__WEBPACK_IMPORTED_MODULE_12___default.a
                      .input,
                  type: "checkbox",
                  checked: checked,
                  disabled: disabled,
                  onChange: function handleChange() {
                    disabled ||
                      (setChecked(!checked), onChange && onChange(!checked));
                  },
                  id: id,
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(
                "span",
                {
                  className:
                    _Switch_module_css__WEBPACK_IMPORTED_MODULE_12___default.a
                      .slider +
                    " " +
                    (disabled
                      ? _Switch_module_css__WEBPACK_IMPORTED_MODULE_12___default
                          .a.disabled
                      : ""),
                }
              ),
            ],
          }
        );
      };
      (Switch.displayName = "Switch"), (__webpack_exports__.a = Switch);
      try {
        (Switch.displayName = "Switch"),
          (Switch.__docgenInfo = {
            description: "",
            displayName: "Switch",
            props: {
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              disabled: {
                defaultValue: { value: "false" },
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !1,
                type: { name: "((checked: boolean) => void)" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !0,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/inputs/Switch/Switch.tsx#Switch"] = {
              docgenInfo: Switch.__docgenInfo,
              name: "Switch",
              path: "src/inputs/Switch/Switch.tsx#Switch",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/inputs/TextField/TextField.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/inputs/TextField/TextField.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/inputs/TextField/TextField.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return TextField_stories_Default;
        }),
        __webpack_require__.d(__webpack_exports__, "withIcon", function () {
          return TextField_stories_withIcon;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.index-of.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.is-array.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.description.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.to-string.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.symbol.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.string.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/es.array.iterator.js"
        ),
        __webpack_require__(
          "./node_modules/core-js/modules/web.dom-collections.iterator.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.function.name.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.join.js");
      var react = __webpack_require__("./node_modules/react/index.js"),
        TextField_module = __webpack_require__(
          "./src/inputs/TextField/TextField.module.css"
        ),
        TextField_module_default = __webpack_require__.n(TextField_module),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Delete_Delete = function Delete() {
          return Object(jsx_runtime.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Object(jsx_runtime.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 8.59L13.59 5L15 6.41L11.41 10L15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59Z",
              fill: "#605D62",
            }),
          });
        };
      Delete_Delete.displayName = "Delete";
      var Error_Error = function Error() {
        return Object(jsx_runtime.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: Object(jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 15V13H11V15H9ZM9 5V11H11V5H9Z",
            fill: "#B3261E",
          }),
        });
      };
      Error_Error.displayName = "Error";
      var _excluded = [
        "autoFocus",
        "disabled",
        "label",
        "value",
        "name",
        "placeholder",
        "error",
        "hint",
        "onChange",
        "id",
        "type",
        "icon",
      ];
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
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var TextField_TextField = function TextField(_ref) {
        var _ref$autoFocus = _ref.autoFocus,
          autoFocus = void 0 !== _ref$autoFocus && _ref$autoFocus,
          _ref$disabled = _ref.disabled,
          disabled = void 0 !== _ref$disabled && _ref$disabled,
          label = _ref.label,
          value = _ref.value,
          name = _ref.name,
          placeholder = _ref.placeholder,
          error = _ref.error,
          hint = _ref.hint,
          onChange = _ref.onChange,
          id = _ref.id,
          _ref$type = _ref.type,
          type = void 0 === _ref$type ? "text" : _ref$type,
          icon = _ref.icon,
          props = _objectWithoutProperties(_ref, _excluded),
          _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
          focused = _useState2[0],
          setFocused = _useState2[1],
          labelActiveClass =
            value || placeholder || focused
              ? TextField_module_default.a.labelActive
              : TextField_module_default.a.labelInactive,
          labelFocusedClass = focused
            ? TextField_module_default.a.labelFocused
            : "",
          labelErrorClass = error ? TextField_module_default.a.labelError : "",
          labelDisabledClass = disabled
            ? TextField_module_default.a.labelDisabled
            : "",
          inputFocusedClass = focused
            ? TextField_module_default.a.inputFocused
            : "",
          inputErrorClass = error ? TextField_module_default.a.inputError : "",
          inputDisabledClass = disabled
            ? TextField_module_default.a.inputDisabled
            : "",
          labelDynamicClasses = [
            TextField_module_default.a.baseLabel,
            labelActiveClass,
            labelErrorClass,
            labelDisabledClass,
            labelFocusedClass,
          ].join(" "),
          inputDynamicClasses = [
            TextField_module_default.a.inputWrapper,
            inputFocusedClass,
            inputErrorClass,
            inputDisabledClass,
          ].join(" ");
        return Object(jsx_runtime.jsxs)("div", {
          className: inputDynamicClasses,
          children: [
            Object(jsx_runtime.jsx)("label", {
              className: labelDynamicClasses,
              htmlFor: id,
              children: label,
            }),
            Object(jsx_runtime.jsx)(
              "input",
              Object.assign(
                {
                  className: inputDynamicClasses,
                  autoFocus: autoFocus,
                  disabled: disabled,
                  value: value,
                  name: name,
                  placeholder: placeholder,
                  onChange: function handleChange(event) {
                    disabled || onChange(event);
                  },
                  id: id,
                  type: type,
                  onFocus: function onFocus() {
                    return setFocused(!0);
                  },
                  onBlur: function onBlur() {
                    return setFocused(!1);
                  },
                },
                props
              )
            ),
            icon &&
              Object(jsx_runtime.jsx)("span", {
                className: disabled
                  ? TextField_module_default.a.searchIconDisabled
                  : TextField_module_default.a.searchIcon,
                children: icon,
              }),
            (focused &&
              !error &&
              Object(jsx_runtime.jsx)("span", {
                className: TextField_module_default.a.deleteIcon,
                children: Object(jsx_runtime.jsx)(Delete_Delete, {}),
              })) ||
              (error &&
                !disabled &&
                !focused &&
                Object(jsx_runtime.jsx)("span", {
                  className: TextField_module_default.a.errorIcon,
                  children: Object(jsx_runtime.jsx)(Error_Error, {}),
                })),
            !hint || error || disabled
              ? error && !disabled
                ? Object(jsx_runtime.jsx)("span", {
                    className: TextField_module_default.a.errorMessage,
                    children: error,
                  })
                : ""
              : Object(jsx_runtime.jsx)("span", {
                  className: TextField_module_default.a.hintMessage,
                  children: hint,
                }),
          ],
        });
      };
      TextField_TextField.displayName = "TextField";
      var inputs_TextField_TextField = TextField_TextField;
      try {
        (TextField_TextField.displayName = "TextField"),
          (TextField_TextField.__docgenInfo = {
            description: "",
            displayName: "TextField",
            props: {
              autoFocus: {
                defaultValue: { value: "false" },
                description: "",
                name: "autoFocus",
                required: !1,
                type: { name: "boolean" },
              },
              disabled: {
                defaultValue: { value: "false" },
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              value: {
                defaultValue: null,
                description: "",
                name: "value",
                required: !0,
                type: { name: "string" },
              },
              name: {
                defaultValue: null,
                description: "",
                name: "name",
                required: !0,
                type: { name: "string" },
              },
              placeholder: {
                defaultValue: null,
                description: "",
                name: "placeholder",
                required: !0,
                type: { name: "string" },
              },
              error: {
                defaultValue: null,
                description: "",
                name: "error",
                required: !1,
                type: { name: "string" },
              },
              hint: {
                defaultValue: null,
                description: "",
                name: "hint",
                required: !1,
                type: { name: "string" },
              },
              onChange: {
                defaultValue: null,
                description: "",
                name: "onChange",
                required: !0,
                type: {
                  name: "(event: ChangeEvent<HTMLInputElement>) => void",
                },
              },
              label: {
                defaultValue: null,
                description: "",
                name: "label",
                required: !0,
                type: { name: "string" },
              },
              id: {
                defaultValue: null,
                description: "",
                name: "id",
                required: !0,
                type: { name: "string" },
              },
              type: {
                defaultValue: { value: "text" },
                description: "",
                name: "type",
                required: !1,
                type: { name: "string" },
              },
              icon: {
                defaultValue: null,
                description: "",
                name: "icon",
                required: !1,
                type: { name: "ReactNode" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/inputs/TextField/TextField.tsx#TextField"
            ] = {
              docgenInfo: TextField_TextField.__docgenInfo,
              name: "TextField",
              path: "src/inputs/TextField/TextField.tsx#TextField",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Search_Search = function Search() {
        return Object(jsx_runtime.jsx)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: Object(jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z",
            fill: "#605D62",
          }),
        });
      };
      Search_Search.displayName = "Search";
      __webpack_exports__.default = { component: inputs_TextField_TextField };
      var TextField_stories_Default = function Default(args) {
        return Object(jsx_runtime.jsx)(
          inputs_TextField_TextField,
          Object.assign({ value: "", placeholder: "" }, args, {
            label: "label",
            name: "name",
            onChange: function onChange() {
              return console.log("changed");
            },
            id: "text-field-1",
          })
        );
      };
      (TextField_stories_Default.displayName = "Default"),
        (TextField_stories_Default.args = {
          disabled: !1,
          error: "",
          value: "",
          placeholder: "",
          hint: "",
        });
      var TextField_stories_withIcon = function withIcon(args) {
        return Object(jsx_runtime.jsx)(
          inputs_TextField_TextField,
          Object.assign({ value: "", placeholder: "" }, args, {
            label: "label",
            name: "name",
            onChange: function onChange() {
              return console.log("changed");
            },
            id: "text-field-1",
            icon: Object(jsx_runtime.jsx)(Search_Search, {}),
          })
        );
      };
      (TextField_stories_withIcon.displayName = "withIcon"),
        (TextField_stories_withIcon.args = {
          disabled: !1,
          error: "",
          value: "",
          placeholder: "",
          hint: "",
        }),
        (TextField_stories_Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <TextField\n    value={""}\n    placeholder={""}\n    {...args}\n    label="label"\n    name="name"\n    onChange={() => console.log("changed")}\n    id="text-field-1"\n  />\n)',
            },
          },
          TextField_stories_Default.parameters
        )),
        (TextField_stories_withIcon.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <TextField\n    value={""}\n    placeholder={""}\n    {...args}\n    label="label"\n    name="name"\n    onChange={() => console.log("changed")}\n    id="text-field-1"\n    icon={<Search />}\n  />\n)',
            },
          },
          TextField_stories_withIcon.parameters
        ));
    },
    "./src/navigation/Link/Link.module.css": function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        content = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/navigation/Link/Link.module.css"
        );
      "string" ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, ""]]);
      var options = { insert: "head", singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    "./src/navigation/Link/Link.stories.tsx": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "Default", function () {
          return Link_stories_Default;
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.join.js"),
        __webpack_require__("./node_modules/react/index.js");
      var Link_module = __webpack_require__(
          "./src/navigation/Link/Link.module.css"
        ),
        Link_module_default = __webpack_require__.n(Link_module),
        Settings = __webpack_require__("./src/assets/Icons/Settings.tsx"),
        jsx_runtime = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        ),
        Link_Link = function Link(_ref) {
          var _ref$to = _ref.to,
            to = void 0 === _ref$to ? "www.google.pl" : _ref$to,
            _ref$id = _ref.id,
            id = void 0 === _ref$id ? "google" : _ref$id,
            _ref$target = _ref.target,
            target = void 0 === _ref$target ? "_blank" : _ref$target,
            _ref$disabled = _ref.disabled,
            disabled = void 0 !== _ref$disabled && _ref$disabled,
            onClick = _ref.onClick,
            children = _ref.children,
            allClasses = [
              Link_module_default.a.linkGlobal,
              !1 === disabled
                ? Link_module_default.a.linkEnabled
                : Link_module_default.a.linkDisabled,
            ].join(" ");
          return Object(jsx_runtime.jsxs)("a", {
            className: allClasses,
            href: to,
            id: id,
            target: target,
            onClick: onClick,
            children: [
              Object(jsx_runtime.jsx)("span", {
                className: Link_module_default.a.iconSettings,
                children: Object(jsx_runtime.jsx)(Settings.a, {}),
              }),
              children,
            ],
          });
        };
      Link_Link.displayName = "Link";
      var navigation_Link_Link = Link_Link;
      try {
        (Link_Link.displayName = "Link"),
          (Link_Link.__docgenInfo = {
            description: "",
            displayName: "Link",
            props: {
              to: {
                defaultValue: { value: "www.google.pl" },
                description: "",
                name: "to",
                required: !1,
                type: { name: "string" },
              },
              id: {
                defaultValue: { value: "google" },
                description: "",
                name: "id",
                required: !1,
                type: { name: "string" },
              },
              target: {
                defaultValue: { value: "_blank" },
                description: "",
                name: "target",
                required: !1,
                type: {
                  name: "enum",
                  value: [
                    { value: '"_blank"' },
                    { value: '"_self"' },
                    { value: '"_parent"' },
                    { value: '"_top"' },
                  ],
                },
              },
              disabled: {
                defaultValue: { value: "false" },
                description: "",
                name: "disabled",
                required: !1,
                type: { name: "boolean" },
              },
              onClick: {
                defaultValue: null,
                description: "",
                name: "onClick",
                required: !1,
                type: {
                  name: "((event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void)",
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/navigation/Link/Link.tsx#Link"] = {
              docgenInfo: Link_Link.__docgenInfo,
              name: "Link",
              path: "src/navigation/Link/Link.tsx#Link",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { component: navigation_Link_Link };
      var Link_stories_Default = function Default(args) {
        return Object(jsx_runtime.jsx)(
          navigation_Link_Link,
          Object.assign({ to: "" }, args, {
            onClick: function onClick() {
              return console.log("clicked");
            },
            children: "Click Me!",
          })
        );
      };
      (Link_stories_Default.displayName = "Default"),
        (Link_stories_Default.args = { disabled: !0 }),
        (Link_stories_Default.parameters = Object.assign(
          {
            storySource: {
              source:
                '(args) => (\n  <Link to={""} {...args} onClick={() => console.log("clicked")}>\n    Click Me!\n  </Link>\n)',
            },
          },
          Link_stories_Default.parameters
        ));
    },
    "./storybook-init-framework-entry.js": function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        "./node_modules/@storybook/react/dist/esm/client/index.js"
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        "./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"
      ),
        __webpack_require__(
          "./node_modules/@storybook/core-client/dist/esm/globals/globals.js"
        ),
        __webpack_require__("./storybook-init-framework-entry.js"),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"
        ),
        __webpack_require__(
          "./.storybook/preview.js-generated-config-entry.js"
        ),
        (module.exports = __webpack_require__("./generated-stories-entry.js"));
    },
    1: function (module, exports) {},
  },
  [[0, 4, 5]],
]);
