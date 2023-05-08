import React from "react";
import { PropsWithChildren } from "react";
interface LinkProps {
  to: string;
  id?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export declare const Link: ({
  to,
  id,
  target,
  disabled,
  onClick,
  children,
}: PropsWithChildren<LinkProps>) => JSX.Element;
export {};
