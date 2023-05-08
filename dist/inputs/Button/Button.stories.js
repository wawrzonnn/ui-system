import { __assign } from "tslib";
import { Button } from "./Button";
import React from "react";
import { Settings } from "../../assets/Icons/Settings";
import { Fragment } from "react";
import styles from "../Button/Button.module.css";
export default {
    component: Button
};
export var Default = function (args) { return (React.createElement(Button, __assign({ isLoading: false, variant: "primary" }, args, { onClick: function () { return console.log("clicked"); } }), "Button")); };
Default.args = {
    variant: "primary",
    disabled: false,
    isLoading: false
};
export var Icon = function (args) { return (React.createElement(Button, __assign({ isLoading: false, variant: "primary" }, args, { onClick: function () { return console.log("clicked"); } }),
    React.createElement(Fragment, null,
        React.createElement("span", { className: styles.icon },
            React.createElement(Settings, null))),
    "Button")); };
Icon.args = {
    variant: "primary",
    disabled: false,
    isLoading: false
};
//# sourceMappingURL=Button.stories.js.map