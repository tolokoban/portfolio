import SceneCanvas from "../SceneCanvas/SceneCanvas"
import Style from "./Welcome.module.css"
import { init } from "./init"

export interface WelcomeProps {
    className?: string
}

export default function Welcome({ className }: WelcomeProps) {
    const diskColor = "#204657"
    const accentColor = "#d6ec64"
    const arc = 700
    const arc2 = 600
    return (
        <div className={join(className, Style.Welcome)}>
            <header>Tolokoban</header>
            <main>
                <SceneCanvas
                    autoPlay={true}
                    init={init}
                    context={{
                        alpha: true,
                        antialias: true,
                        depth: true,
                        premultipliedAlpha: false,
                    }}
                />
            </main>
            <img
                className={Style.trombine}
                src="images/trombine/trombine.webp"
            />
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
