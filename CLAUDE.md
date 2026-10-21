# CLAUDE.md

Tolokoban's portfolio: a single-page React 18 + TypeScript site (MDX articles,
WebGL demos), bundled with **Rspack 2** and published to GitHub Pages at
<https://tolokoban.github.io/portfolio/>.

Code conventions are in [STYLE.md](STYLE.md). Read it before writing code.

## Commands

| Command | What it does |
| --- | --- |
| `pnpm start` | Dev server (`rspack serve`) on the `port` field of `package.json` (46644) |
| `pnpm build` | Production build into `build/` |
| `pnpm deploy` | Build, then push `build/` to the `gh-pages` branch. **Publishes the live site.** |
| `pnpm generate` | `optimize` (images) + `routes` (route files). The build runs this automatically |
| `pnpm test` | Jest (`*.test.ts(x)` / `*.spec.ts(x)`, ts-jest, jsdom) |
| `pnpm exec tsc --noEmit -p .` | Type check. Neither the build nor the dev server type-checks |

pnpm is the package manager (`node_modules` uses the pnpm layout). A
`package-lock.json` is also committed, so keep it in sync after dependency
changes (`npm install --package-lock-only --ignore-scripts`).

`@tolokoban/tgd` is a local dependency (`file:../game/tgd2`), so that sibling
checkout must exist for installs to work.

### Known pre-existing failures

- `tsc` reports about 10 errors: `--custom-*` CSS variables not accepted by
  `CSSProperties` (in `src/ui/...` and `ColorAttributeSelector`), and
  `Vec4`/`Vec3` in `src/webgl2/calc.ts`.
- Because ts-jest type-checks, `src/webgl2/data.test.ts` fails on the
  `calc.ts` error.

These do not block the build (SWC strips types without checking them).

## Build (rspack.config.mjs)

- The config is ESM (`.mjs`) because `@rspack/core` 2 is ESM-only. It needs
  Node `^20.19 || >=22.12`.
- `GeneratePlugin` runs `npm run generate` synchronously **once** before the
  first compilation (`beforeRun` / `watchRun`). If you add generated files,
  hook them into the `generate` script, not into the config.
- TS/TSX goes through `builtin:swc-loader` (target `es2015`, automatic JSX
  runtime). `.mdx` goes through `@mdx-js/loader` and then SWC.
- CSS uses Rspack's native CSS (`type: "css/auto"`). `*.module.css` files are
  CSS modules and other `.css` files are global. `namedExports: false` keeps
  `import Style from "./X.module.css"` working, so don't switch to named
  imports. CSS is extracted to `build/css/`.
- Asset rules: images and `mp4` → `asset` (`img/`), fonts → `fnt/`,
  `.bin` → `bin/`. `.vert`, `.frag`, `.md`, `.txt`, `.py` and `.sh` are
  imported as **raw strings** (`asset/source`). Typings live in
  `src/global.d.ts`.
- `public/` is copied verbatim into `build/`, except `public/index.html`, which
  is the HTML template. `public/apps/*` holds prebuilt third-party apps that
  are already minified. They are flagged `minimized` so the minifier skips them.
- Only `@/` → `src/` is aliased. tsconfig also declares `"*": ["src/*"]`, but
  the bundler does **not** resolve bare `src`-relative imports, so always use
  `@/...` or relative paths.

## Architecture

```text
src/
  index.tsx        entry: loads fonts, applies the Theme, mounts <App/>, removes #splash
  app/             file-system routes (build-react-routes) — see below
  components/      site components (one folder per component)
  ui/              in-house UI kit: Theme, views (Button, Dialog, Tabs, icons…), hooks
  lang/, hooks/    language state + useTanslationGeneric (translation loader)
  state/           global atomic state (@tolokoban/react-state)
  gfx/             SOURCE images (png/jpg) for the image pipeline
  generated/       OUTPUT of the image pipeline — git-ignored, never edit
  webgl2/          small WebGL2 helpers (vectors, painters)
  fonts/           self-hosted Dosis font loader
scripts/           optimize-images.mjs (sharp) and fs utils
@templates/        scaffolding templates (component, page, layout, translation)
public/            static files + index.html template (with the splash screen)
```

### Routing (`src/app`)

- `build-react-routes ./src/app` generates `src/app/index.tsx`, `routes.ts` and
  `types.ts`. **Never edit these files by hand.** They are rewritten on every
  build, so expect them to show up in `git status` after a build.
- A folder is a route. It contains `page.tsx` or `page.mdx`, and optionally
  `layout.tsx` and `loading.tsx`. Folders named `_` are private (not routes).
- Language variants are sibling files: `page.en.mdx`, `page.fr.mdx`,
  `loading.en.tsx`. The plain `page.mdx` is the fallback. Its language varies
  per article (sometimes French with `.en`, sometimes English with `.fr`).
- Routing is hash-based (`#/work/articles/Tgd2`). Navigate with `makeGoto(path)`
  or `goto(path)` and test with `isRouteEqualTo(path)` from `@/app/routes`.
  `RoutePath` is a typed union of all routes.

### Image pipeline

`scripts/optimize-images.mjs` walks `src/gfx/**/*.{png,jpg}` and writes into
`src/generated/<same path>`: `.avif`, `.medium.*` (640px), `.small.*` (320px),
plus a `<Name>.tsx` component that wraps `ResponsiveImage`. Import it as
`import CodeTgd2 from "@/generated/code/Tgd2"`. Files are only regenerated when
the source is newer.

### Adding a "work" article

This follows the pattern of commit `a520096`:

1. `src/app/work/articles/<Name>/page.mdx` (+ `page.fr.mdx` or `page.en.mdx`).
   Local media sits next to it (`screenshot.webp`, `*.mp4`) and is imported in
   the MDX.
2. Vignette source `src/gfx/code/<Name>.png` (or `src/gfx/work/...`), 320×240.
3. Register it in `src/app/_/Welcome/Welcome.tsx` (`VIGNETTES.code` / `.gfx`)
   and, for the work index, in `src/app/work/page.mdx` (`<Vignettes images=…>`).
4. Run `pnpm build` or `pnpm start` to regenerate routes and images.

`DEV.md` describes the same flow but has outdated paths
(`src/components/Welcome`, `gfx/images/...`).

### Translations

For TSX content, a `translation/` folder holds `en/index.tsx` (the default, a
plain object) and `fr/index.tsx` (`const FR: typeof EN = {...}`). Its
`index.ts` exports a `useTranslation()` hook built on `useTanslationGeneric`
(the typo is in the real name). Other languages are lazy-loaded. Use the
`@templates/translation` scaffold.

## Gotchas

- Rspack treats a missing re-export as an **error**, whereas webpack only warned.
  Re-export types with `export { type Foo }` (for example `src/ui/hooks/index.ts`).
- `src/app/index.tsx`, `routes.ts` and `types.ts` change whenever routes
  change. Commit them together with the route change.
- Big videos in articles (some are 50+ MB) trigger the size warnings in the
  build output. Those warnings are expected.
