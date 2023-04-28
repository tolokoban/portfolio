import Style from "./Welcome.module.css"

export interface WelcomeProps {
    className?: string
}

export default function Welcome({ className }: WelcomeProps) {
    return (
        <div className={join(className, Style.Welcome)}>
            <ul>
                <li>
                    <a href="#/Minervois">Minervois</a>
                </li>
                <li>
                    <a href="#/Akonolinga">Akonolinga</a>
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <a href="#/article/webgl/Blending">WebGL Blending</a>
                </li>
            </ul>
            <img className={Style.trombine} src="images/trombine.mini.webp" />
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
