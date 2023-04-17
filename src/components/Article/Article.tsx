import { useLang } from "../../hooks/lang"
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
            <header>
                <button onClick={() => (document.location.hash = "#")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>home</title>
                        <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                    </svg>
                </button>
                <div>Tolokoban</div>
                {lang !== "en" && (
                    <button onClick={() => setLang("en")}>English</button>
                )}
                {lang !== "fr" && (
                    <button onClick={() => setLang("fr")}>Français</button>
                )}
                {/* {lang !== "it" && (
                    <button onClick={() => setLang("it")}>Italiano</button>
                )} */}
            </header>
            <footer></footer>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
