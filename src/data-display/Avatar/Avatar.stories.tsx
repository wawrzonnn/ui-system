import { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";
import Heartagram from "../../assets/images/AvatarTemplate.jpg";

export default {
  component: Avatar,
} as Meta;

export const Default: StoryFn = (args) => <Avatar src={""} alt={""} {...args} />;

Default.args = {
  size: "big",
  src: Heartagram,
  alt: "Delete SRC to check the default avatar.",
};
