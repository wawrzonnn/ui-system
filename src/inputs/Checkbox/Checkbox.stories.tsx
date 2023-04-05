import React from "react";
import Checkbox from "./Checkbox";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

export const Default: Story = (args) => <Checkbox label={""} {...args} />;

Default.args = {
  checked: true,
  disabled: false,
  label: "Checkbox label",
};
