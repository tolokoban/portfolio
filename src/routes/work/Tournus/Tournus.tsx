import React from "react"
import Style from "./Tournus.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface TournusProps {
    className?: string
}

export default function Tournus({ className }: TournusProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.Tournus)}>{page}</Article>
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
                import("./Tournus.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./Tournus.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
