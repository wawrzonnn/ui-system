/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Checkbox from "./Checkbox";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      options: [true, false],
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <Checkbox
    id={""}
    name={""}
    value={""}
    label={""}
    disabled={false}
    onChange={() => {}}
    {...args}
  />
);

Default.args = {
  checked: true,
  disabled: false,
};
