import { ProfilePanel } from './ProfilePanel'
import { VisualBackground } from '../visual/VisualBackground'
import './home.css'

const navItems = [
  ['01', 'Index', '#index'],
  ['02', 'Profile', '#profile'],
  ['03', 'Work', '#work'],
  ['04', 'Links', '#links'],
] as const

export function Hero() {
  return (
    <section className="hero-stage" id="index" aria-labelledby="hero-title">
      <header className="hero-header">
        <a className="hero-header__brand" href="#index" aria-label="Xuan Space home"><span aria-hidden="true">⊗</span>Xuan Space</a>
        <nav className="hero-header__nav" aria-label="Primary navigation">
          {navItems.map(([index, label, href]) => <a href={href} key={href}><i>{index}</i>{label}</a>)}
        </nav>
        <button className="hero-header__menu" type="button" aria-label="Open menu">Menu</button>
      </header>

      <p className="hero-label">Personal orbit / 2026</p>
      <h1 className="hero-title hero-title--back" id="hero-title">Xuan</h1>
      <VisualBackground />
      <p className="hero-title hero-title--front" aria-hidden="true">Space</p>
      <p className="hero-copy__lede">A living personal index of ideas, traces, and small worlds in motion.</p>
      <ProfilePanel />
      <a className="scroll-indicator" href="#profile"><span>Enter index</span><i aria-hidden="true">↓</i></a>
    </section>
  )
}
