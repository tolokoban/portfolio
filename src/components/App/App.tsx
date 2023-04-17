import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"

import Akonolinga from "@/showcases/Akonolinga"
import Minervois from "@/showcases/Minervois"

const router = createHashRouter([
    {
        path: "/",
        element: (
            <div>
                <p>Hello world!</p>
                <ul>
                    <li>
                        <a href="#/Minervois">Minervois</a>
                    </li>
                    <li>
                        <a href="#/Akonolinga">Akonolinga</a>
                    </li>
                </ul>
                <hr />
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
