export default function NavDots({ cur, goTo }) {
  return (
    <div className="nav-dots" id="navDots">
      {[0, 1, 2, 3, 4].map(i => (
        <div
          key={i}
          className={`ndot${cur === i ? ' on' : ''}`}
          data-panel={i}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  )
}
