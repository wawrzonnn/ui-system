import { Meta, Story } from "@storybook/react";
import Link from "./Link";
import { Fragment } from "react";
import { Settings } from "../../assets/Icons/Settings";
import React from "react";

export default {
  component: Link,
} as Meta;

export const Default: Story = (args) => (
  <Link to={""} {...args} onClick={() => console.log("clicked")}>
    {args.disabled ? "Disabled" : "Enabled"}
  </Link>
);
Default.args = {
  disabled: true,
};

export const withIcon: Story = (args) => {
  return (
    <Link to={""} {...args}>
      {args.disabled ? (
        <Fragment>
          <Settings />
          Disabled
        </Fragment>
      ) : (
        <Fragment>
          <Settings />
          Enabled
        </Fragment>
      )}
    </Link>
  );
};

withIcon.args = {
  disabled: false,
};
