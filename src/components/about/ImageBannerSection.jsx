import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImageBannerSection() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Entrance Animation
      gsap.fromTo(containerRef.current,
        { autoAlpha: 0, scale: 0.95, y: 50 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 1.2, ease: 'power3.out', 
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          }
        }
      );

      // Parallax Effect
      gsap.fromTo(imgRef.current,
        { y: '-15%', scale: 1.15 },
        {
          y: '15%',
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-12 lg:py-24 bg-[#F8F6F3] overflow-hidden">
      <div 
        ref={containerRef}
        className="max-w-[1400px] mx-auto px-4 lg:px-12 relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
        style={{ aspectRatio: '21/9' }}
      >
        <div className="absolute inset-0 bg-[#7A2EFF]/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
        <img 
          ref={imgRef}
          src="/purple-cow-banner.png" 
          alt="The inside story. Ordinary is boring." 
          className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform filter contrast-[1.05]"
        />
      </div>
    </section>
  );
}
