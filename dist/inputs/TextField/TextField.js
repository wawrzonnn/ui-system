import React, { useState } from "react";
import styles from "./TextField.module.css";
import { Delete } from "../../assets/Icons/Delete";
import { Error } from "../../assets/Icons/Error";
import classNames from "classnames";
var cx = classNames.bind(styles);
export var TextField = function (_a) {
  var _b, _c;
  var _d = _a.autoFocus,
    autoFocus = _d === void 0 ? false : _d,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e,
    label = _a.label,
    value = _a.value,
    name = _a.name,
    placeholder = _a.placeholder,
    error = _a.error,
    hint = _a.hint,
    onChange = _a.onChange,
    id = _a.id,
    _f = _a.type,
    type = _f === void 0 ? "text" : _f,
    icon = _a.icon;
  var _g = useState(false),
    focused = _g[0],
    setFocused = _g[1];
  var labelClasses = cx(
    ((_b = {
      labelDefault: true,
    }),
    (_b[styles.labelActive] = value || placeholder || focused),
    (_b[styles.labelInactive] = !value && !placeholder && !focused),
    (_b[styles.labelFocused] = focused),
    (_b[styles.labelError] = error),
    (_b[styles.labelDisabled] = disabled),
    _b)
  );
  var inputClasses = cx(
    ((_c = {
      inputWrapper: true,
    }),
    (_c[styles.inputFocused] = focused),
    (_c[styles.inputError] = error),
    (_c[styles.inputDisabled] = disabled),
    (_c[styles.inputDefault] = !error || !focused),
    _c)
  );
  var handleChange = function (event) {
    if (!disabled) {
      onChange(event);
    }
  };
  return React.createElement(
    "div",
    { className: styles.inputWrapper },
    React.createElement(
      "label",
      { className: labelClasses, htmlFor: id },
      label
    ),
    React.createElement("input", {
      className: inputClasses,
      autoFocus: autoFocus,
      disabled: disabled,
      value: value,
      name: name,
      placeholder: placeholder,
      onChange: handleChange,
      id: id,
      type: type,
      onFocus: function () {
        return setFocused(true);
      },
      onBlur: function () {
        return setFocused(false);
      },
    }),
    icon &&
      React.createElement(
        "span",
        { className: disabled ? styles.searchIconDisabled : styles.searchIcon },
        icon
      ),
    (focused &&
      !error &&
      React.createElement(
        "span",
        { className: styles.deleteIcon },
        React.createElement(Delete, null)
      )) ||
      (error &&
        !disabled &&
        !focused &&
        React.createElement(
          "span",
          { className: styles.errorIcon },
          React.createElement(Error, null)
        )),
    hint && !error && !disabled
      ? React.createElement("span", { className: styles.hintMessage }, hint)
      : error && !disabled
      ? React.createElement("span", { className: styles.errorMessage }, error)
      : ""
  );
};
//# sourceMappingURL=TextField.js.map
