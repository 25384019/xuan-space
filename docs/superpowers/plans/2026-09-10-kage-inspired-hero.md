# Kage-inspired Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refine the Xuan Space hero into a more cinematic Kage-inspired editorial composition while preserving the existing resilient architecture.

**Architecture:** Keep `Hero`, `ProfilePanel`, and `VisualBackground` as the only feature boundaries. Add a lightweight navigation/status layer in `App`, move all presentation into the existing token and component CSS files, and preserve the lazy ThreeUI background as decorative enhancement.

**Tech Stack:** React 19, TypeScript, Vite, CSS custom properties, ThreeUI `NebulaBackground`.

## Global Constraints

- Do not copy Kage source or assets.
- Keep the single `NebulaBackground` visual layer and CSS fallback.
- Do not add real personal media or production deployment.
- Preserve semantic HTML, visible focus, reduced-motion support, and fluid mobile layout.

---

### Task 1: Add editorial chrome and content hierarchy

**Files:** `src/App.tsx`, `src/components/home/Hero.tsx`, `src/components/home/ProfilePanel.tsx`

- Add a semantic top bar with the Xuan Space mark and a non-interactive edition label.
- Add a compact footer/status row below the hero.
- Revise the hero copy to a two-line editorial headline and add `text-wrap: balance`.
- Keep the CTA pointing to the existing profile section and ensure the target exists.

Validation: `npx tsc -b` and `npm run lint` pass.

### Task 2: Apply Kage-inspired visual polish

**Files:** `src/styles/tokens.css`, `src/styles/global.css`, `src/components/home/home.css`, `src/components/visual/visual-background.css`

- Tune the palette toward ink black, warm haze, and one desaturated mint accent.
- Add subtle grain using a CSS-only overlay, layered radial light, asymmetrical spacing, and tinted shadows.
- Add transform/opacity entrance motion and hover/pressed states without animating layout properties.
- Keep mobile layout at natural height and remove horizontal overflow.

Validation: inspect 360px, 768px, and 1440px in preview; verify reduced-motion disables transitions and ambient enhancement.

### Task 3: Metadata and route safety

**Files:** `index.html`, `worker/index.ts`, `wrangler.jsonc`

- Add title, description, theme-color, and safe Open Graph metadata without inventing personal identity claims.
- Preserve health response headers and JSON unknown-API errors.
- Confirm `/api/*` remains worker-first and normal routes remain Static Assets.

Validation: preview checks for page 200, GET health 200, POST health 405 with `Allow: GET`, unknown API 404.

### Task 4: Verify and commit

**Files:** no additional files unless a verification issue requires a targeted correction

Run `npm run lint`, `npx tsc -b`, `npm run build`, `npm run preview`, and `npm audit --omit=dev`. Confirm browser console has no unexpected errors, Git status is clean, and production deployment is not run. Commit the implementation and push the feature branch.
