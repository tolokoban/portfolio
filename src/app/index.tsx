/**
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 * 2023-08-30T09:58:35.014Z
 */
import React from "react"
import Layout1 from "./blog/layout"
import Layout7 from "./work/layout"

const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./blog/page"))
const Page4 = React.lazy(() => import("./blog/math/CrossingBoats/page"))
const Page7 = React.lazy(() => import("./work/page"))

export default function App() {
    return (
        <Route path="/" Page={Page0} fallback={<div>Loading...</div>}>
            <Route path="/blog" Page={Page1} Layout={Layout1} fallback={<div>Loading...</div>}>
                <Route path="/blog/game"  fallback={<div>Loading...</div>} />
                <Route path="/blog/math"  fallback={<div>Loading...</div>}>
                    <Route path="/blog/math/CrossingBoats" Page={Page4} fallback={<div>Loading...</div>} />
                </Route>
                <Route path="/blog/rust"  fallback={<div>Loading...</div>} />
                <Route path="/blog/webgl"  fallback={<div>Loading...</div>} />
            </Route>
            <Route path="/work" Page={Page7} Layout={Layout7} fallback={<div>Loading...</div>}>
                <Route path="/work/Akonolinga"  fallback={<div>Loading...</div>} />
                <Route path="/work/ApiHrGraph"  fallback={<div>Loading...</div>} />
                <Route path="/work/FrancaisFacile"  fallback={<div>Loading...</div>} />
                <Route path="/work/HandsOnWebGL"  fallback={<div>Loading...</div>} />
                <Route path="/work/MediationFamilliale"  fallback={<div>Loading...</div>} />
                <Route path="/work/Minervois"  fallback={<div>Loading...</div>} />
                <Route path="/work/Tournus"  fallback={<div>Loading...</div>} />
                <Route path="/work/TrailTar"  fallback={<div>Loading...</div>} />
            </Route>
        </Route>
    )
}

function useHash() {
    const [hash, setHash] = React.useState(
        extractHash(window.location.toString())
    )
    React.useEffect(() => {
        const handler = (event: HashChangeEvent) => {
            const oldHash = extractHash(event.oldURL)
            const newHash = extractHash(event.newURL)
            const absHash = ensureAbsoluteHash(newHash, oldHash)
            if (absHash !== newHash) {
                history.replaceState({}, "", `#${absHash}`)
            }
            setHash(absHash)
        }
        window.addEventListener("hashchange", handler)
        return () => window.removeEventListener("hashchange", handler)
    }, [])
    return hash
}

function extractHash(url: string) {
    const hash = new URL(url).hash
    if (!hash) return "/"

    return hash.startsWith("#") ? hash.substring(1) : hash
}

function ensureAbsoluteHash(newHash: string, oldHash: string) {
    if (newHash.startsWith("/")) return newHash

    let hash = newHash
    while (hash.startsWith("./")) {
        hash = hash.substring("./".length)
    }
    const path = oldHash.split("/").filter(nonEmpty)
    for (const item of newHash.split("/")) {
        if (item === "..") {
            if (path.length > 0) path.pop()
        } else {
            path.push(item)
        }
    }
    return `/${path.filter(nonEmpty).join("/")}`
}

function nonEmpty(s: unknown): s is string {
    return typeof s === "string" && s.trim().length > 0
}

interface HashMatch {
    params: { [name: string]: string }
    full: boolean
}

function match(hash: string, path: string): null | HashMatch {
    const params: Record<string, string> = {}
    const hashItems = hash.split("/").filter(nonEmpty)
    const pathItems = path.split("/").filter(nonEmpty)
    for (let i = 0; i < Math.min(hashItems.length, pathItems.length); i++) {
        const hashItem = hashItems[i]
        const pathItem = pathItems[i]
        if (pathItem.startsWith("[")) {
            const paramName = pathItem.substring(1, pathItem.length - 1)
            params[paramName] = hashItem
        } else if (hashItem !== pathItem) return null
    }

    return {
        full: hashItems.length === pathItems.length,
        params,
    }
}

interface RouteProps {
    path: string
    element?: JSX.Element
    fallback?: JSX.Element
    children?: React.ReactNode
    Page?: React.FC<{ params: Record<string, string> }>
    Layout?: React.FC<{
        children: React.ReactNode
        params: Record<string, string>
    }>
    Template?: React.FC<{
        children: React.ReactNode
        params: Record<string, string>
    }>
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
}: RouteProps) {
    const hash = useHash()
    const m = match(hash, path)
    if (!m) return null

    if (m.full) {
        if (!Page) return null

        const element = Template ? (
            <Template params={m.params}>
                <Page params={m.params} />
            </Template>
        ) : (
            <Page params={m.params} />
        )
        if (Layout) {
            return (
                <Layout params={m.params}>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return Layout ? (
        <Layout params={m.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}
