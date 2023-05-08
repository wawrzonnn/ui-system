import React, { PropsWithChildren } from "react";
interface ButtonProps {
    type?: "button" | "submit";
    disabled?: boolean;
    isLoading?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant: "primary" | "secondary";
    children: React.ReactNode;
}
export declare const Button: ({ type, disabled, isLoading, variant, children, onClick, }: PropsWithChildren<ButtonProps>) => JSX.Element;
export {};
