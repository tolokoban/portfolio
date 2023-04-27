import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"

import Akonolinga from "@/showcases/Akonolinga"
import Minervois from "@/showcases/Minervois"
import Blending from "@/articles/webgl/Blending"

const router = createHashRouter([
    {
        path: "/",
        element: (
            <div>
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
            </div>
        ),
    },
    {
        path: "Akonolinga",
        element: <Akonolinga />,
    },
    {
        path: "Minervois",
        element: <Minervois />,
    },
    {
        path: "article/webgl/Blending",
        element: <Blending />,
    },
])

export interface AppProps {
    className?: string
}

export default function App({ className }: AppProps) {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    )
}
