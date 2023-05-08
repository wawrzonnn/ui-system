import { __rest } from "tslib";
import * as React from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Switch.module.css";
var cx = classNames.bind(styles);
export var Switch = function (_a) {
  var _b, _c;
  var _d = _a.disabled,
    disabled = _d === void 0 ? false : _d,
    _e = _a.id,
    id = _e === void 0 ? "id" : _e,
    props = __rest(_a, ["disabled", "id"]);
  var _f = useState(false),
    checked = _f[0],
    setChecked = _f[1];
  var labelClassName = cx(
    ((_b = {}),
    (_b[styles.label] = true),
    (_b[styles.labelDisabled] = disabled),
    _b)
  );
  var sliderClassName = cx(
    ((_c = {}),
    (_c[styles.slider] = true),
    (_c[styles.sliderDisabled] = disabled),
    _c)
  );
  return React.createElement(
    "label",
    { className: labelClassName },
    React.createElement("input", {
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: function () {
        if (disabled) return;
        setChecked(!checked);
        props.onChange(!checked);
      },
      id: id,
    }),
    React.createElement("span", { className: sliderClassName })
  );
};
//# sourceMappingURL=Switch.js.map
