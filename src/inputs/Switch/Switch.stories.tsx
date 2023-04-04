/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Switch from "./Switch";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Switch",
  component: Switch,
} as Meta;

export const Default: Story = (args) => {
  return <Switch id={""} label={""} onChange={() => {}} {...args} />;
};

Default.args = {
  checked: false,
  disabled: false,
};
