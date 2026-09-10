import { ProfilePanel } from './ProfilePanel'
import './home.css'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__intro">
        <p className="hero__eyebrow"><span aria-hidden="true">✦</span> Personal workspace / 2026</p>
        <h1 id="hero-title">Make room<br /><em>for wonder.</em></h1>
        <p className="hero__lede">Notes, visuals, and small digital worlds gathered in one quiet place.</p>
      </div>
      <ProfilePanel />
    </section>
  )
}
