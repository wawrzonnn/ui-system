import React from 'react'
import styles from './List.module.css'
import { h } from 'preact'

interface ListProps {
	children: React.ReactNode
}

const List: React.FC<ListProps> = ({ children }) => {
	return <ul className={styles.list}>{children}</ul>
}

const ListItem: React.FC<ListProps> = ({ children }) => {
	return <li className={styles.listItem}>{children}</li>
}

export { List, ListItem }
