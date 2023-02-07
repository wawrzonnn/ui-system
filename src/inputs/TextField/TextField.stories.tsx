import React from 'react'
import TextField from './TextField'
import { Meta, Story } from '@storybook/preact'
import { h } from 'preact'
import { Search } from '../../assets/Icons/Search'
import { Fragment } from 'react'
export default {
	title: 'TextField',
	component: TextField,
}

export const Default: Story = args => (
	<TextField
		{...args}
		label='label'
		value='Input'
		name='name'
		placeholder='placeholder'
		hint='Hint message'
		onChange={() => {}}
		id='text-field-1'
	/>
)

Default.args = {
	autoFocus: false,
	disabled: false,
	error: '',
}

export const withIcon: Story = args => (
	<TextField
		{...args}
		label='label'
		value={'     Input'}
		name='name'
		placeholder='placeholder'
		hint='Hint message'
		onChange={() => {}}
		id='text-field-1'
		icon={<Search />}
	/>
)

withIcon.args = {
	autoFocus: false,
	disabled: false,
	error: '',
  icon: <Search />
}
