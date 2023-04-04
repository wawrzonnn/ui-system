/* eslint-disable @typescript-eslint/no-empty-function */
import TextField from "./TextField";
import { Meta, Story } from "@storybook/react";
import { Search } from "../../assets/Icons/Search";
import React from "react";

export default {
  title: "TextField",
  component: TextField,
} as Meta;

export const Default: Story = (args) => (
  <TextField
    value={""}
    placeholder={""}
    {...args}
    label="label"
    name="name"
    onChange={() => {}}
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

export const withIcon: Story = (args) => (
  <TextField
    value={""}
    placeholder={""}
    {...args}
    label="label"
    name="name"
    onChange={() => {}}
    id="text-field-1"
    icon={<Search />}
  />
);

withIcon.args = {
  disabled: false,
  error: "",
  value: "",
  placeholder: "",
  hint: "",
};