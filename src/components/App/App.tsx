import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"

import Akonolinga from "@/showcases/Akonolinga"
import Minervois from "@/showcases/Minervois"
import Blending from "@/articles/webgl/Blending"
import Welcome from "../Welcome/Welcome"

const router = createHashRouter([
    {
        path: "/",
        element: <Welcome />,
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
