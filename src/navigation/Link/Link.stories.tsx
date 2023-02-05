import { Meta, Story } from '@storybook/preact'
import Link from './Link'
import { h } from 'preact'
import styles from './Link.module.css'
import { Fragment } from 'react'
import { Plus } from '../../assets/Icons/Plus'


export default {
	component: Link,
} as Meta

export const Default: Story = args => (
	<Link {...args} onClick={() => console.log('clicked')}>
		{args.disabled ? 'Disabled' : 'Enabled'}
	</Link>
)
Default.args = {
	disabled: true,
}

export const withIcon: Story = args => {
	return (
		<Link {...args}>
			{args.disabled ? <Fragment><Plus />Disabled</Fragment> : <Fragment><Plus />Enabled</Fragment>}
		</Link>
	)
}

withIcon.args = {
	disabled: false,
}
