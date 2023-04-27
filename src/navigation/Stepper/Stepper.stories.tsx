import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Stepper, Step } from './Stepper'
import { Checkmark } from '../../assets/Icons/Checkmark'

export default {
	component: Stepper,
} as Meta

const steps = [
	{ label: '1', completed: true, disabled: false },
	{ label: '2', completed: false, disabled: true },
	{ label: '3', completed: false, disabled: true },
]

export const Default: Story = () => (
	<div className='App'>
		<Stepper
			activeStep={1}
			setActiveStep={function (): void {
				throw new Error('Function not implemented.')
			}}>
			{steps.map((step, index) => (
				<Step key={index} completed={step.completed} disabled={step.disabled} label={''} index={index}>
					{step.completed ? <Checkmark /> : step.label}
				</Step>
			))}
		</Stepper>
	</div>
)
