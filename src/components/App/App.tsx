import Style from "./App.module.css"
import Minervois from "@/showcases/Minervois/Minervois"

export interface AppProps {
    className?: string
}

export default function App({ className }: AppProps) {
    return (
        <div className={join(className, Style.App)}>
            <p>Tolokoban's Portfolio</p>
            <Minervois />
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
