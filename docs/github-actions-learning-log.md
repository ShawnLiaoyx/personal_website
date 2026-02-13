# GitHub Actions Learning Log

This log records workflow edits and explains why each part exists.

## 2026-02-12

### Change set

- Updated `/.github/workflows/ci.yml`
- Updated `/.github/workflows/deploy.yml`

### What was added

- Added `workflow_dispatch` to CI so you can run checks manually.
- Added step summaries (`$GITHUB_STEP_SUMMARY`) in both workflows.
- Added explicit job names to make run history easier to scan.
- Added deployment result summary with published URL.

### Why this helps learning

- You can open one workflow run and read a short markdown summary of the pipeline intent.
- The summary shows each stage in plain language without reading YAML first.
- It also reinforces key practices:
  - `npm ci` for deterministic installs.
  - Separate build and deploy jobs for clearer responsibilities.
  - Artifact-based deploy flow for reproducibility.

### Workflow anatomy reference

- `on`: defines trigger events.
- `jobs`: independent units that run on separate runners.
- `needs`: enforces job order/dependency.
- `steps`: commands/actions executed in sequence within one job.
- `permissions`: minimum token scopes needed by the workflow.
- `concurrency`: prevents overlapping deploys from racing.

### How to inspect runs

1. Open the **Actions** tab in GitHub.
2. Pick `CI` or `Deploy` workflow.
3. Open the latest run.
4. Read **Summary** first (the markdown added via `$GITHUB_STEP_SUMMARY`).
5. Expand individual steps for full command logs.
