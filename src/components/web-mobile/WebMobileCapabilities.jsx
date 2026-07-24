import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from '../../components/ui/SplitText';
import { Target, PenTool, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WebMobileCapabilities() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      // 1. Heading SplitText animation
      const splitChars = gsap.utils.toArray('.wmc-heading .split-char');
      gsap.fromTo(splitChars, {
        y: 50,
        opacity: 0,
        rotationX: -45,
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.wmc-header',
          start: 'top 80%',
        }
      });

      // 2. Cards reveal
      gsap.from('.wmc-card', {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.wmc-cards-grid',
          start: 'top 75%',
        }
      });

      // 3. Ambient tape swinging
      gsap.to('.wmc-tape', {
        rotation: 3,
        transformOrigin: 'top center',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wmc-section" ref={containerRef}>
      {/* DECORATIONS */}
      <svg className="wmc-dec-dots wmc-dec-top-left" width="40" height="60" viewBox="0 0 40 60">
        <pattern id="dots1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle fill="#7a2eff" cx="2" cy="2" r="2"></circle>
        </pattern>
        <rect x="0" y="0" width="40" height="60" fill="url(#dots1)"></rect>
      </svg>

      <svg className="wmc-dec-arrow" viewBox="0 0 100 100" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 10 Q 40 50 80 90" />
        <path d="M60 90 L 80 90 L 70 70" />
      </svg>

      {/* HEADER */}
      <div className="wmc-header">
        <div className="wmc-label">
          OUR CAPABILITIES
          <svg className="wmc-label-underline" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="#7a2eff" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <h2 className="wmc-heading">
          <span className="inline-block"><SplitText type="chars" text="CREATE." /></span>{' '}
          <span className="inline-block"><SplitText type="chars" text="BUILD." /></span>{' '}
          <span className="inline-block text-purple relative">
            <SplitText type="chars" text="SCALE." />
            <svg className="wmc-heading-underline" viewBox="0 0 100 15" preserveAspectRatio="none">
              <path d="M0 10 Q 50 0 100 10" stroke="#7a2eff" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h2>

        <p className="wmc-subtitle">
          We combine <b>strategy</b>, <b>creativity</b> and <b>technology</b> to build unforgettable digital experiences.
          <svg className="wmc-subtitle-underline" viewBox="0 0 100 5" preserveAspectRatio="none">
            <path d="M0 2 L 100 2" stroke="#7a2eff" strokeWidth="1" fill="none" />
          </svg>
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="wmc-cards-grid">
        
        {/* CARD 1 */}
        <div className="wmc-card">
          <div className="wmc-tape"></div>
          
          <div className="wmc-card-header">
            <div className="wmc-icon-wrap">
              <div className="wmc-icon-bg"></div>
              <Target className="wmc-icon" size={28} />
            </div>
            <h3 className="wmc-card-title">
              STRATEGY
              <svg className="wmc-title-underline" viewBox="0 0 100 5" preserveAspectRatio="none">
                <path d="M0 2 L 100 2" stroke="#111111" strokeWidth="2" fill="none" />
              </svg>
            </h3>
          </div>

          <ul className="wmc-list">
            <li>Brand Discovery</li>
            <li>Positioning Strategy</li>
            <li>Audience Research</li>
            <li>Digital Roadmaps</li>
            <li>Growth Planning</li>
            <li>Content Strategy</li>
            <li>Conversion Strategy</li>
            <li>Competitive Analysis</li>
          </ul>

          <div className="wmc-torn-corner wmc-torn-bottom-left"></div>
          <svg className="wmc-dec-dots wmc-dec-card-left" width="30" height="40" viewBox="0 0 30 40">
            <rect x="0" y="0" width="30" height="40" fill="url(#dots1)"></rect>
          </svg>
        </div>

        {/* CARD 2 */}
        <div className="wmc-card">
          <div className="wmc-tape"></div>
          
          <div className="wmc-card-header">
            <div className="wmc-icon-wrap">
              <div className="wmc-icon-bg"></div>
              <PenTool className="wmc-icon" size={28} />
            </div>
            <h3 className="wmc-card-title">
              DESIGN
              <svg className="wmc-title-underline" viewBox="0 0 100 5" preserveAspectRatio="none">
                <path d="M0 2 L 100 2" stroke="#111111" strokeWidth="2" fill="none" />
              </svg>
            </h3>
          </div>

          <ul className="wmc-list">
            <li>UI / UX Design</li>
            <li>Wireframes</li>
            <li>Design Systems</li>
            <li>Visual Identity</li>
            <li>Motion Graphics</li>
            <li>Prototyping</li>
            <li>Responsive Design</li>
            <li>Accessibility</li>
          </ul>

          <div className="wmc-paint-splash-bottom"></div>
        </div>

        {/* CARD 3 */}
        <div className="wmc-card">
          <div className="wmc-tape"></div>
          
          <div className="wmc-card-header">
            <div className="wmc-icon-wrap">
              <div className="wmc-icon-bg"></div>
              <Code className="wmc-icon" size={28} />
            </div>
            <h3 className="wmc-card-title">
              DEVELOPMENT
              <svg className="wmc-title-underline" viewBox="0 0 100 5" preserveAspectRatio="none">
                <path d="M0 2 L 100 2" stroke="#111111" strokeWidth="2" fill="none" />
              </svg>
            </h3>
          </div>

          <ul className="wmc-list">
            <li>React Applications</li>
            <li>WordPress</li>
            <li>Shopify</li>
            <li>Headless CMS</li>
            <li>Performance Optimization</li>
            <li>SEO Ready Builds</li>
            <li>API Integrations</li>
            <li>Website Maintenance</li>
          </ul>

          <div className="wmc-torn-corner wmc-torn-bottom-right"></div>
          <svg className="wmc-dec-dots wmc-dec-card-right" width="40" height="30" viewBox="0 0 40 30">
            <rect x="0" y="0" width="40" height="30" fill="url(#dots1)"></rect>
          </svg>
        </div>

      </div>

      {/* BOTTOM TAGLINE */}
      <div className="wmc-footer">
        <span className="wmc-brace">{'{'}</span>
        <span className="wmc-tagline">ONE TEAM. ENDLESS IDEAS. REAL IMPACT.</span>
        <span className="wmc-brace">{'}'}</span>
      </div>
    </section>
  );
}
