import { Meta, StoryFn } from "@storybook/react";
import { Link } from "./Link";
import React from "react";
import { Settings } from "../../assets/Icons/Settings";
import styles from '../Link/Link.module.css'

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

export const Icon: StoryFn = (args) => (
  <Link to={""} {...args} onClick={() => console.log("clicked")}>
    <span className={styles.iconSettings}>
        <Settings />
      </span> Click Me!
  </Link>
);
Icon.args = {
  disabled: false,
};




