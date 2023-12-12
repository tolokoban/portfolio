import React from "react"
import Style from "./ApiHrGraph.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface ApiHrGraphProps {
    className?: string
}

export default function ApiHrGraph({ className }: ApiHrGraphProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.ApiHrGraph)}>{page}</Article>
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
                import("./ApiHrGraph.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./ApiHrGraph.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
