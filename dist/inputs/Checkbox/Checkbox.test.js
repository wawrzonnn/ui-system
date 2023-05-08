import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";
describe("Checkbox", function () {
  it("should call onChange when clicked", function () {
    var onChange = jest.fn();
    var getByLabelText = render(
      React.createElement(Checkbox, {
        label: "label",
        onChange: onChange,
        id: "label-1",
        name: "label",
        value: "",
        checked: false,
        disabled: false,
      })
    ).getByLabelText;
    var checkbox = getByLabelText("label");
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
  it("should not call onChange when disabled", function () {
    var onChange = jest.fn();
    var getByLabelText = render(
      React.createElement(Checkbox, {
        label: "label",
        disabled: true,
        onChange: onChange,
        id: "label-1",
        name: "label",
        value: "",
        checked: false,
      })
    ).getByLabelText;
    var checkbox = getByLabelText("label");
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(onChange).not.toHaveBeenCalled();
  });
  it("should change checked state when clicked", function () {
    var onChange = jest.fn();
    var getByLabelText = render(
      React.createElement(Checkbox, {
        label: "label",
        id: "label-1",
        name: "label",
        value: "",
        checked: false,
        disabled: false,
        onChange: onChange,
      })
    ).getByLabelText;
    var checkbox = getByLabelText("label");
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox.checked).toBe(true);
    fireEvent.change(checkbox, { target: { checked: false } });
    expect(checkbox.checked).toBe(false);
  });
});
//# sourceMappingURL=Checkbox.test.js.map
