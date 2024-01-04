import Style from "./Vignettes.module.css"
import Image from "@/components/Image"

export interface VignettesProps {
    className?: string
    prefix?: string
    images: string[]
}

/**
 * The images for the vignettes should lie in `${prefix}/_/${name}`
 * and they link to `#/${prefix}/${name}`.
 */
export default function Vignettes({
    className,
    prefix = "",
    images,
}: VignettesProps) {
    return (
        <div className={join(className, Style.Vignettes)}>
            {images.map((name) => (
                <a href={`#/${prefix}/${name}`} key={name}>
                    <Image
                        alt={name}
                        name={`${prefix}/@/${name}`}
                        size={[320, 240]}
                    />
                </a>
            ))}
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
