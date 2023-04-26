/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState, createContext, PropsWithChildren, useContext } from 'react'
import styles from './Tabs.module.css'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface TabsProps {
	defaultOpenedId?: string
}

interface TabContextValue {
	activeTabId: string
	setActiveTabId: React.Dispatch<React.SetStateAction<string>>
}

export const TabContext = createContext<TabContextValue>({
	activeTabId: '',
	setActiveTabId: () => {},
})

export const Tabs = ({ defaultOpenedId, children }: PropsWithChildren<TabsProps>) => {
	const [activeTabId, setActiveTabId] = useState<string>(defaultOpenedId || '')

	return (
		<TabContext.Provider value={{ activeTabId, setActiveTabId }}>
			<div>{children}</div>
		</TabContext.Provider>
	)
}

interface TabProps {
	id: string
}

export const Tab = ({ id, children }: PropsWithChildren<TabProps>) => {
	const { activeTabId, setActiveTabId } = useContext(TabContext)
	const isActive = activeTabId === id

	const handleTabClick = () => {
		setActiveTabId(id)
	}

	const tabClasses = cx({
		tab: true,
		active: isActive,
	})

	return (
		<div className={tabClasses} onClick={handleTabClick}>
			{children}
		</div>
	)
}

interface TabContentProps {
	id: string
}

export const TabContent = ({ id, children }: PropsWithChildren<TabContentProps>) => {
	const { activeTabId } = useContext(TabContext)

	return activeTabId === id ? <div className={styles.tabContent}>{children}</div> : null
}
