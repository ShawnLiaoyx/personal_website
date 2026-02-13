# Personal Site (Portfolio + Blog)

Astro + TypeScript personal website with:

- Visual portfolio cards and project detail pages.
- Blog posts via typed MDX content collections.
- URL-synced filtering for work and blog lists.
- Static deployment to GitHub Pages.

## Stack

- Astro 5
- TypeScript (strict)
- MDX (`@astrojs/mdx`)
- Vitest (unit tests)
- GitHub Actions (CI + deploy)

## Dependency Isolation

This project is designed to avoid global project dependencies.

- Local dependencies only (`node_modules`).
- Pinned Node version in `.nvmrc`.
- Dev container included in `.devcontainer/`.
- Docker-based commands work even if host Node is unavailable.

## Local Development

### Option 1: VS Code Dev Container (recommended)

1. Open this folder in VS Code.
2. Run `Dev Containers: Reopen in Container`.
3. Inside container:

```bash
npm run dev -- --host 0.0.0.0
```

### Option 2: Docker CLI

Install deps:

```bash
docker run --rm -u $(id -u):$(id -g) -v "$PWD":/workspace -w /workspace node:22-alpine sh -lc "npm ci"
```

Run dev server:

```bash
docker run --rm -it -u $(id -u):$(id -g) -p 4321:4321 -v "$PWD":/workspace -w /workspace node:22-alpine sh -lc "npm run dev -- --host 0.0.0.0"
```

## Scripts

- `npm run dev`: start dev server.
- `npm run check`: run Astro type/content checks.
- `npm run test`: run unit tests.
- `npm run build`: build static output in `dist/`.
- `npm run preview`: preview production build.

## Content Editing

- Portfolio entries: `src/content/work/*.md`
- Blog entries: `src/content/blog/*.mdx`

Both are schema-validated by `src/content.config.ts`.

## CI / Deploy

- CI workflow: `.github/workflows/ci.yml`
- Deploy workflow: `.github/workflows/deploy.yml`

On push to `main`, the site is built and deployed to GitHub Pages.
