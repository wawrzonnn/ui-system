import React from "react";
import { Accordion } from "./Accordion";
export default {
  component: Accordion,
};
export var Default = function () {
  return React.createElement(
    Accordion,
    { header: "Accordion 1", defaultOpen: false },
    React.createElement(
      "span",
      null,
      "The accordion component allows the user to show and hide sections of related content on a page."
    )
  );
};
Default.args = {
  defaultOpen: false,
};
//# sourceMappingURL=Accordion.stories.js.map
