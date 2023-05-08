import React, { PropsWithChildren } from "react";
interface TabsProps {
    defaultOpenedId?: string;
}
interface TabContextValue {
    activeTabId: string;
    setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
}
export declare const TabContext: React.Context<TabContextValue>;
export declare const Tabs: ({ defaultOpenedId, children, }: PropsWithChildren<TabsProps>) => JSX.Element;
interface TabProps {
    id: string;
}
export declare const Tab: ({ id, children }: PropsWithChildren<TabProps>) => JSX.Element;
interface TabContentProps {
    id: string;
}
export declare const TabContent: ({ id, children, }: PropsWithChildren<TabContentProps>) => JSX.Element | null;
export {};
