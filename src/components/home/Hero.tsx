import { useState } from 'react'
import { navigation, profile } from '../../data/profile'
import { ProfilePanel } from './ProfilePanel'
import { VisualBackground } from '../visual/VisualBackground'
import './home.css'

export function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section className="hero-stage" id="index" aria-labelledby="hero-title">
      <header className="hero-header">
        <a className="hero-header__brand" href="#index" aria-label="Xuan Space home"><span aria-hidden="true">⊗</span>Xuan Space</a>
        <nav className="hero-header__nav" aria-label="Primary navigation">
          {navigation.map(([index, label, href]) => <a href={href} key={href}><i>{index}</i>{label}</a>)}
        </nav>
        <button className="hero-header__menu" type="button" aria-expanded={isMenuOpen} aria-controls="mobile-index" onClick={() => setIsMenuOpen((isOpen) => !isOpen)}>{isMenuOpen ? 'Close' : 'Menu'}</button>
      </header>

      <nav className="hero-header__mobile-nav" id="mobile-index" aria-label="Mobile navigation" hidden={!isMenuOpen}>
        {navigation.map(([index, label, href]) => <a href={href} key={href} onClick={() => setIsMenuOpen(false)}><i>{index}</i>{label}</a>)}
      </nav>

      <p className="hero-label">{profile.label}</p>
      <h1 className="hero-title hero-title--back" id="hero-title">Xuan</h1>
      <VisualBackground />
      <p className="hero-title hero-title--front" aria-hidden="true">Space</p>
      <p className="hero-copy__lede">{profile.lede}</p>
      <ProfilePanel />
      <a className="scroll-indicator" href="#profile"><span>Enter index</span><i aria-hidden="true">↓</i></a>
    </section>
  )
}
