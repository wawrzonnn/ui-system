import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import React from "react";
import { Settings } from "../../assets/Icons/Settings";

export default {
  component: Button,
  argTypes: {
    icon: {
      options: {
        none: null,
        Settings: <Settings />,
      },
    },
  },
} as Meta;

export const Default: Story = (args) => (
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
