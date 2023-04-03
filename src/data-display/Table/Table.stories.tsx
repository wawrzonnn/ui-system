import React, { Fragment } from 'react'
import { Story, Meta } from '@storybook/react'
import { Table, TableHead, TableRow, TableCell, TableBody } from './Table'

export default {
	title: 'Table',
	component: Table,
} as Meta

interface RowData {
	breed: string
	name: string
	weight: number
	height: number
	chip: boolean
	ower: boolean
}

const rows: Array<RowData> = [
	{ breed: 'Cocker Spaniel', name: 'Richard', weight: 15, height: 31, chip: true, ower: false },
	{ breed: 'Labrador Retriever', name: 'Fifi', weight: 25, height: 42, chip: true, ower: true },
	{ breed: 'German Shepherd', name: 'Chaps', weight: 26, height: 57, chip: false, ower: false },
	{ breed: 'Dog', name: 'Reksio', weight: 36, height: 56, chip: false, ower: true },
	{ breed: 'Golden Retriever', name: 'Mufasa', weight: 49, height: 24, chip: true, ower: false },
]

export const Template: Story = () => (
	<>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell align='left'>Dog’s breed</TableCell>
					<TableCell align='right'>Name</TableCell>
					<TableCell align='right'>Weight (kg)</TableCell>
					<TableCell align='right'>Height (cm)</TableCell>
					<TableCell align='right'>Chip</TableCell>
					<TableCell align='right'>Ower</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{rows.map(row => (
					<TableRow key={row.breed}>
						<TableCell align='left'>{row.breed}</TableCell>
						<TableCell align='right'>{row.name}</TableCell>
						<TableCell align='right'>{row.weight}</TableCell>
						<TableCell align='right'>{row.height}</TableCell>
						<TableCell align='right'>{row.chip ? 'Yes' : 'No'}</TableCell>
						<TableCell align='right'>{row.ower ? 'Yes' : 'No'}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</>
)
