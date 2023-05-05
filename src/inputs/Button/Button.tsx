import React, { PropsWithChildren, useState } from 'react'
import styles from './Button.module.css'
import { Spinner } from '../../assets/Icons/Spinner'
import { Fragment } from 'react'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface ButtonProps {
	type?: 'button' | 'submit'
	disabled?: boolean
	isLoading?: boolean
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
	variant: 'primary' | 'secondary'
	children: React.ReactNode
}

export const Button = ({
	type = 'button',
	disabled = false,
	isLoading,
	variant,
	children,
	onClick,
}: PropsWithChildren<ButtonProps>) => {
	const [isPressed, setPressed] = useState(false)

	const buttonClasses = cx({
		[styles.default]: true,
		[variant]: true,
		[styles.disabled]: disabled,
		[styles.pressed]: isPressed,
		[styles.isLoading]: isLoading && !disabled,
	})

	return (
		<button
			onMouseDown={() => setPressed(true)}
			onMouseUp={() => setPressed(false)}
			className={buttonClasses}
			type={type}
			disabled={disabled || isLoading}
			onClick={onClick}>
			{!disabled && isLoading ? (
				<>
					<span className={styles.iconSpinner}>
						<Spinner />
					</span>
					{children}
				</>
			) : (
				children
			)}
		</button>
	)
}
