/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
describe("Button", function () {
  it("calls onClick when clicking on it and it is not disabled", function () {
    var onClick = jest.fn();
    var getByText = render(
      React.createElement(
        Button,
        { onClick: onClick, variant: "primary", isLoading: false },
        "Click me"
      )
    ).getByText;
    var button = getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  it("does not call onClick when it is disabled", function () {
    var onClick = jest.fn();
    var getByText = render(
      React.createElement(
        Button,
        { onClick: onClick, disabled: true, variant: "primary" },
        "Click me"
      )
    ).getByText;
    var button = getByText("Click me");
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
  it("shows SVG spinner when in loading state", function () {
    var getByTestId = render(
      React.createElement(
        Button,
        { isLoading: true, variant: "primary", onClick: function () {} },
        "Click me"
      )
    ).getByTestId;
    var spinner = getByTestId("spinner");
    expect(spinner).toBeDefined();
  });
  it("does not call onClick when it is in loading state", function () {
    var onClick = jest.fn();
    var getByText = render(
      React.createElement(
        Button,
        { onClick: onClick, isLoading: true, variant: "primary" },
        "Loading"
      )
    ).getByText;
    var button = getByText("Loading");
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
//# sourceMappingURL=Button.test.js.map
