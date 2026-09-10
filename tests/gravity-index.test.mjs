import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const visualBackgroundPath = new URL('../src/components/visual/VisualBackground.tsx', import.meta.url)

test('uses the single OrbitalSphereBackground Community component', async () => {
  const source = await readFile(visualBackgroundPath, 'utf8')

  assert.match(source, /@designcodeio\/threeui\/components\/OrbitalSphereBackground/)
  assert.match(source, /OrbitalSphereBackground/)
  assert.doesNotMatch(source, /NebulaBackground/)
})
