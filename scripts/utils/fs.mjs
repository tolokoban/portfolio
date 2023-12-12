import FS from "node:fs/promises"
import Path from "node:path"
import { existsSync } from "node:fs"

const ROOT = Path.resolve(
    Path.dirname(new URL(import.meta.url).pathname),
    "..",
    ".."
)

export function getProjectRoot() {
    return ROOT
}

/**
 *
 * @param {string} root Folder (relative to project root)
 * @param {(filename: string) => boolean} filter This function returns `false` to discard a file from the result.
 * @returns {Promise<{path: string, normal?: number|[number,number], mini?: number|[number,number], blur?: number|[number,number]}[]>} List of found filenames.
 */
export async function listDir(root, filter) {
    /** @type {{path: string, normal?: number|[number,number], mini?: number|[number,number], blur?: number|[number,number]}[]} */
    const result = []
    /** @type {{path: string, normal?: number|[number,number], mini?: number|[number,number], blur?: number|[number,number]}[]} */
    const fringe = [{ path: Path.resolve(ROOT, root) }]
    while (fringe.length > 0) {
        const task = fringe.pop()
        if (!task) break

        const { path, normal, mini, blur } = await extractImageSettings(task)
        const items = await FS.readdir(path, {
            withFileTypes: true,
        })
        for (const item of items) {
            if (item.isFile()) {
                const filename = Path.resolve(path, item.name)
                if (filter(filename)) {
                    result.push({ path: filename, normal, mini, blur })
                }
            } else {
                fringe.push({
                    path: Path.resolve(path, item.name),
                    normal,
                    mini,
                    blur,
                })
            }
        }
    }
    result.sort()
    return result
}

/**
 * @param {{path: string, normal?: number|[number,number], mini?: number|[number,number], blur?: number|[number,number]}} task
 * @returns {Promise<{path: string, normal?: number|[number,number], mini?: number|[number,number], blur?: number|[number,number]}>}
 */
async function extractImageSettings(task) {
    const settingsFilename = Path.resolve(task.path, "@.json")
    if (!existsSync(settingsFilename)) return task

    try {
        const content = await FS.readFile(settingsFilename)
        const data = JSON.parse(content.toString())
        if (!data || typeof data !== "object") return task

        const newTask = { path: task.path }
        if (typeof data["normal"] === "number" || Array.isArray(data["normal"]))
            newTask["normal"] = data["normal"]
        if (typeof data["mini"] === "number" || Array.isArray(data["mini"]))
            newTask["mini"] = data["mini"]
        if (typeof data["blur"] === "number" || Array.isArray(data["blur"]))
            newTask["blur"] = data["blur"]
        return newTask
    } catch (ex) {
        console.error("Unable to load file:", settingsFilename)
        console.error(ex)
        return task
    }
}

/**
 * @param {string} filename
 * @param {string} extension Extension without the leading dot.
 */
export function replaceExtension(filename, extension) {
    while (extension.charAt(0) === ".") extension = extension.substring(1)
    const lastDotIndex = filename.lastIndexOf(".")
    return filename.substring(0, lastDotIndex + 1) + extension
}

export async function isUpToDate(newFilename, oldFilename) {
    try {
        const statsOld = (await FS.stat(oldFilename)).mtime.getTime()
        const statsNew = (await FS.stat(newFilename)).mtime.getTime()
        return statsNew <= statsOld
    } catch (ex) {
        return false
    }
}

/**
 * @param {string} filename
 */
export async function makeDirForFile(filename) {
    const path = Path.dirname(filename)
    await FS.mkdir(path, { recursive: true })
}
