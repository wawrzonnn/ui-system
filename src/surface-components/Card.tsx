import React, { PropsWithChildren } from 'react'
import styles from './Card.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface CardProps {
	fullWidth?: boolean
}

export const Card = ({ fullWidth, children }: PropsWithChildren<CardProps>) => {
	const cardClasses = cx({
		cardFullWidth: fullWidth,
		cardFixedWidth: !fullWidth,
	})

	return <div className={cardClasses}>{children}</div>
}

interface CardImageProps {
	url: string
	alt: string
}

export const CardImage = ({ url, alt }: PropsWithChildren<CardImageProps>) => {
	return <img src={url} alt={alt} className={styles.cardImage} />
}

export const CardContent = ({ children }: PropsWithChildren) => {
	return <div className={styles.cardContent}>{children}</div>
}
