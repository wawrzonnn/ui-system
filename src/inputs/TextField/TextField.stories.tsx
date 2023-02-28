import TextField from './TextField'
import { Story } from '@storybook/preact'
import { h } from 'preact'
import { Search } from '../../assets/Icons/Search'
import styles from './TextField.module.css'
export default {
	title: 'TextField',
	component: TextField,
}

export const Default: Story = args => (
	<TextField {...args} label='label' name='name' onChange={() => {}} id='text-field-1' />
)

Default.args = {
	disabled: false,
	error: '',
	value: '',
	placeholder: '',
	hint: '',
}

export const withIcon: Story = args => (
	<TextField {...args} label='label' name='name' onChange={() => {}} id='text-field-1' icon={<Search />} />
)

withIcon.args = {
	disabled: false,
	error: '',
	value: '',
	placeholder: '',
	hint: '',
}
