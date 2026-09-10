import { lazy, Suspense } from 'react'
import './visual-background.css'

const NebulaBackground = lazy(() => import('@designcodeio/threeui/components/NebulaBackground').then((module) => ({ default: module.NebulaBackground })))

export function VisualBackground() {
  const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) return <div className="visual-background visual-background--fallback" aria-hidden="true" />

  return (
    <div className="visual-background" aria-hidden="true">
      <Suspense fallback={<div className="visual-background visual-background--fallback" aria-hidden="true" />}>
        <NebulaBackground mode="dark" hue={155} saturation={0.7} brightness={0.75} />
      </Suspense>
    </div>
  )
}
