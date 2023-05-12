import Sharp from "sharp"
import {
    getProjectRoot,
    isUpToDate,
    listDir,
    makeDirForFile,
    replaceExtension,
} from "./utils/fs.mjs"

/**
 *
 * @param {string} filename
 * @returns {string}
 */
function getShortName(filename) {
    return filename.substring(`${getProjectRoot()}/gfx/images/`.length)
}

/**
 *
 * @param {number} width
 * @param {number} height
 * @param {number|[number,number]} limit
 * @returns {[number, number]}
 */
function resize(width, height, limit) {
    if (Array.isArray(limit)) return limit

    const max = Math.max(width, height)
    if (max < limit) return [width, height]

    const scale = limit / max
    return [Math.round(scale * width), Math.round(scale * height)]
}

async function start() {
    const images = await listDir("gfx/images", (name) => name.endsWith(".png"))
    for (const task of images) {
        const { path, normal, mini, blur } = task
        const filename = path
        const shortName = getShortName(filename)
        let { width, height } = await Sharp(filename).metadata()
        width = width ?? 0
        height = height ?? 0
        const filenamePng = `${getProjectRoot()}/public/images/${shortName}`
        await makeDirForFile(filenamePng)
        const upToDate = await isUpToDate(filename, filenamePng)
        console.log(
            shortName,
            width,
            height,
            " - ",
            640,
            Math.ceil(((height ?? 0) * 640) / (width ?? 0)),
            upToDate ? "OK" : "Out of date"
        )
        if (upToDate) continue

        console.log("🚀 [optimize-images] task = ", task) // @FIXME: Remove this line written on 2023-05-12 at 15:40
        if (normal) {
            const [w, h] = resize(width, height, normal)
            await Sharp(filename)
                .resize({
                    width: w,
                    height: h,
                })
                .toFile(filenamePng)
            const filenameWebp = replaceExtension(filenamePng, "webp")
            await Sharp(filename)
                .resize({
                    width: w,
                    height: h,
                })
                .webp({
                    quality: 80,
                    alphaQuality: 80,
                })
                .toFile(filenameWebp)
            console.log("  > Norm:", w, h)
        }
        if (mini) {
            const [w, h] = resize(width, height, mini)
            const filenameMiniPng = replaceExtension(filenamePng, "mini.png")
            const filenameMiniWebp = replaceExtension(filenamePng, "mini.webp")
            await Sharp(filename)
                .resize({
                    width: w,
                    height: h,
                })
                .toFile(filenameMiniPng)
            await Sharp(filename)
                .resize({
                    width: w,
                    height: h,
                })
                .webp({
                    quality: 70,
                    alphaQuality: 70,
                })
                .toFile(filenameMiniWebp)
            console.log("  > Mini:", w, h)
        }
        if (blur) {
            const [w, h] = resize(width, height, blur)
            const filenameBlurPng = replaceExtension(filenamePng, "blur.png")
            const filenameBlurWebp = replaceExtension(filenamePng, "blur.webp")
            await Sharp(filename)
                .resize({
                    width: w,
                    height: h,
                })
                .toFile(filenameBlurPng)
            await Sharp(filename)
                .resize({
                    width: w,
                    height: h,
                })
                .webp({
                    quality: 50,
                    alphaQuality: 50,
                })
                .toFile(filenameBlurWebp)
            console.log("  > Blur:", w, h)
        }
    }
}

start()
