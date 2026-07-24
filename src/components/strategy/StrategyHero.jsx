import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { SplitText } from '../ui/SplitText';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useIntersectionPause } from '../../hooks/useIntersectionPause';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function StrategyHero() {
  const containerRef = useRef(null);
  const cowRef = useRef(null);
  const bgPaintRef = useRef(null);
  const headlineRef = useRef(null);
  const planeRef = useRef(null);
  const lightbulbRef = useRef(null);
  const loopsRef = useRef([]);

  const isVisible = useIntersectionPause(containerRef);

  // Set up mouse parallax for hero elements
  useMouseParallax(containerRef, [
    { selector: '.hero-mascot', factor: -15, rotate: -2 },
    { selector: '.hero-paint', factor: 8, rotate: 1 },
    { selector: '.hero-floating-star', factor: 25 },
    { selector: '.hero-floating-doodle', factor: -20 },
  ], isVisible);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Start text animation IMMEDIATELY at absolute time zero
      tl.fromTo('.split-char', 
        { y: 30, autoAlpha: 0, rotationX: -45 }, 
        { y: 0, autoAlpha: 1, rotationX: 0, stagger: 0.02, duration: 0.6, ease: 'back.out(1.5)' },
        0
      )
      
      .fromTo(cowRef.current, 
        { y: 50, rotation: 5, autoAlpha: 0 }, 
        { y: 0, rotation: 0, autoAlpha: 1, duration: 0.8 }, 
        0
      )
      
      .fromTo(bgPaintRef.current,
        { scale: 0.9, autoAlpha: 0, rotation: -2 },
        { scale: 1, autoAlpha: 1, rotation: 0, duration: 1, ease: 'back.out(1.2)' },
        0
      )

      .fromTo(planeRef.current,
        { autoAlpha: 0, scale: 0.8 },
        { 
          autoAlpha: 1, 
          scale: 1, 
          duration: 2, 
          ease: 'power2.out',
          motionPath: {
            path: [{x: 0, y: 0}, {x: -200, y: -100}, {x: -400, y: 50}, {x: -600, y: -50}],
            curviness: 1.5,
            autoRotate: true
          }
        },
        0.2
      );

      loopsRef.current = [
        gsap.to(cowRef.current, {
          scaleY: 1.015,
          scaleX: 0.985,
          duration: 2.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        }),
        gsap.to(lightbulbRef.current, {
          opacity: 0.5,
          filter: 'drop-shadow(0 0 2px rgba(122, 46, 255, 0.4))',
          duration: 1.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        }),
        gsap.to('.hero-floating-star', {
          rotation: 360,
          scale: 1.2,
          opacity: 0.6,
          duration: 4,
          ease: 'linear',
          repeat: -1,
          yoyo: true,
          stagger: 0.5
        })
      ];

    }, containerRef);

    return () => ctx.revert();
  }, []);

  React.useEffect(() => {
    loopsRef.current.forEach(loop => {
      if (loop) {
        if (isVisible) loop.play();
        else loop.pause();
      }
    });
  }, [isVisible]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-[#F8F6F3] overflow-hidden paper-grain"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <h2 className="font-handwritten text-[#7a2eff] text-2xl lg:text-3xl tracking-widest mb-4">
            STRATEGY. PLANNING.
          </h2>
          
          <h1 className="font-display text-7xl lg:text-9xl tracking-tighter uppercase text-[#111111] leading-[0.85] mb-6">
            <SplitText type="chars" text="MASTER" className="block" />
            <SplitText type="chars" text="PLAN" className="block text-[#7a2eff]" />
          </h1>
          
          <p className="font-handwritten text-3xl lg:text-4xl text-[#111111] mb-12">
            Where strategy meets <span className="text-[#7a2eff]">imagination.</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[13px] font-medium leading-relaxed text-[#111111]/80 max-w-2xl">
            <p>
              We decode complexity.<br/><br/>We bring clarity to chaos.<br/><br/>We design strategies that are human, useful and impossible to ignore.
            </p>
            <p>
              We don't just plan for now, we build for what's next. With curiosity as our compass and insight as our superpower.
            </p>
            <p>
              From big ideas to bulletproof plans, we partner with visionaries to turn possibilities into measurable movement.
            </p>
          </div>
          
        </div>

        {/* RIGHT COLUMN: Mascot & Graphics */}
        <div className="lg:col-span-6 relative h-[600px] lg:h-[800px] flex items-center justify-center pointer-events-none">
          
          {/* Decorative SVG: Star 1 */}
          <svg width="48" height="48" className="hero-floating-star absolute top-[10%] left-[20%] w-12 h-12 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
          </svg>
          
          {/* Decorative SVG: Lightbulb */}
          <div ref={lightbulbRef} className="hero-floating-doodle absolute top-[5%] right-[15%] w-20 h-20 text-[#7a2eff]">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 18H15M10 21H14M12 3C8.68629 3 6 5.68629 6 9C6 11.239 7.22744 13.1878 9 14.2831V15H15V14.2831C16.7726 13.1878 18 11.239 18 9C18 5.68629 15.3137 3 12 3Z"/>
              <path d="M12 7V10M9.5 8L10.5 10M14.5 8L13.5 10" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Decorative SVG: Paper Plane */}
          <div ref={planeRef} className="absolute top-[20%] right-[30%] w-16 h-16 text-[#7a2eff] opacity-0">
             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" />
             </svg>
          </div>
          
          {/* The Purple Cow Generated Image */}
          <div className="relative w-[120%] h-full right-[5%] z-10 hero-mascot transform-gpu flex items-center justify-center">
            <img 
              ref={cowRef}
              src="/purple-cow-sofa.png" 
              alt="Purple Cow Strategy Mascot" 
              className="w-full max-h-[85%] object-contain mix-blend-multiply drop-shadow-2xl"
            />
          </div>
          
          {/* Organic Purple Paint Splash (Simulated with absolute positioned blobs for CSS approach) */}
          <div ref={bgPaintRef} className="hero-paint absolute inset-0 z-0 flex items-center justify-center opacity-0 transform-gpu">
            <div className="w-[120%] h-[120%] bg-[#7a2eff] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-20 filter blur-3xl transform rotate-12 mix-blend-multiply"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
