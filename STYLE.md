# Code style

These conventions were observed across the ~300 hand-written TS/TSX files in
`src/`. When this file and the surrounding code disagree, follow the
surrounding code.

## Formatting

Formatting is owned by **oxfmt**, configured in [.oxfmtrc.json](.oxfmtrc.json):
4 spaces, no semicolons, double quotes, `printWidth` 80 and `es5` trailing
commas. It covers TS/TSX, MDX, CSS, JSON, `.mjs` and Markdown.

- Run `pnpm format` before committing. `pnpm format:check` fails if anything
  is unformatted.
- Don't hand-format code or argue with the formatter's output. If a rule is
  wrong, change `.oxfmtrc.json` and reformat everything in its own commit.
- Generated files (`src/generated/`, `src/app/index.tsx`, `routes.ts`,
  `types.ts`), prebuilt apps (`public/apps/`) and `@templates/` are ignored.
- Commits that only reformat go into [.git-blame-ignore-revs](.git-blame-ignore-revs).

## Files and folders

- One component per folder, named in PascalCase:

    ```text
    components/Card/
      Card.tsx
      Card.module.css
      index.ts          // export { default } from "./Card"
    ```

    Start from `@templates/component-css-module`, which produces exactly this.

- Route files are lower-case and fixed (`page.tsx`, `page.mdx`, `layout.tsx`,
  `loading.tsx`, plus `.en` / `.fr` variants). Assets an article uses live in
  its route folder.
- Non-component modules are kebab-case or lower-case (`debounced-effect.ts`,
  `icons-list.ts`, `painter.ts`).
- Never hand-edit `src/generated/**`, `src/app/index.tsx`, `src/app/routes.ts`
  or `src/app/types.ts`.

## React components

```tsx
import React from "react"

import Style from "./Card.module.css"

export interface CardProps {
    className?: string
    image: string
    children: React.ReactNode
}

export default function Card({ className, image, children }: CardProps) {
    const [open, setOpen] = React.useState(false)
    return (
        <div className={join(className, Style.Card)}>
            <img className={Style.image} src={image} />
            <div>{children}</div>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
```

- **Function components exported with `export default function Name`.** Don't
  use arrow-function components or `React.FC`.
- Props go in `export interface <Name>Props`, destructured in the signature.
  Accept an optional `className` and merge it first.
- Hooks are called through the namespace: `React.useState`, `React.useEffect`
  and so on. Hooks are never imported by name.
- `join(...)` is a small helper **copied locally** at the bottom of each
  component file. It is not shared. Keep that pattern rather than adding a
  dependency such as `classnames`.
- Use the `@/` alias for cross-folder imports (`@/components/Article`,
  `@/ui`, `@/app/routes`) and relative imports inside a component folder.
- Import order: React first, then libraries and `@/` modules, then local
  files. The CSS module import is usually grouped with the local imports,
  but its exact position varies.

## CSS

- CSS modules only (`X.module.css`, imported as `import Style from`). A handful
  of older files use `styles`, but `Style` is the norm (47 to 6).
- The component's root class is named after the component in PascalCase
  (`.Card`, `.Article`). Other classes are camelCase (`.image`, `.switchOn`).
- Use theme variables instead of hard-coded palette colors:
  `var(--theme-color-primary-…)`, `--theme-color-neutral-…`,
  `--theme-color-on-…`. Component-level custom properties use the
  `--custom-` prefix. Both prefixes are whitelisted for inline `style` in
  `src/css.d.ts`.
- Global CSS is limited to `src/index.css`, the theme and the fonts.

## TypeScript

- `strict` is on. No `enum` (use string-literal unions, as with `RoutePath`
  and `HotKey`). Avoid `any`.
- Re-export types with `export { type Foo }` or `export type { Foo }`. Rspack
  fails the build on a plain re-export of a type.
- Runtime validation uses `@tolokoban/type-guards` (`isString`, …). Global
  state uses `AtomicState` from `@tolokoban/react-state`.
- Classes are fine for non-React code (WebGL painters, `Theme`, vector math).

## Content (MDX)

- Articles are `.mdx`. They import components (`@/components/Image`,
  `@/components/Flex`, `@/components/Vignettes`) and local media at the top.
- Write user-facing copy in both English and French when the section already
  has both variants.
