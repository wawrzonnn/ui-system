/* eslint-disable @typescript-eslint/ban-types */
import { PropsWithChildren } from "react";
import styles from "./Table.module.css";
import React from "react";

interface TableCellProps extends PropsWithChildren<object> {
  align: "left" | "center" | "right";
}

type TableProps = PropsWithChildren<object>;

type TableHeadProps = PropsWithChildren<object>;

type TableRowProps = PropsWithChildren<object>;

type TableBodyProps = PropsWithChildren<object>;

export const Table = ({ children }: TableProps) => {
  return <table className={styles.table}>{children}</table>;
};

export const TableHead = ({ children }: TableHeadProps) => {
  return <thead className={styles.tableHead}>{children}</thead>;
};

export const TableRow = ({ children }: TableRowProps) => {
  return <tr className={styles.tableRow}>{children}</tr>;
};

export const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

export const TableCell = ({ align, children }: TableCellProps) => {
  return (
    <div className={styles.tableCell}>
      <td style={{ textAlign: align }}>{children}</td>
    </div>
  );
};
