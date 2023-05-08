/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext, useContext, } from "react";
import styles from "./Stepper.module.css";
import classNames from "classnames/bind";
var cx = classNames.bind(styles);
export var StepContext = createContext({
    activeStep: 0,
    setActiveStep: function () { }
});
export var Stepper = function (_a) {
    var activeStep = _a.activeStep, children = _a.children;
    var _b = useState(activeStep), activeStepState = _b[0], setActiveStepState = _b[1];
    return (React.createElement(StepContext.Provider, { value: { activeStep: activeStepState, setActiveStep: setActiveStepState } },
        React.createElement("div", { className: styles.stepperWrapper }, children)));
};
export var Step = function (_a) {
    var _b;
    var children = _a.children, index = _a.index;
    var activeStep = useContext(StepContext).activeStep;
    var stepperClasses = cx((_b = {},
        _b[styles.stepDefault] = true,
        _b[styles.stepCompleted] = activeStep > index,
        _b[styles.stepDisabled] = activeStep < index,
        _b[styles.stepActive] = activeStep === index,
        _b));
    return React.createElement("div", { className: stepperClasses }, children);
};
//# sourceMappingURL=Stepper.js.map