import React, { PropsWithChildren } from "react";
interface TextFieldProps {
    autoFocus?: boolean;
    disabled?: boolean;
    value: string;
    name: string;
    placeholder: string;
    error?: string;
    hint?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    id: string;
    type?: string;
    icon?: React.ReactNode;
}
export declare const TextField: ({ autoFocus, disabled, label, value, name, placeholder, error, hint, onChange, id, type, icon, }: PropsWithChildren<TextFieldProps>) => JSX.Element;
export {};
