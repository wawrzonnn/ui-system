import { PropsWithChildren } from "react";
interface AvatarProps {
    src: string;
    alt: string;
    size?: "big" | "medium" | "small";
}
export declare const Avatar: ({ size, src, alt, }: PropsWithChildren<AvatarProps>) => JSX.Element;
export {};
