import { Meta, Story } from '@storybook/preact'
import Button from './Button'
import * as React from 'preact/compat'
import { h } from 'preact'
export default {
	component: Button,
	argTypes: {
		variant: {
		  options: ['primary', 'secondary'],
		  control: { type: 'radio' },
		},
	  }
} as Meta



export const Primary: Story = args => (
	<Button {...args} onClick={() => console.log('clicked')}>
		Primary
	</Button>
)
Primary.args = {
	variant: 'primary',
	disabled: false,
	isLoading: false
}

export const Loading: Story = args => (
	<Button {...args} isLoading onClick={() => console.log('clicked')}>
		Loading
	</Button>
)
export const Disabled: Story = (args) => (
	<Button {...args} disabled onClick={() => console.log('clicked')}>
		Disabled
	</Button>
)
 // Skoro wszystkie buttony na storybooku mozemy ustawic za pomoca propsów to z jakiego powodu definiujemy buttony typu Loading lub Disabled ? 


