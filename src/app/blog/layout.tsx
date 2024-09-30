import LanguageSelector from "@/components/LanguageSelector"
import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={Style.main}>
            {children}
            <header>
                <div>
                    <a href="#/work">Work</a>
                    <a href="#/blog">Blog</a>
                    <a href="#/contact">Contact</a>
                </div>
                <LanguageSelector />
            </header>
        </div>
    )
}
