import { Meta, Story } from "@storybook/preact";
import Button from "./Button";
import * as React from "preact/compat";
import { h } from "preact";

export default {
  component: Button,
} as Meta;

export const Primary = () => (
  <Button variant="primary" onClick={() => console.log("clicked")}>
    Primary
  </Button>
);

export const Secondary = () => (
  <Button variant="secondary" onClick={() => console.log("clicked")}>
    Secondary
  </Button>
);

export const Loading = () => (
  <Button isLoading onClick={() => console.log("clicked")}>
    Loading
  </Button>
);

export const Disabled = () => (
  <Button disabled onClick={() => console.log("clicked")}>
    Disabled
  </Button>
);