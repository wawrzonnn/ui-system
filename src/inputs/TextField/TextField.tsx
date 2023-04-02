import React from 'react'
import styles from './TextField.module.css'
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

	const labelActiveClass = value || placeholder || focused ? styles.labelActive : styles.labelInactive
	const labelFocusedClass = focused ? styles.labelFocused : ''
	const labelErrorClass = error ? styles.labelError : ''
	const labelDisabledClass = disabled ? styles.labelDisabled : ''

	const inputFocusedClass = focused ? styles.inputFocused : ''
	const inputErrorClass = error ? styles.inputError : ''
	const inputDisabledClass = disabled ? styles.inputDisabled : ''

	const labelDynamicClasses = [
		styles.baseLabel,
		labelActiveClass,
		labelErrorClass,
		labelDisabledClass,
		labelFocusedClass,
	].join(' ')
	const inputDynamicClasses = [styles.inputWrapper, inputFocusedClass, inputErrorClass, inputDisabledClass].join(' ')

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
			<Fragment>
				{(focused && !error && <Delete className={styles.deleteIcon} />) ||
					(error && !disabled && !focused && <Error className={styles.errorIcon} />)}
			</Fragment>

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
