import { PropsWithChildren } from "react";
interface CardProps {
  fullWidth?: boolean;
}
export declare const Card: ({
  fullWidth,
  children,
}: PropsWithChildren<CardProps>) => JSX.Element;
interface CardImageProps {
  url: string;
  alt: string;
}
export declare const CardImage: ({
  url,
  alt,
}: PropsWithChildren<CardImageProps>) => JSX.Element;
export declare const CardContent: ({
  children,
}: PropsWithChildren) => JSX.Element;
export {};
