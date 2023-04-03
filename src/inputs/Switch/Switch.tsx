import React from 'react'
import  './Switch.module.css'
import styles from './Switch.module.css'

interface Props {
label: string;
checked?: boolean;
disabled?: boolean;
onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}

const Switch: React.FC<Props> = ({ label, checked = false, disabled = false, onChange }) => {
return (
<label className={styles.switch}>
{label}
<input
     className={styles.input}
     type="checkbox"
     checked={checked}
     disabled={disabled}
     onChange={!disabled ? onChange : undefined}
   />
<span className={`${styles.slider} ${disabled ? styles.disabled : ''}`} />
</label>
);
};

export default Switch;