import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkle, Zap, Crown } from 'lucide-react';
import mascotImage from '../../assets/images/branding-hero-final.png';
import '../../styles/branding-hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function BrandingHero() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Image fade and float
      tl.from('.bh-image-col', {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, 0);

      // Header animates in
      tl.from('.bh-line-1, .bh-line-3, .bh-line-4', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      }, 0.2);

      tl.from('.bh-line-2', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 0.4);

      tl.from('.bh-title-underline path', {
        strokeDashoffset: 1000,
        duration: 1,
        ease: 'power2.out'
      }, 0.6);

      tl.from('.bh-new-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 0.6);

      // Grid columns stagger in
      tl.from('.bh-grid-col', {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      }, 0.8);

      // Statement and underline
      tl.from('.bh-statement', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, 1.4);

      tl.from('.bh-statement-underline path', {
        strokeDashoffset: 1000,
        duration: 1,
        ease: 'power2.inOut'
      }, 1.6);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bh-section" ref={sectionRef}>
      <div className="bh-container">
        
        {/* LEFT COLUMN: 3D Artwork */}
        <div className="bh-image-col">
          <img src={mascotImage} alt="Purple Cow Creative Mascot" className="bh-mascot-image" />
        </div>

        {/* RIGHT COLUMN: Editorial Content */}
        <div className="bh-content-col">
          
          {/* Header */}
          <div className="bh-header">
            <h1 className="bh-brand-title-new">
              <span className="bh-line-1">WE BUILD</span>
              <span className="bh-line-2">
                BRANDS
                <svg className="bh-title-underline" viewBox="0 0 300 20" preserveAspectRatio="none">
                  <path d="M 5 15 Q 150 0 295 10" fill="none" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
                </svg>
              </span>
              <span className="bh-line-3">THAT PEOPLE</span>
              <span className="bh-line-4">CAN'T IGNORE.</span>
            </h1>
            <p className="bh-new-subtitle">
              Strategy. Story. Design. Packaging.<br/>
              Everything your brand needs to <span className="bh-highlight">stand out</span>, <br/>
              <span className="bh-highlight">connect</span>, and <span className="bh-highlight">grow</span>.
            </p>
          </div>

          {/* 3-Column Content Grid */}
          <div className="bh-grid">
            
            {/* Column 1 */}
            <div className="bh-grid-col">
              <Sparkle className="bh-icon" size={24} strokeWidth={1.5} />
              <h3 className="bh-col-title">ORDINARY NEVER<br/>BUILT LEGENDS.</h3>
              <p className="bh-paragraph">
                Every remarkable brand begins with the courage to be <span className="bh-highlight">different</span>.
              </p>
              <p className="bh-paragraph">
                Purple Cow transforms bold ideas into unforgettable brand experiences that people genuinely remember.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bh-grid-col">
              <Zap className="bh-icon" size={24} strokeWidth={1.5} />
              <h3 className="bh-col-title">WE DON'T CHASE<br/>ATTENTION.</h3>
              <p className="bh-paragraph">
                We create <span className="bh-highlight">stories</span> that earn it.
              </p>
              <p className="bh-paragraph">
                Every campaign blends strategy, creativity, production, and <span className="bh-highlight">emotion</span> to deliver work that connects, inspires, and <span className="bh-highlight">performs</span>.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bh-grid-col">
              <Crown className="bh-icon" size={24} strokeWidth={1.5} />
              <h3 className="bh-col-title">BUILT TO BE<br/>REMEMBERED.</h3>
              <p className="bh-paragraph">
                Content fades.
              </p>
              <p className="bh-paragraph">
                <span className="bh-highlight">Stories last.</span>
              </p>
              <p className="bh-paragraph">
                Purple Cow creates campaigns that spark <span className="bh-highlight">conversations</span>, shape perception, and build lasting brands.
              </p>
            </div>

          </div>

          {/* Footer Statement */}
          <div className="bh-statement-wrap">
            <h2 className="bh-statement">Let's build something impossible to ignore.</h2>
            <svg className="bh-statement-underline" viewBox="0 0 300 20" preserveAspectRatio="none">
              <path d="M 5 15 Q 150 0 295 10 M 15 20 Q 140 5 280 15" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
