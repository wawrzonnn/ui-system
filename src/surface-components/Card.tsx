import React, { PropsWithChildren } from "react";
import styles from "./Card.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface CardProps {
  fullWidth?: boolean;
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
  fullWidth?: boolean;
}

export const CardImage = ({ url, alt, fullWidth }: CardImageProps) => {
  const cardImageClasses = cx({
    fullWidth: fullWidth,
    parentWidth: !fullWidth,
  });
  return (
    <div>
      {" "}
      <img src={url} alt={alt} />
    </div>
  );
};

interface CardContentProps {
  fullWidth?: boolean;
}

export const CardContent = ({
  children,
  fullWidth,
}: PropsWithChildren<CardContentProps>) => {
  const cardContentClasses = cx({
    fullWidth: fullWidth,
    parentWidth: !fullWidth,
  });

  return <div>{children}</div>;
};
