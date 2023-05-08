import { __assign } from "tslib";
import { Avatar } from "./Avatar";
import React from "react";
import Heartagram from "../../assets/images/AvatarTemplate.jpg";
export default {
    component: Avatar
};
export var Default = function (args) { return (React.createElement(Avatar, __assign({ src: "", alt: "" }, args))); };
Default.args = {
    size: "big",
    src: Heartagram,
    alt: "Delete SRC to check the default avatar."
};
//# sourceMappingURL=Avatar.stories.js.map