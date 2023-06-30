import React from "react"
import { createHashRouter, RouterProvider } from "react-router-dom"

import Blog from "@/routes/blog/Index"
import BlogBlending from "@/routes/blog/webgl/Blending"
import BlogInfinitePlane from "@/routes/blog/webgl/InfinitePlane"
import WorkApiHrGraph from "@/routes/work/ApiHrGraph"
import WorkAkonolinga from "@/routes/work/Akonolinga"
import WorkFrancaisFacile from "@/routes/work/FrancaisFacile"
import WorkMediationFamilliale from "@/routes/work/MediationFamilliale"
import WorkHandsOnWebGL from "@/routes/work/HandsOnWebGL"
import WorkTournus from "@/routes/work/Tournus"
import WorkTrailTar from "@/routes/work/TrailTar"
import Work from "@/routes/work/Index"
import BlogGameColorGuess from "@/routes/blog/game/ColorGuess"
import BlogMathCrossingBoats from "@/routes/blog/math/CrossingBoats"
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
        path: "work/Akonolinga",
        element: <WorkAkonolinga />,
    },
    {
        path: "work/ApiHrGraph",
        element: <WorkApiHrGraph />,
    },
    {
        path: "work/FrancaisFacile",
        element: <WorkFrancaisFacile />,
    },
    {
        path: "work/HandsOnWebGL",
        element: <WorkHandsOnWebGL />,
    },
    {
        path: "work/Tournus",
        element: <WorkTournus />,
    },
    {
        path: "work/TrailTar",
        element: <WorkTrailTar />,
    },
    { path: "work/MediationFamilliale", element: <WorkMediationFamilliale /> },
    {
        path: "work/Minervois",
        element: <WorkMinervois />,
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "blog/game/ColorGuess",
        element: <BlogGameColorGuess />,
    },
    {
        path: "blog/math/CrossingBoats",
        element: <BlogMathCrossingBoats />,
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
