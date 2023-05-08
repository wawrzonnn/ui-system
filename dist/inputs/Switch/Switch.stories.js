import { __assign } from "tslib";
import * as React from "react";
import { Switch } from "./Switch";
export default {
    component: Switch
};
export var Default = function (args) { return (React.createElement(Switch, __assign({ onChange: function () {
        console.log("Swirch changed!");
    }, id: "" }, args))); };
Default.args = {
    checked: false,
    disabled: false
};
//# sourceMappingURL=Switch.stories.js.map