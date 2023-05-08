import React from "react";
import styles from "./Link.module.css";
import classNames from "classnames";
var cx = classNames.bind(styles);
export var Link = function (_a) {
  var _b;
  var _c = _a.to,
    to = _c === void 0 ? "www.google.pl" : _c,
    _d = _a.id,
    id = _d === void 0 ? "google" : _d,
    _e = _a.target,
    target = _e === void 0 ? "_blank" : _e,
    _f = _a.disabled,
    disabled = _f === void 0 ? false : _f,
    onClick = _a.onClick,
    children = _a.children;
  var linkClasses = cx(
    ((_b = {}),
    (_b[styles["default"]] = true),
    (_b[styles.enabled] = !disabled),
    (_b[styles.disabled] = disabled),
    _b)
  );
  return React.createElement(
    "a",
    {
      className: linkClasses,
      href: to,
      id: id,
      target: target,
      onClick: onClick,
    },
    children
  );
};
//# sourceMappingURL=Link.js.map
