# Work Plan

## Objectives

- Portfolio-first personal website with a blog.
- Strong visual presentation for project images.
- Rich-text friendly publishing workflow.
- Fast filtering by tags/categories/year.
- Easy updates and static hosting.

## Technical Direction

- Framework: Astro + strict TypeScript.
- Content: Markdown/MDX with Astro content collections (typed schemas).
- Runtime: static output, no persistent application server required.
- Optional editor UI later: Decap CMS at `/admin`.

## Dependency Isolation Policy

- Keep dependencies project-local in `node_modules`.
- Pin Node version with `.nvmrc`.
- Enforce local package resolution with lockfile + `.npmrc`.
- Use dev container (`.devcontainer/devcontainer.json`) for fully isolated local dev.
- Use Docker for builds/checks when host Node is unavailable.
- No global installations performed without explicit user approval.

## Delivery Phases

1. Bootstrap and repository hygiene.
2. Home page with personal intro and highlighted portfolio/blog sections.
3. Portfolio and blog collection schemas with sample content.
4. Listing pages with URL-synced filter controls.
5. Detail pages for works/posts.
6. CI + GitHub Pages deployment automation.
7. Content editing workflow polish (templates, optional CMS).

## Version Control Plan

- Default branch: `main`.
- Feature branches: `feat/*`, `fix/*`, `content/*`.
- Pull requests required before merge.
- Protected `main` with required CI checks.

## Testing and Deployment Plan

### CI checks (pull request + main push)

- `npm ci`
- `npm run check`
- `npm run test`
- `npm run build`

### Deployment (push to main)

- Build static site artifact.
- Deploy to GitHub Pages via Actions workflow.

## GitHub Authentication Sequence

1. Build project and commit locally first.
2. Prepare remote and push command.
3. Ask user to run `gh auth login` using a repo-scoped token.
4. Push branch after authentication.
