import React from "react"
import Style from "./Index.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface IndexProps {
    className?: string
}

export default function Index({ className }: IndexProps) {
    const page = usePage()
    return <Article className={join(className, Style.Index)}>{page}</Article>
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function usePage(): JSX.Element | null {
    const lang = useLangValue()
    const [page, setPage] = React.useState<null | JSX.Element>(null)
    React.useEffect(() => {
        switch (lang) {
            default:
                import("./Index.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
