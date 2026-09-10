const interests = [
  ['01', 'Computer Science', '100%'],
  ['02', 'AI', '54%'],
  ['03', 'Music', '86%'],
  ['04', 'Fitness', '62%'],
  ['05', 'Photography', '74%'],
] as const

const work = [
  ['2026', 'Xuan Space', 'Web experience'],
  ['2026', 'XiaoZhaiOS', 'AI system'],
  ['—', 'In formation', 'Personal archive'],
] as const

export function SectionIndex() {
  return (
    <div className="section-index">
      <section className="profile-story" id="profile" aria-labelledby="profile-heading">
        <p className="section-kicker">01 / Profile</p>
        <h2 id="profile-heading">A small system,<br /><em>still becoming.</em></h2>
        <div className="profile-story__detail"><span>DZX</span><span>Computer Science</span><p>A quiet introduction held lightly: a place to collect what keeps pulling attention back.</p></div>
      </section>

      <section className="interests-index" id="interests" aria-labelledby="interests-heading">
        <div className="section-heading"><p className="section-kicker">02 / Interests</p><h2 id="interests-heading">Orbit lines</h2></div>
        <ol className="orbit-list">{interests.map(([index, label, width]) => <li key={label} style={{ '--orbit-width': width } as CSSProperties}><span>{index}</span><strong>{label}</strong><i aria-hidden="true" /></li>)}</ol>
      </section>

      <section className="work-archive" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><p className="section-kicker">03 / Work</p><h2 id="work-heading">Archive</h2></div>
        <div className="archive-list" role="list">{work.map(([year, title, type]) => <div role="listitem" key={title}><span>{year}</span><strong>{title}</strong><em>{type}</em></div>)}</div>
      </section>

      <section className="links-exit" id="links" aria-labelledby="links-heading">
        <p className="section-kicker">04 / Links</p>
        <h2 id="links-heading">Exit<br />the index.</h2>
        <p>Connections will gather here when the archive is ready to open outward.</p>
      </section>
    </div>
  )
}
import type { CSSProperties } from 'react'
