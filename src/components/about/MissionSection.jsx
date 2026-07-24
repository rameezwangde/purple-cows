import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MissionSection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      });

      tl.fromTo('.mission-eyebrow',
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0, duration: 0.6 }
      )
      .fromTo('.mission-heading',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        "-=0.4"
      )
      .fromTo('.mission-body',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo('.target-element',
        { drawSVG: 0, autoAlpha: 0, scale: 0.8 },
        { drawSVG: '100%', autoAlpha: 1, scale: 1, duration: 1, stagger: 0.15, ease: 'back.out(1.2)' },
        "-=0.6"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#F8F6F2] text-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <span className="mission-eyebrow invisible inline-block font-handwritten text-[#7A2EFF] text-2xl mb-4">
              OUR MISSION
            </span>
            <h2 className="mission-heading invisible font-display text-5xl lg:text-6xl leading-[1.1] mb-8">
              We turn brave thinking into <span className="text-[#7A2EFF]">meaningful growth.</span>
            </h2>
            <p className="mission-body invisible font-body text-[#555] text-xl leading-relaxed max-w-xl">
              Our role is not simply to make brands look better. By offering <b>expert digital marketing</b>, <b>SEO</b>, and <b>web design services</b>, we help them communicate confidently and grow through ideas that connect creativity with purpose.
            </p>
          </div>

          {/* Right: Target Illustration (SVG Placeholder) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
            
            {/* Hand-drawn target SVG */}
            <svg className="w-full max-w-[400px] h-auto overflow-visible" viewBox="0 0 400 400" fill="none" stroke="currentColor">
              {/* Outer Ring */}
              <circle className="target-element invisible" cx="200" cy="200" r="180" stroke="#ddd" strokeWidth="2" strokeDasharray="10 10"/>
              {/* Middle Ring */}
              <circle className="target-element invisible" cx="200" cy="200" r="120" stroke="#aaa" strokeWidth="3"/>
              {/* Inner Bullseye */}
              <circle className="target-element invisible" cx="200" cy="200" r="40" fill="#7A2EFF"/>
              
              {/* Purple Arrow */}
              <path className="target-element invisible" d="M350 50 L 220 180" stroke="#7A2EFF" strokeWidth="6" strokeLinecap="round"/>
              <path className="target-element invisible" d="M220 180 L 260 170 M220 180 L 230 140" stroke="#7A2EFF" strokeWidth="6" strokeLinecap="round"/>
              
              {/* Strategy Labels & Lines */}
              <path className="target-element invisible" d="M50 100 L 120 150" stroke="#101014" strokeWidth="2"/>
              <text className="target-element invisible font-handwritten" x="10" y="90" fill="#101014" fontSize="24">Insight</text>
              
              <path className="target-element invisible" d="M350 300 L 260 250" stroke="#101014" strokeWidth="2"/>
              <text className="target-element invisible font-handwritten" x="320" y="330" fill="#101014" fontSize="24">Growth</text>
            </svg>

            {/* Paint Accent */}
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-[#7A2EFF] rounded-full filter blur-[80px] opacity-20 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}