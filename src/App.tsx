import { Hero } from './components/home/Hero'
import { VisualBackground } from './components/visual/VisualBackground'

function App() {
  return (
    <main className="page-shell">
      <VisualBackground />
      <div className="page-shell__content">
        <Hero />
      </div>
    </main>
  )
}

export default App
