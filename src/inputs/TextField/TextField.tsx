import React from 'react'
import styles from './TextField.module.css'
import { h } from 'preact'
import { Fragment } from 'react'
import { Delete } from '../../assets/Icons/Delete'
import { Error } from '../../assets/Icons/Error'
import { useState } from 'react'

interface Props {
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
	const [focused, setFocused] = useState(false)
	const labelActiveClass = value || placeholder || focused ? styles.inputLabelActive : styles.inputLabelInactive

	const labelDynamicClasses = [styles.baseLabel, labelActiveClass].join(' ')
	const inputDynamicClasses = [styles.inputWrapper].join(' ')

	// const globalInputClass = styles.input
	// const disabledInputClass = disabled ? styles.inputDisabled : ''
	// const errorInputClass = error && !disabled ? styles.inputError : ''
	// const inputActiveClass = (!error && !disabled && value) || placeholder || focused ? styles.inputActive : styles.input
	// const dynamicInputClass = [globalInputClass, disabledInputClass, errorInputClass, inputActiveClass].join(' ')

	// const globalLabelClass = styles.label
	// const disabledLabelClass = disabled ? styles.labelDisabled : ''
	// const errorLabelClass = error && !disabled ? styles.labelError : ''
	// const labelActiveClass = (!error && !disabled && value) || placeholder || focused ? styles.labelActive : styles.label
	// const dynamicLabelClass = [globalLabelClass, disabledLabelClass, errorLabelClass, labelActiveClass].join(' ')

	return (
		<div className={inputDynamicClasses}>
			<label className={labelDynamicClasses} htmlFor={id}>
				{label}
			</label>
			<input
				className={inputDynamicClasses}
				autoFocus={autoFocus}
				disabled={disabled}
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				id={id}
				type={type}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				{...props}
			/>
			{icon && (
				<Fragment>
					<span className={disabled ? styles.searchIconDisabled : styles.searchIcon}>{icon}</span>
				</Fragment>
			)}
			<Fragment>{(focused && !error && <Delete />) || (error && !disabled && !focused && <Error />)}</Fragment>

			{hint && !error && !disabled ? (
				<span className={styles.hintMessage}>{hint}</span>
			) : error && !disabled ? (
				<span className={styles.errorMessage}>{error}</span>
			) : (
				''
			)}
		</div>
	)
}

export default TextField
