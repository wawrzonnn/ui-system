import React from 'react'
import styles from './List.module.css'
import { h } from 'preact'

interface ListProps {
children: React.ReactNode
}


const List: React.FC<ListProps> = ({ children }) => {
return <ul>{children}</ul>
}

const ListItem: React.FC<ListProps> = ({ children }) => {
return <li>{children}</li>
}

export { List, ListItem }