import { PropsWithChildren } from 'react'
import styles from './Table.module.css'
import React from 'react'

interface TableCellProps extends PropsWithChildren<{}> {
	align: 'left' | 'center' | 'right'
}

interface TableProps extends PropsWithChildren<{}> {}

interface TableHeadProps extends PropsWithChildren<{}> {}

interface TableRowProps extends PropsWithChildren<{}> {}

interface TableBodyProps extends PropsWithChildren<{}> {}

export const Table: React.FC<TableProps> = ({ children }) => {
	return <table className={styles.table}>{children}</table>
}

export const TableHead: React.FC<TableHeadProps> = ({ children }) => {
	return <thead className={styles.tableHead}>{children}</thead>
}

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
	return <tr className={styles.tableRow}>{children}</tr>
}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
	return <tbody>{children}</tbody>
}

export const TableCell: React.FC<TableCellProps> = ({ align, children }) => {
	return (
		<div className={styles.tableCell}>
			<td style={{ textAlign: align }}>{children}</td>
		</div>
	)
}
