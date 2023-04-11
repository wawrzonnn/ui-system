/* eslint-disable react/no-children-prop */
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, CardImage, CardContent } from "./Card";
import { Button } from "../inputs";
import AvatarTemplate from "../assets/images/CardAvatar.png";

export default {
  component: Card,
} as Meta;

export const Default: Story = (args) => (
  <Card {...args}>
    <CardImage url={AvatarTemplate} alt={"Default Avatar"}></CardImage>
    <CardContent>
      <h1>Card name</h1>
      <span>
        Card description goes here and it can be as long as it needs and so on.
      </span>
      <Button
        onClick={() => {
          console.log("Hello");
        }}
        variant={"primary"}
      >
        Primary
      </Button>
      <Button
        onClick={() => {
          console.log("Hello");
        }}
        variant={"secondary"}
      >
        Secondary
      </Button>
    </CardContent>
  </Card>
);
Default.args = {
  fullWidth: false,
};
