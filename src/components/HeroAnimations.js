import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHeroAnimations(root) {
  if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  const q = gsap.utils.selector(root)
  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

  timeline
    .from('.site-header', { y: -40, opacity: 0, duration: .7 })
    .from(q('.eyebrow'), { x: -22, opacity: 0, duration: .55 }, '-=.25')
    .from(q('.headline-line > span'), { yPercent: 110, duration: .78, stagger: .1 }, '-=.28')
    .from(q('.brush-underline path'), { strokeDashoffset: 900, duration: .85 }, '-=.4')
    .from(q('.hero-copy'), { y: 18, opacity: 0, duration: .52 }, '-=.55')
    .from(q('.hero-actions'), { y: 24, opacity: 0, duration: .55 }, '-=.35')
    .from(q('.cow-art'), { scale: .95, opacity: 0, duration: .9, transformOrigin: '70% 80%' }, '-=.75')
    .from(q('.float-item, .spark'), { scale: .82, opacity: 0, stagger: .08, duration: .5 }, '-=.45')

  q('.float-item').forEach((el, index) => {
    gsap.to(el, { y: index % 2 ? 9 : -11, rotation: index % 2 ? 2.5 : -2, duration: 2.8 + index * .45, ease: 'sine.inOut', repeat: -1, yoyo: true })
  })
  gsap.to(q('.steam path'), { y: -8, opacity: .2, duration: 1.8, stagger: .3, ease: 'sine.inOut', repeat: -1, yoyo: true })

  const onPointer = (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 2
    const y = (event.clientY / window.innerHeight - .5) * 2
    gsap.to(q('.cow-art'), { x: x * 7, y: y * 5, duration: 1.1, ease: 'power2.out' })
    q('[data-depth]').forEach((el) => {
      const depth = Number(el.dataset.depth || 1)
      gsap.to(el, { x: x * 10 * depth, y: y * 7 * depth, duration: .9, ease: 'power2.out' })
    })
  }

  const magnetics = q('.magnetic')
  const magneticHandlers = magnetics.map((button) => {
    const move = (event) => {
      const rect = button.getBoundingClientRect()
      gsap.to(button, { x: (event.clientX - rect.left - rect.width / 2) * .12, y: (event.clientY - rect.top - rect.height / 2) * .18, duration: .25 })
    }
    const leave = () => gsap.to(button, { x: 0, y: 0, duration: .55, ease: 'elastic.out(1,.45)' })
    button.addEventListener('pointermove', move)
    button.addEventListener('pointerleave', leave)
    return { button, move, leave }
  })

  window.addEventListener('pointermove', onPointer, { passive: true })
  return () => {
    timeline.kill()
    window.removeEventListener('pointermove', onPointer)
    magneticHandlers.forEach(({ button, move, leave }) => {
      button.removeEventListener('pointermove', move)
      button.removeEventListener('pointerleave', leave)
    })
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }
}
