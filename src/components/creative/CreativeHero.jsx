import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Clapperboard, LineChart, Heart, Send } from 'lucide-react';
import { SplitText } from '../../components/ui/SplitText';
// Using the newly provided image for the workspace
import workspaceArt from '../../assets/images/creative-workspace.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function CreativeHero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Right Side Workspace fades in
      tl.from('.cr-workspace-placeholder', {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        transformOrigin: '50% 50%'
      }, 0.2);

      // 2. Left Side Brand & Subtitle
      tl.from('.cr-brand-top', { y: 20, opacity: 0, duration: 0.8 }, 0.4)
        .from('.cr-subtitle-wrap', { y: 20, opacity: 0, duration: 0.8 }, 0.5)
        .from('.cr-divider-line', { scaleX: 0, transformOrigin: 'left', duration: 1 }, 0.6);

      // 3. Headline Reveal using SplitText
      const splitChars = gsap.utils.toArray('.cr-headline .split-char');
      tl.from(splitChars, {
        y: 80,
        opacity: 0,
        rotationX: -45,
        stagger: 0.015,
        duration: 0.8,
        ease: 'back.out(1.2)'
      }, 0.6);

      // 4. Handwritten underline
      tl.from('.cr-hl-underline path', {
        strokeDashoffset: 1000,
        duration: 1,
        ease: 'power2.inOut'
      }, 1.4);

      // 5. Paper Airplane Path
      tl.from('.cr-plane', {
        motionPath: {
          path: '.cr-plane-dashed',
          align: '.cr-plane-dashed',
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        },
        duration: 2,
        ease: 'power1.inOut',
        opacity: 0
      }, 1.0);

      // 6. Features stagger
      tl.from('.cr-feature-col', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8
      }, 1.5);

      // 7. Parallax Workspace (Mouse Move)
      const onPointerMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to('.cr-workspace-placeholder', {
          x: x * 15,
          y: y * 10,
          rotationY: x * 2,
          rotationX: -y * 2,
          duration: 1.2,
          ease: 'power2.out'
        });
      };
      window.addEventListener('pointermove', onPointerMove, { passive: true });

      return () => {
        window.removeEventListener('pointermove', onPointerMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cr-hero" ref={containerRef}>
      
      {/* DECORATIONS (Subtle doodles) */}
      <svg className="cr-doodle" style={{ width: '40px', top: '20%', left: '40%' }} viewBox="0 0 100 100">
        <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" fill="none" stroke="#7C3AED" strokeWidth="4" strokeLinejoin="round"/>
      </svg>
      <svg className="cr-doodle" style={{ width: '50px', bottom: '35%', left: '5%' }} viewBox="0 0 100 100">
        <path d="M50 10 C30 10, 20 30, 40 50 C60 70, 80 50, 70 30 C60 10, 40 20, 50 60" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
      </svg>

      {/* LEFT COLUMN */}
      <div className="cr-hero-left">
        
        {/* Brand */}
        <div className="cr-brand-top">
          <div className="cr-brand-name">
            PURPLE <span className="cr-brand-cow">Cow</span>
          </div>
          <div className="cr-subtitle-wrap">
            <span className="cr-subtitle">CREATIVE PRODUCTION<br/>AND CONTENT SOLUTIONS</span>
            <div className="cr-divider-line"></div>
          </div>
        </div>

        {/* Paper Airplane and Path SVG */}
        <div className="cr-plane-path">
          <svg viewBox="0 0 300 100" style={{ overflow: 'visible' }}>
            <path className="cr-plane-dashed" d="M 0 80 Q 100 80 150 40 T 300 10" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="6 6" strokeLinecap="round"/>
            <g className="cr-plane" transform="translate(-15, -15)">
              <Send size={30} color="#7C3AED" strokeWidth={1.5} fill="#FAF8F5" />
            </g>
          </svg>
        </div>

        {/* Headline */}
        <h1 className="cr-headline" style={{ position: 'relative' }}>
          {/* Top-left burst doodle */}
          <svg className="cr-doodle" style={{ width: '30px', top: '-15px', left: '-25px' }} viewBox="0 0 50 50">
            <path d="M 15 25 L 5 15 M 25 15 L 25 5 M 35 25 L 45 15 M 10 35 L 5 40" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <SplitText type="chars" text="IDEAS" /><br/>
          <SplitText type="chars" text="INTO " />
          <span className="cr-hl-purple"><SplitText type="chars" text="IMPACT." /></span><br/>
          <SplitText type="chars" text="CONTENT" /><br/>
          <SplitText type="chars" text="THAT" />
          <span className="cr-hl-script-wrap">
            <span className="cr-hl-script">CONNECTS.</span>
            <svg className="cr-hl-underline" viewBox="0 0 300 30" preserveAspectRatio="none">
              <path d="M 10 20 Q 150 5 290 15 M 15 25 Q 140 10 280 22" fill="none" stroke="#7C3AED" strokeWidth="5" strokeLinecap="round" strokeDasharray="1000" strokeDashoffset="0"/>
            </svg>
          </span><br/>
          <SplitText type="chars" text="STRATEGY" /><br/>
          <SplitText type="chars" text="THAT " />
          <span className="cr-hl-purple"><SplitText type="chars" text="GROWS." /></span>
        </h1>

        {/* Features */}
        <div className="cr-features">
          <div className="cr-feature-col">
            <Lightbulb className="cr-feature-icon" size={26} strokeWidth={1.5}/>
            <h4 className="cr-feature-title">SMART STRATEGY</h4>
            <p className="cr-feature-desc">We uncover insights that shape campaigns people actually remember.</p>
          </div>
          <div className="cr-feature-col">
            <Clapperboard className="cr-feature-icon" size={26} strokeWidth={1.5}/>
            <h4 className="cr-feature-title">CREATIVE CONTENT</h4>
            <p className="cr-feature-desc">Storytelling crafted for attention, engagement and action.</p>
          </div>
          <div className="cr-feature-col">
            <LineChart className="cr-feature-icon" size={26} strokeWidth={1.5}/>
            <h4 className="cr-feature-title">REAL RESULTS</h4>
            <p className="cr-feature-desc">Performance measured through growth, reach and meaningful conversions.</p>
          </div>
          <div className="cr-feature-col">
            <Heart className="cr-feature-icon" size={26} strokeWidth={1.5}/>
            <h4 className="cr-feature-title">STRONGER BRANDS</h4>
            <p className="cr-feature-desc">Creative systems that build lasting recognition and loyal communities.</p>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="cr-hero-right">
        <div className="cr-workspace">
          <img src={workspaceArt} alt="Creative Workspace" className="cr-workspace-placeholder" />
        </div>
      </div>

    </section>
  );
}
