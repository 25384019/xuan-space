# Xuan Space Phase 2 Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Establish the Xuan Space design system and resilient homepage visual foundation with one isolated ThreeUI background layer.

**Architecture:** Semantic HTML and CSS provide the complete readable page first. React composes `Hero` and `ProfilePanel`, while `VisualBackground` lazy-loads the single ThreeUI `NebulaBackground` enhancement behind the content and falls back to a static CSS layer for reduced motion or unavailable WebGL. The Worker keeps `/api/health` explicit and routes unknown API requests as JSON errors.

**Tech Stack:** React 19, TypeScript strict, Vite, Cloudflare Workers Static Assets, ThreeUI 1.2.0, CSS custom properties, npm.

## Global Constraints

- Work on `feature/xuan-space-phase2-homepage` from `master @ 259b259`.
- Do not add real media, social links, authentication, storage, production deployment, or complex abstractions.
- Use one Community ThreeUI component only: `NebulaBackground` from `@designcodeio/threeui/components/NebulaBackground`.
- Keep all core content independent of ThreeUI and support reduced motion.
- Preserve strict TypeScript and do not add `any` or `@ts-ignore`.
- Do not run `npm audit fix --force`.

---

### Task 1: Define tokens and global styles

**Files:**
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`
- Modify: `src/main.tsx`
- Remove: template-only `src/index.css` import and obsolete starter style dependencies where no longer referenced

Add semantic color, typography, spacing, radius, elevation, motion, and layout tokens. Add reset, focus-visible, responsive root rules, and `prefers-reduced-motion` rules. Import global styles once from `main.tsx`.

Validation: `npm run lint` and `npx tsc -b` pass.

### Task 2: Build semantic homepage components

**Files:**
- Create: `src/components/home/ProfilePanel.tsx`
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/home.css`
- Create: `src/App.tsx`

Build `main > section.hero > ProfilePanel` with accessible placeholder identity content, a status eyebrow, heading, short description, and non-production contact action. Keep content readable without images or WebGL. Use CSS tokens and fluid sizing with `clamp()`. Ensure 360px, 768px, and 1440px layouts have no horizontal overflow.

Validation: `npm run lint`, `npx tsc -b`, and a local browser check of the three viewport widths.

### Task 3: Add the isolated ThreeUI visual layer

**Files:**
- Create: `src/components/visual/VisualBackground.tsx`
- Create: `src/components/visual/visual-background.css`
- Modify: `src/App.tsx`
- Modify: `package.json` only if a dependency import requires a package adjustment

Use `lazy`/`Suspense` to isolate `NebulaBackground` with a dynamic import from the exact component path. Render it as `aria-hidden="true"` behind the hero. Gate enhancement on reduced-motion and WebGL availability; retain the CSS fallback in all other cases. Do not add ThreeUI CSS globally unless the component requires it after build verification.

Validation: build succeeds, content renders with JS disabled or visual component unavailable, and reduced-motion mode does not mount the animated layer.

### Task 4: Harden Worker API routing

**Files:**
- Modify: `worker/index.ts`
- Modify: `wrangler.jsonc` only if the installed template needs explicit `run_worker_first` for `/api/*`

Implement `GET /api/health` as `{ status: "ok", service: "xuan-space" }` with `Content-Type: application/json; charset=utf-8` and `Cache-Control: no-store`. Return 405 with `Allow: GET` for other methods on that route, and JSON 404 for unknown `/api/*`. Preserve static asset fallback for non-API routes.

Validation: local dev and preview requests verify GET 200, POST 405, unknown API 404, and normal page 200.

### Task 5: Audit, preview, and final verification

**Files:**
- Modify: documentation only if verification records require it

Run:

```powershell
npm install
npm audit
npm audit --json
npm audit --omit=dev
npm run lint
npx tsc -b
npm run build
npm run preview
```

Record actual dependency versions, audit classification, ThreeUI import path, asset requirement, build output, and changed files. Verify 360px/768px/1440px, reduced motion, browser console, API behavior, clean Git status, and no production deployment. Commit each completed task separately and finish with a final verification commit if needed.
