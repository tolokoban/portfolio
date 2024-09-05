import LanguageSelector from "@/components/LanguageSelector"

import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={Style.main}>
            <main>{children}</main>
            <header>
                <div>
                    <a href="#/">Back</a>
                </div>
                <LanguageSelector />
            </header>
        </div>
    )
}
