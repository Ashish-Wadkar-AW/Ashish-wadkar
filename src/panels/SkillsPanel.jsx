const skills = [
  {
    title: 'Frontend',
    color: 'var(--or)',
    icon: 'fa-code',
    level: 88,
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js', 'Redux', 'Vite', 'Angular'],
  },
  {
    title: 'Backend',
    color: 'var(--pk)',
    icon: 'fa-server',
    level: 82,
    items: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'Java', 'Spring', 'Flask'],
  },
  {
    title: 'Mobile',
    color: 'var(--ny)',
    icon: 'fa-mobile-screen',
    level: 76,
    items: ['React Native', 'Expo', 'Kotlin', 'Android'],
  },
  {
    title: 'DB & Cloud',
    color: 'var(--cy)',
    icon: 'fa-database',
    level: 80,
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'AWS', 'GraphQL', 'SQLite'],
  },
  {
    title: 'Dev Tools',
    color: 'var(--pk)',
    icon: 'fa-screwdriver-wrench',
    level: 85,
    items: ['Git', 'GitHub', 'Docker', 'Figma', 'Vercel', 'Socket.io'],
  },
]

const stats = [
  ['6+', 'PROJECTS'],
  ['15+', 'TECH'],
  ['2y', 'EXPERIENCE'],
  ['∞', 'PASSION'],
]

export default function SkillsPanel() {
  return (
    <section className="panel panel-stack" data-panel="2" style={{ background: 'linear-gradient(145deg,#010004 0%,#06040e 55%,#020008 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '.66rem', letterSpacing: '.4em', color: 'var(--or)', marginBottom: '.5rem' }}>
            <i className="fas fa-microchip" /> 02 — TOOLKIT MATRIX
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(2.2rem,6vw,4rem)', lineHeight: 0.92 }}>
            TECH <span style={{ color: 'var(--cy)' }}>ARSENAL</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: '.5rem' }}>Every tool battle-tested in real projects.</p>
        </div>

        <div className="skills-main-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {skills.slice(0, 4).map((group) => (
            <article key={group.title} className="skills-lite-card stack-card hover-glow sv">
              <div className="skills-lite-head">
                <span className="skills-lite-icon" style={{ borderColor: group.color, color: group.color }}>
                  <i className={`fas ${group.icon}`} />
                </span>
                <h3 style={{ color: group.color }}>{group.title}</h3>
              </div>

              <div className="skills-lite-list">
                {group.items.map((item) => (
                  <span key={item} className="skills-lite-pill">{item}</span>
                ))}
              </div>

              <div className="skills-lite-progress">
                <div className="skills-lite-progress-fill" style={{ width: `${group.level}%`, background: group.color }} />
              </div>
              <p className="skills-lite-level">{group.level}%</p>
            </article>
          ))}
        </div>

        <div className="skills-bottom-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
          <article className="skills-lite-card stack-card hover-glow sv">
            <div className="skills-lite-head">
              <span className="skills-lite-icon" style={{ borderColor: 'var(--pk)', color: 'var(--pk)' }}>
                <i className="fas fa-screwdriver-wrench" />
              </span>
              <h3 style={{ color: 'var(--pk)' }}>Dev Tools</h3>
            </div>
            <div className="skills-lite-list">
              {skills[4].items.map((item) => (
                <span key={item} className="skills-lite-pill">{item}</span>
              ))}
            </div>
            <div className="skills-lite-progress">
              <div className="skills-lite-progress-fill" style={{ width: '85%', background: 'var(--pk)' }} />
            </div>
            <p className="skills-lite-level">85%</p>
          </article>

          <article className="skills-stats-card stack-stats-card hover-glow sv">
            <p>BATTLE STATS</p>
            <div className="skills-stats-grid">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <h4>{value}</h4>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="skills-extra-pills">
          {['15+ frameworks', 'Cloud ready', 'AI integration', 'Real-time', 'Auth / JWT', '3D Web'].map((item) => (
            <span key={item} className="skills-lite-pill stack-pill sv">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
