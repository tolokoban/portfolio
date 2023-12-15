import { useLang } from "@/hooks/lang"
import Style from "./Article.module.css"

export interface ArticleProps {
    className?: string
    children: React.ReactNode
}

export default function Article({ className, children }: ArticleProps) {
    const [lang, setLang] = useLang()
    return (
        <div className={join(className, Style.Article)}>
            <div className={Style.Grid}>{children}</div>
            <footer></footer>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
