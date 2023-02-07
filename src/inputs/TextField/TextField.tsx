import React, { InputHTMLAttributes } from 'react'
import styles from './TextField.module.css'
import { h } from 'preact'
import { Fragment } from 'react'
import { Delete } from '../../assets/Icons/Delete'
import { Error } from '../../assets/Icons/Error'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	autoFocus?: boolean
	disabled?: boolean
	value: string
	name: string
	placeholder: string
	error?: string
	hint?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	label: string
	id: string
	type?: string
  icon?: React.ReactNode
}

const TextField: React.FC<Props> = ({
	autoFocus = false,
	disabled = false,
	label,
	value,
	name,
	placeholder,
	error,
	hint,
	onChange,
	id,
	type = 'text',
  icon,
	...props
}) => {
	return (
		<>
			<input
				className={`${styles.input} ${autoFocus && styles.inputFocus} ${error && styles.inputError}  ${
					disabled && styles.inputDisabled
				}`}
				autoFocus={autoFocus}
				disabled={disabled}
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				id={id}
				type={type}
				{...props}
			/>
      {icon && <Fragment>{icon}</Fragment>}
			<Fragment>
				{ autoFocus && <Delete /> || error && <Delete />}
			</Fragment>
			<label className={`${styles.label}  ${disabled && styles.disabled} ${autoFocus && styles.focus}`} htmlFor={id}>
				label
			</label>
			{error ? <span className={styles.errorMessage}>{error}</span> : ''}
			{autoFocus && <span className={styles.hintMessage}>{hint}</span>}
		</>
	)
}

export default TextField
