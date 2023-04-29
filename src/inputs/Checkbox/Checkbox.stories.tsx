import React from "react";
import { Checkbox } from "./Checkbox";
import { Meta, StoryFn } from "@storybook/react";

export default {
  component: Checkbox,
} as Meta;

export const Default: StoryFn = (args) => (
  <Checkbox
    onChange={() => {
      console.log("Checkbox changed!");
    }}
    checked={false}
    value={""}
    name={"checkbox"}
    id={"checkbox-1"}
    label={"Checkbox"}
    {...args}
  />
);

Default.args = {
  checked: false,
  disabled: false,
  label: "Checkbox label",
};
