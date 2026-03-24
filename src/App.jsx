import { useState, useEffect, useRef, useCallback } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import NavDots from './components/NavDots'
import HeroPanel from './panels/HeroPanel'
import ProjectsPanel from './panels/ProjectsPanel'
import SkillsPanel from './panels/SkillsPanel'
import AboutPanel from './panels/AboutPanel'
import ContactPanel from './panels/ContactPanel'

const PANEL_COUNT = 5

export default function App() {
  const [cur, setCur] = useState(0)
  const hwRef = useRef(null)
  const busyRef = useRef(false)
  const curRef = useRef(0)
  const scrollTickingRef = useRef(false)
  const activePanelRef = useRef(0)

  const getPanels = () => (hwRef.current ? Array.from(hwRef.current.children) : [])

  const fireAnimations = useCallback((index) => {
    const panels = getPanels()
    const prev = activePanelRef.current
    if (prev === index) return

    if (panels[prev]) panels[prev].classList.remove('active')
    if (panels[index]) panels[index].classList.add('active')
    activePanelRef.current = index
  }, [])

  const goTo = useCallback((i) => {
    if (i < 0 || i >= PANEL_COUNT) return
    curRef.current = i
    setCur(i)
    const hw = hwRef.current
    if (hw) {
      hw.scrollTo({ left: i * hw.clientWidth, behavior: 'smooth' })
    }
    fireAnimations(i)
  }, [fireAnimations])

  // Wheel handler
  useEffect(() => {
    const hw = hwRef.current
    if (!hw) return

    const onWheel = (e) => {
      e.preventDefault()
      if (busyRef.current) return
      busyRef.current = true
      setTimeout(() => { busyRef.current = false }, 720)

      const panels = getPanels()
      const p = panels[curRef.current]
      if (!p) return

      const atB = p.scrollTop + p.clientHeight >= p.scrollHeight - 6
      const atT = p.scrollTop <= 4
      const canScroll = p.scrollHeight > p.clientHeight + 10

      if (e.deltaY > 0) {
        if (canScroll && !atB) { p.scrollTop += e.deltaY; busyRef.current = false; return }
        goTo(curRef.current + 1)
      } else {
        if (canScroll && !atT) { p.scrollTop += e.deltaY; busyRef.current = false; return }
        goTo(curRef.current - 1)
      }
    }

    hw.addEventListener('wheel', onWheel, { passive: false })
    return () => hw.removeEventListener('wheel', onWheel)
  }, [goTo])

  // Keyboard handler
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(curRef.current + 1)
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(curRef.current - 1)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [goTo])

  // Touch handler
  useEffect(() => {
    const hw = hwRef.current
    if (!hw) return
    let tx = 0, ty = 0
    const onTouchStart = (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY }
    const onTouchEnd = (e) => {
      const dx = tx - e.changedTouches[0].clientX
      const dy = ty - e.changedTouches[0].clientY
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 40) goTo(curRef.current + 1)
        else if (dx < -40) goTo(curRef.current - 1)
      } else {
        if (dy > 40) goTo(curRef.current + 1)
        else if (dy < -40) goTo(curRef.current - 1)
      }
    }
    hw.addEventListener('touchstart', onTouchStart, { passive: true })
    hw.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      hw.removeEventListener('touchstart', onTouchStart)
      hw.removeEventListener('touchend', onTouchEnd)
    }
  }, [goTo])

  // Scroll detection
  useEffect(() => {
    const hw = hwRef.current
    if (!hw) return
    const onScroll = () => {
      if (scrollTickingRef.current) return
      scrollTickingRef.current = true
      requestAnimationFrame(() => {
        const rawIndex = Math.round(hw.scrollLeft / hw.clientWidth)
        const i = Math.max(0, Math.min(PANEL_COUNT - 1, rawIndex))
        if (i !== curRef.current) {
          curRef.current = i
          setCur(i)
          fireAnimations(i)
        }
        scrollTickingRef.current = false
      })
    }
    hw.addEventListener('scroll', onScroll)
    return () => hw.removeEventListener('scroll', onScroll)
  }, [fireAnimations])

  // Resize handler
  useEffect(() => {
    const onResize = () => {
      const hw = hwRef.current
      if (hw) {
        hw.scrollTo({ left: curRef.current * hw.clientWidth, behavior: 'auto' })
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Scroll reveal (top-to-bottom)
  useEffect(() => {
    const targets = document.querySelectorAll('.sv')
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -10% 0px' }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Cursor-follow shine for hover cards
  useEffect(() => {
    const cards = document.querySelectorAll('.hover-glow')
    if (!cards.length) return

    const onMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    cards.forEach((card) => card.addEventListener('mousemove', onMove))
    return () => cards.forEach((card) => card.removeEventListener('mousemove', onMove))
  }, [])

  // Init
  useEffect(() => {
    const panels = getPanels()
    if (panels[0]) panels[0].classList.add('active')
    activePanelRef.current = 0
  }, [fireAnimations])

  const progressWidth = `${cur / (PANEL_COUNT - 1) * 100}%`

  return (
    <>
      <Cursor />
      <Navbar cur={cur} goTo={goTo} />
      <NavDots cur={cur} goTo={goTo} />

      <div className="hw" id="hw" ref={hwRef}>
        <HeroPanel goTo={goTo} />
        <ProjectsPanel />
        <SkillsPanel />
        <AboutPanel />
        <ContactPanel />
      </div>

      {/* Progress Bar */}
      <div className="prog-track">
        <div className="prog-fill-track" id="ptf" style={{ width: progressWidth }} />
      </div>
    </>
  )
}
