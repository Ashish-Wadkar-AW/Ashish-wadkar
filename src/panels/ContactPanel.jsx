export default function ContactPanel() {
  return (
    <section
      className="panel panel-contact"
      data-panel="4"
      style={{
        background: 'linear-gradient(135deg,#030008 0%,#080510 50%,#030006 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh'
      }}
    >
      {/* Background glows */}
      <div style={{ position: 'absolute', width: '500px', height: '500px', top: '-120px', right: '-100px', background: 'radial-gradient(circle,rgba(255,15,123,.08) 0%,transparent 68%)', pointerEvents: 'none', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '350px', height: '350px', bottom: '-80px', left: '-60px', background: 'radial-gradient(circle,rgba(255,59,0,.07) 0%,transparent 68%)', pointerEvents: 'none', borderRadius: '50%', zIndex: 0 }} />
      <div style={{ position: 'absolute', width: '200px', height: '200px', top: '40%', left: '40%', background: 'radial-gradient(circle,rgba(0,242,255,.05) 0%,transparent 70%)', pointerEvents: 'none', borderRadius: '50%', zIndex: 0 }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%', padding: '0 1rem', position: 'relative', zIndex: 2, textAlign: 'center' }}>

        <div className="rv a-down d0">
          <i className="fas fa-satellite-dish" style={{ fontSize: '2.5rem', color: 'var(--or)', filter: 'drop-shadow(0 0 12px var(--or))' }} />
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '.66rem', letterSpacing: '.38em', color: 'var(--pk)', marginTop: '.5rem' }}>
            04 — CONNECT
          </p>
        </div>

        <h2 className="rv a-diag d1" style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 800,
          fontSize: 'clamp(2.2rem,7vw,4.2rem)', lineHeight: 0.95, margin: '.9rem 0'
        }}>
          Let's engineer<br /><span style={{ color: 'var(--cy)' }}>the future</span>
        </h2>

        {/* Contact Card */}
        <div className="rv a-up d2 contact-card hover-glow sv" style={{
          background: 'rgba(14,11,26,.95)', border: '1px solid rgba(255,59,0,.28)',
          borderRadius: '18px', padding: '2.2rem', marginTop: '1.6rem',
          textAlign: 'left', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', background: 'linear-gradient(135deg,transparent 50%,rgba(255,15,123,.05))', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle,rgba(255,59,0,.08),transparent 70%)', pointerEvents: 'none', borderRadius: '50%' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
            <a href="mailto:ashishwadkar2101@gmail.com"
              className="rv a-right d3"
              style={{ fontSize: 'clamp(1rem,2.5vw,1.25rem)', color: 'var(--cy)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '.85rem', transition: '.25s', fontWeight: 500 }}
              onMouseOver={e => { e.currentTarget.style.color = 'var(--or)'; e.currentTarget.style.transform = 'translateX(6px)' }}
              onMouseOut={e => { e.currentTarget.style.color = 'var(--cy)'; e.currentTarget.style.transform = 'translateX(0)' }}
            >
              <span style={{ width: '36px', height: '36px', background: 'rgba(255,59,0,.12)', border: '1px solid rgba(255,59,0,.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fas fa-envelope" style={{ color: 'var(--or)' }} />
              </span>
              ashishwadkar2101@gmail.com
            </a>
            <a href="tel:+917447234294"
              className="rv a-right d4"
              style={{ fontSize: 'clamp(1rem,2.5vw,1.25rem)', color: 'var(--ny)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '.85rem', transition: '.25s', fontWeight: 500 }}
              onMouseOver={e => { e.currentTarget.style.color = 'var(--or)'; e.currentTarget.style.transform = 'translateX(6px)' }}
              onMouseOut={e => { e.currentTarget.style.color = 'var(--ny)'; e.currentTarget.style.transform = 'translateX(0)' }}
            >
              <span style={{ width: '36px', height: '36px', background: 'rgba(255,238,46,.08)', border: '1px solid rgba(255,238,46,.22)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="fas fa-phone-alt" style={{ color: 'var(--ny)' }} />
              </span>
              +91 74472 34294
            </a>
          </div>

          <div className="rv a-up d5" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', position: 'relative', zIndex: 1, marginBottom: '1.5rem' }}>
            <a href="mailto:ashishwadkar2101@gmail.com" className="btn-glow">
              <i className="fas fa-paper-plane" /> EMAIL ME
            </a>
            <a href="https://linkedin.com/in/ashish-wadkar-aw" target="_blank" rel="noreferrer" className="ghost-neon">
              <i className="fab fa-linkedin" /> LINKEDIN
            </a>
            <a href="https://github.com/Ashish-Wadkar-AW" target="_blank" rel="noreferrer"
              className="ghost-neon"
              style={{ borderColor: 'rgba(249,240,2,.35)', color: 'var(--ny)' }}
              onMouseOver={e => e.currentTarget.style.borderColor = 'var(--ny)'}
              onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(249,240,2,.35)'}
            >
              <i className="fab fa-github" /> GITHUB
            </a>
          </div>

          <p className="rv a-up d6" style={{ color: '#3a3a5a', fontSize: '.85rem', position: 'relative', zIndex: 1 }}>
            Available for freelance, full-time roles, and ambitious projects. Fast response. Let's go.
          </p>
        </div>

        <div className="rv a-up d7" style={{ marginTop: '1.4rem', fontFamily: "'Space Mono', monospace", fontSize: '.58rem', color: '#1e1e2e', letterSpacing: '.18em' }}>
          © 2024 ASHISH WADKAR · PUNE, INDIA · CYBER CORE
        </div>
      </div>
    </section>
  )
}
