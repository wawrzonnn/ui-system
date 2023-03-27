import { Story } from '@storybook/preact'
import { h } from 'preact'
import styles from './List.module.css'
import { List, ListItem } from './List'
import React from 'react'
import Switch from '../../inputs/Switch/Switch'
import Checkbox from '../../inputs/Checkbox/Checkbox'

interface ListItemArgs {
  header: string
  supportText: string
}

export default {
  title: 'Lists',
  component: List,
}

export const Default: Story<ListItemArgs> = (args) => (
  <List>
    <ListItem>
      <div>
        <h3>{args.header}</h3>
        <p>{args.supportText}</p>
      </div>
    </ListItem>
  </List>
)

Default.args = {
  header: 'List Item',
  supportText: 'Supporting line text lorem ipsum dolor sit amet, consectetur',
}

export const ListItemSwitch: Story<ListItemArgs> = (args) => (
  <List>
    <ListItem>
      <div>
        <Switch />
      </div>
      <div>
        <h3>{args.header}</h3>
        <p>{args.supportText}</p>
      </div>
    </ListItem>
  </List>
)

ListItemSwitch.args = {
  header: 'List Item',
  supportText: 'Supporting line text lorem ipsum dolor sit amet, consectetur',
}

export const ListItemCheckbox: Story<ListItemArgs> = (args) => (
  <List>
    <ListItem>
      <div>
        <h3>{args.header}</h3>
        <p>{args.supportText}</p>
      </div>
      <div>
        <Checkbox />
      </div>
    </ListItem>
  </List>
)

ListItemCheckbox.args = {
  header: 'List Item',
  supportText: 'Supporting line text lorem ipsum dolor sit amet, consectetur',
}