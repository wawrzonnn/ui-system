import React from "react";
import styles from "./Avatar.module.css";
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
export var Avatar = function (_a) {
  var _b;
  var _c = _a.size,
    size = _c === void 0 ? "big" : _c,
    src = _a.src,
    alt = _a.alt;
  var avatarClasses = cx(
    ((_b = {}),
    (_b[styles.avatar] = true),
    (_b[size] = true),
    (_b[styles.container] = true),
    _b)
  );
  return src
    ? React.createElement("img", {
        className: avatarClasses,
        src: src,
        alt: alt,
      })
    : React.createElement(
        "div",
        { className: avatarClasses },
        React.createElement("span", null, "A")
      );
};
//# sourceMappingURL=Avatar.js.map
