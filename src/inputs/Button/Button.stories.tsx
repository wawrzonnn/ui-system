import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import React from "react";
import { Settings } from "../../assets/Icons/Settings";
import { Spinner } from "../../assets/Icons/Spinner";
import { Fragment } from "react";
import styles from "../Button/Button.module.css";

export default {
  component: Button,
} as Meta;

export const Default: StoryFn = (args) => (
  <Button
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

export const Icon: StoryFn = (args) => (
  <Button
    isLoading={false}
    variant={"primary"}
    {...args}
    onClick={() => console.log("clicked")}
  >
    {!args.isLoading && (
      <>
        <span className={styles.icon}>
          <Settings />
        </span>
      </>
    ) }
    Button
  </Button>
);
Icon.args = {
  variant: "primary",
  disabled: false,
  isLoading: false,
};
