/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  useState,
  createContext,
  PropsWithChildren,
  useContext,
} from "react";
import styles from "./Stepper.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

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

export const StepContext = createContext<StepperContextProps>({
  activeStep: 0,
  setActiveStep: () => {},
});

export const Stepper = ({
  activeStep,
  children,
}: PropsWithChildren<StepperContextProps>) => {
  const [activeStepState, setActiveStepState] = useState(activeStep);

  return (
    <StepContext.Provider
      value={{ activeStep: activeStepState, setActiveStep: setActiveStepState }}
    >
      <div className={styles.stepperWrapper}>{children}</div>
    </StepContext.Provider>
  );
};

export const Step = ({ children, index }: PropsWithChildren<StepProps>) => {
  const { activeStep } = useContext(StepContext);

  const stepperClasses = cx({
    stepDefault: true,
    stepCompleted: activeStep > index,
    stepDisabled: activeStep < index,
    stepActive: activeStep === index,
  });
  return <div className={stepperClasses}>{children}</div>;
};
