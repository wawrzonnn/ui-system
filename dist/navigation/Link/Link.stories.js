import { __assign } from "tslib";
import { Link } from "./Link";
import React from "react";
import { Settings } from "../../assets/Icons/Settings";
import styles from "../Link/Link.module.css";
export default {
    component: Link
};
export var Default = function (args) { return (React.createElement(Link, __assign({ to: "" }, args, { onClick: function () { return console.log("clicked"); } }), "Click Me!")); };
Default.args = {
    disabled: false
};
export var Icon = function (args) { return (React.createElement(Link, __assign({ to: "" }, args, { onClick: function () { return console.log("clicked"); } }),
    React.createElement("span", { className: styles.iconSettings },
        React.createElement(Settings, null)),
    " ",
    "Click Me!")); };
Icon.args = {
    disabled: false
};
//# sourceMappingURL=Link.stories.js.map