import * as React from "react";
import { PropsWithChildren, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Switch.module.css";

const cx = classNames.bind(styles);

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange(checked: boolean): void;
  id: string;
}

export const Switch = ({
  disabled = false,
  id = "id",
  ...props
}: PropsWithChildren<SwitchProps>) => {
  const [checked, setChecked] = useState(false);

  const labelClassName = cx({
    [styles.label]: true,
    [styles.labelDisabled]: disabled,
  });

  const sliderClassName = cx({
    [styles.slider]: true,
    [styles.sliderDisabled]: disabled,
  });

  return (
    <label className={labelClassName}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => {
          if (disabled) return;
          setChecked(!checked);
          props.onChange(!checked);
        }}
        id={id}
      />
      <span className={sliderClassName} />
    </label>
  );
};
