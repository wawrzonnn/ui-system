import React, { useState } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled = false,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (disabled) return;
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  return (
    <div className={styles.checkbox}>
      <label htmlFor={`checkbox-${label}`}>
        <input
          type="checkbox"
          id={`checkbox-${label}`}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
