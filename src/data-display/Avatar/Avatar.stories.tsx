import { Meta, Story } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";
import AvatarTemplate from "../../assets/images/AvatarTemplate.jpg";

export default {
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: "radio",
        labels: {
          none: "None",
          image: "AvatarTemplate",
        },
      },
    },
  },
} as Meta;

export const Default: Story = (args) => (
  <Avatar src={AvatarTemplate} alt={"handsome boy"} {...args}>
    fdggfd
  </Avatar>
);
Default.args = {
  size: "big",
  src: AvatarTemplate,
  alt: "sumick",
};
