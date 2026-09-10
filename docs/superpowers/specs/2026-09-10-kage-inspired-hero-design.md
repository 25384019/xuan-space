# Kage-inspired Xuan Space Hero

## Goal

Refine the existing Xuan Space homepage toward the atmosphere of ThreeUI's Kage landing page without copying its full page implementation or asset bundle.

## Direction

Use a dark editorial hero with oversized two-line typography, strong negative space, a restrained mint accent, and one lightweight ambient ThreeUI background. Keep Xuan Space identity content in a floating profile panel rather than importing Kage's content or navigation.

## Structure

`App` renders a semantic `main` containing a decorative `VisualBackground`, a minimal top navigation, the `Hero`, and a compact footer status row. `Hero` owns the headline and supporting copy; `ProfilePanel` owns identity content and the single CTA. Decorative layers are `aria-hidden` and never carry required text.

## Motion and resilience

Use opacity/transform-only entrance transitions and subtle hover feedback. `prefers-reduced-motion: reduce` disables entrance and ambient animation. ThreeUI remains dynamically isolated and falls back to CSS if unavailable; layout dimensions do not depend on the canvas.

## Responsive behavior

Desktop uses an asymmetric two-column composition. At narrow widths it becomes a vertical editorial flow with the profile panel below the headline, no fixed viewport height, and no horizontal overflow.

## Non-goals

Do not import `KageLandingPage`, copy Kage source/assets, add real personal media, add production deployment, or modify the old `falling-bar-ff32` project.

## Acceptance

The refined page passes lint, strict TypeScript, build, preview, health API checks, and visual checks at 360px, 768px, and 1440px. Production deployment remains unrun.
