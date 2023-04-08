import React, { PropsWithChildren } from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface CardProps {
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Card = ({ fullWidth, children }: PropsWithChildren<CardProps>) => {
  const CardClasses = cx({
    fullWidth: fullWidth,
    parentWidth: !fullWidth,
  });

  return <div className={CardClasses}>{children}</div>;
};

interface CardImageProps {
  url: string;
  alt: string;
}

export const CardImage = ({ url, alt }: CardImageProps) => {
  return <img src={url} alt={alt} />;
};

interface CardContentProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const CardContent = ({ children, fullWidth }: CardContentProps) => {
  const cardContentClasses = cx({
    fullWidth: fullWidth,
    parentWidth: !fullWidth,
  });

  return <div>{children}</div>;
};
