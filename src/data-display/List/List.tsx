import React, { PropsWithChildren } from "react";
import styles from "./List.module.css";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const List: React.FC<PropsWithChildren<ListProps>> = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

const ListItem: React.FC<ListProps> = ({ children }) => {
  return <li className={styles.listItem}>{children}</li>;
};

export { List, ListItem };
