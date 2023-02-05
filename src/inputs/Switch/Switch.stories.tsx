import React from 'react'
import Switch from './Switch'
import { Meta, Story } from '@storybook/preact'
import { h } from 'preact'
import styles from './Switch.module.css'

export default {
	title: 'Switch',
	component: Switch,
} as Meta

export const Default: Story = args => {
	return <Switch {...args} />
}

Default.args = {
	checked: false,
	disabled: false,
}
