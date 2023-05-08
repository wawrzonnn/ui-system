/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext, useContext } from "react";
import styles from "./Tabs.module.css";
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
export var TabContext = createContext({
  activeTabId: "",
  setActiveTabId: function () {},
});
export var Tabs = function (_a) {
  var defaultOpenedId = _a.defaultOpenedId,
    children = _a.children;
  var _b = useState(defaultOpenedId || ""),
    activeTabId = _b[0],
    setActiveTabId = _b[1];
  return React.createElement(
    TabContext.Provider,
    { value: { activeTabId: activeTabId, setActiveTabId: setActiveTabId } },
    React.createElement("div", null, children)
  );
};
export var Tab = function (_a) {
  var _b;
  var id = _a.id,
    children = _a.children;
  var _c = useContext(TabContext),
    activeTabId = _c.activeTabId,
    setActiveTabId = _c.setActiveTabId;
  var isActive = activeTabId === id;
  var handleTabClick = function () {
    setActiveTabId(id);
  };
  var tabClasses = cx(
    ((_b = {}), (_b[styles.tab] = true), (_b[styles.active] = isActive), _b)
  );
  return React.createElement(
    "div",
    { className: tabClasses, onClick: handleTabClick },
    children
  );
};
export var TabContent = function (_a) {
  var id = _a.id,
    children = _a.children;
  var activeTabId = useContext(TabContext).activeTabId;
  return activeTabId === id
    ? React.createElement("div", { className: styles.tabContent }, children)
    : null;
};
//# sourceMappingURL=Tabs.js.map
