export default function Navbar({ cur, goTo }) {
  const panels = ['HOME', 'WORK', 'STACK', 'ABOUT', 'CONNECT']

  return (
    <nav id="navbar" className={cur > 0 ? 'scrolled' : ''}>
      <div className="logo">
        <span className="logo-bracket">[</span>
        <span className="logo-text">AW</span>
        <span className="logo-bracket">]</span>
      </div>
      <div className="nav-center">
        {panels.map((label, i) => (
          <button
            key={i}
            className={`nb${cur === i ? ' on' : ''}`}
            data-panel={i}
            onClick={() => goTo(i)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="nav-pill">
        <span className="pdot" />
        OPEN TO WORK
      </div>
    </nav>
  )
}
