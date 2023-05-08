import React from "react";
import { Card, CardImage, CardContent } from "./Card";
import { Button } from "../../inputs";
import AvatarTemplate from "../../assets/images/AvatarTemplate.jpg";
import styles from "./Card.module.css";
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
export default {
    component: Card
};
export var Default = function (_a) {
    var fullWidth = _a.fullWidth;
    var buttonsWrapperClasses = cx({
        buttonsWrapper: true,
        buttonsWrapperFixedWidth: !fullWidth
    });
    return (React.createElement(Card, { fullWidth: fullWidth },
        React.createElement(CardImage, { url: AvatarTemplate, alt: "Default Avatar" }),
        React.createElement(CardContent, null,
            React.createElement("h1", null, "Card name"),
            React.createElement("p", null, "Card description goes here and it can be as long as it needs and so on."),
            React.createElement("div", { className: buttonsWrapperClasses },
                React.createElement(Button, { onClick: function () {
                        console.log("Clicked!");
                    }, variant: "primary" }, "Primary Button"),
                React.createElement(Button, { onClick: function () {
                        console.log("Clicked!");
                    }, variant: "secondary" }, "Secondary Button")))));
};
Default.args = {
    fullWidth: false
};
//# sourceMappingURL=Card.stories.js.map