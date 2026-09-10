import { profile } from '../../data/profile'

export function ProfilePanel() {
  return (
    <aside className="hero-meta" aria-label="Subject annotation">
      <p className="hero-meta__index">01 / Subject</p>
      <p className="hero-meta__name">{profile.name}</p>
      <p className="hero-meta__role">{profile.role}</p>
      <p className="hero-meta__tags">{profile.tags.join(' · ')}</p>
    </aside>
  )
}
