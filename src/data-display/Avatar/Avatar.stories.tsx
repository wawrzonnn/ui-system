import { Meta, Story } from "@storybook/react";
import { Avatar } from "./Avatar";
import React from "react";
import { AvatarTemplate }  from  '../../assets/images/AvatarTemplate.jpg';

export default {
  component: Avatar,
  argTypes: {
    // icon: {
    //   options: {
    //     none: null,
    //     Settings: <Settings />,
    //   },
    // },
  },
} as Meta;

export const Default: Story = (args) => (
  <Avatar src={AvatarTemplate} alt={""} {...args}  >fdggfd
  </Avatar>
);
Default.args = {
  size: 'big',
  alt: 'sumick'
};
