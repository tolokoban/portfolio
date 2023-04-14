import Style from "./Flex.module.css"

export interface FlexProps {
    className?: string
    children: React.ReactNode
}

export default function Flex({ className, children }: FlexProps) {
    return <div className={join(className, Style.Flex)}>{children}</div>
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
