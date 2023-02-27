import { Meta, Story } from '@storybook/preact'
import Button from './Button'
import { h } from 'preact'
import styles from './Button.module.css'
import { Loading } from '../../assets/Icons/Spinner'
import { Plus } from '../../assets/Icons/Plus'
import { Fragment } from 'react'

export default {
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary'],
			control: { type: 'radio' },
		},
	},
} as Meta

export const Primary: Story = args => (
	<Button {...args} onClick={() => console.log('clicked')}>
		{args.isLoading
			? 'Loading'
			: args.variant === 'primary'
			? 'Primary'
			: args.variant === 'secondary'
			? 'Secondary'
			: args.disabled
			? 'Disabled'
			: ''}
	</Button>
)
Primary.args = {
	variant: 'primary',
	disabled: false,
	isLoading: false,
}

export const withIcon: Story = args => {
	return (
		<Button {...args}>
			{args.isLoading && !args.disabled ? (
				<Fragment>
					<Loading className={styles.icons} />
					Loading...
				</Fragment>
			) : (
				<Fragment>
					<Plus className={styles.icons} />
					{args.variant === 'primary'
						? 'Primary'
						: args.variant === 'secondary'
						? 'Secondary'
						: args.disabled
						? 'Disabled'
						: ''}
				</Fragment>
			)}
		</Button>
	)
}

withIcon.args = {
	variant: 'primary',
	disabled: false,
	isLoading: false,
}
