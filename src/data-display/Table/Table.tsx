import React from 'react'
import styles from './Table.module.css'
import { h } from 'preact'

interface TableCellProps {
	align: 'left' | 'center' | 'right'
	children: React.ReactNode
}

interface TableProps {
	children: React.ReactNode
}

interface TableHeadProps {
	children: React.ReactNode
}
interface TableRowProps {
	children: React.ReactNode
}
interface TableBodyProps {
	children: React.ReactNode
}

function Table({ children }: TableProps) {
	return <table className={styles.table}>{children}</table>
}

function TableHead({ children }: TableHeadProps) {
	return <thead className={styles.tableHead}>{children}</thead>
}

function TableRow({ children }: TableRowProps) {
	return <tr className={styles.tableRow}>{children}</tr>
}

function TableBody({ children }: TableBodyProps) {
	return <tbody>{children}</tbody>
}

function TableCell({ align, children }: TableCellProps) {
	return (
		<td style={{ textAlign: align }} className={styles.tableCell}>
			{children}
		</td>
	)
}

export { Table, TableHead, TableRow, TableCell, TableBody }
