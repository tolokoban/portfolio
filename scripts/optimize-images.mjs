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

async function start() {
    const images = await listDir("gfx/images", (name) => name.endsWith(".png"))
    for (const filename of images) {
        const shortName = getShortName(filename)
        const { width, height } = await Sharp(filename).metadata()
        const filenamePng = `${getProjectRoot()}/public/images/${shortName}`
        await makeDirForFile(filenamePng)
        const upToDate = await isUpToDate(filename, filenamePng)
        console.log(shortName, width, height, upToDate ? "OK" : "Out of date")
        if (upToDate) continue

        await Sharp(filename).resize(Math.min(1920, width)).toFile(filenamePng)
        const filenameWebp = replaceExtension(filenamePng, "webp")
        await Sharp(filename)
            .webp({
                quality: 80,
                alphaQuality: 80,
            })
            .toFile(filenameWebp)
        const filenameMiniPng = replaceExtension(filenamePng, "mini.png")
        const filenameMiniWebp = replaceExtension(filenamePng, "mini.webp")
        await Sharp(filename).resize(640).toFile(filenameMiniPng)
        await Sharp(filename)
            .resize(640)
            .webp({
                quality: 70,
                alphaQuality: 70,
            })
            .toFile(filenameMiniWebp)
        const filenameBlurPng = replaceExtension(filenamePng, "blur.png")
        const filenameBlurWebp = replaceExtension(filenamePng, "blur.webp")
        await Sharp(filename).resize(64).toFile(filenameBlurPng)
        await Sharp(filename)
            .resize(64)
            .webp({
                quality: 50,
                alphaQuality: 50,
            })
            .toFile(filenameBlurWebp)
    }
}

start()
