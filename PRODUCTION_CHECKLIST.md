# Production Checklist

Last reviewed: 2026-09-16

Use this checklist for changes intended for the production N3uralia website. It describes release gates; it is not a claim that every branch or deployment is automatically production-ready.

## 1. Scope and source control

- Start structural, destructive, dependency, auth, or broad route changes on a dedicated branch.
- Keep the diff limited to the intended change.
- Check for stale imports, routes, assets, redirects, and generated files before committing.
- Do not merge unrelated dependency upgrades into a feature or cleanup PR.

## 2. Install and repository gates

Use the package manager pinned in `package.json`:

```bash
pnpm install --frozen-lockfile
pnpm agent:check
pnpm build
```

`pnpm agent:check` currently runs:

- portal contract checks;
- recognition asset contract checks;
- TypeScript `tsc --noEmit`;
- ESLint.

CI additionally runs:

```bash
pnpm audit --audit-level high
```

A successful build is required but does not by itself establish runtime or visual correctness.

## 3. Route and behavior checks

For changes affecting public pages, redirects, metadata, middleware, or APIs:

- verify the intended route returns the expected status;
- verify retired routes redirect or return 404 as designed;
- verify canonical and hreflang metadata where SEO behavior changed;
- verify sitemap/robots output when discovery behavior changed;
- verify direct public asset URLs when assets changed;
- verify protected APIs still enforce their intended authentication contract.

## 4. Vercel Preview gate

Before merging a non-trivial change:

- confirm the Vercel Preview deployment reaches `READY`;
- inspect build output for errors and relevant warnings;
- inspect runtime logs for errors, warnings, or fatal events related to the changed surface;
- perform targeted preview route checks;
- perform desktop/mobile visual QA for UI changes.

Do not promote a branch while the deployment is still building or while a relevant runtime error is unresolved.

## 5. Production gate

After merge to `main`:

- confirm the production deployment corresponds to the expected merge commit;
- confirm Vercel reports the deployment `READY` with no alias error;
- verify `www.n3uralia.com` and the intended canonical routes;
- inspect production runtime logs for release-related errors;
- verify any redirect/404 behavior introduced by the change;
- retain the previous deployment as the rollback candidate until the new release is validated.

## 6. Data, security, and destructive changes

For Supabase, auth, schema, storage, or destructive repository changes:

- identify the canonical source of truth before editing;
- preserve rollback or migration paths where data can be lost;
- do not expose secrets, service-role keys, private prompts, or privileged logic to browser bundles;
- confirm storage paths and public/private access semantics explicitly;
- do not delete code or assets until imports, dynamic references, framework discovery, scripts, tests, and deployment references have been checked.

## 7. Release evidence

A production-ready PR should state what was validated and what was not. Useful evidence includes:

- commit SHA;
- Vercel preview deployment ID;
- CI/check status;
- build/type/lint results;
- targeted route/API checks;
- runtime-log result;
- visual QA evidence for UI work;
- remaining known risks.
