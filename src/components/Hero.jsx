import { useLayoutEffect, useRef } from 'react'
import BrushButton from './BrushButton'
import FloatingArt from './FloatingArt'
import Navbar from './Navbar'
import StatsStrip from './StatsStrip'
import { initHeroAnimations } from './HeroAnimations'
import cowArt from '../assets/hero/purple-cow.png'

export default function Hero() {
  const root = useRef(null)
  useLayoutEffect(() => initHeroAnimations(root.current), [])

  return (
    <div ref={root} id="top" className="page-shell">
      <Navbar />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="eyebrow">Boring blends in,<br/><span>Bold stands out.</span><svg viewBox="0 0 54 66" aria-hidden="true"><path d="M42 3C6 9 10 42 35 55M35 55l-3-15m3 15 15-5" /></svg></div>
            <h1 id="hero-title" className="hero-title">
              <span className="headline-line"><span>We don&apos;t</span></span>
              <span className="headline-line"><span>do ordinary,</span></span>
              <span className="headline-line purple"><span>We create legacy,</span></span>
              <span className="headline-line purple"><span>not just strategy.</span></span>
            </h1>
            <svg className="brush-underline" viewBox="0 0 640 24" preserveAspectRatio="none" aria-hidden="true"><path d="M4 11c100-7 190 2 288-2 115-4 215 4 344 9"/></svg>
            <p className="hero-copy">We rhyme ideas with <mark>impact</mark> and creativity with clarity<br className="desktop-break"/> to build brands that connect, convert and <mark>last</mark>.</p>
            <div className="hero-actions">
              <BrushButton>Let&apos;s build your next big thing</BrushButton>
              <div className="action-note"><svg viewBox="0 0 60 22" aria-hidden="true"><path d="M2 17c19-15 34-13 51-7m0 0-8-7m8 7-6 7"/></svg><span>Big ideas<br/>start here!</span></div>
            </div>
          </div>

          <div className="hero-right">
            <FloatingArt />
            <img className="cow-art" src={cowArt} alt="A confident purple cow creative director wearing lightning sunglasses and holding coffee at a desk" loading="eager" fetchPriority="high" />
            <svg className="steam" viewBox="0 0 80 90" aria-hidden="true"><path d="M21 78c-20-21 20-25 2-50C12 13 31 10 28 1"/><path d="M52 81c-17-22 17-27 4-48C44 15 63 13 60 2"/></svg>
            <div className="desk-note">We <b>♥</b> brands<br/>that dare</div>
          </div>
        </div>
      </section>
      <StatsStrip />
    </div>
  )
}
