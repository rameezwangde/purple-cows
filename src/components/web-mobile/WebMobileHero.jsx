import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Rocket, Heart, Code } from 'lucide-react';
import { SplitText } from '../../components/ui/SplitText';
import heroImg from '../../assets/images/web-mobile-hero.jpg';

// gsap.registerPlugin(SplitText); // removed

export default function WebMobileHero() {
  const containerRef = useRef(null);
  const loopsRef = useRef([]);

  useLayoutEffect(() => {
    // Check for reduced motion
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      // 1. Heading SplitText animation
      gsap.fromTo('.split-char', {
        y: 40,
        opacity: 0,
        rotationX: -45,
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.5)',
        delay: 0.1
      });

      // 2. Feature columns stagger
      gsap.from('.wm-feature', {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.5
      });

      // 3. Floating loops (infinite animations)
      const plane = gsap.to('.wm-plane', {
        y: -15,
        x: 10,
        rotation: 3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      loopsRef.current.push(plane);

      const note = gsap.to('.wm-sticky-sway', {
        rotation: 2,
        transformOrigin: 'top center',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      loopsRef.current.push(note);
    }, containerRef);

    // Pause loops when out of view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loopsRef.current.forEach(tl => tl.play());
        } else {
          loopsRef.current.forEach(tl => tl.pause());
        }
      });
    }, { threshold: 0 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      ctx.revert();
      observer.disconnect();
      loopsRef.current.forEach(tl => tl.kill());
    };
  }, []);

  return (
    <section className="wm-hero" ref={containerRef}>
      {/* Left Column (42%) */}
      <div className="wm-hero-left">
        {/* Placeholder for raw transparent assets. For now, we render the provided composite reference image clipped to match scale. */}
        <div className="wm-visual-composite">
          <img src={heroImg} alt="Purple Cow Web & Mobile" className="wm-raw-composite" />
          
          {/* We overlay interactive/floating elements on top of the composite to give it life */}
          <div className="wm-plane" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" fill="#7a2eff" stroke="#5d16d1"/>
            </svg>
          </div>

          <div className="wm-sticky wm-sticky-sway">
            <div className="wm-tape"></div>
            <ul>
              <li>Strategy</li>
              <li className="text-purple">Design</li>
              <li>Code</li>
              <li>Impact</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Column (58%) */}
      <div className="wm-hero-right">
        <div className="wm-brand-head">
          <span className="wm-logo-mark">pc//</span>
          <div className="wm-subhead-wrapper">
            <span className="wm-subhead">WEB & MOBILE SOLUTIONS</span>
            <div className="wm-subhead-line"></div>
          </div>
        </div>

        <h1 className="wm-heading">
          <div>
            <span className="inline-block"><SplitText type="chars" text="WE" /></span>{' '}
            <span className="inline-block"><SplitText type="chars" text="BUILD" /></span>{' '}
            <span className="wm-sparkle-icon">✲</span>
          </div>
          <div className="text-purple wm-brush-font">DIGITAL EXPERIENCES</div>
          <div className="wm-underline-wrap">
            <span className="inline-block"><SplitText type="chars" text="THAT" /></span>{' '}
            <span className="inline-block"><SplitText type="chars" text="MOVE" /></span>{' '}
            <span className="inline-block"><SplitText type="chars" text="BRANDS" /></span>{' '}
            <span className="inline-block"><SplitText type="chars" text="FORWARD." /></span>
          </div>
        </h1>

        <div className="wm-features-grid">
          <div className="wm-feature">
            <div className="wm-feature-icon"><Target size={32} /></div>
            <h3>STRATEGY<br/><span>THAT <b>CLARIFIES.</b></span></h3>
            <p>We dive deep into your business, audience and market to craft strategies that set you apart.</p>
          </div>
          <div className="wm-feature">
            <div className="wm-feature-icon"><Rocket size={32} /></div>
            <h3>TECHNOLOGY<br/><span>THAT <b>PERFORMS.</b></span></h3>
            <p>Scalable, secure and future-ready solutions built with the right tech and best practices.</p>
          </div>
          <div className="wm-feature">
            <div className="wm-feature-icon"><Heart size={32} /></div>
            <h3>EXPERIENCES<br/><span>THAT <b>CONNECT.</b></span></h3>
            <p>Beautiful interfaces and seamless experiences that turn visitors into loyal customers.</p>
          </div>
          <div className="wm-feature">
            <div className="wm-feature-icon"><Code size={32} /></div>
            <h3>CODE<br/><span>THAT <b>DELIVERS.</b></span></h3>
            <p>Clean, efficient and high-performance code that powers real results and business growth.</p>
          </div>
        </div>
      </div>

      {/* Torn paper transition at the bottom */}
      <div className="wm-torn-transition">
        <div className="wm-torn-text">
          Let's build something <span className="text-purple wm-brush-font">iconic.</span>
          <svg className="wm-torn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
