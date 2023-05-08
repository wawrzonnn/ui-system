import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Switch } from "./Switch";
test("onChange handler should be called when clicking on it, when one is not disabled. Expected isChecked should be true. After clicking on it again, expected isChecked value should be false", function () {
    var handleChange = jest.fn();
    var getByRole = render(React.createElement(Switch, { id: "switch-1", onChange: handleChange })).getByRole;
    var switchElement = getByRole("checkbox");
    fireEvent.click(switchElement);
    expect(switchElement.checked).toEqual(true);
    fireEvent.click(switchElement);
    expect(switchElement.checked).toEqual(false);
    fireEvent.click(switchElement);
    expect(handleChange).toBeCalled();
});
test("onChange handler should not be called when Switch is disabled", function () {
    var handleChange = jest.fn();
    var getByRole = render(React.createElement(Switch, { id: "switch-1", disabled: true, onChange: handleChange })).getByRole;
    var switchElement = getByRole("checkbox");
    expect(switchElement).toBeInTheDocument();
    fireEvent.click(switchElement);
    expect(handleChange).not.toBeCalled();
});
//# sourceMappingURL=Switch.test.js.map