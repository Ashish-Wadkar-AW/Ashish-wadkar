export default function HeroPanel({ goTo }) {
  return (
    <section className="panel panel-home scan-line active" data-panel="0">
      <div
        className="ring-orb"
        style={{ width: '520px', height: '520px', top: '-160px', right: '-110px', opacity: 0.28 }}
      />
      <div
        className="ring-orb"
        style={{
          width: '300px', height: '300px', bottom: '8%', left: '-80px',
          animationDuration: '36s', borderColor: 'rgba(255,15,123,.2)'
        }}
      />
      <div
        style={{
          maxWidth: '1300px', margin: '0 auto', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', minHeight: '86%', gap: '1.8rem', position: 'relative', zIndex: 2
        }}
      >
        <div className="rv a-down d0 home-chip-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            background: 'rgba(0,0,0,.6)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,59,0,.45)', borderRadius: '80px',
            padding: '5px 14px', display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontFamily: "'Space Mono', monospace", fontSize: '.66rem', letterSpacing: '.05em'
          }}>
            <i className="fas fa-phone-alt" style={{ color: 'var(--or)' }} />
            +91 74472 34294
          </span>
          <span style={{
            fontFamily: "'Space Mono', monospace", fontSize: '.66rem',
            borderLeft: '2px solid var(--or)', paddingLeft: '12px', color: 'var(--cy)'
          }}>
            <i className="fas fa-globe" /> AVAILABLE WORLDWIDE
          </span>
        </div>

        <div className="rv a-diag d1">
          <div className="home-shake-once">
            <div className="glitch-first">ASHISH</div>
            <div className="glitch-last" style={{ marginTop: '-.2em' }}>WADKAR</div>
          </div>
        </div>

        <div className="rv a-up d2 home-role-row" style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
          <div style={{
            background: 'rgba(255,59,0,.15)', borderLeft: '4px solid var(--or)',
            padding: '.4rem 1rem', fontSize: '.88rem'
          }}>
            <i className="fas fa-crown" style={{ color: 'var(--or)' }} /> Full Stack Engineer
          </div>
          <div style={{
            background: 'rgba(0,242,255,.07)', borderLeft: '4px solid var(--cy)',
            padding: '.4rem 1rem', fontSize: '.88rem'
          }}>
            <i className="fas fa-mobile-alt" style={{ color: 'var(--cy)' }} /> React Native · Node · Python
          </div>
        </div>

        <p className="rv a-up d3" style={{ maxWidth: '560px', color: 'var(--muted)', lineHeight: 1.65, fontSize: '.95rem' }}>
          Building futuristic web &amp; mobile experiences with speed, precision &amp; cyber aesthetics.
          From 3D configurators to scalable backend systems.
        </p>

        <div className="rv a-up d4 home-cta-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo(1) }} className="btn-glow">
            <i className="fas fa-arrow-right" /> EXPLORE WORK
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); goTo(4) }} className="ghost-neon">
            <i className="fas fa-paper-plane" /> HIRE ME
          </a>
        </div>

        <div className="rv a-right d5" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '36px', height: '1px', background: 'var(--or)' }} />
          <span style={{ fontSize: '.58rem', letterSpacing: '4px', fontFamily: 'monospace', color: '#444' }}>
            SCROLL → OR ARROW KEYS
          </span>
        </div>
      </div>

    </section>
  )
}
