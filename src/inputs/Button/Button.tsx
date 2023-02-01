import React from 'react'
import { PropsWithChildren } from 'react'
import { h } from 'preact'
import styles from './Button.module.css'
import ButtonStories, { Primary } from './Button.stories'

interface ButtonProps {
	type?: 'button' | 'submit'
	disabled?: boolean
	icon?: React.ReactElement
	isLoading?: boolean
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	variant: 'primary' | 'secondary'
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
	type = 'button',
	disabled = false,
	icon,
	isLoading = false,
	onClick,
	variant = 'primary',
	children,
}) => {
	const globalButton = styles.buttons
	const variantClass = variant === 'primary' ? styles.primary : styles.secondary
	const disabledClass = disabled ? (variant === 'primary' ? styles.disabledPrimary : styles.disabledSecondary) : ''
	const loadingClass = isLoading ? (variant === 'primary' ? styles.loadingPrimary : styles.loadingSecondary) : ''

	const allClasses = [globalButton, variantClass, disabledClass, loadingClass].join(' ')
	return (
		<button className={allClasses} type={type} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
