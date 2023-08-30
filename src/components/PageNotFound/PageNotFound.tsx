import Style from "./PageNotFound.module.css"

export interface PageNotFoundProps {
    className?: string
}

export default function PageNotFound({ className }: PageNotFoundProps) {
    return (
        <div
            className={join(className, Style.PageNotFound)}
            onPointerDown={() => (window.location.hash = "")}
        >
            <svg
                version="1.1"
                viewBox="200 0 600 700"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <symbol
                        id="rick"
                        viewBox="0 0 1000 700"
                        width="1000"
                        height="700"
                    >
                        <g transform="translate(0,50)">
                            <path
                                d="m456 555-71 31s10-65 3-71c-30-3-92-27-92-27s74-37 84-53c-39 0-135-35-135-35s85-38 119-75c-145-88-100-51-151-76 0 0 95-33 166-28-11-75-73-147-73-147s146 40 158 53c2-43 80-146 80-146s13 156 30 172c58-30 149-39 149-39s-66 93-59 125c41-9 123 43 123 43-28 19-71 56-84 57 24 32 99 56 99 56s-57 33-77 34c-4 7 40 55 40 55l-64 4 24 47c-52-8-270 22-270 22z"
                                fill="#b0d9ef"
                                stroke="#000"
                                strokeWidth="4"
                            />
                            <path
                                d="m497 176c89-16 144 66 144 66 38 114 57 195 51 278-2 44-55 114-105 115-92 0.5-121-37-139-66-15-27-50-116-58-276 0 0 7-97 107-117z"
                                fill="#dcd0c4"
                                stroke="#000"
                                strokeWidth="4"
                            />
                            <g stroke="#000" strokeWidth="4">
                                <path
                                    d="m527 409s12 69 27 67c19-3 8-73 8-73"
                                    fill="none"
                                />
                                <path
                                    d="m449 309c41-10 69 14 74 41 5 26-11 61-41 68-37 8-67-6-72-40-7-32 0.7-61 40-70z"
                                    fill="#fff"
                                />
                                <path
                                    d="m587 281c41-10 69 14 74 41 5 26-11 61-41 68-37 8-67-6-72-40-7-32 0.7-61 40-70z"
                                    fill="#fff"
                                />
                            </g>
                            <path
                                d="m492 366 16 11"
                                fill="none"
                                stroke="#000"
                                stroke-linecap="round"
                                strokeWidth="4"
                            />
                            <g transform="translate(.2 .1)">
                                <path
                                    d="m496 381 7-18"
                                    fill="none"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    strokeWidth="4"
                                />
                                <path
                                    d="m509 369-18 6"
                                    fill="none"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    strokeWidth="4"
                                />
                            </g>
                            <g transform="translate(140 -31)">
                                <path
                                    d="m492 366 16 11"
                                    fill="none"
                                    stroke="#000"
                                    stroke-linecap="round"
                                    strokeWidth="4"
                                />
                                <g transform="translate(.2 .1)">
                                    <path
                                        d="m496 381 7-18"
                                        fill="none"
                                        stroke="#000"
                                        stroke-linecap="round"
                                        strokeWidth="4"
                                    />
                                    <path
                                        d="m509 369-18 6"
                                        fill="none"
                                        stroke="#000"
                                        stroke-linecap="round"
                                        strokeWidth="4"
                                    />
                                </g>
                            </g>
                            <g fill="none" stroke="#000" stroke-linecap="round">
                                <path
                                    d="m419 428c14 20 40 29 93 0.3"
                                    strokeWidth="2"
                                />
                                <path
                                    d="m584 416c35 18 85-18 86-26"
                                    strokeWidth="2"
                                />
                                <path
                                    d="m477 546c48-34 105-47 177-40"
                                    strokeWidth="4"
                                />
                            </g>
                            <g stroke="#000" strokeWidth="4">
                                <path
                                    d="m527 520c-4 5 9 18 22 19 10-2 11 34 26 32 10-4 3-33 8-33 7-1 11-27 8-31"
                                    fill="#dcffea"
                                />
                                <g stroke-linecap="round">
                                    <path
                                        d="m407 292c12 12 59-34 104-44s110 22 114 7-85-31-125-23-104 49-93 60z"
                                        fill="#b0d9ef"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="m487 564c-21 0.5-29-19-21-35"
                                        fill="none"
                                    />
                                    <path
                                        d="m657 524c17-3 21-27 8-37"
                                        fill="none"
                                    />
                                </g>
                            </g>
                        </g>
                    </symbol>
                    <filter id="blur">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                    </filter>
                    <clipPath id="clip">
                        <text
                            x="500"
                            y="100"
                            font-size="120"
                            font-weight="700"
                            text-anchor="middle"
                        >
                            Page
                        </text>
                        <text
                            x="500"
                            y="230"
                            font-size="120"
                            font-weight="700"
                            text-anchor="middle"
                        >
                            Not
                        </text>
                        <text
                            x="500"
                            y="360"
                            font-size="120"
                            font-weight="700"
                            text-anchor="middle"
                        >
                            Found
                        </text>
                    </clipPath>
                </defs>
                <use href="#rick" />
                <g clip-path="url(#clip)">
                    <use href="#rick" filter="url(#blur)" />
                    <rect x="0" y="0" width="1000" height="700" fill="#f772" />
                </g>
                <g
                    stroke="#000"
                    fill="none"
                    strokeWidth="2"
                    stroke-linejoin="round"
                >
                    <text
                        x="500"
                        y="100"
                        font-size="120"
                        font-weight="700"
                        text-anchor="middle"
                    >
                        Page
                    </text>
                    <text
                        x="500"
                        y="230"
                        font-size="120"
                        font-weight="700"
                        text-anchor="middle"
                    >
                        Not
                    </text>
                    <text
                        x="500"
                        y="360"
                        font-size="120"
                        font-weight="700"
                        text-anchor="middle"
                    >
                        Found
                    </text>
                </g>
            </svg>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
