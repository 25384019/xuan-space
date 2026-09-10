# Xuan Space Immersive Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the SaaS-like hero with a full-viewport editorial stage and quiet follow-on sections inspired by Kage's composition method.

**Architecture:** `App` owns the page rhythm and section anchors. `Hero` owns the viewport stage with `HeroHeader`, `HeroCopy`, `HeroMeta`, and `ScrollIndicator`; `VisualBackground` remains one absolute lazy ThreeUI layer. Required content is HTML above the scene, and CSS provides the fallback.

**Tech Stack:** React 19, TypeScript strict, Vite, CSS custom properties, ThreeUI `NebulaBackground`, Cloudflare Workers Static Assets.

## Global Constraints

- Do not copy Kage branding, assets, source, or concrete visual content.
- Do not preserve the left-title plus right-large-card composition.
- Use exactly one ThreeUI Community component and no second WebGL scene.
- Keep Worker API contract, Cloudflare configuration, and `falling-bar-ff32` unchanged.
- No router, state library, CMS, database, authentication, production deployment, or merge.
- Validate 1440x900, 768x1024, and 360x800, including reduced motion and fallback.

---

### Task 1: Recompose the viewport hero

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/home/Hero.tsx`
- Replace: `src/components/home/ProfilePanel.tsx` with lightweight editorial metadata
- Modify: `src/components/home/home.css`

Implement the semantic structure `main > hero > VisualBackground + HeroHeader + HeroCopy + HeroMeta + ScrollIndicator`. Use `min-height: 100svh`, absolute scene layering, oversized `XUAN` and `SPACE` typography, top navigation links `INDEX`, `PROFILE`, `WORK`, `LINKS`, and a lower-right editorial profile block. Remove the large rounded card styling. Add a stable `#profile` target.

Validation: lint and `npx tsc -b` pass; no `profile-panel` card container remains in the hero.

### Task 2: Add page rhythm sections

**Files:**
- Create: `src/components/home/SectionIndex.tsx`
- Modify: `src/components/home/home.css`
- Modify: `src/App.tsx`

Add quiet sections with IDs `profile`, `interests`, `work`, and `links`. Each section uses a large section label and short placeholder copy, no extra WebGL and no fake personal links. Keep section layouts varied through spacing and rule alignment rather than repeated cards.

Validation: links navigate to existing anchors, page has no horizontal overflow at all target widths.

### Task 3: Make the visual layer a real scene backdrop

**Files:**
- Modify: `src/components/visual/VisualBackground.tsx`
- Modify: `src/components/visual/visual-background.css`
- Modify: `src/styles/global.css`
- Modify: `src/styles/tokens.css`

Make the canvas fill the hero, add foreground/midground/background z-index layers, tune the nebula options for a soft spatial palette, and retain CSS fallback plus reduced-motion handling. Add unified title/nav/meta reveal transitions using transform and opacity only.

Validation: reduced-motion final layout is static; fallback still shows all HTML; no new Three.js import or asset directory is added.

### Task 4: Validate, document, and commit

**Files:**
- Modify: `index.html` only if metadata needs adjustment
- Modify: no Worker files unless route verification exposes a regression

Run `npm run lint`, `npx tsc -b`, `npm run build`, `npm run preview`, and request `/` and `/api/health`. Capture screenshots at 1440x900, 768x1024, and 360x800; inspect console and reduced motion. Run `npm audit --omit=dev`; do not run `npm audit fix --force`, deploy, or merge. Commit the redesign and report changed files, bundle output, and verification results.
