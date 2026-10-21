import Path from "node:path"
import FS from "node:fs"
import { execSync } from "node:child_process"
import { defineConfig } from "@rspack/cli"
import { rspack } from "@rspack/core"

import Package from "./package.json" with { type: "json" }

const ROOT = import.meta.dirname

/**
 * Run `npm run generate` (image optimization + routes) once,
 * before the first compilation of a build or a dev server session.
 */
class GeneratePlugin {
    apply(compiler) {
        let done = false
        const generate = () => {
            if (done) return

            done = true
            execSync("npm run generate", { cwd: ROOT, stdio: "inherit" })
        }
        compiler.hooks.beforeRun.tap("GeneratePlugin", generate)
        compiler.hooks.watchRun.tap("GeneratePlugin", generate)
    }
}

export default defineConfig((env) => {
    if (typeof Package.port !== "number") {
        // Define a random port number for dev server.
        Package.port = 1204 + Math.floor(Math.random() * (0xffff - 1024))
        FS.writeFileSync(
            Path.resolve(ROOT, "package.json"),
            JSON.stringify(Package, null, "    "),
        )
        console.log("A random port has been set for dev server:", Package.port)
    }

    const isProdMode = env.RSPACK_BUILD === true
    if (isProdMode) {
        console.log("+-----------------+")
        console.log("| Production Mode |")
        console.log("+-----------------+")
    }
    return {
        cache: {
            type: "memory",
        },
        output: {
            filename: "scr/[name].[contenthash].js",
            cssFilename: "css/[name].[contenthash].css",
            cssChunkFilename: "css/[name].[contenthash].css",
            path: Path.resolve(ROOT, "build"),
            devtoolModuleFilenameTemplate: "[absolute-resource-path]",
            clean: true,
        },
        entry: {
            app: "./src/index.tsx",
        },
        target: "web",
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".jsx", ".wasm"],
            enforceExtension: false,
            alias: {
                "@": Path.resolve(ROOT, "src/"),
            },
        },
        devtool: isProdMode ? false : "inline-source-map",
        devServer: {
            compress: true,
            historyApiFallback: true,
            static: {
                directory: Path.resolve(ROOT, "./public"),
            },
            client: {
                logging: "none",
                overlay: { errors: true, warnings: false },
                progress: true,
            },
            hot: true,
            // Open WebBrowser.
            open: true,
            host: "0.0.0.0",
            port: env.PORT || Package.port,
            server: "http",
        },
        stats: {
            colors: true,
            errorDetails: false,
        },
        plugins: [
            new rspack.ProgressPlugin(),
            new GeneratePlugin(),
            new rspack.CopyRspackPlugin({
                patterns: [
                    {
                        from: Path.resolve(ROOT, "public"),
                        globOptions: {
                            // Allow non-root index.html to be copied verbatim.
                            ignore: [Path.resolve(ROOT, "public/index.html")],
                        },
                        // Prebuilt apps are already minified and ship their own LICENSE files.
                        info: { minimized: true },
                    },
                ],
            }),
            new rspack.HtmlRspackPlugin({
                template: "public/index.html",
                filename: "index.html",
                title: "Tolokoban",
                minify: isProdMode,
            }),
        ],
        performance: {
            hints: "warning",
            maxAssetSize: 300000,
            maxEntrypointSize: 200000,
            assetFilter: (filename) => {
                // PNG are just fallbacks for WEBP images.
                if (filename.endsWith(".png")) return false
                if (filename.endsWith(".map")) return false
                return true
            },
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
            // Prevent "libs.[contenthash].js" from changing its hash if not needed.
            moduleIds: "deterministic",
            minimizer: [
                // Keep license comments in "*.LICENSE.txt" files, like Terser does.
                new rspack.SwcJsMinimizerRspackPlugin({ extractComments: true }),
                new rspack.LightningCssMinimizerRspackPlugin(),
            ],
        },
        module: {
            parser: {
                "css/auto": {
                    // We use `import Style from "./foo.module.css"`.
                    namedExports: false,
                },
            },
            generator: {
                "css/auto": {
                    localIdentName: isProdMode ? "[hash]" : "[name]__[local]__[hash:6]",
                },
            },
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "builtin:swc-loader",
                    options: {
                        jsc: {
                            target: "es2015",
                            parser: {
                                syntax: "typescript",
                                tsx: true,
                            },
                            transform: {
                                react: {
                                    runtime: "automatic",
                                    development: !isProdMode,
                                },
                            },
                        },
                    },
                    type: "javascript/auto",
                },
                {
                    test: /\.(png|jpe?g|gif|webp|avif|svg|mp4)$/i,
                    // More information here https://rspack.rs/guide/features/asset-module
                    type: "asset",
                    generator: {
                        filename: "img/[name].[hash][ext][query]",
                    },
                },
                {
                    test: /\.(bin)$/i,
                    type: "asset",
                    generator: {
                        filename: "bin/[name].[hash][ext][query]",
                    },
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: "fnt/[name].[hash][ext][query]",
                    },
                },
                {
                    test: /\.(vert|frag)$/i,
                    type: "asset/source",
                },
                {
                    test: /\.(py|txt|sh|md)$/i,
                    type: "asset/source",
                },
                {
                    // `*.module.css` are CSS modules, other `*.css` are global.
                    test: /\.css$/,
                    type: "css/auto",
                },
                {
                    test: /\.mdx$/,
                    use: [
                        {
                            loader: "builtin:swc-loader",
                            options: {
                                jsc: {
                                    target: "es2015",
                                    parser: { syntax: "ecmascript", jsx: true },
                                },
                            },
                        },
                        {
                            loader: "@mdx-js/loader",
                            /** @type {import('@mdx-js/loader').Options} */
                            options: {},
                        },
                    ],
                    type: "javascript/auto",
                },
            ],
        },
    }
})
