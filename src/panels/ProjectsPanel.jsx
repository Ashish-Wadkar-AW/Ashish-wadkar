const projects = [
  {
    href: 'https://github.com/Ashish-Wadkar-AW/My-3D-web',
    icon: 'fa-cube', iconBg: 'rgba(255,59,0,.12)', iconBorder: 'rgba(255,59,0,.28)', iconColor: 'var(--or)',
    num: '01', title: '3D Shoe Configurator',
    desc: 'Three.js · WebGL · Real-time textures & controls',
    tags: ['Three.js', 'WebGL'],
    tagStyle: { bg: 'rgba(255,59,0,.1)', border: 'rgba(255,59,0,.28)', color: 'var(--or)' },
    anim: 'a-down', delay: 'd1'
  },
  {
    href: 'https://github.com/Ashish-Wadkar-AW/E-Learning-Web-App',
    icon: 'fa-chalkboard-user', iconBg: 'rgba(255,15,123,.1)', iconBorder: 'rgba(255,15,123,.25)', iconColor: 'var(--pk)',
    num: '02', title: 'E-Learning Platform',
    desc: 'React, Node.js · full-stack course management',
    tags: ['React', 'Node.js'],
    tagStyle: { bg: 'rgba(255,15,123,.1)', border: 'rgba(255,15,123,.28)', color: 'var(--pk)' },
    anim: 'a-up', delay: 'd2'
  },
  {
    href: 'https://github.com/Ashish-Wadkar-AW/food-ecommerse-site',
    icon: 'fa-cart-shopping', iconBg: 'rgba(255,238,46,.07)', iconBorder: 'rgba(255,238,46,.22)', iconColor: 'var(--ny)',
    num: '03', title: 'Food E-Commerce',
    desc: 'React, Tailwind · cart, categories, checkout',
    tags: ['React', 'Tailwind'],
    tagStyle: { bg: 'rgba(255,238,46,.07)', border: 'rgba(255,238,46,.22)', color: 'var(--ny)' },
    anim: 'a-left', delay: 'd3'
  },
  {
    href: 'https://github.com/Ashish-Wadkar-AW/shopping-app',
    icon: 'fa-bag-shopping', iconBg: 'rgba(255,59,0,.12)', iconBorder: 'rgba(255,59,0,.28)', iconColor: 'var(--or)',
    num: '04', title: 'Snack Shopping App',
    desc: 'Namkeen · Chips · Smooth checkout UI',
    tags: ['React', 'UI/UX'],
    tagStyle: { bg: 'rgba(255,59,0,.1)', border: 'rgba(255,59,0,.28)', color: 'var(--or)' },
    anim: 'a-right', delay: 'd4'
  },
  {
    href: 'https://github.com/Ashish-Wadkar-AW/Ramsetu',
    icon: 'fa-landmark', iconBg: 'rgba(255,15,123,.1)', iconBorder: 'rgba(255,15,123,.25)', iconColor: 'var(--pk)',
    num: '05', title: 'Ramsetu Landing',
    desc: 'HTML/CSS · cinematic storytelling page',
    tags: ['HTML/CSS', 'Design'],
    tagStyle: { bg: 'rgba(255,15,123,.1)', border: 'rgba(255,15,123,.28)', color: 'var(--pk)' },
    anim: 'a-flipx', delay: 'd5'
  },
  {
    href: 'https://github.com/Ashish-Wadkar-AW/Bid_Backend',
    icon: 'fa-server', iconBg: 'rgba(255,238,46,.07)', iconBorder: 'rgba(255,238,46,.22)', iconColor: 'var(--ny)',
    num: '06', title: 'Bid Backend API',
    desc: 'Java · Spring · REST auction platform',
    tags: ['Java', 'Spring'],
    tagStyle: { bg: 'rgba(255,238,46,.07)', border: 'rgba(255,238,46,.22)', color: 'var(--ny)' },
    anim: 'a-flipy', delay: 'd6'
  }
]

export default function ProjectsPanel() {
  return (
    <section className="panel panel-projects" data-panel="1">
      <div style={{ maxWidth: '1300px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '2rem' }}>
          <p className="rv a-down d0" style={{
            fontFamily: "'Space Mono', monospace", fontSize: '.66rem', letterSpacing: '.4em',
            color: 'var(--or)', marginBottom: '.5rem'
          }}>
            <i className="fas fa-cube" /> 01 — CYBER CREATIONS
          </p>
          <h2 className="rv a-diag d1" style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: 'clamp(2rem,7vw,4rem)', lineHeight: 0.92
          }}>
            Selected <span style={{ color: 'var(--cy)' }}>Projects</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(290px,1fr))', gap: '1.2rem' }}>
          {projects.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noreferrer"
              className={`glass-card rv project-card hover-glow sv ${p.anim} ${p.delay}`}
              style={{ padding: '1.6rem', textDecoration: 'none', display: 'block' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{
                  padding: '.55rem',
                  background: p.iconBg, border: `1px solid ${p.iconBorder}`, borderRadius: '8px'
                }}>
                  <i className={`fas ${p.icon}`} style={{ color: p.iconColor, fontSize: '1.3rem' }} />
                </div>
                <span style={{
                  fontFamily: "'Space Mono', monospace", fontSize: '.58rem', color: 'var(--cy)',
                  border: '1px solid rgba(0,242,255,.28)', padding: '.15rem .5rem', borderRadius: '4px'
                }}>{p.num}</span>
              </div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '1.12rem',
                color: 'var(--text)', marginBottom: '.4rem'
              }}>{p.title}</h3>
              <p style={{ color: '#4a4a6a', fontSize: '.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap' }}>
                {p.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontFamily: "'Space Mono', monospace", fontSize: '.58rem',
                    background: p.tagStyle.bg, border: `1px solid ${p.tagStyle.border}`,
                    color: p.tagStyle.color, padding: '3px 8px', borderRadius: '100px'
                  }}>{tag}</span>
                ))}
              </div>
              <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', color: 'var(--cy)', opacity: 0.45, fontSize: '.8rem' }}>
                <i className="fas fa-arrow-up-right-from-square" />
              </div>
            </a>
          ))}
        </div>

        <div className="rv a-up d7" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://github.com/Ashish-Wadkar-AW" target="_blank" rel="noreferrer" className="ghost-neon">
            <i className="fab fa-github" /> ALL PROJECTS ON GITHUB
          </a>
        </div>
      </div>
    </section>
  )
}
