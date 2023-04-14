import Style from "./AppleStoreLink.module.css"

export interface AppleStoreLinkProps {
    className?: string
    id: string
}

export default function AppleStoreLink({ className, id }: AppleStoreLinkProps) {
    const url = `"https://apps.apple.com/us/app/circuits-minervois-caroux/id1557437521?itsct=apps_box_badge&amp;itscg=30200"`
    return (
        <a className={join(className, Style.AppleStoreLink)} href={url}>
            <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1621468800"
                alt="Download on the App Store"
            />
        </a>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
