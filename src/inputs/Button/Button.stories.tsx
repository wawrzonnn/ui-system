import { Meta, Story } from '@storybook/react'
import Button from './Button'
import styles from './Button.module.css'
import { Settings } from '../../assets/Icons/Settings'
import React from 'react'

export default {
	component: Button,
} as Meta

export const Default: Story = args => (
	<Button isLoading={false} variant={'primary'} {...args} onClick={() => console.log('clicked')}>
		Button
	</Button>
)
Default.args = {
	variant: 'primary',
	disabled: false,
	isLoading: false,
}

export const Icon: Story = args => (
	<Button isLoading={false} variant={'primary'} {...args} onClick={() => console.log('clicked')}>
		<div className={styles.button__container}>
			<span className={styles.iconSettings}>
				<Settings />
			</span>
			Button
		</div>
	</Button>
)
Icon.args = {
	variant: 'primary',
	disabled: false,
	isLoading: false,
}
