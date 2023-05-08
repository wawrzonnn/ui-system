import { PropsWithChildren } from "react";
export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(checked: boolean): void;
  id: string;
}
export declare const Switch: ({
  disabled,
  id,
  ...props
}: PropsWithChildren<SwitchProps>) => JSX.Element;
