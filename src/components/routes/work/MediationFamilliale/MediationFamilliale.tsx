import React from "react"
import Style from "./MediationFamilliale.module.css"
import Article from "@/components/Article"
import { useLang, useLangValue } from "@/hooks/lang"

export interface MediationFamillialeProps {
    className?: string
}

export default function MediationFamilliale({
    className,
}: MediationFamillialeProps) {
    const page = usePage()
    return (
        <Article className={join(className, Style.MediationFamilliale)}>
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
                import("./MediationFamilliale.fr.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
            default:
                import("./MediationFamilliale.en.mdx").then((module) => {
                    const element = module.default({})
                    setPage(element)
                })
                break
        }
    }, [lang])
    return page
}
