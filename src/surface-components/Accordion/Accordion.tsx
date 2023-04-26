import React, { PropsWithChildren, useState } from "react";
import styles from "./Accordion.module.css";
import { Arrow } from "../../assets/Icons/Arrow";

interface AccordionProps {
  header: string;
  defaultOpen: boolean;
  children: React.ReactNode | string;
}

export const Accordion = ({
  header,
  defaultOpen = false,
  children,
}: PropsWithChildren<AccordionProps>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleSwitch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionDefault}>
      <div className={styles.accordionHeader} onClick={handleSwitch}>
        <span>{header}</span>
        <span>
          <Arrow />
        </span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};
