import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cd = document.getElementById('cd')
    const cr = document.getElementById('cr')
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cd.style.left = mx + 'px'
      cd.style.top = my + 'px'
    }

    document.addEventListener('mousemove', onMouseMove)

    let rafId
    const loop = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      cr.style.left = rx + 'px'
      cr.style.top = ry + 'px'
      rafId = requestAnimationFrame(loop)
    }
    loop()

    const onEnter = () => {
      cd.style.transform = 'translate(-50%,-50%) scale(2.8)'
      cd.style.background = 'var(--or)'
      cr.style.width = '50px'
      cr.style.height = '50px'
      cr.style.borderColor = 'var(--cy)'
    }
    const onLeave = () => {
      cd.style.transform = 'translate(-50%,-50%) scale(1)'
      cd.style.background = 'var(--cy)'
      cr.style.width = '34px'
      cr.style.height = '34px'
      cr.style.borderColor = 'var(--or)'
    }

    const attach = () => {
      document.querySelectorAll('a,button,.glass-card,.sk-card').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attach()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cd" />
      <div id="cr" />
    </>
  )
}
