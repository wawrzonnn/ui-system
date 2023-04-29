import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("should call onChange when clicked", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox
        label="label"
        onChange={onChange}
        id={"label-1"}
        name={"label"}
        value={""}
        checked={false}
        disabled={false}
      />
    );
    const checkbox = getByLabelText("label");
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });

  it("should not call onChange when disabled", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox
        label="label"
        disabled
        onChange={onChange}
        id={"label-1"}
        name={"label"}
        value={""}
        checked={false}
      />
    );
    const checkbox = getByLabelText("label");
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should change checked state when clicked", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox
        label="label"
        id={"label-1"}
        name={"label"}
        value={""}
        checked={false}
        disabled={false}
        onChange={onChange}
      />
    );
    const checkbox = getByLabelText("label") as HTMLInputElement;
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox.checked).toBe(true);
    fireEvent.change(checkbox, { target: { checked: false } });
    expect(checkbox.checked).toBe(false);
  });
});
