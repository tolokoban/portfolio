import React from "react"
import Style from "./AppleStoreLink.module.css"

export interface AppleStoreLinkProps {
    className?: string
    id: string
}

export default function AppleStoreLink({ className, id }: AppleStoreLinkProps) {
    const [loaded, setLoaded] = React.useState(false)
    const url = `https://apps.apple.com/us/app/${id}?itsct=apps_box_badge&amp;itscg=30200`
    return (
        <a className={join(className, Style.AppleStoreLink)} href={url}>
            <div>
                <img
                    style={{ opacity: loaded ? 1 : 0 }}
                    onLoad={() => setLoaded(true)}
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1621468800"
                    alt="Download on the App Store"
                />
            </div>
        </a>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
