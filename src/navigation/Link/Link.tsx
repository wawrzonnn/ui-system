import React from "react";
import { PropsWithChildren } from "react";
import styles from "./Link.module.css";
import { Settings } from "../../assets/Icons/Settings";
import classNames from "classnames";
const cx = classNames.bind(styles);

interface LinkProps {
  to: string;
  id?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export const Link = ({
  to = "www.google.pl",
  id = "google",
  target = "_blank",
  disabled = false,
  onClick,
  children,
}: PropsWithChildren<LinkProps>) => {
  const linkClasses = cx({
    [styles.default]: true,
    [styles.enabled]: !disabled,
    [styles.disabled]: disabled,
  });

  return (
    <a
      className={linkClasses}
      href={to}
      id={id}
      target={target}
      onClick={onClick}
    >
      <span className={styles.iconSettings}>
        <Settings />
      </span>
      {children}
    </a>
  );
};
