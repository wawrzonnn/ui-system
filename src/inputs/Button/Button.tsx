import React from 'react'
import { h } from 'preact'
import styles from './Button.module.css'

interface ButtonProps {
	type?: 'button' | 'submit'
	disabled?: boolean
	icon?: React.ReactElement
	isLoading?: boolean
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	variant: 'primary' | 'secondary'
	icons: 'show' | 'hide'
}

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	disabled = false,
	icon,
	isLoading = false,
	onClick,
	variant = 'primary',
	children,
}) => {
	const globalButtonClass = styles.buttons
	const variantClass = variant === 'primary' ? styles.primary : styles.secondary
	const disabledClass = disabled ? (variant === 'primary' ? styles.disabledPrimary : styles.disabledSecondary) : ''
	const loadingClass = isLoading ? (variant === 'primary' ? styles.loadingPrimary : styles.loadingSecondary) : ''

	const allClasses = [globalButtonClass, variantClass, disabledClass, loadingClass].join(' ')
	return (
		<button className={allClasses} type={type} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button