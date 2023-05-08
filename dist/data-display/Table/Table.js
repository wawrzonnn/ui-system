import styles from "./Table.module.css";
import React from "react";
export var Table = function (_a) {
  var children = _a.children;
  return React.createElement("table", { className: styles.table }, children);
};
export var TableHead = function (_a) {
  var children = _a.children;
  return React.createElement(
    "thead",
    { className: styles.tableHead },
    children
  );
};
export var TableRow = function (_a) {
  var children = _a.children;
  return React.createElement("tr", { className: styles.tableRow }, children);
};
export var TableBody = function (_a) {
  var children = _a.children;
  return React.createElement("tbody", null, children);
};
export var TableCell = function (_a) {
  var align = _a.align,
    children = _a.children;
  return React.createElement(
    "div",
    { className: styles.tableCell },
    React.createElement("td", { style: { textAlign: align } }, children)
  );
};
//# sourceMappingURL=Table.js.map
