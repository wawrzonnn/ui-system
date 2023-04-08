import React, { PropsWithChildren } from "react";
import styles from "./Avatar.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

interface AvatarProps {
  src: string;
  alt: string;
  size?: "big" | "medium" | "small";
}

export const Avatar = ({
  size = "big",
  src,
  alt,
}: PropsWithChildren<AvatarProps>) => {
  const avatarClasses = cx({
    avatar: true,
    [size]: true,
    avatarContainer: !src,
    avatarPlaceholder: !src,
  });

  return src ? (
    <img className={avatarClasses} src={src} alt={alt} />
  ) : (
    <div className={avatarClasses}>
      <span>A</span>
    </div>
  );
};
