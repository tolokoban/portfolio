import Style from "./Welcome.module.css"

export interface WelcomeProps {
    className?: string
}

export default function Welcome({ className }: WelcomeProps) {
    return (
        <div className={join(className, Style.Welcome)}>
            <header>Tolokoban</header>
            <img
                className={Style.trombine}
                src="images/trombine/trombine.webp"
            />
            <nav>
                <ul>
                    <li>
                        <a href="#/work">Work</a>
                    </li>
                    <li>
                        <a href="#/blog">Blog</a>
                    </li>
                    <li>
                        <a href="#/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
