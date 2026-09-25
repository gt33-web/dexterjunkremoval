# dexterjunkremoval

Minimal Next.js foundation for Dexter Junk Removal. The temporary homepage is intentionally limited to the business name and a coming-soon message.

## Stack

Next.js App Router, React, TypeScript (strict mode), Tailwind CSS, and ESLint. Tailwind is loaded through the PostCSS plugin and `app/globals.css`.

## Local development

Use Node.js 24 LTS and pnpm 11.19.0.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000.

## Verification

```sh
pnpm lint
pnpm typecheck
pnpm build
```

To serve a production build locally, run `pnpm start` after building.

## Vercel deployment

Import `gt33-web/dexterjunkremoval` into Vercel and select `main` as the production branch. Use the repository root, the Next.js framework preset, and Node.js 24.x. Vercel detects pnpm from the committed lockfile; the build command is `pnpm build`. Keep the default output directory.

No environment variables or external services are required. No custom Vercel configuration is needed.

