# Xuan Space Gravity Index Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the Gravity Index homepage, centred on one orbital ThreeUI scene with authored depth and a non-card archive rhythm.

**Architecture:** `Hero` owns five stacked visual layers and renders the only WebGL component through `VisualBackground`. Content sections become focused HTML components after the Hero, each with its own editorial layout. CSS owns all composition, fallback, motion timing, and responsive behaviour.

**Tech Stack:** React 19, TypeScript strict, Vite, CSS custom properties, ThreeUI Community, Cloudflare Workers Static Assets.

## Global Constraints

- Use exactly one ThreeUI component: `OrbitalSphereBackground` from `@designcodeio/threeui/components/OrbitalSphereBackground`.
- Do not add assets, a second canvas, Tailwind, routing, state management, CMS, or a component library.
- Preserve Worker routes, Cloudflare configuration, authentication, database, `falling-bar-ff32`, production state, and the current branch.
- Keep the scene outside document flow, visual-only, and non-interactive.
- Verify 1440×900, 768×1024, 360×800, reduced motion, fallback, console, `/`, `/api/health`, lint, TypeScript, build, preview, and bundle output.

---

### Task 1: Replace the atmospheric scene with the orbital subject

**Files:**
- Modify: `src/components/visual/VisualBackground.tsx`
- Modify: `src/components/visual/visual-background.css`
- Modify: `src/styles/tokens.css`

**Consumes:** current lazy-loading fallback boundary.

**Produces:** `VisualBackground` renders one lazy `OrbitalSphereBackground`; reduced motion renders `.visual-background--fallback` without mounting WebGL.

- [ ] **Step 1: Confirm the current subpath export and type-check it**

Run:

```powershell
rg -n "OrbitalSphereBackground" node_modules/@designcodeio/threeui/lib-dist/package-components
```

Expected: the component export is present before editing imports.

- [ ] **Step 2: Replace the lazy import**

```tsx
const OrbitalSphereBackground = lazy(() =>
  import('@designcodeio/threeui/components/OrbitalSphereBackground').then((module) => ({
    default: module.OrbitalSphereBackground,
  })),
)
```

Retain `Suspense`, runtime reduced-motion check, and fallback div. Do not import `three` directly.

- [ ] **Step 3: Set the scene as a contained composition layer**

Set the scene wrapper to `position:absolute`, `z-index:2`, `pointer-events:none`, and use desktop/tablet/mobile width and transform rules. Keep `overflow:hidden` only on the scene wrapper, not on typography containers.

- [ ] **Step 4: Add the static orbital fallback**

Use CSS `radial-gradient`, two `border` rings via pseudo-elements, and the existing grain layer. The fallback must resemble a quiet orbital mark while keeping all HTML readable.

- [ ] **Step 5: Verify the isolated task**

Run:

```powershell
npm run lint
npx tsc -b
```

Expected: both exit 0.

### Task 2: Rebuild Hero into five visual depth layers

**Files:**
- Modify: `src/components/home/Hero.tsx`
- Modify: `src/components/home/ProfilePanel.tsx`
- Modify: `src/components/home/home.css`

**Consumes:** `VisualBackground` from Task 1.

**Produces:** `Hero` with back-title, scene, front-title, annotation, indexed navigation, and scroll cue.

- [ ] **Step 1: Split semantic Hero elements by depth**

Use this DOM ordering:

```tsx
<section className="hero-stage" id="index">
  <HeroHeader />
  <p className="hero-label">Personal orbit / 2026</p>
  <h1 className="hero-title hero-title--back">Xuan</h1>
  <VisualBackground />
  <p className="hero-title hero-title--front">Space</p>
  <ProfilePanel />
  <a className="scroll-indicator" href="#profile">Enter index ↓</a>
</section>
```

The scene must be after the back title and before the front title in the DOM and have z-index between their CSS layers.

- [ ] **Step 2: Turn navigation into an index**

Retain real anchors but render `01 Index`, `02 Profile`, `03 Work`, `04 Links`. On widths at or below 768px, show only the brand and `Menu`.

- [ ] **Step 3: Convert profile to an annotation**

Retain DZX, Computer Science, and the tags. Add a decorative leader line with CSS from the profile block toward the scene. No background, border-radius, shadow, or card dimensions.

- [ ] **Step 4: Implement deliberate spatial coordinates**

On desktop place the scene around `left:54%`, `top:16%`, `width:min(44vw, 42rem)`; back title at left; front title overlaps the scene lower-left; annotation aligns to scene lower-right. Tablet centres the scene; phone changes all three to a vertical sequence in normal readable positions.

- [ ] **Step 5: Implement one drift timeline**

Use only opacity and transform keyframes: header, back title, scene, front title, annotation, then scroll cue. In `prefers-reduced-motion`, set each to final state without animation.

- [ ] **Step 6: Verify no horizontal overflow**

Use Chrome DevTools Protocol at 360×800 to read:

```js
({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth })
```

Expected: equal values.

### Task 3: Give the archive sections distinct rhythms

**Files:**
- Replace: `src/components/home/SectionIndex.tsx`
- Modify: `src/components/home/home.css`

**Consumes:** Hero anchors from Task 2.

**Produces:** profile story, interest orbit-lines, work archive rows, and links exit text.

- [ ] **Step 1: Replace generic mapped sections with four semantic sections**

Create `ProfileStory`, `InterestsIndex`, `WorkArchive`, and `LinksExit` in the same module as small named functions. Use placeholder data only; do not create fake URLs.

- [ ] **Step 2: Implement interests as typographic orbit lines**

Render five `<li>` items: Computer Science, AI, Music, Fitness, Photography. Each has an index and a different `--orbit-width` custom property. Use lines and type scale, never cards.

- [ ] **Step 3: Implement work as a table-like archive**

Render three placeholder rows with year, title, and type. Use semantic list markup with CSS grid rather than a visual card grid.

- [ ] **Step 4: Implement links as exits**

Render non-linked, clearly labelled placeholders in oversized text. Apply only letter-spacing/translate hover states, not buttons or cards.

- [ ] **Step 5: Validate anchors and layout**

Run the preview and request `/#profile`, `/#work`, and `/#links`; each anchor must exist in rendered HTML.

### Task 4: Production-like validation and delivery

**Files:**
- Modify: `.gitignore` only if local screenshots need to remain ignored.

- [ ] **Step 1: Build and preview**

Run:

```powershell
npm run lint
npx tsc -b
npm run build
npm run preview -- --host 127.0.0.1
```

Expected: each completes successfully.

- [ ] **Step 2: Validate routes and console**

Request `/` and `/api/health`; expect 200 and the unchanged health JSON. Use Chrome DevTools Protocol logs after page load; expect no warnings or errors.

- [ ] **Step 3: Capture and inspect viewports**

Capture 1440×900, 768×1024, 360×800 after animations settle. Check the scene is subject at desktop, centred at tablet, vertical at mobile, and that no screenshot contains clipped text.

- [ ] **Step 4: Validate reduced motion and fallback**

Emulate `prefers-reduced-motion: reduce`; expect no mounted canvas, one fallback element, all foreground text, and `animationName === 'none'` for Hero reveal elements.

- [ ] **Step 5: Record bundle and security state**

Record client and orbital-scene gzip sizes from `npm run build`; run `npm audit --omit=dev`; do not run automatic audit fixes.

- [ ] **Step 6: Commit and push**

```powershell
git add src .gitignore docs/superpowers
git commit -m "feat: build gravity index experience"
git push gitee feature/xuan-space-phase2-homepage
git push origin feature/xuan-space-phase2-homepage
```

Expected: both remote branches reference the new commit; no deployment or merge occurs.

## Plan self-review

- Scene replacement, five Hero layers, responsive layouts, motion/fallback, and all four archive rhythms map to Tasks 1–3.
- Runtime/API/bundle/screenshot/console checks map to Task 4.
- The plan contains no additional WebGL scene, data system, external asset, or production change.
