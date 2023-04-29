import { Meta, StoryFn } from "@storybook/react";
import { Link } from "./Link";
import React from "react";

export default {
  component: Link,
} as Meta;

export const Default: StoryFn = (args) => (
  <Link to={""} {...args} onClick={() => console.log("clicked")}>
    Click Me!
  </Link>
);
Default.args = {
  disabled: false,
};
