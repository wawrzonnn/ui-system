import React, { useState, PropsWithChildren } from "react";
import styles from "./TextField.module.css";
import { Delete } from "../../assets/Icons/Delete";
import { Error } from "../../assets/Icons/Error";
import { Search } from "../../assets/Icons/Search";
import classNames from "classnames";
const cx = classNames.bind(styles);

interface TextFieldProps {
  autoFocus?: boolean;
  disabled?: boolean;
  value: string;
  name: string;
  placeholder: string;
  error?: string;
  hint?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  type?: string;
  icon?: boolean;
}

export const TextField = ({
  autoFocus = false,
  disabled = false,
  label,
  value,
  name,
  placeholder,
  error,
  hint,
  onChange,
  id,
  type = "text",
  icon = false,
}: PropsWithChildren<TextFieldProps>) => {
  const [focused, setFocused] = useState(false);

  const labelClasses = cx({
    labelDefault: true,
    [styles.labelActive]: value || placeholder || focused,
    [styles.labelInactive]: !value && !placeholder && !focused,
    [styles.labelFocused]: focused,
    [styles.labelError]: error,
    [styles.labelDisabled]: disabled,
  });
  const inputClasses = cx({
    [styles.inputFocused]: focused,
    [styles.inputError]: error,
    [styles.inputDisabled]: disabled,
    [styles.inputDefault]: !error || !focused,
  });
  const wrapperClasses = cx({
    [styles.inputWrapper]: true,
    [styles.inputWrapperIcon]: icon,
  })
  const deleteIconClasses = cx({
    [styles.deleteIcon]: true,
    [styles.positionIcon]: icon,
  });
  const errorIconClasses = cx({
    [styles.errorIcon]: true,
    [styles.positionIcon]: icon,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event);
    }
  };

  return (
    <div className={wrapperClasses}>
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputClasses}
        autoFocus={autoFocus}
        disabled={disabled}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        id={id}
        type={type}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {icon && (
        <span className={styles.searchIcon}>
          <Search />
        </span>
      )}
      {(focused && !error && (
        <span className={deleteIconClasses}>
          <Delete />
        </span>
      )) ||
        (error && !disabled && !focused && (
          <span className={errorIconClasses}>
            <Error />
          </span>
        ))}
      {hint && !error && !disabled ? (
        <span className={styles.hintMessage}>{hint}</span>
      ) : error && !disabled ? (
        <span className={styles.errorMessage}>{error}</span>
      ) : (
        ""
      )}
    </div>
  );
};
