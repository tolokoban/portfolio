import React from "react"
import { Theme } from "../../theme"
import Classes from "./Dialog.module.css"
import { ViewButton, ViewButtonProps } from "../Button"

const $ = Theme.classNames

type CustomButtonProps = Partial<ViewButtonProps>

export interface ViewDialogProps {
    className?: string
    title?: string
    buttonCancel?: CustomButtonProps
    buttonValidate?: CustomButtonProps
    children: React.ReactNode
}

export function ViewDialog({
    className,
    buttonCancel,
    buttonValidate,
    title,
    children,
}: ViewDialogProps) {
    const cancelProps: ViewButtonProps | null =
        buttonCancel && buttonCancel.onClick
            ? ({
                  children: "Cancel",
                  ...buttonCancel,
              } as ViewButtonProps)
            : null
    const validateProps: ViewButtonProps | null =
        buttonValidate && buttonValidate.onClick
            ? ({
                  children: "OK",
                  ...buttonValidate,
              } as ViewButtonProps)
            : null
    return (
        <div className={$.join(className, Classes.Dialog)}>
            {title && <header>{title}</header>}
            <main>{children}</main>
            {(cancelProps || validateProps) && (
                <footer>
                    {cancelProps && <ViewButton {...cancelProps} />}
                    {validateProps && <ViewButton {...validateProps} />}
                </footer>
            )}
        </div>
    )
}
