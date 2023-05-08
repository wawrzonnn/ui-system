import React from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
export var Card = function (_a) {
  var fullWidth = _a.fullWidth,
    children = _a.children;
  var cardClasses = cx({
    cardFullWidth: fullWidth,
    cardFixedWidth: !fullWidth,
  });
  return React.createElement("div", { className: cardClasses }, children);
};
export var CardImage = function (_a) {
  var url = _a.url,
    alt = _a.alt;
  return React.createElement("img", {
    src: url,
    alt: alt,
    className: styles.cardImage,
  });
};
export var CardContent = function (_a) {
  var children = _a.children;
  return React.createElement(
    "div",
    { className: styles.cardContent },
    children
  );
};
//# sourceMappingURL=Card.js.map
