# N3uralia Documentation

Last reviewed: 2026-09-16

This repository contains the production N3uralia web application. Keep active documentation small, current, and operational. Historical audits, implementation summaries, and one-off delivery reports belong in Git history rather than the active repository tree.

## Canonical documents

- `README.md` — product and repository overview.
- `AGENTS.md` — engineering and agent operating rules.
- `ARCHITECTURE.md` — application architecture and system boundaries.
- `DEVELOPMENT.md` — local development workflow.
- `ENVIRONMENT_SETUP.md` — environment configuration guidance.
- `DATABASE_SETUP.md` — database and Supabase setup notes.
- `SECURITY.md` — repository security posture and reporting guidance.
- `PRODUCTION_CHECKLIST.md` — current release and deployment gate.
- `CHANGELOG.md` — maintained change history where applicable.

## Current engineering baseline

- Framework: Next.js 15.5.25
- React: 19.1.9
- Package manager: pnpm 9.15.9
- TypeScript: 5.x
- Production deployment: Vercel
- Primary data/backend integration: Supabase
- Public routing: locale-scoped App Router pages under `app/[locale]`

The authoritative package and script versions are always in `package.json` and `pnpm-lock.yaml`. Do not copy dependency versions into new status documents unless there is a concrete operational reason.

## Required validation

Before a production merge, use the repository's existing gates:

```bash
pnpm install --frozen-lockfile
pnpm agent:check
pnpm build
```

`pnpm agent:check` runs the portal contract checks, TypeScript validation, and ESLint. CI also runs a high-severity dependency audit before build.

For changes that affect public routes or rendering, validate the Vercel Preview deployment and perform targeted route checks. For production changes, verify the final production deployment status and inspect runtime logs for errors or warnings relevant to the release.

## Documentation policy

Do not add generated files such as `*_FINAL.md`, `*_COMPLETE.md`, `*_STATUS.md`, delivery summaries, audit snapshots, or before/after reports to the repository root. If a temporary investigation needs a written artifact, keep it in the pull request or issue discussion unless it becomes durable operational documentation.

When a durable document is superseded, update or replace the canonical document instead of creating a second competing version.
