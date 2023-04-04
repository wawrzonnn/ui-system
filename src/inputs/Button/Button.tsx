import React from "react";
import styles from "./Button.module.css";
import { Spinner } from "../../assets/Icons/Spinner";

interface ButtonProps {
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: React.ReactElement;
  isLoading?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
  variant = "primary",
  children,
}) => {
  const globalButtonClass = styles.buttons;
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;
  const disabledClass = disabled
    ? variant === "primary"
      ? styles.disabledPrimary
      : styles.disabledSecondary
    : "";
  const loadingClass = isLoading
    ? variant === "primary"
      ? styles.loadingPrimary
      : styles.loadingSecondary
    : "";

  const allClasses = [
    globalButtonClass,
    variantClass,
    disabledClass,
    loadingClass,
  ].join(" ");
  return (
    <button
      className={allClasses}
      type={type}
      disabled={disabled}
      onClick={!disabled && !isLoading ? onClick : undefined}
    >
      {isLoading && <Spinner data-testid="spinner" className={""} />}
      {children}
    </button>
  );
};

export default Button;
