import { ProfilePanel } from './ProfilePanel'
import { VisualBackground } from '../visual/VisualBackground'
import './home.css'

export function Hero() {
  return <section className="hero-stage" id="index" aria-labelledby="hero-title">
    <VisualBackground />
    <header className="hero-header"><a className="hero-header__brand" href="#index" aria-label="Xuan Space home"><span aria-hidden="true">×</span>Xuan Space</a><nav className="hero-header__nav" aria-label="Primary navigation"><a href="#index">Index</a><a href="#profile">Profile</a><a href="#work">Work</a><a href="#links">Links</a></nav><button className="hero-header__menu" type="button" aria-label="Open menu">Menu</button></header>
    <div className="hero-copy"><p className="hero-copy__eyebrow">Personal space / 2026</p><h1 id="hero-title"><span>Xuan</span><em>Space</em></h1><p className="hero-copy__lede">A living index of ideas, images, and small digital worlds.</p></div>
    <ProfilePanel /><a className="scroll-indicator" href="#profile"><span>Scroll to wander</span><i aria-hidden="true">↓</i></a>
  </section>
}
