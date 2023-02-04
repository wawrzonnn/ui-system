import React from 'react'
import { h } from 'preact'
import styles from './Link.module.css'

interface LinkProps {
	to: string
	id?: string
	target?: '_blank' | '_self' | '_parent' | '_top'
	disabled?: boolean
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
	color: string
}

const Link: React.FC<LinkProps> = ({
	to = 'www.google.pl',
	id = 'google',
	target = '_blank',
	disabled = false,
	onClick,
	color = 'tomato',
	children,
}) => {
	const globalLinkClass = styles.linkGlobal
	const optionClass = disabled === false ? styles.linkEnabled : styles.linkDisabled
	const allClasses = [globalLinkClass, optionClass].join(' ')
	return (
		<a className={allClasses} href={to} id={id} target={target} disabled={disabled} onClick={onClick}>
			{children}
		</a>
	)
}

export default Link
