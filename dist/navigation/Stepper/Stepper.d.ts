import React, { PropsWithChildren } from "react";
interface StepperContextProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}
interface StepProps {
    label: string;
    completed: boolean;
    disabled: boolean;
    index: number;
}
export declare const StepContext: React.Context<StepperContextProps>;
export declare const Stepper: ({ activeStep, children, }: PropsWithChildren<StepperContextProps>) => JSX.Element;
export declare const Step: ({ children, index }: PropsWithChildren<StepProps>) => JSX.Element;
export {};
