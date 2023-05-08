import React, { PropsWithChildren } from "react";
interface AccordionProps {
  header: string;
  defaultOpen: boolean;
  children: React.ReactNode | string;
}
export declare const Accordion: ({
  header,
  defaultOpen,
  children,
}: PropsWithChildren<AccordionProps>) => JSX.Element;
export {};
