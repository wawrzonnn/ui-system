import React from "react";
import { Meta, Story } from "@storybook/react";
import { Accordion } from "./Accordion";

export default {
  component: Accordion,
} as Meta;

export const Default: Story = () => {
  return (
    <Accordion header={"Accordion 1"} defaultOpen={false}>
      <span>
        The accordion component allows the user to show and hide sections of
        related content on a page.
      </span>
    </Accordion>
  );
};
Default.args = {
  defaultOpen: false,
};
