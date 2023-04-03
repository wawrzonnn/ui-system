import React from 'react'
import styles from './Checkbox.module.css'

interface CheckboxProps {
	id: string
	name: string
	value: string
	label: string
	checked: boolean
	disabled: boolean
	onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name, value, label, checked, disabled, onChange }) => {
	return (
		<label htmlFor={id}>
			{label}
			<input
				type='checkbox'
				className={styles.checkbox}
				id={id}
				name={name}
				value={value}
				checked={checked}
				disabled={disabled}
				onChange={!disabled ? onChange : undefined}></input>
		</label>
	)
}

export default Checkbox
