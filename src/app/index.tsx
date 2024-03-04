/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */

export * from "./routes"
export * from "./types"

import React from "react"

import { matchRoute, useRouteContext, ROUTES } from "./routes"
import { RouteMatch, RoutePath } from "./types"

import Layout0 from "./layout"
import Layout1 from "./blog/layout"
import Layout2 from "./blog/articles/layout"
import Layout8 from "./contact/layout"
import Layout9 from "./work/layout"
import Layout10 from "./work/articles/layout"
import Loading0 from "./loading"
import Loading0_1 from "./loading.en"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./blog/page"))
const Page4 = React.lazy(() => import("./blog/articles/blender/Volume/page.mdx"))
const Page6 = React.lazy(() => import("./blog/articles/math/CrossingBoats/page"))
const Page8 = React.lazy(() => import("./contact/page.mdx"))
const Page8_1 = React.lazy(() => import("./contact/page.en.mdx"))
const Page9 = React.lazy(() => import("./work/page.mdx"))
const Page11 = React.lazy(() => import("./work/articles/Akonolinga/page.mdx"))
const Page11_1 = React.lazy(() => import("./work/articles/Akonolinga/page.en.mdx"))
const Page12 = React.lazy(() => import("./work/articles/ApiHrGraph/page.mdx"))
const Page12_1 = React.lazy(() => import("./work/articles/ApiHrGraph/page.en.mdx"))
const Page13 = React.lazy(() => import("./work/articles/Danatia/page.mdx"))
const Page14 = React.lazy(() => import("./work/articles/Fern/page.mdx"))
const Page15 = React.lazy(() => import("./work/articles/FrancaisFacile/page.mdx"))
const Page15_1 = React.lazy(() => import("./work/articles/FrancaisFacile/page.en.mdx"))
const Page16 = React.lazy(() => import("./work/articles/Fredo50/page.mdx"))
const Page16_1 = React.lazy(() => import("./work/articles/Fredo50/page.en.mdx"))
const Page17 = React.lazy(() => import("./work/articles/HandsOnWebGL/page.mdx"))
const Page17_1 = React.lazy(() => import("./work/articles/HandsOnWebGL/page.en.mdx"))
const Page18 = React.lazy(() => import("./work/articles/MarieLouise79/page.mdx"))
const Page19 = React.lazy(() => import("./work/articles/MediationFamilliale/page.mdx"))
const Page19_1 = React.lazy(() => import("./work/articles/MediationFamilliale/page.en.mdx"))
const Page20 = React.lazy(() => import("./work/articles/Minervois/page.mdx"))
const Page20_1 = React.lazy(() => import("./work/articles/Minervois/page.en.mdx"))
const Page21 = React.lazy(() => import("./work/articles/Motor/page.mdx"))
const Page21_1 = React.lazy(() => import("./work/articles/Motor/page.en.mdx"))
const Page22 = React.lazy(() => import("./work/articles/SnowRobots/page.mdx"))
const Page23 = React.lazy(() => import("./work/articles/Tournus/page.mdx"))
const Page23_1 = React.lazy(() => import("./work/articles/Tournus/page.en.mdx"))
const Page24 = React.lazy(() => import("./work/articles/TrailTar/page.mdx"))
const Page24_1 = React.lazy(() => import("./work/articles/TrailTar/page.en.mdx"))
const Page25 = React.lazy(() => import("./work/articles/VoughtTower/page.mdx"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const fb0 = intl(<Loading0/>, {"en": <Loading0_1/>}, lang)
    const ly0 = Layout0
    const pg0 = Page0
    const ly1 = Layout1
    const pg1 = Page1
    const ly2 = Layout2
    const pg4 = Page4
    const pg6 = Page6
    const ly8 = Layout8
    const pg8 = intl(Page8, {"en": Page8_1}, lang)
    const ly9 = Layout9
    const pg9 = Page9
    const ly10 = Layout10
    const pg11 = intl(Page11, {"en": Page11_1}, lang)
    const pg12 = intl(Page12, {"en": Page12_1}, lang)
    const pg13 = Page13
    const pg14 = Page14
    const pg15 = intl(Page15, {"en": Page15_1}, lang)
    const pg16 = intl(Page16, {"en": Page16_1}, lang)
    const pg17 = intl(Page17, {"en": Page17_1}, lang)
    const pg18 = Page18
    const pg19 = intl(Page19, {"en": Page19_1}, lang)
    const pg20 = intl(Page20, {"en": Page20_1}, lang)
    const pg21 = intl(Page21, {"en": Page21_1}, lang)
    const pg22 = Page22
    const pg23 = intl(Page23, {"en": Page23_1}, lang)
    const pg24 = intl(Page24, {"en": Page24_1}, lang)
    const pg25 = Page25
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb0}>
            <Route path="/blog" Page={pg1} Layout={ly1} fallback={fb0}>
                <Route path="/blog/articles" Layout={ly2} fallback={fb0}>
                    <Route path="/blog/articles/blender" fallback={fb0}>
                        <Route path="/blog/articles/blender/Volume" Page={pg4} fallback={fb0} />
                    </Route>
                    <Route path="/blog/articles/math" fallback={fb0}>
                        <Route path="/blog/articles/math/CrossingBoats" Page={pg6} fallback={fb0} />
                    </Route>
                    <Route path="/blog/articles/rust" fallback={fb0} />
                </Route>
            </Route>
            <Route path="/contact" Page={pg8} Layout={ly8} fallback={fb0} />
            <Route path="/work" Page={pg9} Layout={ly9} fallback={fb0}>
                <Route path="/work/articles" Layout={ly10} fallback={fb0}>
                    <Route path="/work/articles/Akonolinga" Page={pg11} fallback={fb0} />
                    <Route path="/work/articles/ApiHrGraph" Page={pg12} fallback={fb0} />
                    <Route path="/work/articles/Danatia" Page={pg13} fallback={fb0} />
                    <Route path="/work/articles/Fern" Page={pg14} fallback={fb0} />
                    <Route path="/work/articles/FrancaisFacile" Page={pg15} fallback={fb0} />
                    <Route path="/work/articles/Fredo50" Page={pg16} fallback={fb0} />
                    <Route path="/work/articles/HandsOnWebGL" Page={pg17} fallback={fb0} />
                    <Route path="/work/articles/MarieLouise79" Page={pg18} fallback={fb0} />
                    <Route path="/work/articles/MediationFamilliale" Page={pg19} fallback={fb0} />
                    <Route path="/work/articles/Minervois" Page={pg20} fallback={fb0} />
                    <Route path="/work/articles/Motor" Page={pg21} fallback={fb0} />
                    <Route path="/work/articles/SnowRobots" Page={pg22} fallback={fb0} />
                    <Route path="/work/articles/Tournus" Page={pg23} fallback={fb0} />
                    <Route path="/work/articles/TrailTar" Page={pg24} fallback={fb0} />
                    <Route path="/work/articles/VoughtTower" Page={pg25} fallback={fb0} />
                </Route>
            </Route>
        </Route>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function intl<T extends PageComponent | ContainerComponent | JSX.Element>(
    page: T,
    translations: Record<string, T>,
    lang = ""
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
    access?: (context: RouteMatch | null) => Promise<boolean>
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    access,
}: RouteProps) {
    const [authorized, setAuthorized] = React.useState<boolean | undefined>(
        false
    )
    const context = useRouteContext()
    const m = context && matchRoute(context.path, ROUTES[path as RoutePath])
    React.useEffect(() => {
        if (!context || !m) return

        if (!access) {
            setAuthorized(true)
        } else {
            setAuthorized(undefined)
            access(context)
                .then(setAuthorized)
                .catch(ex => {
                    console.error("Error in access() function:", ex)
                    setAuthorized(false)
                })

        }
    }, [access, context])

    if (!m) return null

    if (!authorized) return fallback

    if (m.distance === 0) {
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
