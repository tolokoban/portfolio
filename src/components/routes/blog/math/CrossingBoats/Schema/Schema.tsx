export default function Schema() {
    return (
        <svg
            version="1.1"
            viewBox="-20 -20 240 140"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                style={{ font: "bold 6px sans-serif" }}
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="1"
                strokeLinecap="round"
            >
                <rect
                    x="0"
                    y="0"
                    width="200"
                    height="100"
                    fill="#6af"
                    stroke="#48d"
                />
                <g fill="#fff4" stroke="none">
                    <path d="M0,0L69.2,0L41,41Z" />
                    <path d="M100,100h40L123,78Z" />
                    <path d="M0,100h100L41,41Z" fill="#0004" />
                </g>
                <g stroke="#000" fill="none">
                    <path d="M0,0L100,100L200,0" stroke="#000" />
                    <path d="M0,100L69.2,0L138.5,100" stroke="#000" />
                </g>
                <g strokeWidth="0.5" stroke="#f90" fill="none">
                    <path d="M0,-5H69.2M0,-7v4M69.2,-7v4" />
                    <path d="M0,105H100M0,103v4M100,103v4" />
                    <path d="M41,0V41M39,0h4M39,41h4" />
                    <path d="M123,77v22M121,77h4M121,100h4" />
                    <path d="M100,105h40M100,103v4M140,103v4" />
                </g>
                <g fill="#000" stroke="none">
                    <text x="34.6" y="-10">
                        V
                    </text>
                    <text x="50" y="110">
                        1
                    </text>
                    <text x="0" y="0" transform="translate(35,20) rotate(-90)">
                        720
                    </text>
                    <text x="0" y="0" transform="translate(118,92) rotate(-90)">
                        400
                    </text>
                    <text x="120" y="110">
                        2V - 1
                    </text>
                </g>
            </g>
        </svg>
    )
}
