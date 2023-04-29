import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { Switch } from "./Switch";

export default {
  component: Switch,
} as Meta;

export const Default: StoryFn = (args) => (
  <Switch
    onChange={() => {
      console.log("Swirch changed!");
    }}
    id={""}
    {...args}
  />
);

Default.args = {
  checked: false,
  disabled: false,
};
