import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCTA() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        }
      });

      tl.fromTo('.cta-content > *',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
      )
      .fromTo('.cta-note',
        { autoAlpha: 0, scale: 0.8, rotation: 10 },
        { autoAlpha: 1, scale: 1, rotation: -3, duration: 0.6, ease: 'back.out(1.5)' },
        "-=0.4"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-[#F8F6F2] px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Torn Paper Strip Container */}
        <div className="relative w-full bg-[#6D24E8] text-white p-12 lg:p-24 shadow-2xl torn-edge transform -rotate-1">
          <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none"></div>

          <div className="cta-content relative z-10 flex flex-col items-center text-center">
            
            <h2 className="invisible font-display text-5xl lg:text-7xl leading-[1.1] mb-6">
              We don't just build campaigns.<br/>
              We build <span className="brush-underline text-white relative z-10 before:!bg-black">momentum.</span>
            </h2>
            
            <p className="invisible font-body text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl font-medium">
              Bring us the ambition. We'll bring the strategy, creativity and energy.
            </p>

            <div className="invisible relative">
              <a href="#contact" className="group inline-flex items-center gap-4 bg-[#101014] text-white px-10 py-5 font-display text-2xl tracking-wider uppercase hover:bg-black transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-black/50" style={{ clipPath: 'polygon(5% 0, 100% 5%, 95% 100%, 0 95%)' }}>
                START A CONVERSATION
                <span className="text-[#7A2EFF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                  <ArrowUpRight size={28} strokeWidth={3} />
                </span>
              </a>

              {/* Small Pinned Note */}
              <div className="cta-note invisible absolute -bottom-16 -right-12 lg:-right-24 bg-[#101014] p-4 shadow-xl max-w-[200px] border border-gray-800 torn-edge">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
                <p className="font-handwritten text-lg text-white">
                  Big ideas deserve bold beginnings.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}