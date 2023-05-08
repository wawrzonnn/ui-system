import { __assign } from "tslib";
import { TextField } from "./TextField";
import { Search } from "../../assets/Icons/Search";
import React from "react";
export default {
  component: TextField,
};
export var Default = function (args) {
  return React.createElement(
    TextField,
    __assign({ value: "", placeholder: "" }, args, {
      label: "label",
      name: "name",
      onChange: function () {
        return console.log("changed");
      },
      id: "text-field-1",
    })
  );
};
Default.args = {
  disabled: false,
  error: "",
  value: "",
  placeholder: "",
  hint: "",
};
export var Icon = function (args) {
  return React.createElement(
    TextField,
    __assign({ value: "", placeholder: "" }, args, {
      label: "label",
      name: "name",
      onChange: function () {
        return console.log("changed");
      },
      id: "text-field-1",
      icon: React.createElement(Search, null),
    })
  );
};
Icon.args = {
  disabled: false,
  error: "",
  value: "",
  placeholder: "",
  hint: "",
};
//# sourceMappingURL=TextField.stories.js.map
