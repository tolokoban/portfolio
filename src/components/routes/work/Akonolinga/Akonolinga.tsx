import React from "react"
import Style from "./Akonolinga.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface AkonolingaProps {
    className?: string
}

export default function Akonolinga({ className }: AkonolingaProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.Akonolinga)}>{page}</Article>
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
                import("./Akonolinga.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./Akonolinga.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
