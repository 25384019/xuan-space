# Xuan Space immersive hero redesign

## Intent

Replace the existing left-copy plus right-card hero with a complete viewport editorial stage inspired by the design method of ThreeUI Kage, without copying Kage branding, assets, source, or content.

## Composition

The page uses one `100svh` hero. A single ThreeUI Community visual fills the hero as an absolute scene. Semantic HTML sits above it in three layers: a thin top header, oversized `XUAN / SPACE` display type with supporting copy, and lightweight profile metadata offset toward the lower right. A bottom scroll cue completes the stage. No large rounded Profile card remains in the primary hero.

After the hero, add quiet placeholder sections for Profile, Interests, Work, and Links. These sections are content scaffolding only and do not create additional WebGL scenes.

## Visual language

Use soft ink black, warm atmospheric haze, desaturated mint accent, fine rules, subtle grain, editorial spacing, and a restrained typographic system. The hero should read as a digital experience rather than SaaS UI. Existing tokens and CSS fallback remain the base.

## Resilience and motion

ThreeUI remains one lazy-loaded decorative layer in `VisualBackground`. It never controls layout or required content. Use unified opacity/transform reveals for header, title, metadata, and scroll cue. Reduced motion renders the final static layout and CSS atmosphere without continuous ThreeUI animation.

## Responsive behavior

Desktop uses asymmetrical stage positioning. At 768px and below the header becomes `XUAN SPACE / MENU`, title remains visually dominant, and profile metadata moves below the title in document flow. At 360px it must have no horizontal overflow or canvas obstruction.

## Boundaries

Keep the Worker API contract, Cloudflare config, ThreeUI dependency, and `falling-bar-ff32` unchanged. Do not add a router, state library, CMS, database, real personal data, production deployment, or a second Three.js scene.

## Acceptance

Verify 1440x900, 768x1024, and 360x800 screenshots; lint, strict TypeScript, build, preview, `/`, `/api/health`, console, reduced motion, and fallback behavior. Do not merge or deploy.
