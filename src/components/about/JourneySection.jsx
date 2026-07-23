import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutJourney } from '../../data/aboutJourney';

gsap.registerPlugin(ScrollTrigger);

export default function JourneySection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      });

      // 1. Black note slides upward
      tl.fromTo('.journey-note',
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.2)' }
      );

      // 2. Columns reveal
      tl.fromTo('.journey-col',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
        "-=0.2"
      );

      // 3. Separators draw
      tl.fromTo('.journey-sep',
        { scaleY: 0 },
        { scaleY: 1, duration: 0.5, stagger: 0.1, transformOrigin: 'top', ease: 'power1.inOut' },
        "-=0.4"
      );

      // 4. Underlines draw
      tl.fromTo('.journey-underline',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, stagger: 0.1, transformOrigin: 'left', ease: 'power2.out' },
        "-=0.2"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-[#F8F6F2] relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          
          {/* Column 1: Pinned Black Note */}
          <div className="relative">
            <div className="journey-note invisible bg-[#101014] text-white p-8 shadow-xl transform rotate-1 torn-edge max-w-[280px]">
               {/* Purple Pushpin */}
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#7A2EFF] rounded-full shadow-[0_4px_6px_rgba(0,0,0,0.5)] border-2 border-[#5B18D1]"></div>
               <p className="font-handwritten text-2xl leading-relaxed mt-2">
                 Our journey is built on curiosity, courage and <span className="text-[#7A2EFF] brush-underline relative z-10 inline-block mt-1">creativity.</span>
               </p>
               <svg className="absolute bottom-4 right-4 w-6 h-6 text-[#7A2EFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                 <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                 <line x1="9" y1="9" x2="9.01" y2="9"></line>
                 <line x1="15" y1="9" x2="15.01" y2="9"></line>
               </svg>
            </div>
          </div>

          {/* Text Columns */}
          {aboutJourney.map((item, index) => (
            <div key={item.id} className="journey-col invisible relative flex flex-col">
              <h3 className="font-display text-2xl lg:text-3xl text-[#7A2EFF] tracking-wide mb-4">
                {item.title}
              </h3>
              <p className="font-body text-gray-700 leading-relaxed mb-6 flex-grow">
                {item.body}
              </p>
              <div className="w-12 h-1 bg-[#7A2EFF] journey-underline invisible mt-auto rounded-full"></div>
              
              {/* Vertical Separator (hidden on mobile/tablet last cols) */}
              {index < aboutJourney.length - 1 && (
                <div className="journey-sep invisible hidden lg:block absolute top-0 -right-6 lg:-right-6 w-px h-full bg-gray-300"></div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
