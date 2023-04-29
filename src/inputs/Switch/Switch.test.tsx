import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Switch } from "./Switch";

test("onChange handler should be called when clicking on it, when one is not disabled. Expected isChecked should be true. After clicking on it again, expected isChecked value should be false", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Switch id={"switch-1"} onChange={handleChange} />
  );
  const switchElement = getByRole("checkbox") as HTMLInputElement;

  fireEvent.click(switchElement);
  expect(switchElement.checked).toEqual(true);

  fireEvent.click(switchElement);
  expect(switchElement.checked).toEqual(false);

  fireEvent.click(switchElement);

  expect(handleChange).toBeCalled();
});

test("onChange handler should not be called when Switch is disabled", () => {
  const handleChange = jest.fn();

  const { getByRole } = render(
    <Switch id={"switch-1"} disabled onChange={handleChange} />
  );
  const switchElement = getByRole("checkbox");

  expect(switchElement).toBeInTheDocument();

  fireEvent.click(switchElement);

  expect(handleChange).not.toBeCalled();
});
