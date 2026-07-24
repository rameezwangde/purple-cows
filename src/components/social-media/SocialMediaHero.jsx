import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../../components/ui/SplitText';
import { Users, Target, Rocket } from 'lucide-react';
import heroImg from '../../assets/images/culture-hero-cow.png';

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaHero() {
  const containerRef = useRef(null);
  const loopsRef = useRef([]);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Mascot/Composite fades upward
      tl.from('.sm-visual-composite', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      }, 0.2);

      // 3. Header reveal
      const splitChars = gsap.utils.toArray('.sm-heading .split-char');
      tl.fromTo(splitChars, {
        y: 50,
        opacity: 0,
        rotationX: -45,
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.5)'
      }, 0.4);

      // 4. Subhead divider wipe
      tl.from('.sm-subhead-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.8,
        ease: 'power3.inOut'
      }, 0.8);

      // 5. Columns stagger
      tl.from('.sm-feature', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out'
      }, 0.8);

      // 6. Stats stagger
      tl.from('.sm-stat', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      }, 1.2);

      // Ambient hover/floating
      // Overlays are baked in, no floating loops needed
    }, containerRef);

    return () => {
      ctx.revert();
      loopsRef.current.forEach(tl => tl.kill());
    };
  }, []);

  return (
    <section className="sm-hero" ref={containerRef}>
      {/* Left Column (45%) */}
      <div className="sm-hero-left">
        <div className="sm-visual-composite">
          <div className="sm-hero-left-content">
            <img src={heroImg} alt="Purple Cow Culture" className="sm-raw-composite" />
          </div>
        </div>
      </div>

      {/* Right Column (55%) */}
      <div className="sm-hero-right">
        
        {/* TOP LABEL */}
        <div className="sm-top-label">
          <span className="sm-culture-mark">CULTURE</span>
          <span className="sm-slashes">//</span>
        </div>
        
        <div className="sm-subhead-wrapper">
          <span className="sm-subhead">SOCIAL MEDIA & CONTENT STUDIO</span>
          <div className="sm-subhead-line"></div>
        </div>

        {/* MAIN HEADING */}
        <h1 className="sm-heading">
          <div><SplitText type="chars" text="BUILD" /></div>
          <div><span className="sm-brush-font"><SplitText type="chars" text="COMMUNITIES." /></span></div>
          <div><SplitText type="chars" text="CREATE" /></div>
          <div><span className="sm-brush-font"><SplitText type="chars" text="CONVERSATIONS." /></span></div>
          <div><SplitText type="chars" text="GROW" /> <span className="text-purple"><SplitText type="chars" text="BRANDS." /></span></div>
        </h1>

        {/* FEATURE COLUMNS */}
        <div className="sm-features-grid">
          <div className="sm-feature">
            <div className="sm-feature-icon"><Users size={24} /></div>
            <h3>REAL PEOPLE.<br/><span className="sm-highlight">REAL CONNECTIONS.</span></h3>
            <p>We don't chase followers. We build communities that trust, engage and advocate for your brand.</p>
          </div>
          <div className="sm-feature">
            <div className="sm-feature-icon"><Target size={24} /></div>
            <h3>STRATEGY THAT<br/><span className="sm-highlight">CREATES IMPACT.</span></h3>
            <p>Every campaign begins with insight. Every piece of content has a purpose.</p>
          </div>
          <div className="sm-feature">
            <div className="sm-feature-icon"><Rocket size={24} /></div>
            <h3>CONTENT THAT<br/><span className="sm-highlight">BUILDS CULTURE.</span></h3>
            <p>Creative storytelling that earns attention, starts conversations and keeps brands memorable.</p>
          </div>
        </div>

        {/* BOTTOM STATS */}
        <div className="sm-stats-grid">
          <div className="sm-stat">
            <div className="sm-stat-num">4.2B+</div>
            <div className="sm-stat-label">CONVERSATIONS SPARKED</div>
            <div className="sm-stat-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              And counting...
            </div>
          </div>
          <div className="sm-stat">
            <div className="sm-stat-num">300+</div>
            <div className="sm-stat-label">CAMPAIGNS DELIVERED</div>
            <div className="sm-stat-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform: 'rotate(45deg)'}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Real growth. Real fast.
            </div>
          </div>
          <div className="sm-stat">
            <div className="sm-stat-num">10X</div>
            <div className="sm-stat-label">HIGHER ENGAGEMENT</div>
            <div className="sm-stat-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{transform: 'rotate(15deg)'}}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              That's the PC effect.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
