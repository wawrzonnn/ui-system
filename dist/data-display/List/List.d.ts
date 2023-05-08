import React, { PropsWithChildren } from "react";
interface ListProps {
  children: React.ReactNode;
}
export declare const List: ({
  children,
}: PropsWithChildren<ListProps>) => JSX.Element;
export declare const ListItem: ({
  children,
}: PropsWithChildren<ListProps>) => JSX.Element;
export {};
