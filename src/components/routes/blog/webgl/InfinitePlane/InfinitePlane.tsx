import Article from "@/components/Article"
import { useLangValue } from "@/hooks/lang"
import React from "react"
import Style from "./InfinitePlane.module.css"

export interface InfinitePlaneProps {
    className?: string
}

export default function InfinitePlan({ className }: InfinitePlaneProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.InfinitePlan)}>
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
                import("./InfinitePlane.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            case "it":
                import("./InfinitePlane.it.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./InfinitePlane.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
