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
    const radius = 0
    const angle = 10
    return (
        <div className={join(className, Style.Vignettes)}>
            {images.map((name, index) => (
                <a
                    href={`#/${prefix}/${name}`}
                    key={name}
                    style={{
                        width: "320px",
                        height: "240px",
                        transform: `translate(${
                            radius * Math.cos(Math.random() * index * 2.451)
                        }%,${
                            radius * Math.cos(Math.random() * index * 3.704)
                        }%) rotate(${
                            angle * Math.cos(Math.random() * index * 7.458)
                        }deg)`,
                    }}
                >
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
