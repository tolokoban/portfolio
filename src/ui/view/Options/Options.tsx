import { useChangeableValue } from "../../hooks/changeable-value"
import { ViewWithValue } from "../../types"
import { ViewLabel } from "../Label"
import { ViewTouchable } from "../Touchable"
import Styles from "./Options.module.css"

export type ViewOptionsProps<T extends string | number> = ViewWithValue<T> & {
    className?: string
    label?: string
    wide?: boolean
    children: Array<React.ReactElement<ViewOptionsItemProps<T>>>
}

export type ViewOptionsItemProps<T extends string | number> = {
    key: T
    children: React.ReactNode
}

export function ViewOptions<T extends string>(props: ViewOptionsProps<T>) {
    const { label, children } = props
    const [value, setValue] = useChangeableValue(props)
    return (
        <div className={getClassNames(props)}>
            <ViewLabel value={label}>
                <div className="options theme-shadow-button">
                    {children.map((child) => {
                        const key = child.key
                        return key === value ? (
                            <div
                                className="button selected theme-color-accent-light"
                                key={key}
                            >
                                {child}
                            </div>
                        ) : (
                            <ViewTouchable
                                className="button not-selected theme-color-primary"
                                key={key}
                                onClick={() => setValue(key as T)}
                            >
                                {child}
                            </ViewTouchable>
                        )
                    })}
                </div>
            </ViewLabel>
        </div>
    )
}

function getClassNames<T extends string>(props: ViewOptionsProps<T>): string {
    const classNames = [Styles.Options]
    if (typeof props.className === "string") classNames.push(props.className)
    if (props.wide === true) classNames.push(Styles.OptionsWide)

    return classNames.join(" ")
}
