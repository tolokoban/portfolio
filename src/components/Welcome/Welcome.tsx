import Style from "./Welcome.module.css"

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
                <svg
                    version="1.1"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-1200 -1200 2400 2400"
                >
                    <defs>
                        <filter id="shadow">
                            <feDropShadow
                                dx="40"
                                dy="20"
                                stdDeviation="50"
                                flood-opacity="0.75"
                            />
                        </filter>
                        <linearGradient
                            id="grad"
                            gradientTransform="rotate(-35)"
                        >
                            <stop offset="0%" stop-color={diskColor} />
                            <stop offset="35%" stop-color={diskColor} />
                            <stop offset="100%" stop-color={accentColor} />
                        </linearGradient>
                    </defs>
                    <g transform="rotate(37)">
                        <g
                            fill="#0003"
                            stroke="none"
                            stroke-width="3"
                            style={{
                                filter: "url(#shadow)",
                            }}
                        >
                            <g className={Style.rotate}>
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

                                <g
                                    onClick={() =>
                                        (window.location.hash =
                                            "#/article/Index")
                                    }
                                >
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
                                </g>

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
                        </g>

                        <g
                            className={Style.rotate}
                            style={{
                                fontSize: "180px",
                                pointerEvents: "none",
                            }}
                            fill={accentColor}
                        >
                            <path
                                id="ARC"
                                d={`M-${arc},0A${arc},${arc},0 0 0 0,${arc}`}
                                transform="rotate(30)"
                                stroke="none"
                                fill="none"
                            />
                            <path
                                id="ARC2"
                                d={`M-${arc2},0A${arc2},${arc2},0 0 1 0,-${arc2}`}
                                transform="rotate(-30)"
                                stroke="none"
                                fill="none"
                            />
                            <text
                                width="1000"
                                transform="rotate(24)"
                                alignmentBaseline="middle"
                                textAnchor="center"
                            >
                                <textPath href="#ARC2">Work</textPath>
                            </text>
                            <text
                                width="1000"
                                transform="rotate(150)"
                                alignmentBaseline="middle"
                                textAnchor="center"
                            >
                                <textPath href="#ARC2">Blog</textPath>
                            </text>
                            <text
                                width="1000"
                                transform="rotate(240)"
                                alignmentBaseline="middle"
                                textAnchor="center"
                            >
                                <textPath href="#ARC">Contact</textPath>
                            </text>
                        </g>
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
