import { Hero } from './components/home/Hero'
import { SectionIndex } from './components/home/SectionIndex'

function App() {
  return (
    <main className="page-shell">
      <div className="page-shell__content">
        <Hero />
        <SectionIndex />
        <footer className="site-footer"><span>Built for the curious</span><span>Archive / 2026</span></footer>
      </div>
    </main>
  )
}

export default App
