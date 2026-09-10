export function ProfilePanel() {
  return (
    <article className="profile-panel">
      <div className="profile-panel__mark" aria-hidden="true">XS</div>
      <div>
        <p className="profile-panel__eyebrow">Independent digital space</p>
        <h2>Xuan Space</h2>
        <p className="profile-panel__copy">A quiet corner for ideas, experiments, and things worth keeping.</p>
      </div>
      <a className="profile-panel__action" href="#about">Explore the space <span aria-hidden="true">↗</span></a>
    </article>
  )
}
