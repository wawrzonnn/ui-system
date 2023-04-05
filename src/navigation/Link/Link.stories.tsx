import { Meta, Story } from "@storybook/react";
import Link from "./Link";
import { Settings } from "../../assets/Icons/Settings";
import styles from "./Link.module.css";
import React from "react";

export default {
  component: Link,
} as Meta;

export const Default: Story = (args) => (
  <Link to={""} {...args} onClick={() => console.log("clicked")}>
    Click Me!
  </Link>
);
Default.args = {
  disabled: true,
};

export const Icon: Story = (args) => {
  return (
    <Link to={""} {...args}>
      <div className={styles.link__container}>
        <span className={styles.iconSettings}>
          <Settings />
        </span>
        Click Me!
      </div>
    </Link>
  );
};

Icon.args = {
  disabled: false,
};
