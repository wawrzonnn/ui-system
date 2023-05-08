import styles from "./List.module.css";
import { List, ListItem } from "./List";
import React, { Fragment } from "react";
import { Switch } from "../../inputs/Switch/Switch";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
export default {
    component: List
};
export var Default = function (args) { return (React.createElement(List, null,
    React.createElement(ListItem, null,
        React.createElement("div", null,
            React.createElement("h3", { className: styles.header }, args.header),
            React.createElement("p", { className: styles.supportText }, args.supportText))))); };
Default.args = {
    header: "List Item",
    supportText: "Supporting line text lorem ipsum dolor sit amet, consectetur"
};
export var ListItemSwitch = function (args) { return (React.createElement(Fragment, null,
    React.createElement(List, null,
        React.createElement(ListItem, null,
            React.createElement("div", { className: styles.switchContainer },
                React.createElement(Switch, { id: "", onChange: function () {
                        console.log("Switch changed!");
                    } })),
            React.createElement("div", null,
                React.createElement("h3", { className: styles.header }, args.header),
                React.createElement("p", { className: styles.supportText }, args.supportText)))))); };
ListItemSwitch.args = {
    header: "List Item",
    supportText: "Supporting line text lorem ipsum dolor sit amet, consectetur"
};
export var ListItemCheckbox = function (args) { return (React.createElement(Fragment, null,
    React.createElement(List, null,
        React.createElement(ListItem, null,
            React.createElement("div", null,
                React.createElement("h3", { className: styles.header }, args.header),
                React.createElement("p", { className: styles.supportText }, args.supportText)),
            React.createElement("div", { className: styles.checkboxContainer },
                React.createElement(Checkbox, { id: "", name: "", value: "", label: "Checkbox label", checked: true, disabled: false, onChange: function () {
                        console.log("Checkbox changed!");
                    } })))))); };
ListItemCheckbox.args = {
    header: "List Item",
    supportText: "Supporting line text lorem ipsum dolor sit amet, consectetur"
};
//# sourceMappingURL=List.stories.js.map