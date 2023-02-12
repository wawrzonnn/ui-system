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

	const globalInputClass = styles.input
	const disabledInputClass = disabled ? styles.inputDisabled : ''
	const errorInputClass = error && !disabled ? styles.inputError : ''
	const inputActiveClass = (!error && !disabled && value) || placeholder || focused ? styles.inputActive : styles.input
	const dynamicInputClass = [globalInputClass, disabledInputClass, errorInputClass, inputActiveClass].join(' ')

	const globalLabelClass = styles.label
	const disabledLabelClass = disabled ? styles.labelDisabled : ''
	const errorLabelClass = error && !disabled ? styles.labelError : ''
	const labelActiveClass = (!error && !disabled && value) || placeholder || focused ? styles.labelActive : styles.label
	const dynamicLabelClass = [globalLabelClass, disabledLabelClass, errorLabelClass, labelActiveClass].join(' ')

	return (
		<>
			<input
				className={dynamicInputClass}
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
			{icon && <Fragment>{icon}</Fragment>}
			<Fragment>{(focused && !error && <Delete />) || (error && !disabled && !focused && <Error />)}</Fragment>
			<label className={dynamicLabelClass} htmlFor={id}>
				{label}
			</label>
			{focused && !error && !disabled ? (
				<span className={styles.hintMessage}>{hint}</span>
			) : error && !disabled && !focused ? (
				<span className={styles.errorMessage}>{error}</span>
			) : (
				''
			)}
		</>
	)
}

export default TextField
