import React from "react"
import { Theme } from "../../theme"
import Style from "./Touchable.module.css"

const $ = Theme.classNames

export interface ViewTouchableProps<T> {
    className?: string
    children: React.ReactNode
    title?: string
    tag?: T
    onClick?(tag: T | undefined): void
}

export function ViewTouchable<T>({
    className,
    children,
    tag,
    title,
    onClick,
}: ViewTouchableProps<T>) {
    if (!onClick) return <>{children}</>

    return (
        <div
            className={$.join(className, Style.Touchable)}
            title={title}
            onClick={() => onClick(tag)}
        >
            {children}
        </div>
    )
}
