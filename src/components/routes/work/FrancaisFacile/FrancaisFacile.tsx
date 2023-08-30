import React from "react"
import Style from "./FrancaisFacile.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface FrancaisFacileProps {
    className?: string
}

export default function FrancaisFacile({ className }: FrancaisFacileProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.FrancaisFacile)}>
            {page}
        </Article>
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
                import("./FrancaisFacile.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./FrancaisFacile.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
