import React from 'react'
import Checkbox from './Checkbox'
import { Meta, Story } from '@storybook/react'

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
} as Meta

export const DefaultCheckbox: Story = args => (
	<Checkbox id={''} name={''} value={''} label={''} checked={false} disabled={false} onChange={undefined} {...args} />
)

DefaultCheckbox.args = {
	checked: true,
	disabled: false,
}
