import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const visualBackgroundPath = new URL('../src/components/visual/VisualBackground.tsx', import.meta.url)
const heroPath = new URL('../src/components/home/Hero.tsx', import.meta.url)

test('uses the single OrbitalSphereBackground Community component', async () => {
  const source = await readFile(visualBackgroundPath, 'utf8')

  assert.match(source, /@designcodeio\/threeui\/components\/OrbitalSphereBackground/)
  assert.match(source, /OrbitalSphereBackground/)
  assert.doesNotMatch(source, /NebulaBackground/)
})

test('implements an accessible mobile index menu', async () => {
  const source = await readFile(heroPath, 'utf8')

  assert.match(source, /useState/)
  assert.match(source, /aria-expanded/)
  assert.match(source, /hero-header__mobile-nav/)
})
