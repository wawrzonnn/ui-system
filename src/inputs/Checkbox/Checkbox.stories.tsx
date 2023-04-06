import React from "react";
import Checkbox from "./Checkbox";
import { Meta, Story } from "@storybook/react";

export default {
  component: Checkbox,
} as Meta;

export const Default: Story = (args) => (
  <Checkbox value={""} name={""} id={""} label={""} {...args} />
);

Default.args = {
  checked: true,
  disabled: false,
  label: "Checkbox label",
};
