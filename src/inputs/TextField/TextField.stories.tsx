import { TextField } from "./TextField";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

export default {
  component: TextField,
} as Meta;

export const Default: StoryFn = (args) => (
  <TextField
    value={""}
    placeholder={""}
    {...args}
    label="label"
    name="name"
    onChange={() => console.log("changed")}
    id="text-field-1"
  />
);

Default.args = {
  disabled: false,
  error: "",
  value: "",
  placeholder: "Placeholder",
  hint: "",
  icon: false,
};
