import { useLangValue } from "@/hooks/lang"
import Style from "./GooglePlayLink.module.css"
import React from "react"

export interface GooglePlayLinkProps {
    className?: string
    id: string
}

export default function GooglePlayLink({ className, id }: GooglePlayLinkProps) {
    const [loaded, setLoaded] = React.useState(false)
    const lang = useLangValue()
    const url = `https://play.google.com/store/apps/details?id=${id}&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`
    const src = `https://play.google.com/intl/en_us/badges/static/images/badges/${lang}_badge_web_generic.png`
    const alt = getAlt(lang)
    return (
        <a href={url} className={join(className, Style.GooglePlayLink)}>
            <div>
                <img
                    alt={alt}
                    src={src}
                    style={{ opacity: loaded ? 1 : 0 }}
                    onLoad={() => setLoaded(true)}
                />
            </div>
        </a>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function getAlt(lang: string) {
    switch (lang) {
        case "fr":
            return "Disponible sur Google Play"
        case "it":
            return "Disponibile su Google Play"
        default:
            return "Get it on Google Play"
    }
}
