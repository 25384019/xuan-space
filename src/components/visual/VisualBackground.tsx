import { lazy, Suspense } from 'react'
import './visual-background.css'

const OrbitalSphereBackground = lazy(() =>
  import('@designcodeio/threeui/components/OrbitalSphereBackground').then((module) => ({
    default: module.OrbitalSphereBackground,
  })),
)

export function VisualBackground() {
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion) {
    return <div className="visual-background visual-background--fallback" aria-hidden="true" />
  }

  return (
    <div className="visual-background" aria-hidden="true">
      <Suspense fallback={<div className="visual-background visual-background--fallback" aria-hidden="true" />}>
        <OrbitalSphereBackground
          speed={0.12}
          particleSize={0.009}
          particleOpacity={0.42}
          orbitOpacity={0.2}
          scale={0.88}
          haloOpacity={0.16}
          hue={185}
        />
      </Suspense>
    </div>
  )
}
