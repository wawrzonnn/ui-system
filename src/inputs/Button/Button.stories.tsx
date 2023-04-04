import { Meta, Story } from "@storybook/react";
import Button from "./Button";
import styles from "./Button.module.css";
import { Spinner } from "../../assets/Icons/Spinner";
import { Settings } from "../../assets/Icons/Settings";
import { Fragment } from "react";
import React from "react";

export default {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
} as Meta;

export const Primary: Story = (args) => (
  <Button variant={"primary"} {...args} onClick={() => console.log("clicked")}>
    {args.isLoading
      ? "Loading"
      : args.variant === "primary"
      ? "Primary"
      : args.variant === "secondary"
      ? "Secondary"
      : args.disabled
      ? "Disabled"
      : ""}
  </Button>
);
Primary.args = {
  variant: "primary",
  disabled: false,
  isLoading: false,
};

export const withIcon: Story = (args) => {
  return (
    <Button
      onClick={() => console.log("clicked")}
      variant={"primary"}
      {...args}
    >
      {args.isLoading && !args.disabled ? (
        <Fragment>
          <Spinner className={styles.icons} />
          Loading...
        </Fragment>
      ) : (
        <Fragment>
          <Settings className={styles.icons} />
          {args.variant === "primary"
            ? "Primary"
            : args.variant === "secondary"
            ? "Secondary"
            : args.disabled
            ? "Disabled"
            : ""}
        </Fragment>
      )}
    </Button>
  );
};

withIcon.args = {
  variant: "primary",
  disabled: false,
  isLoading: false,
};
