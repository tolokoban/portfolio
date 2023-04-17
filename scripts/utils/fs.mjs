import FS from "node:fs/promises"
import Path from "node:path"

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
 * @returns {Promise<string[]>} List of found filenames.
 */
export async function listDir(root, filter) {
    /** @type {string[]} */
    const result = []
    const fringe = [Path.resolve(ROOT, root)]
    while (fringe.length > 0) {
        const path = fringe.pop()
        if (!path) break

        const items = await FS.readdir(path, {
            withFileTypes: true,
        })
        for (const item of items) {
            if (item.isFile()) {
                const filename = Path.resolve(path, item.name)
                if (filter(filename)) {
                    result.push(filename)
                }
            } else {
                fringe.push(Path.resolve(path, item.name))
            }
        }
    }
    result.sort()
    return result
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
