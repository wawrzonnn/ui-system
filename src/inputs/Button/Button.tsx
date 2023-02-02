import React from 'react'
import { PropsWithChildren } from 'react'
import { h } from 'preact'
import styles from './Button.module.css'
import ButtonStories, { Primary } from './Button.stories'
import { Loading } from '../../assets/Icons/Loading'
import { Plus } from '../../assets/Icons/Plus'

interface ButtonProps {
	type?: 'button' | 'submit'
	disabled?: boolean
	icon?: React.ReactElement
	isLoading?: boolean
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	// onMouseUP: (event: React.MouseEvent<HTMLButtonElement>) => void
	// onMouseLeave: (event: React.MouseEvent<HTMLButtonElement>) => void
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
	showIcons,
}) => {
	const globalButton = styles.buttons
	const variantClass = variant === 'primary' ? styles.primary : styles.secondary
	const disabledClass = disabled ? (variant === 'primary' ? styles.disabledPrimary : styles.disabledSecondary) : ''
	const loadingClass = isLoading ? (variant === 'primary' ? styles.loadingPrimary : styles.loadingSecondary) : ''

	const allClasses = [globalButton, variantClass, disabledClass, loadingClass].join(' ')
	return (
		<button
			className={allClasses}
			type={type}
			disabled={disabled}
			onClick={onClick}
			// onMouseUp={OnMouseUp}
			// onMouseLeave={onMouseLeave}
			>
			{showIcons === 'show' ? isLoading ? <Loading className={allClasses} /> : <Plus className={allClasses} /> : null}
			{children}
		</button>
	)
}

export default Button
