import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkle, Crown, Search, Megaphone, ChevronRight, Send } from 'lucide-react';
import '../../styles/strategy-solutions.css';

gsap.registerPlugin(ScrollTrigger);

export default function StrategySolutions() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // 1. Label and Header fade up
      tl.from('.ss-label', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, 0);
      tl.from('.ss-headline-anim', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.2 }, 0.2);
      
      // 2. Handwritten Underline
      tl.from('.ss-hl-underline path', {
        strokeDashoffset: 1000,
        duration: 1.2,
        ease: 'power2.inOut'
      }, 0.8);

      // 3. Header Description
      tl.from('.ss-header-desc', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.6);

      // 4. Columns Stagger
      tl.from('.ss-column', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
      }, 1.0);

      // 5. List Items Stagger (within columns)
      tl.from('.ss-list-item', {
        x: -15,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power2.out'
      }, 1.4);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="ss-section" ref={containerRef}>
      
      {/* DECORATIONS */}
      <div className="ss-deco ss-deco-plane">
        <svg viewBox="0 0 100 100">
          <Send size={40} color="#7C3AED" strokeWidth={1} style={{ transform: 'rotate(-25deg)', opacity: 0.8 }}/>
          <path d="M 0 80 Q 50 100 100 50" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
        </svg>
      </div>
      <Sparkle className="ss-deco ss-deco-star" size={24} strokeWidth={1.5} />
      
      <div className="ss-container">
        
        {/* HEADER */}
        <div className="ss-header">
          <div className="ss-label">
            <Sparkle className="ss-label-icon" size={14} />
            OUR SOLUTIONS
            <Sparkle className="ss-label-icon" size={14} />
          </div>
          
          <h2 className="ss-headline">
            <span className="ss-headline-anim" style={{ display: 'inline-block' }}>STRATEGY THAT SPARKS.</span>
            <span className="ss-hl-script-wrap ss-headline-anim">
              <span className="ss-hl-script">GROWTH THAT LASTS.</span>
              <svg className="ss-hl-underline" viewBox="0 0 300 30" preserveAspectRatio="none">
                <path d="M 5 20 Q 150 5 295 18 M 15 25 Q 140 10 280 22" fill="none" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
              </svg>
            </span>
          </h2>

          <p className="ss-header-desc ss-headline-anim">
            From brand clarity to consumer insight and integrated planning—<br/>
            we create the foundation for brands that <span className="ss-highlight">lead</span> and ideas that <span className="ss-highlight">win</span>.
          </p>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="ss-grid">
          
          {/* COLUMN 1 */}
          <div className="ss-column">
            <div className="ss-col-header">
              <div className="ss-icon-wrap">
                <Crown size={32} strokeWidth={1.5} className="ss-col-icon" />
              </div>
              <h3 className="ss-col-title">BRAND<br/>STRATEGY</h3>
            </div>
            <div className="ss-list">
              {[
                'Brand definition',
                'Brand audit',
                'Personal branding',
                'Brand architecture',
                'Brand naming',
                'Brand culture'
              ].map((item, i) => (
                <div className="ss-list-item" key={i}>
                  <ChevronRight size={16} strokeWidth={3} className="ss-list-icon" />
                  <span className="ss-list-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="ss-column">
            <div className="ss-col-header">
              <div className="ss-icon-wrap">
                <Search size={32} strokeWidth={1.5} className="ss-col-icon" />
              </div>
              <h3 className="ss-col-title">CONSUMER<br/>RESEARCH</h3>
            </div>
            <div className="ss-list">
              {[
                'Consumer research & insights',
                'Primary & secondary research',
                'Focus groups',
                'In-Person interviews',
                'Research reports',
                'GWI intelligence'
              ].map((item, i) => (
                <div className="ss-list-item" key={i}>
                  <ChevronRight size={16} strokeWidth={3} className="ss-list-icon" />
                  <span className="ss-list-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="ss-column">
            <div className="ss-col-header">
              <div className="ss-icon-wrap">
                <Megaphone size={32} strokeWidth={1.5} className="ss-col-icon" />
              </div>
              <h3 className="ss-col-title">INTEGRATED<br/>PLANNING</h3>
            </div>
            <div className="ss-list">
              {[
                'Communication strategy',
                'Go-To-Market (GTM) strategy',
                '360° strategy & approach',
                'Platform strategy'
              ].map((item, i) => (
                <div className="ss-list-item" key={i}>
                  <ChevronRight size={16} strokeWidth={3} className="ss-list-icon" />
                  <span className="ss-list-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
