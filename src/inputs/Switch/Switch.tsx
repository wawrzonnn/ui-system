import React from 'react'
import  './Switch.module.css'
import { h } from 'preact'
import styles from './Switch.module.css'

interface Props {
	checked: boolean
	disabled?: boolean
	id?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Switch: React.FC<Props> = ({ checked = false, disabled = false, id, onChange }) => {
	return (<>
		<label className={styles.switch}>
			<input className={styles.input} type='checkbox' checked={checked} disabled={disabled} id={id} onChange={onChange} />
			<span className={`${styles.slider} ${disabled ? styles.disabled : ''}`}></span>
		</label>
			</>
	)
}

export default Switch
