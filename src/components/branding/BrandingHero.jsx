import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { SplitText } from '../../components/ui/SplitText';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useIntersectionPause } from '../../hooks/useIntersectionPause';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function BrandingHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const bgPaintRef = useRef(null);
  const planeRef = useRef(null);
  const lightbulbRef = useRef(null);

  const isVisible = useIntersectionPause(containerRef);

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

      tl.fromTo(containerRef.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 })
      
      .fromTo(imageRef.current, 
        { y: 100, rotation: -5, autoAlpha: 0 }, 
        { y: 0, rotation: 0, autoAlpha: 1, duration: 1.2 }, 
        "-=0.5"
      )
      
      .fromTo(bgPaintRef.current,
        { scale: 0.8, autoAlpha: 0, rotation: -5 },
        { scale: 1, autoAlpha: 1, rotation: 0, duration: 1.5, ease: 'back.out(1.2)' },
        "-=1"
      )

      .fromTo('.split-char', 
        { y: 50, autoAlpha: 0, rotationX: -45 }, 
        { y: 0, autoAlpha: 1, rotationX: 0, stagger: 0.03, duration: 0.8, ease: 'back.out(1.5)' },
        "-=0.8"
      )

      .fromTo(planeRef.current,
        { autoAlpha: 0, scale: 0.5 },
        { 
          autoAlpha: 1, 
          scale: 1, 
          duration: 3, 
          ease: 'sine.inOut',
          motionPath: {
            path: [{x: 0, y: 0}, {x: -200, y: -100}, {x: -400, y: 50}, {x: -600, y: -50}],
            curviness: 1.5,
            autoRotate: true
          }
        },
        "-=0.5"
      )

      .fromTo('.intro-card',
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
        "-=2"
      );

      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        paused: !isVisible
      });

      gsap.to(lightbulbRef.current, {
        opacity: 0.5,
        filter: 'drop-shadow(0 0 2px rgba(122, 46, 255, 0.4))',
        duration: 1.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        paused: !isVisible
      });

      gsap.to('.hero-floating-star', {
        rotation: 360,
        scale: 1.2,
        opacity: 0.6,
        duration: 4,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
        paused: !isVisible
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isVisible]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-[#F8F6F3] overflow-hidden paper-grain"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          <h2 className="font-handwritten text-[#7a2eff] text-2xl lg:text-3xl tracking-widest mb-4">
            BRANDING PACKAGING BRAND EXPERIENCES
          </h2>
          
          <h1 className="font-display text-7xl lg:text-[7.5rem] tracking-tighter uppercase text-[#111111] leading-[0.95] mb-6 flex flex-col gap-1">
            <div><SplitText type="chars" text="MAKE" /></div>
            <div><SplitText type="chars" text="BRANDS" className="text-[#7a2eff]" /></div>
            <div><SplitText type="chars" text="IMPOSSIBLE" /></div>
            <div><SplitText type="chars" text="TO IGNORE." /></div>
          </h1>
          
          <p className="font-handwritten text-3xl lg:text-4xl text-[#111111] mb-12">
            We don't decorate brands. We build identities people <span className="text-[#7a2eff]">remember, trust and talk about.</span>
          </p>
          
        </div>

        {/* RIGHT COLUMN: Mascot & Graphics */}
        <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] flex items-center justify-center pointer-events-none">
          
          <div ref={planeRef} className="absolute top-[10%] left-[-10%] w-12 h-12 text-[#5d16d1] opacity-0 z-20">
             <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" />
             </svg>
          </div>
          
          <svg className="hero-floating-star absolute top-[5%] right-[30%] w-8 h-8 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
          </svg>
          
          {/* Packaging Image */}
          <div className="relative w-[110%] h-full z-10 hero-mascot transform-gpu flex items-center justify-center">
            <img 
              ref={imageRef}
              src="/branding-packaging.png" 
              alt="Premium Branding and Packaging" 
              className="w-full max-h-[90%] object-contain mix-blend-multiply drop-shadow-[0_30px_60px_rgba(122,46,255,0.4)]"
            />
            {/* Top Right Torn Paper Sticker */}
            <div className="absolute top-[10%] right-[-15%] bg-[#e3e1db] px-6 py-8 shadow-xl transform rotate-[3deg] w-[220px] z-20" style={{ clipPath: 'polygon(2% 0, 98% 3%, 100% 95%, 5% 100%, 0 92%)' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm border border-black/5 transform rotate-[-6deg] shadow-sm"></div>
              <p className="font-body text-[13px] font-[500] text-[#111111] leading-[1.6]">
                We design identities that don't just look good. They work hard.
              </p>
              <svg className="w-5 h-5 text-[#5d16d1] absolute bottom-4 right-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
              </svg>
            </div>
            
            {/* Bottom Right Stacked Blocks */}
            <div className="absolute bottom-[10%] right-[-10%] z-20 flex flex-col items-end pointer-events-none">
              <div className="bg-[#111111] text-white px-5 py-3 font-display text-[22px] uppercase tracking-wide transform rotate-[-4deg] shadow-lg relative z-10">
                BRANDS PEOPLE
              </div>
              <div className="bg-[#5d16d1] text-white px-5 py-3 font-display text-[24px] uppercase tracking-wider transform rotate-[2deg] shadow-xl -mt-2 mr-6 relative z-20">
                remember.
              </div>
              
              {/* Decorative Arrow */}
              <svg className="absolute -right-16 top-1/2 w-14 h-14 text-[#111111] transform rotate-[15deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10c0 4-4 8-8 8s-8-4-8-8"/>
                <path d="M4 14l-2 4 4 2"/>
                <path d="M14 6l2-2" />
                <path d="M18 7l2-1" />
              </svg>
            </div>
          </div>
          
          <div ref={bgPaintRef} className="hero-paint absolute inset-0 z-0 flex items-center justify-center opacity-0 transform-gpu">
            <div className="w-[100%] h-[100%] bg-[#5d16d1] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-90 transform -rotate-12 mix-blend-multiply scale-[1.2] lg:scale-[1.5]"></div>
          </div>
          
        </div>
      </div>
      
      {/* 4 Column Intro Cards */}
      <div className="max-w-[1400px] mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 pb-16">
        {[
          {
            num: '01',
            text: "A logo isn't a brand.<br/><br/>A colour palette isn't a personality.<br/><br/>We uncover what makes your business genuinely different—and turn it into a brand people instantly recognize."
          },
          {
            num: '02',
            text: "Every successful brand begins with clarity.<br/><br/>We define your positioning, voice, visual identity and customer perception before a single design decision is made.<br/><br/>Because strategy always comes before aesthetics."
          },
          {
            num: '03',
            text: "From startups to established businesses, we craft branding systems that work across websites, packaging, digital campaigns, print and every customer touchpoint.<br/><br/>Consistency builds trust."
          },
          {
            num: '04',
            text: "We combine strategy, storytelling and design into one seamless process—creating brands that don't just launch beautifully, but continue growing with your business."
          }
        ].map((item, i) => (
          <div key={i} className="intro-card relative bg-white/60 backdrop-blur-md border border-white p-8 rounded-2xl shadow-sm hover:shadow-[0_20px_40px_rgba(122,46,255,0.1)] hover:-translate-y-2 transition-all duration-500 group overflow-hidden">
            {/* Giant Background Number */}
            <div className="absolute -right-4 -top-6 font-display text-[8rem] leading-none text-[#7a2eff]/5 group-hover:text-[#7a2eff]/10 transition-colors duration-500 pointer-events-none select-none">
              {item.num}
            </div>
            {/* Top decorative line */}
            <div className="absolute top-0 left-8 w-12 h-1 bg-[#7a2eff] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
            {/* Content */}
            <div className="relative z-10 text-[14px] font-medium leading-relaxed text-[#111111]/80 mt-12" dangerouslySetInnerHTML={{ __html: item.text }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
