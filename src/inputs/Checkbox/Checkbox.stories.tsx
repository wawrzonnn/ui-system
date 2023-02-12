import React from 'react';
import Checkbox from './Checkbox';
import { Meta, Story } from '@storybook/preact'
import {h} from 'preact'


export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
        options: [true, false],
        control: { type: 'radio' },
    },
    disabled: {
        options: [true, false],
        control: { type: 'radio' },
    },
},
};

export const DefaultCheckbox: Story = args => (
  <Checkbox
   {...args}
  />
);

DefaultCheckbox.args = {
    checked: true,
    disabled: false,
  };