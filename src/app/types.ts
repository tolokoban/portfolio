/**
 * build-react-routes
 *
 * WARNING! this file has been generated automatically.
 * Please do not edit it because it will probably be overwritten.
 *
 * If you find a bug or if you need an improvement, please fill an issue:
 * https://github.com/tolokoban/build-react-routes/issues
 */
export type RoutePath =
    | "/"
    | "/blog"
    | "/blog/articles"
    | "/blog/articles/blender"
    | "/blog/articles/blender/Volume"
    | "/blog/articles/math"
    | "/blog/articles/math/CrossingBoats"
    | "/contact"
    | "/cv"
    | "/cv/employment"
    | "/work"
    | "/work/articles"
    | "/work/articles/Akonolinga"
    | "/work/articles/ApiHrGraph"
    | "/work/articles/BBOP"
    | "/work/articles/CircuitStudio"
    | "/work/articles/Danatia"
    | "/work/articles/Fern"
    | "/work/articles/FrancaisFacile"
    | "/work/articles/Fredo50"
    | "/work/articles/HandsOnWebGL"
    | "/work/articles/Hippocampus"
    | "/work/articles/MarieLouise79"
    | "/work/articles/MediationFamilliale"
    | "/work/articles/Minervois"
    | "/work/articles/Motor"
    | "/work/articles/OpenDeck"
    | "/work/articles/ProteinAtlas"
    | "/work/articles/SnowRobots"
    | "/work/articles/TP"
    | "/work/articles/Tournus"
    | "/work/articles/TrailPassionBlibDisolve"
    | "/work/articles/TrailPassionHologram"
    | "/work/articles/TrailTar"
    | "/work/articles/Vega30BlackHole"
    | "/work/articles/VoughtTower"
    | "/work/articles/Webgl"
    | "/work/articles/Wedding"

export function isRoutePath(path: string): path is RoutePath {
    return ["/","/blog","/blog/articles","/blog/articles/blender","/blog/articles/blender/Volume","/blog/articles/math","/blog/articles/math/CrossingBoats","/contact","/cv","/cv/employment","/work","/work/articles","/work/articles/Akonolinga","/work/articles/ApiHrGraph","/work/articles/BBOP","/work/articles/CircuitStudio","/work/articles/Danatia","/work/articles/Fern","/work/articles/FrancaisFacile","/work/articles/Fredo50","/work/articles/HandsOnWebGL","/work/articles/Hippocampus","/work/articles/MarieLouise79","/work/articles/MediationFamilliale","/work/articles/Minervois","/work/articles/Motor","/work/articles/OpenDeck","/work/articles/ProteinAtlas","/work/articles/SnowRobots","/work/articles/TP","/work/articles/Tournus","/work/articles/TrailPassionBlibDisolve","/work/articles/TrailPassionHologram","/work/articles/TrailTar","/work/articles/Vega30BlackHole","/work/articles/VoughtTower","/work/articles/Webgl","/work/articles/Wedding"].includes(path)
}

export interface RouteMatch {
    path: string
    route: RoutePath
    params: Record<string, string>
    /**
     * 0 means a perfect match.
     */
    distance: number
}
