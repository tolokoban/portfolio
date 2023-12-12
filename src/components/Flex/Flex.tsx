import Style from "./Flex.module.css"

export interface FlexProps {
    className?: string
    children: React.ReactNode
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
    alignItems?: "stretch" | "center" | "flex-start" | "flex-end"
}

export default function Flex({
    className,
    children,
    alignItems,
    flexDirection,
}: FlexProps) {
    return (
        <div
            className={join(className, Style.Flex)}
            style={{
                alignItems,
                flexDirection,
            }}
        >
            {children}
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
