export default function AboutPanel() {
  return (
    <section className="panel panel-about" data-panel="3">
      <div
        className="ring-orb"
        style={{ width: '400px', height: '400px', bottom: '-100px', right: '-90px', opacity: 0.25, animationDelay: '-5s' }}
      />
      <div className="about-layout" style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
        minHeight: '86%', position: 'relative', zIndex: 2
      }}>
        <div>
          <p className="rv a-down d0" style={{
            fontFamily: "'Space Mono', monospace", fontSize: '.66rem',
            letterSpacing: '.35em', color: 'var(--pk)', marginBottom: '.7rem'
          }}>
            <i className="fas fa-user-astronaut" /> 03 — /ABOUT
          </p>
          <h2 className="rv a-diag d1" style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem,5vw,3.8rem)', lineHeight: 0.95, marginBottom: '1.5rem'
          }}>
            Ashish Wadkar<br />
            <span style={{ color: 'var(--cy)' }}>Full Stack Alchemist</span>
          </h2>
          <p className="rv a-right d2" style={{
            color: 'var(--muted)', lineHeight: 1.72, marginBottom: '1.2rem', fontSize: '.92rem'
          }}>
            Based in Pune, India · 2+ years crafting digital experiences.
            Obsessed with clean code, 3D web, and futuristic interfaces.
          </p>
          <div className="rv a-up d3" style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
            <a href="https://linkedin.com/in/ashish-wadkar-aw" target="_blank" rel="noreferrer"
              className="ghost-neon" style={{ fontSize: '.8rem', padding: '.55rem 1.1rem' }}>
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a href="https://github.com/Ashish-Wadkar-AW" target="_blank" rel="noreferrer"
              className="ghost-neon" style={{ fontSize: '.8rem', padding: '.55rem 1.1rem' }}>
              <i className="fab fa-github" /> GitHub
            </a>
            <a href="https://instagram.com/hey_ashya" target="_blank" rel="noreferrer"
              className="ghost-neon"
              style={{ fontSize: '.8rem', padding: '.55rem 1.1rem', borderColor: 'rgba(255,238,46,.35)', color: 'var(--ny)' }}>
              <i className="fab fa-instagram" /> Instagram
            </a>
          </div>
        </div>

        <div className="rv a-left d2" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.1rem', justifyContent: 'center' }}>
          {[
            { d: 'd3', val: '6+', label: 'projects', color: 'var(--or)', mt: false },
            { d: 'd4', val: '15+', label: 'technologies', color: 'var(--pk)', mt: true },
            { d: 'd5', val: '24/7', label: 'build mode', color: 'var(--cy)', mt: false },
            { d: 'd6', val: '∞', label: 'passion', color: 'var(--ny)', mt: true },
          ].map(({ d, val, label, color, mt }) => (
            <div key={label} className={`glass-card rv about-stat-card hover-glow sv a-${mt ? 'up' : 'down'} ${d}`}
              style={{ padding: '1.4rem', width: '138px', textAlign: 'center', ...(mt ? { marginTop: '1.2rem' } : {}) }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color, fontFamily: "'Syne', sans-serif" }}>{val}</div>
              <div style={{ fontSize: '.75rem', color: 'var(--muted)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
