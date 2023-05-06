import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"

import Blending from "@/articles/webgl/Blending"
import InfinitePlane from "@/articles/webgl/InfinitePlane"
import Akonolinga from "@/showcases/Akonolinga"
import Minervois from "@/showcases/Minervois"
import Welcome from "../Welcome/Welcome"
import Blog from "@/articles/Index"

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
        path: "article/Index",
        element: <Blog />,
    },
    {
        path: "article/webgl/Blending",
        element: <Blending />,
    },
    {
        path: "article/webgl/InfinitePlane",
        element: <InfinitePlane />,
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
