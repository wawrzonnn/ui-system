import { TextField } from "./TextField";
import { Meta, Story } from "@storybook/react";
import { Search } from "../../assets/Icons/Search";
import React from "react";

export default {
  component: TextField,
} as Meta;

export const Default: Story = (args) => (
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
  placeholder: "",
  hint: "",
};

export const Icon: Story = (args) => (
  <TextField
    value={""}
    placeholder={""}
    {...args}
    label="label"
    name="name"
    onChange={() => console.log("changed")}
    id="text-field-1"
    icon={<Search />}
  />
);

Icon.args = {
  disabled: false,
  error: "",
  value: "",
  placeholder: "",
  hint: "",
};
