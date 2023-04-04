import React, { useState } from "react";
import styles from "./Switch.module.css";

interface Props {
  label: string;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  id: string;
}

const Switch: React.FC<Props> = ({ label, disabled = false, onChange, id }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (disabled) return;
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className={styles.switch}>
      {label}
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        id={id}
      />
      <span className={`${styles.slider} ${disabled ? styles.disabled : ""}`} />
    </label>
  );
};

export default Switch;
