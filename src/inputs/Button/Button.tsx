import React from 'react'
import { PropsWithChildren } from 'react'
import { h } from 'preact'
import styles from './Button.module.css'
import ButtonStories from './Button.stories'

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
	variant,
	children,
}) => {
	return (
		<button
			className={`${styles.buttons}, {variant === "primary" ? ${styles.primary} : ${styles.secondary}}`}
			type={type}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
