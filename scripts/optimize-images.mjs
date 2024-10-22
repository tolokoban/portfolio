/**
 * This script will read any `*.png` file in the `gfx/images/` folder (and subfolders)
 * and copy it into `src/generated` miroring the folders structure.
 * If the destination already exists or has the same update time, then the file is skipped.
 *
 * Otherwise, for each image `image.png`, the script will create:
 * - `image.webp`
 * - 'image.avif`
 * - `image.medium.png`; used inline in a page
 * - `image.medium.webp`; used inline in a page
 * - `image.medium.avif`; used inline in a page
 * - `image.small.png`: used as vignette
 * - `image.small.webp`: used as vignette
 * - `image.small.avif`: used as vignette
 */

import Sharp from "sharp";
import Path from "node:path";
import FS from "node:fs";

import {
  copyIfNewer,
  getProjectRoot,
  listDir,
  replaceExtension,
} from "./utils/fs.mjs";

const SIZES = {
  medium: 640,
  small: 320,
};

/**
 * Remove the source root folder (gfx/images).
 * @param {string} filename
 * @returns {string}
 */
function getShortName(filename) {
  return filename.substring(`${getProjectRoot()}/gfx/images/`.length);
}

/**
 * Returns a size that will fit in a square of `limit`x`limit`.
 * @param {number} width
 * @param {number} height
 * @param {number|[number,number]} limit
 * @returns {[number, number]}
 */
function resize(width, height, limit) {
  if (Array.isArray(limit)) return limit;

  const max = Math.max(width, height);
  if (max < limit) return [width, height];

  const scale = limit / max;
  return [Math.round(scale * width), Math.round(scale * height)];
}

function cap(text) {
  if (text.trim().length === 0) return "";

  return `${text.charAt(0).toUpperCase()}${text.substring(1)}`;
}

async function start() {
  const images = await listDir("gfx/images", (name) => name.endsWith(".png"));
  const maxLength = images.reduce(
    (prv, cur) => Math.max(prv, getShortName(cur).length),
    0,
  );
  for (const srcFile of images) {
    const name = getShortName(srcFile);
    const dstFile = Path.resolve(getProjectRoot(), "src/generated", name);
    if (!(await copyIfNewer(srcFile, dstFile))) continue;

    let { width, height } = await Sharp(dstFile).metadata();
    width = width ?? 0;
    height = height ?? 0;
    console.log(
      name,
      `${" ".repeat(maxLength - name.length)}(`,
      width,
      "x",
      height,
      ")",
    );
    await Sharp(dstFile)
      .webp({
        quality: 80,
        alphaQuality: 80,
      })
      .toFile(replaceExtension(dstFile, "webp"));
    await Sharp(dstFile)
      .avif({
        quality: 50,
      })
      .toFile(replaceExtension(dstFile, "avif"));
    for (const suffix of Object.keys(SIZES)) {
      const limit = SIZES[suffix];
      const [w, h] = resize(width, height, limit);
      const suffixedFilename = replaceExtension(dstFile, `.${suffix}.png`);
      await Sharp(dstFile)
        .resize({
          width: w,
          height: h,
        })
        .toFile(suffixedFilename);
      await Sharp(dstFile)
        .webp({
          quality: 80,
          alphaQuality: 80,
        })
        .toFile(replaceExtension(suffixedFilename, "webp"));
      await Sharp(dstFile)
        .avif({
          quality: 50,
        })
        .toFile(replaceExtension(suffixedFilename, "avif"));
    }
    let base = Path.basename(dstFile);
    base = base.substring(0, base.length - Path.extname(base).length);
    FS.writeFileSync(
      replaceExtension(dstFile, ".tsx"),
      [
        `import ResponsiveImage from "@/components/ResponsiveImage"`,
        ...[".", ".medium", ".small"].map((suffix) =>
          ["png", "webp", "avif"]
            .map(
              (ext) =>
                `import Image${cap(suffix.substring(1))}${cap(ext)} from "./${`${base}${suffix}.${ext}`}"`,
            )
            .join("\n"),
        ),
        "",
        "export default function Image() {",
        "  return <ResponsiveImage",
        ...["", "Medium", "Small"].map((suffix) =>
          ["png", "webp", "avif"]
            .map((ext) => `    ${ext}${suffix}={Image${suffix}${cap(ext)}}`)
            .join("\n"),
        ),
        "  />",
        "}",
      ].join("\n"),
    );
    //   console.log("  > Norm:", w, h);
    // }
    // if (mini) {
    //   const [w, h] = resize(width, height, mini);
    //   const filenameMiniPng = replaceExtension(filenamePng, "mini.png");
    //   const filenameMiniWebp = replaceExtension(filenamePng, "mini.webp");
    //   await Sharp(filename)
    //     .resize({
    //       width: w,
    //       height: h,
    //     })
    //     .toFile(filenameMiniPng);
    //   await Sharp(filename)
    //     .resize({
    //       width: w,
    //       height: h,
    //     })
    //     .webp({
    //       quality: 70,
    //       alphaQuality: 70,
    //     })
    //     .toFile(filenameMiniWebp);
    //   console.log("  > Mini:", w, h);
    // }
    // if (blur) {
    //   const [w, h] = resize(width, height, blur);
    //   const filenameBlurPng = replaceExtension(filenamePng, "blur.png");
    //   const filenameBlurWebp = replaceExtension(filenamePng, "blur.webp");
    //   await Sharp(filename)
    //     .resize({
    //       width: w,
    //       height: h,
    //     })
    //     .toFile(filenameBlurPng);
    //   await Sharp(filename)
    //     .resize({
    //       width: w,
    //       height: h,
    //     })
    //     .webp({
    //       quality: 50,
    //       alphaQuality: 50,
    //     })
    //     .toFile(filenameBlurWebp);
    //   console.log("  > Blur:", w, h);
    // }
  }
}

start();
