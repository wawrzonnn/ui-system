import React from "react";
import { Tabs, Tab, TabContent } from "./Tabs";
export default {
  component: Tabs,
};
export var Default = function () {
  return React.createElement(
    Tabs,
    { defaultOpenedId: "tab-1" },
    React.createElement(Tab, { id: "tab-1" }, "Breakfast"),
    React.createElement(Tab, { id: "tab-2" }, "Lunches"),
    React.createElement(Tab, { id: "tab-3" }, "Brunches"),
    React.createElement(Tab, { id: "tab-4" }, "Dinners"),
    React.createElement(Tab, { id: "tab-5" }, "Snacks"),
    React.createElement(Tab, { id: "tab-6" }, "Drinks"),
    React.createElement(
      TabContent,
      { id: "tab-1" },
      "Content for Tab Breakfast"
    ),
    React.createElement(TabContent, { id: "tab-2" }, "Content for Tab Lunches"),
    React.createElement(
      TabContent,
      { id: "tab-3" },
      "Content for Tab Brunches"
    ),
    React.createElement(TabContent, { id: "tab-4" }, "Content for Tab Dinners"),
    React.createElement(TabContent, { id: "tab-5" }, "Content for Tab Snacks"),
    React.createElement(TabContent, { id: "tab-6" }, "Content for Tab Drinks")
  );
};
//# sourceMappingURL=Tabs.stories.js.map
