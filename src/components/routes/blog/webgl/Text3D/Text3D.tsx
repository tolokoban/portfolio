import React from "react"
import Style from "./Text3D.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface Text3DProps {
    className?: string
}

export default function Text3D({ className }: Text3DProps) {
    const page = usePage()
    return <Article className={join(className, Style.Text3D)}>{page}</Article>
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function usePage(): JSX.Element | null {
    const lang = useLangValue()
    const [page, setPage] = React.useState<null | JSX.Element>(null)
    React.useEffect(() => {
        switch (lang) {
            case "fr":
                import("./Text3D.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            case "it":
                import("./Text3D.it.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./Text3D.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
