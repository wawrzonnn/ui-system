import React, { PropsWithChildren } from "react";
import styles from "./List.module.css";

interface ListProps {
  children: React.ReactNode;
}

export const List = ({ children, }: PropsWithChildren<ListProps>) => {
  return <ul className={styles.list}>{children}</ul>;
};

export const ListItem = ({ children, }: PropsWithChildren<ListProps>) => {
  return <li className={styles.listItem}>{children}</li>;
};

