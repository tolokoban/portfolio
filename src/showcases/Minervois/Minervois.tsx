import React from "react"
import Style from "./Minervois.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface MinervoisProps {
    className?: string
}

export default function Minervois({ className }: MinervoisProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.Minervois)}>{page}</Article>
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
                import("./Minervois.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            case "it":
                import("./Minervois.it.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./Minervois.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
