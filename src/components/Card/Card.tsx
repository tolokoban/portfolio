import Style from "./Card.module.css"

export interface CardProps {
    className?: string
    image: string
    children: React.ReactNode
}

export default function Card({ className, image, children }: CardProps) {
    return (
        <div className={join(className, Style.Card)}>
            <img className={Style.image} src={image} />
            <div>{children}</div>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
