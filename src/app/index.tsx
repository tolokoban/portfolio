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
import Layout10 from "./contact/layout"
import Layout11 from "./work/layout"
import Layout20 from "./work/articles/layout"
import Loading0 from "./loading"
import Loading0_1 from "./loading.en"
const Page0 = React.lazy(() => import("./page"))
const Page1 = React.lazy(() => import("./blog/page"))
const Page4 = React.lazy(() => import("./blog/articles/blender/Volume/page.mdx"))
const Page6 = React.lazy(() => import("./blog/articles/math/CrossingBoats/page"))
const Page10 = React.lazy(() => import("./contact/page.mdx"))
const Page10_1 = React.lazy(() => import("./contact/page.en.mdx"))
const Page11 = React.lazy(() => import("./work/page.mdx"))
const Page21 = React.lazy(() => import("./work/articles/Akonolinga/page.mdx"))
const Page21_1 = React.lazy(() => import("./work/articles/Akonolinga/page.en.mdx"))
const Page22 = React.lazy(() => import("./work/articles/ApiHrGraph/page.mdx"))
const Page22_1 = React.lazy(() => import("./work/articles/ApiHrGraph/page.en.mdx"))
const Page23 = React.lazy(() => import("./work/articles/Danatia/page.mdx"))
const Page24 = React.lazy(() => import("./work/articles/Fern/page.mdx"))
const Page25 = React.lazy(() => import("./work/articles/FrancaisFacile/page.mdx"))
const Page25_1 = React.lazy(() => import("./work/articles/FrancaisFacile/page.en.mdx"))
const Page26 = React.lazy(() => import("./work/articles/Fredo50/page.mdx"))
const Page26_1 = React.lazy(() => import("./work/articles/Fredo50/page.en.mdx"))
const Page27 = React.lazy(() => import("./work/articles/HandsOnWebGL/page.mdx"))
const Page27_1 = React.lazy(() => import("./work/articles/HandsOnWebGL/page.en.mdx"))
const Page28 = React.lazy(() => import("./work/articles/MarieLouise79/page.mdx"))
const Page29 = React.lazy(() => import("./work/articles/MediationFamilliale/page.mdx"))
const Page29_1 = React.lazy(() => import("./work/articles/MediationFamilliale/page.en.mdx"))
const Page30 = React.lazy(() => import("./work/articles/Minervois/page.mdx"))
const Page30_1 = React.lazy(() => import("./work/articles/Minervois/page.en.mdx"))
const Page31 = React.lazy(() => import("./work/articles/Motor/page.mdx"))
const Page31_1 = React.lazy(() => import("./work/articles/Motor/page.en.mdx"))
const Page32 = React.lazy(() => import("./work/articles/Mug/page"))
const Page33 = React.lazy(() => import("./work/articles/SnowRobots/page.mdx"))
const Page34 = React.lazy(() => import("./work/articles/Tournus/page.mdx"))
const Page34_1 = React.lazy(() => import("./work/articles/Tournus/page.en.mdx"))
const Page35 = React.lazy(() => import("./work/articles/TrailTar/page.mdx"))
const Page35_1 = React.lazy(() => import("./work/articles/TrailTar/page.en.mdx"))
const Page36 = React.lazy(() => import("./work/articles/VoughtTower/page.mdx"))
const Page37 = React.lazy(() => import("./work/articles/Wedding/page.mdx"))
const Page37_1 = React.lazy(() => import("./work/articles/Wedding/page.en.mdx"))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function App({ lang }: { lang?: string }) {
    const context = useRouteContext()
    const fb0 = intl(<Loading0/>, {"en": <Loading0_1/>}, lang)
    const ly0 = Layout0
    const pg0 = Page0
    const ly1 = Layout1
    const pg1 = Page1
    const ly2 = Layout2
    const pg4 = Page4
    const pg6 = Page6
    const ly10 = Layout10
    const pg10 = intl(Page10, {"en": Page10_1}, lang)
    const ly11 = Layout11
    const pg11 = Page11
    const ly20 = Layout20
    const pg21 = intl(Page21, {"en": Page21_1}, lang)
    const pg22 = intl(Page22, {"en": Page22_1}, lang)
    const pg23 = Page23
    const pg24 = Page24
    const pg25 = intl(Page25, {"en": Page25_1}, lang)
    const pg26 = intl(Page26, {"en": Page26_1}, lang)
    const pg27 = intl(Page27, {"en": Page27_1}, lang)
    const pg28 = Page28
    const pg29 = intl(Page29, {"en": Page29_1}, lang)
    const pg30 = intl(Page30, {"en": Page30_1}, lang)
    const pg31 = intl(Page31, {"en": Page31_1}, lang)
    const pg32 = Page32
    const pg33 = Page33
    const pg34 = intl(Page34, {"en": Page34_1}, lang)
    const pg35 = intl(Page35, {"en": Page35_1}, lang)
    const pg36 = Page36
    const pg37 = intl(Page37, {"en": Page37_1}, lang)
    return (
        <Route path="/" Page={pg0} Layout={ly0} fallback={fb0} context={context}>
            <Route path="/blog" Page={pg1} Layout={ly1} fallback={fb0} context={context}>
                <Route path="/blog/articles" Layout={ly2} fallback={fb0} context={context}>
                    <Route path="/blog/articles/blender" fallback={fb0} context={context}>
                        <Route path="/blog/articles/blender/Volume" Page={pg4} fallback={fb0} context={context}/>
                    </Route>
                    <Route path="/blog/articles/math" fallback={fb0} context={context}>
                        <Route path="/blog/articles/math/CrossingBoats" Page={pg6} fallback={fb0} context={context}/>
                    </Route>
                </Route>
                <Route path="/blog/game" fallback={fb0} context={context}/>
                <Route path="/blog/rust" fallback={fb0} context={context}/>
                <Route path="/blog/webgl" fallback={fb0} context={context}/>
            </Route>
            <Route path="/contact" Page={pg10} Layout={ly10} fallback={fb0} context={context}/>
            <Route path="/work" Page={pg11} Layout={ly11} fallback={fb0} context={context}>
                <Route path="/work/Akonolinga" fallback={fb0} context={context}/>
                <Route path="/work/ApiHrGraph" fallback={fb0} context={context}/>
                <Route path="/work/FrancaisFacile" fallback={fb0} context={context}/>
                <Route path="/work/HandsOnWebGL" fallback={fb0} context={context}/>
                <Route path="/work/MediationFamilliale" fallback={fb0} context={context}/>
                <Route path="/work/Minervois" fallback={fb0} context={context}/>
                <Route path="/work/Tournus" fallback={fb0} context={context}/>
                <Route path="/work/TrailTar" fallback={fb0} context={context}/>
                <Route path="/work/articles" Layout={ly20} fallback={fb0} context={context}>
                    <Route path="/work/articles/Akonolinga" Page={pg21} fallback={fb0} context={context}/>
                    <Route path="/work/articles/ApiHrGraph" Page={pg22} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Danatia" Page={pg23} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Fern" Page={pg24} fallback={fb0} context={context}/>
                    <Route path="/work/articles/FrancaisFacile" Page={pg25} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Fredo50" Page={pg26} fallback={fb0} context={context}/>
                    <Route path="/work/articles/HandsOnWebGL" Page={pg27} fallback={fb0} context={context}/>
                    <Route path="/work/articles/MarieLouise79" Page={pg28} fallback={fb0} context={context}/>
                    <Route path="/work/articles/MediationFamilliale" Page={pg29} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Minervois" Page={pg30} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Motor" Page={pg31} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Mug" Page={pg32} fallback={fb0} context={context}/>
                    <Route path="/work/articles/SnowRobots" Page={pg33} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Tournus" Page={pg34} fallback={fb0} context={context}/>
                    <Route path="/work/articles/TrailTar" Page={pg35} fallback={fb0} context={context}/>
                    <Route path="/work/articles/VoughtTower" Page={pg36} fallback={fb0} context={context}/>
                    <Route path="/work/articles/Wedding" Page={pg37} fallback={fb0} context={context}/>
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
    context: RouteMatch | null
}

function Route({
    path,
    fallback,
    children,
    Page,
    Layout,
    Template,
    context,
}: RouteProps) {
    const match = context && matchRoute(context.path, ROUTES[path as RoutePath])

    if (!match) return null

    if (match.distance === 0) {
        if (!Page) return null

        const element = Template ? (
            <Template params={match.params}>
                <Page params={match.params} />
            </Template>
        ) : (
            <Page params={match.params} />
        )
        if (Layout) {
            return (
                <Layout params={match.params}>
                    <React.Suspense fallback={fallback}>
                        {element}
                    </React.Suspense>
                </Layout>
            )
        }
        return <React.Suspense fallback={fallback}>{element}</React.Suspense>
    }
    return Layout ? (
        <Layout params={match.params}>{children}</Layout>
    ) : (
        <>{children}</>
    )
}
