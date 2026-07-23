import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import AboutCollage from './AboutCollage';

export default function AboutHero() {
  const containerRef = useRef(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const tl = gsap.timeline();

      // Entrance Sequence
      tl.fromTo('.hero-eyebrow', 
        { autoAlpha: 0, x: -20 },
        { autoAlpha: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      )
      .fromTo('.hero-heading .line', 
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
        "-=0.4"
      )
      .fromTo('.hero-slogan',
        { scaleX: 0, autoAlpha: 0, transformOrigin: 'left' },
        { scaleX: 1, autoAlpha: 1, duration: 0.6, ease: 'power2.out' },
        "-=0.4"
      )
      .fromTo('.hero-slogan-text',
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.4 },
        "-=0.2"
      )
      .fromTo(['.hero-body', '.hero-cta'],
        { y: 30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        "-=0.3"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[760px] lg:min-h-[850px] flex flex-col lg:flex-row items-stretch pt-28 lg:pt-36 pb-12 lg:py-0 overflow-hidden bg-[#F8F6F2]">
      
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Left Content (46%) */}
      <div className="relative z-10 w-full lg:w-[46%] px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
        
        <div className="max-w-[560px]">
          {/* Eyebrow */}
          <div className="hero-eyebrow inline-block mb-6 relative invisible">
            <span className="font-handwritten text-[#7A2EFF] text-2xl lg:text-3xl tracking-wider uppercase inline-block border-b-2 border-[#7A2EFF] pb-1">ABOUT US</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading font-display text-[5rem] lg:text-[7.5rem] leading-[0.95] mb-6 flex flex-col">
            <span className="line text-black block invisible">WE ARE</span>
            <span className="line text-[#7A2EFF] block invisible">PURPLE COWS</span>
          </h1>

          {/* Slogan Strip */}
          <div className="hero-slogan bg-[#101014] text-white inline-block px-6 py-2 mb-8 transform -rotate-2 relative invisible shadow-lg" style={{ clipPath: 'polygon(2% 8%, 98% 0%, 99% 92%, 0% 100%)' }}>
            <p className="hero-slogan-text font-handwritten text-2xl lg:text-3xl m-0 invisible mt-1">
              We don't follow the herd. <span className="text-[#7A2EFF]">We lead it.</span>
            </p>
          </div>

          {/* Body Copy */}
          <p className="hero-body font-body text-lg lg:text-xl text-[#333] mb-10 leading-relaxed font-medium invisible">
            We are a full-service creative marketing agency built for brands that want more than just noise. We create ideas, craft experiences and build <span className="brush-underline text-black font-semibold">growth that lasts.</span>
          </p>

          {/* CTA */}
          <div className="hero-cta invisible">
            <a href="#contact" className="magnetic-btn group inline-flex items-center gap-4 bg-[#7A2EFF] text-white px-8 py-4 rounded-full font-display text-xl tracking-wider uppercase hover:bg-[#5B18D1] transition-colors focus:outline-none focus:ring-4 focus:ring-[#7A2EFF]/50">
              LET'S CREATE IMPACT
              <span className="bg-[#101014] text-white rounded-full p-1.5 flex items-center justify-center arrow-icon transition-transform duration-300">
                <ArrowUpRight size={20} strokeWidth={3} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Collage (54%) with Clean Angled Transition */}
      <div className="relative w-full lg:w-[54%] mt-16 lg:mt-0 min-h-[500px] lg:min-h-full flex-grow">
        
        {/* Desktop Angled Edge */}
        <div className="absolute inset-0 bg-[#101014] hidden lg:block" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)', zIndex: 0 }}></div>
        
        {/* Mobile Angled Edge */}
        <div className="absolute inset-0 bg-[#101014] lg:hidden" style={{ clipPath: 'polygon(0% 5%, 100% 0%, 100% 100%, 0% 100%)', zIndex: 0 }}></div>

        {/* Purple Paint Accent overlapping the edge cleanly */}
        <svg className="absolute top-0 left-[2%] lg:left-[5%] h-full w-[40px] lg:w-[80px] text-[#5B18D1] pointer-events-none z-0 opacity-80 mix-blend-screen hidden lg:block" preserveAspectRatio="none" viewBox="0 0 100 1000">
          <path d="M50 0 Q20 100 60 200 T30 400 T70 600 T20 800 T60 1000 H100 V0 Z" fill="currentColor" opacity="0.8"/>
          <path d="M80 0 Q40 100 90 300 T50 600 T80 900 T60 1000 H100 V0 Z" fill="currentColor"/>
        </svg>

        {/* Collage Component */}
        <div className="relative w-full h-full z-10">
          <AboutCollage />
        </div>
      </div>

    </section>
  );
}