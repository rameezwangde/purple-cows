import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutValues } from '../../data/aboutValues';

gsap.registerPlugin(ScrollTrigger);

export default function ValuesSection() {
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

      tl.fromTo('.values-header',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8 }
      )
      .fromTo('.value-item',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.4"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-[#101014] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="values-header invisible mb-16 lg:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl tracking-wide mb-4">
            THE VALUES BEHIND THE <span className="text-[#7A2EFF]">PURPLE</span>
          </h2>
          <p className="font-handwritten text-xl lg:text-2xl text-gray-400">
            How we think shapes everything we create.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-16">
          {aboutValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={value.id} 
                className="value-item invisible group relative flex flex-col items-start p-4 hover:bg-[#15151a] transition-colors duration-300 border-b border-gray-800 lg:border-none"
              >
                <div className="mb-6 text-[#7A2EFF] group-hover:rotate-12 transition-transform duration-300">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-display text-2xl tracking-wide mb-3 group-hover:-translate-y-[3px] transition-transform duration-300">
                  {value.title}
                </h3>
                
                <p className="font-body text-gray-400 leading-relaxed group-hover:-translate-y-[3px] transition-transform duration-300">
                  {value.body}
                </p>

                {/* Hover Underline */}
                <div className="absolute bottom-0 left-4 w-0 h-[2px] bg-[#7A2EFF] group-hover:w-[calc(100%-2rem)] transition-all duration-500 rounded-full"></div>
                
                {/* Thin separators (Desktop) */}
                {(index % 3 !== 2) && (
                  <div className="hidden lg:block absolute top-0 -right-8 w-px h-full bg-gray-800 group-hover:bg-gray-700 transition-colors"></div>
                )}
                {/* Bottom separators for first row (Desktop) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -bottom-6 left-0 w-full h-px bg-gray-800 group-hover:bg-gray-700 transition-colors"></div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}