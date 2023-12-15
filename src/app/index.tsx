/**
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 * 2023-12-15T13:49:31.687Z
 */
import React from "react"
import Layout0 from "./layout"
import Layout1 from "./blog/layout"
import Layout5 from "./work/layout"
import Layout6 from "./work/articles/layout"
import Loading0 from "./loading"
import Loading0_1 from "./loading.en"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./blog/page"))
const Page3 = React.lazy(() => import("./blog/math/CrossingBoats/page"))
const Page5 = React.lazy(() => import("./work/page.mdx"))
const Page7 = React.lazy(() => import("./work/articles/Akonolinga/page.mdx"))
const Page7_1 = React.lazy(() => import("./work/articles/Akonolinga/page.en.mdx"))
const Page8 = React.lazy(() => import("./work/articles/ApiHrGraph/page.mdx"))
const Page8_1 = React.lazy(() => import("./work/articles/ApiHrGraph/page.en.mdx"))
const Page9 = React.lazy(() => import("./work/articles/FrancaisFacile/page.mdx"))
const Page9_1 = React.lazy(() => import("./work/articles/FrancaisFacile/page.en.mdx"))
const Page10 = React.lazy(() => import("./work/articles/HandsOnWebGL/page.mdx"))
const Page10_1 = React.lazy(() => import("./work/articles/HandsOnWebGL/page.en.mdx"))
const Page11 = React.lazy(() => import("./work/articles/MediationFamilliale/page.mdx"))
const Page11_1 = React.lazy(() => import("./work/articles/MediationFamilliale/page.en.mdx"))
const Page12 = React.lazy(() => import("./work/articles/Minervois/page.mdx"))
const Page12_1 = React.lazy(() => import("./work/articles/Minervois/page.en.mdx"))
const Page13 = React.lazy(() => import("./work/articles/Tournus/page.mdx"))
const Page13_1 = React.lazy(() => import("./work/articles/Tournus/page.en.mdx"))
const Page14 = React.lazy(() => import("./work/articles/TrailTar/page.mdx"))
const Page14_1 = React.lazy(() => import("./work/articles/TrailTar/page.en.mdx"))
const Page15 = React.lazy(() => import("./work/articles/VoughtTower/page.mdx"))

export default function App({ lang }: { lang?: string }) {
    const fb0 = intl(<Loading0/>, {"en": <Loading0_1/>}, lang)
    const ly0 = Layout0
    const pg0 = Page0
    const ly1 = Layout1
    const pg1 = Page1
    const pg3 = Page3
    const ly5 = Layout5
    const pg5 = Page5
    const ly6 = Layout6
    const pg7 = intl(Page7, {"en": Page7_1}, lang)
    const pg8 = intl(Page8, {"en": Page8_1}, lang)
    const pg9 = intl(Page9, {"en": Page9_1}, lang)
    const pg10 = intl(Page10, {"en": Page10_1}, lang)
    const pg11 = intl(Page11, {"en": Page11_1}, lang)
    const pg12 = intl(Page12, {"en": Page12_1}, lang)
    const pg13 = intl(Page13, {"en": Page13_1}, lang)
    const pg14 = intl(Page14, {"en": Page14_1}, lang)
    const pg15 = Page15
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb0}>
            <Route path="/blog" Page={pg1} Layout={ly1} fallback={fb0}>
                <Route path="/blog/math" fallback={fb0}>
                    <Route path="/blog/math/CrossingBoats" Page={pg3} fallback={fb0} />
                </Route>
            </Route>
            <Route path="/contact" fallback={fb0} />
            <Route path="/work" Page={pg5} Layout={ly5} fallback={fb0}>
                <Route path="/work/articles" Layout={ly6} fallback={fb0}>
                    <Route path="/work/articles/Akonolinga" Page={pg7} fallback={fb0} />
                    <Route path="/work/articles/ApiHrGraph" Page={pg8} fallback={fb0} />
                    <Route path="/work/articles/FrancaisFacile" Page={pg9} fallback={fb0} />
                    <Route path="/work/articles/HandsOnWebGL" Page={pg10} fallback={fb0} />
                    <Route path="/work/articles/MediationFamilliale" Page={pg11} fallback={fb0} />
                    <Route path="/work/articles/Minervois" Page={pg12} fallback={fb0} />
                    <Route path="/work/articles/Tournus" Page={pg13} fallback={fb0} />
                    <Route path="/work/articles/TrailTar" Page={pg14} fallback={fb0} />
                    <Route path="/work/articles/VoughtTower" Page={pg15} fallback={fb0} />
                </Route>
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

let currentParams: Record<string, string> = {}

export function useRouteParams(): Record<string, string> {
    const [params, setParams] = React.useState(currentParams)
    if (areDiffentParams(params, currentParams)) {
        setParams(currentParams)
    }
    return params
}

function areDiffentParams(p1: Record<string, string>, p2: Record<string, string>): boolean {
    const k1 = Object.keys(p1)
    const k2 = Object.keys(p2)
    if (k1.length !== k2.length) return true

    for (const key of k1) {
        if (p1[key] !== p2[key]) return true
    }
    return false
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

    currentParams = params
    const full = hashItems.length === pathItems.length
    return { full, params }
}

function intl<T extends PageComponent | ContainerComponent | JSX.Element>(
    page: T,
    translations: Record<string, T>,
    lang = "", 
): T {
    const candidate1 = translations[lang]
    if (candidate1) return candidate1

    const [prefix] = lang.split("-")
    const candidate2 = translations[prefix]
    if (candidate2) return candidate2

    return page
}

type PageComponent = React.FC<{ params: Record<string, string> }>
type ContainerComponent = React.FC<{
    children: React.ReactNode
    params: Record<string, string>
}>

interface RouteProps {
    path: string
    element?: JSX.Element
    fallback?: JSX.Element
    children?: React.ReactNode
    Page?: PageComponent
    Layout?: ContainerComponent
    Template?: ContainerComponent
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
