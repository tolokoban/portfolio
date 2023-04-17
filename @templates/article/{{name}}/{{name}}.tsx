import React from "react"
import Style from "./{{name}}.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface {{name}}Props {
    className?: string
}

export default function {{name}}({ className }: {{name}}Props) {
    const page = usePage()
    return (
        <Article className={join(className, Style.{{name}})}>{page}</Article>
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
                import("./{{name}}.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            case "it":
                import("./{{name}}.it.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./{{name}}.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
