import { Hero } from './components/home/Hero'
import { SectionIndex } from './components/home/SectionIndex'
import { VisualBackground } from './components/visual/VisualBackground'

function App() {
  return (
    <main className="page-shell">
      <VisualBackground />
      <div className="page-shell__content">
        <Hero />
        <SectionIndex />
        <footer className="site-footer"><span>Built for the curious</span><span>Scroll to wander ↓</span></footer>
      </div>
    </main>
  )
}

export default App
