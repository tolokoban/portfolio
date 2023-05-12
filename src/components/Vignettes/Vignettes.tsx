import Style from "./Vignettes.module.css"
import Image from "@/components/Image"

export interface VignettesProps {
    className?: string
    prefix?: string
    images: string[]
}

export default function Vignettes({
    className,
    prefix = "",
    images,
}: VignettesProps) {
    return (
        <div className={join(className, Style.Vignettes)}>
            {images.map((name) => (
                <Image
                    key={name}
                    alt={name}
                    name={`${prefix}${name}`}
                    size={[320, 240]}
                />
            ))}
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
