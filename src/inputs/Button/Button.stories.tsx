import { Meta, Story } from '@storybook/preact'
import Button from './Button'
import * as React from 'preact/compat'
import { h } from 'preact'
import styles from './Button.module.css'

export default {
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary'],
			control: { type: 'radio' },
		},
		showIcons: {
			options: ['show', 'hide'],
			control: { type: 'radio' },
		},
	},
} as Meta

export const Primary: Story = args => (
	<Button
		{...args}
		onClick={() => console.log('clicked')}
		// onMouseUp={e => e.currentTarget.classList.add(styles.mouseUp)}
		// onMouseLeave={e => e.currentTarget.classList.remove(styles.MouseUp)}
		>
		Primary
	</Button>
)
Primary.args = {
	variant: 'primary',
	disabled: false,
	isLoading: false,
	icons: 'show',
}
