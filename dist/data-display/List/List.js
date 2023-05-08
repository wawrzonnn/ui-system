import React from "react";
import styles from "./List.module.css";
export var List = function (_a) {
    var children = _a.children;
    return React.createElement("ul", { className: styles.list }, children);
};
export var ListItem = function (_a) {
    var children = _a.children;
    return React.createElement("li", { className: styles.listItem }, children);
};
//# sourceMappingURL=List.js.map