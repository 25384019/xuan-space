import { Hero } from './components/home/Hero'
import { VisualBackground } from './components/visual/VisualBackground'

function App() {
  return (
    <main className="page-shell">
      <VisualBackground />
      <div className="page-shell__content">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="site-nav__brand" href="/" aria-label="Xuan Space home"><span aria-hidden="true">×</span> Xuan Space</a>
          <span className="site-nav__edition">Personal archive / 01</span>
        </nav>
        <Hero />
        <footer className="site-footer"><span>Built for the curious</span><span>Scroll to wander ↓</span></footer>
      </div>
    </main>
  )
}

export default App
