import { __assign } from "tslib";
import React from "react";
import { Checkbox } from "./Checkbox";
export default {
  component: Checkbox,
};
export var Default = function (args) {
  return React.createElement(
    Checkbox,
    __assign(
      {
        onChange: function () {
          console.log("Checkbox changed!");
        },
        checked: false,
        value: "",
        name: "checkbox",
        id: "checkbox-1",
        label: "Checkbox",
      },
      args
    )
  );
};
Default.args = {
  checked: false,
  disabled: false,
  label: "Checkbox label",
};
//# sourceMappingURL=Checkbox.stories.js.map
