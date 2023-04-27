import React from "react"
import { Theme } from "../../theme"
import Style from "./InputText.module.css"
import { SpaceStyleProps, styleSpace } from "../../theme/styles/space"
import { ViewLabel } from "../Label"
import { ViewWithValue } from "../../types"
import { DimensionStyleProps } from "../../theme/styles/dimension"
import { CommonProps } from "../../theme/styles/common"

const $ = Theme.classNames

export type ViewInputTextProps = ViewWithValue<string> &
    SpaceStyleProps &
    DimensionStyleProps &
    CommonProps & {
        /** Text to display when the input is empty. */
        placeholder?: string
        /** If defined,  label will be added to the input. */
        label?: string
        /**
         * Input type. Default to `"text"`.
         */
        type?:
            | "button"
            | "checkbox"
            | "color"
            | "date"
            | "datetime-local"
            | "email"
            | "file"
            | "image"
            | "hidden"
            | "month"
            | "number"
            | "password"
            | "radio"
            | "range"
            | "reset"
            | "search"
            | "submit"
            | "tel"
            | "text"
            | "time"
            | "url"
            | "week"
        /** If `true`, the focus will be set here once displayed. */
        autofocus?: boolean
        /**
         * A regular expression or a function to assert the validity of the current text.
         */
        validator?: RegExp | ((value: string) => boolean)
        /**
         * Event dispatched when the user pressed Enter.
         */
        onEnterKeyPressed?(value: string): void
    }

export function ViewInputText(props: ViewInputTextProps) {
    const {
        className,
        placeholder,
        value,
        label,
        autofocus = false,
        onChange,
        onEnterKeyPressed,
        type = "text",
        maxWidth,
        validator,
    } = props
    const [invalid, setInvalid] = React.useState(false)
    const [text, setText] = React.useState(value)
    const handleKeydown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
        if (invalid) return

        if (evt.key === "Enter") {
            onEnterKeyPressed?.(text)
        }
    }
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value
        setInvalid(false)
        if (validator) {
            if (validator instanceof RegExp) {
                validator.lastIndex = -1
                if (!validator.test(value)) {
                    setInvalid(true)
                    return
                }
            } else if (typeof validator === "function") {
                setInvalid(!validator(value))
            }
        }
        setText(value)
    }
    React.useEffect(() => {
        onChange?.(text)
    }, [text])
    const style: React.CSSProperties = {
        ...styleSpace(props),
    }
    if (maxWidth) style.maxWidth = maxWidth
    const input = (
        <input
            className={$.join(
                className,
                Style.InputText,
                invalid && Style.invalid
            )}
            style={style}
            autoFocus={autofocus}
            placeholder={placeholder}
            type={type}
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeydown}
        />
    )
    return label ? <ViewLabel value={label}>{input}</ViewLabel> : input
}
