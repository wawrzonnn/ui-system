import React from 'react'
import './Switch.module.css'
import { h } from 'preact'

interface Props {
	checked: boolean
	disabled?: boolean
	id?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch: React.FC<Props> = ({ checked = false, disabled = false, id, onChange }) => {
	return (
		<label className='switch'>
			<input type='checkbox' checked={checked} disabled={disabled} id={id} onChange={onChange} />
			<span className={`slider ${disabled ? 'disabled' : ''}`}></span>
		</label>
	)
}

export default Switch
