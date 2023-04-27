import React from "react"
import Style from "./Blending.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface BlendingProps {
    className?: string
}

export default function Blending({ className }: BlendingProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.Blending)}>{page}</Article>
    )
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
                import("./Blending.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            case "it":
                import("./Blending.it.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./Blending.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
