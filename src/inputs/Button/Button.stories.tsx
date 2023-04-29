import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import React from "react";
import { Settings } from "../../assets/Icons/Settings";

export default {
  component: Button,
} as Meta;

export const Default: StoryFn = (args) => (
  <Button
    icon={<Settings />}
    isLoading={false}
    variant={"primary"}
    {...args}
    onClick={() => console.log("clicked")}
  >
    Button
  </Button>
);
Default.args = {
  variant: "primary",
  disabled: false,
  isLoading: false,
};
