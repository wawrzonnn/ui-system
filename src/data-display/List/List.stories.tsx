import { Meta, Story } from "@storybook/react";
import styles from "./List.module.css";
import { List, ListItem } from "./List";
import React, { Fragment } from "react";
import { Switch } from "../../inputs/Switch/Switch";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";

interface ListItemArgs {
  header: string;
  supportText: string;
  className: string;
}

export default {
  component: List,
} as Meta;

export const Default: Story<ListItemArgs> = (args) => (
  <List>
    <ListItem>
      <div>
        <h3 className={styles.header}>{args.header}</h3>
        <p className={styles.supportText}>{args.supportText}</p>
      </div>
    </ListItem>
  </List>
);

Default.args = {
  header: "List Item",
  supportText: "Supporting line text lorem ipsum dolor sit amet, consectetur",
};

export const ListItemSwitch: Story<ListItemArgs> = (args) => (
  <>
    <List>
      <ListItem>
        <div className={styles.switchContainer}>
          <Switch
            id={""}
            onChange={() => {
              console.log("Switch changed!");
            }}
          />
        </div>
        <div>
          <h3 className={styles.header}>{args.header}</h3>
          <p className={styles.supportText}>{args.supportText}</p>
        </div>
      </ListItem>
    </List>
  </>
);

ListItemSwitch.args = {
  header: "List Item",
  supportText: "Supporting line text lorem ipsum dolor sit amet, consectetur",
};

export const ListItemCheckbox: Story<ListItemArgs> = (args) => (
  <>
    <List>
      <ListItem>
        <div>
          <h3 className={styles.header}>{args.header}</h3>
          <p className={styles.supportText}>{args.supportText}</p>
        </div>
        <div className={styles.checkboxContainer}>
          <Checkbox
            id={""}
            name={""}
            value={""}
            label={"Checkbox label"}
            checked={true}
            disabled={false}
            onChange={() => {
              console.log("Checkbox changed!");
            }}
          />
        </div>
      </ListItem>
    </List>
  </>
);

ListItemCheckbox.args = {
  header: "List Item",
  supportText: "Supporting line text lorem ipsum dolor sit amet, consectetur",
};
