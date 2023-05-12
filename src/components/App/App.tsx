import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"

import Blog from "@/routes/blog/Index"
import BlogBlending from "@/routes/blog/webgl/Blending"
import BlogInfinitePlane from "@/routes/blog/webgl/InfinitePlane"
import WorkAkonolinga from "@/routes/work/Akonolinga"
import Work from "@/routes/work/Index"
import WorkGameColorGuess from "@/routes/work/game/ColorGuess"
import WorkMinervois from "@/routes/work/Minervois"
import PageNotFound from "../PageNotFound"
import WorkWelcome from "../Welcome/Welcome"

const router = createHashRouter([
    {
        path: "*",
        element: <PageNotFound />,
    },
    {
        path: "/",
        element: <WorkWelcome />,
    },
    {
        path: "work",
        element: <Work />,
    },
    {
        path: "work/game/ColorGuess",
        element: <WorkGameColorGuess />,
    },
    {
        path: "work/Akonolinga",
        element: <WorkAkonolinga />,
    },
    {
        path: "work/Minervois",
        element: <WorkMinervois />,
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "blog/webgl/Blending",
        element: <BlogBlending />,
    },
    {
        path: "blog/webgl/InfinitePlane",
        element: <BlogInfinitePlane />,
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
