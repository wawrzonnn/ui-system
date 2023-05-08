import React from "react";
import { Stepper, Step } from "./Stepper";
import { Checkmark } from "../../assets/Icons/Checkmark";
export default {
  component: Stepper,
};
var steps = [
  { label: "1", completed: true, disabled: false },
  { label: "2", completed: false, disabled: true },
  { label: "3", completed: false, disabled: true },
];
export var Default = function () {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      Stepper,
      {
        activeStep: 1,
        setActiveStep: function () {
          throw new Error("Function not implemented.");
        },
      },
      steps.map(function (step, index) {
        return React.createElement(
          Step,
          {
            key: index,
            completed: step.completed,
            disabled: step.disabled,
            label: "",
            index: index,
          },
          step.completed ? React.createElement(Checkmark, null) : step.label
        );
      })
    )
  );
};
//# sourceMappingURL=Stepper.stories.js.map
