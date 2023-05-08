import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { TextField } from "./TextField";
describe("TextField", function () {
    it("should call onChange handler when typing onto it", function () {
        var onChange = jest.fn();
        var getByPlaceholderText = render(React.createElement(TextField, { value: "", name: "", placeholder: "test-placeholder", onChange: onChange, label: "", id: "" })).getByPlaceholderText;
        var input = getByPlaceholderText("test-placeholder");
        fireEvent.change(input, { target: { value: "new value" } });
        expect(onChange).toHaveBeenCalled();
    });
    it("should not call onChange handler when TextField is disabled", function () {
        var onChange = jest.fn();
        var getByPlaceholderText = render(React.createElement(TextField, { value: "", onChange: onChange, disabled: true, name: "", placeholder: "test-placeholder", label: "", id: "" })).getByPlaceholderText;
        var input = getByPlaceholderText("test-placeholder");
        fireEvent.change(input, { target: { value: "new value" } });
        expect(onChange).not.toHaveBeenCalled();
    });
    it("should have the 'active' class when focused", function () {
        var getByPlaceholderText = render(React.createElement(TextField, { value: "", onChange: function () { return console.log("changed"); }, label: "Test", placeholder: "Test", id: "test", name: "" })).getByPlaceholderText;
        var input = getByPlaceholderText("Test");
        act(function () {
            fireEvent.focus(input);
        });
        console.log("classList", input.classList);
        expect(input.classList.contains("inputFocused")).toBe(true);
    });
});
//# sourceMappingURL=TextField.test.js.map