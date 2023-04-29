import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Tabs, Tab, TabContent } from "./Tabs";

export default {
  component: Tabs,
} as Meta;

export const Default: StoryFn = () => (
  <Tabs defaultOpenedId="tab-1">
    <Tab id="tab-1">Breakfast</Tab>
    <Tab id="tab-2">Lunches</Tab>
    <Tab id="tab-3">Brunches</Tab>
    <Tab id="tab-4">Dinners</Tab>
    <Tab id="tab-5">Snacks</Tab>
    <Tab id="tab-6">Drinks</Tab>
    <TabContent id="tab-1">Content for Tab Breakfast</TabContent>
    <TabContent id="tab-2">Content for Tab Lunches</TabContent>
    <TabContent id="tab-3">Content for Tab Brunches</TabContent>
    <TabContent id="tab-4">Content for Tab Dinners</TabContent>
    <TabContent id="tab-5">Content for Tab Snacks</TabContent>
    <TabContent id="tab-6">Content for Tab Drinks</TabContent>
  </Tabs>
);
