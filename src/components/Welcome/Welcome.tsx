import Style from "./Welcome.module.css"

export interface WelcomeProps {
    className?: string
}

export default function Welcome({ className }: WelcomeProps) {
    const diskColor = "#204657"
    return (
        <div className={join(className, Style.Welcome)}>
            <header>Tolokoban</header>
            <main>
                <svg
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1100 -1100 2200 2200"
                >
                    <defs>
                        <linearGradient
                            id="grad"
                            gradientTransform="rotate(-30)"
                        >
                            <stop offset="0%" stop-color={diskColor} />
                            <stop offset="25%" stop-color={diskColor} />
                            <stop offset="100%" stop-color="#f90" />
                        </linearGradient>
                    </defs>

                    <g fill="#0003" stroke="none" stroke-width="3">
                        <path
                            d="M0,0 Q-500,-500,0,-1000 A1000,1000 0,0,0 -866,-500"
                            transform="rotate(0) translate(-43.3,25)"
                            fill="url(#grad)"
                        />
                        <path
                            d="M0,0 Q-500,-500,0,-1000 A1000,1000 0,0,0 -866,-500"
                            transform="rotate(120) translate(-43.3,25)"
                            fill="url(#grad)"
                        />
                        <path
                            d="M0,0 Q-500,-500,0,-1000 A1000,1000 0,0,0 -866,-500"
                            transform="rotate(240) translate(-43.3,25)"
                            fill="url(#grad)"
                        />

                        <path
                            d="M-866,-500 A1000,1000 0,0,0 -866,500 Q-183,683,0,0"
                            transform="rotate(0) translate(-43.3,25)"
                            fill={diskColor}
                        />
                        <path
                            d="M-866,-500 L0,0"
                            stroke-width={10}
                            transform="rotate(0) translate(-43.3,25)"
                            stroke={diskColor}
                        />
                        <path
                            d="M-866,-500 A1000,1000 0,0,0 -866,500 Q-183,683,0,0"
                            transform="rotate(120) translate(-43.3,25)"
                            fill={diskColor}
                        />
                        <path
                            d="M-866,-500 L0,0"
                            stroke-width={10}
                            transform="rotate(120) translate(-43.3,25)"
                            stroke={diskColor}
                        />
                        <path
                            d="M-866,-500 A1000,1000 0,0,0 -866,500 Q-183,683,0,0"
                            transform="rotate(240) translate(-43.3,25)"
                            fill={diskColor}
                        />
                        <path
                            d="M-866,-500 L0,0"
                            stroke-width={10}
                            transform="rotate(240) translate(-43.3,25)"
                            stroke={diskColor}
                        />
                    </g>

                    <g
                        style={{
                            fontSize: "150px",
                        }}
                        fill="#f90"
                    >
                        <path
                            id="ARC"
                            d="M-800,0A800,800,0 0 0 0,800"
                            transform="rotate(30)"
                            stroke="none"
                            fill="none"
                        />
                        <path
                            id="ARC2"
                            d="M-800,0A800,800,0 0 1 0,-800"
                            transform="rotate(-30)"
                            stroke="none"
                            fill="none"
                        />
                        <text
                            width="1000"
                            transform="rotate(0)"
                            alignment-baseline="middle"
                        >
                            <textPath href="#ARC2">Créations</textPath>
                        </text>
                        <text
                            width="1000"
                            transform="rotate(120)"
                            alignment-baseline="middle"
                        >
                            <textPath href="#ARC2">Blog</textPath>
                        </text>
                        <text
                            width="1000"
                            transform="rotate(240)"
                            alignment-baseline="middle"
                        >
                            <textPath href="#ARC">Cursus</textPath>
                        </text>
                    </g>
                </svg>{" "}
            </main>
            {/* <ul>
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
            </ul> */}
            <img className={Style.trombine} src="images/trombine.mini.webp" />
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
