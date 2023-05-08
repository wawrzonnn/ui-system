import { PropsWithChildren } from "react";
interface TableCellProps extends PropsWithChildren<object> {
    align: "left" | "center" | "right";
}
type TableProps = PropsWithChildren<object>;
type TableHeadProps = PropsWithChildren<object>;
type TableRowProps = PropsWithChildren<object>;
type TableBodyProps = PropsWithChildren<object>;
export declare const Table: ({ children }: TableProps) => JSX.Element;
export declare const TableHead: ({ children }: TableHeadProps) => JSX.Element;
export declare const TableRow: ({ children }: TableRowProps) => JSX.Element;
export declare const TableBody: ({ children }: TableBodyProps) => JSX.Element;
export declare const TableCell: ({ align, children }: TableCellProps) => JSX.Element;
export {};
