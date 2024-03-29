import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card, CardImage, CardContent } from "./Card";
import { Button } from "../../inputs";
import CardAvatar from "../../assets/images/CardAvatar.png";
import styles from "./Card.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default {
  component: Card,
} as Meta;

interface CardStoryProps {
  fullWidth?: boolean;
}

export const Default: StoryFn<CardStoryProps> = ({ fullWidth }) => {
  const buttonsWrapperClasses = cx({
    buttonsWrapper: true,
    buttonsWrapperFixedWidth: !fullWidth,
  });
  return (
    <Card fullWidth={fullWidth}>
      <CardImage url={CardAvatar} alt={"Default Avatar"} />
      <CardContent>
        <h1>Card name</h1>
        <p>
          Card description goes here and it can be as long as it needs and so
          on.
        </p>
        <div className={buttonsWrapperClasses}>
          <Button
            onClick={() => {
              console.log("Clicked!");
            }}
            variant={"primary"}
          >
            Primary Button
          </Button>
          <Button
            onClick={() => {
              console.log("Clicked!");
            }}
            variant={"secondary"}
          >
            Secondary Button
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
Default.args = {
  fullWidth: false,
};
