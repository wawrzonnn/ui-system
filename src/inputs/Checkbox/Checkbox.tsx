import React from 'react'
import { h } from 'preact'
import styles from './Checkbox.module.css'


interface CheckboxProps {
    id: string;
    name: string;
    value: string;
    label: string;
    checked: boolean;
    disabled: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const Checkbox: React.FC<CheckboxProps> = ({
    id,
    name,
    value,
    label,
    checked,
    disabled,
    onChange,
  }) => {


    return (
     
      <input 
        type="checkbox"
        className={styles.checkbox}
        id={id}
        name={name}
        value={value}
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      ></input>
    );
  };
  
  export default Checkbox;