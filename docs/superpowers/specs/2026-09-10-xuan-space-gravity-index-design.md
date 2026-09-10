# Xuan Space Gravity Index Design

## Goal

Replace the atmospheric Nebula hero with an authored `Gravity Index` scene: a single orbital visual becomes the organising centre for title, identity, navigation, and the later archive sections.

## Design thesis

`DZX` is the gravitational source of a private, living index. Computer Science, AI, Music, Fitness, and Photography are orbits; work is the trace they leave; links are exits to the external world. The first screen must read as an encounter with that system, not as an information panel over a decorative effect.

## Hero composition

The hero remains `min-height: 100svh` and contains one absolute visual scene. It uses five visual layers:

1. Deep blue-charcoal base and subtle grain.
2. Back title: oversized neutral-sans `XUAN`.
3. One `OrbitalSphereBackground` scene, centred near 64vw / 48vh on desktop.
4. Front title: serif italic `Space`, overlapping the lower edge of the orbital scene.
5. Header, profile annotation, and scroll cue.

The scene is a subject, not a wallpaper. It intersects `XUAN`; `Space` sits in front of it. The profile becomes a small annotation connected to the orbital body by a fine leader line. Header navigation is indexed as `01 Index`, `02 Profile`, `03 Work`, `04 Links` rather than styled as SaaS navigation.

## Responsive composition

- **1440 × 900:** Scene lives right of centre; `XUAN` crosses behind it, `Space` crosses in front. Profile annotation sits at the scene's lower-right edge. The upper-right remains deliberately quiet.
- **768 × 1024:** Scene moves to centre. `XUAN` appears above it, `Space` overlaps its lower edge, then the profile annotation follows beneath. Header shows brand and `Menu`.
- **360 × 800:** Scene is contained to 280–320px, never contributes to layout width, and has no pointer interaction. `XUAN`, scene, and `Space` form a vertical sequence. Profile becomes normal flow content below. Tags may take two lines. Scroll copy is `Enter index ↓`.

## Scene and motion

Replace `NebulaBackground` with exactly one ThreeUI Community component:

```ts
import { OrbitalSphereBackground } from '@designcodeio/threeui/components/OrbitalSphereBackground'
```

The installed package exports this path, is MIT licensed, and has no additional runtime assets. The scene is visual-only and does not receive pointer events. It must retain the existing lazy import, intersection-aware lifecycle supplied by ThreeUI, CSS fallback, and one-scene rule.

Initial motion follows one `drift` rhythm: header fades, `XUAN` reveals, the scene slowly establishes, `Space` then enters in front, profile annotation follows, and the scroll cue arrives last. Reduced motion never mounts continuously animated WebGL; it renders a CSS static orbital mark and all foreground content at final positions.

## Page rhythm

The hero is followed by four intentionally different quiet sections with no additional WebGL or card grid:

- `01 / Profile`: sparse identity slice and short self-description.
- `02 / Interests`: five uneven typographic orbit-lines, not five cards.
- `03 / Work`: a rational archive table with year, title, and type placeholders.
- `04 / Links`: full-width exit words rather than social cards.

## Constraints

- Preserve React/Vite/TypeScript, Worker API contract, Cloudflare configuration, and production state.
- Do not modify `falling-bar-ff32`, database, authentication, or production deployment.
- Do not add Tailwind, a router, a state library, a CMS, a second canvas, or a second ThreeUI component.
- Validate desktop, tablet, and mobile for no horizontal overflow; verify fallback, reduced motion, console, API, lint, TypeScript, build, preview, and bundle output.

## Acceptance criteria

- A five-second description can be: “text passes through an orbital private system.”
- The scene is a recognisable visual subject rather than a background texture.
- Back title / scene / front title are visibly distinct depth layers.
- Profile is an annotation, not a card or standard right column.
- Mobile is independently composed and has no horizontal overflow.
- Only one canvas/WebGL scene is present, and fallback preserves every essential item of HTML content.
