import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutStats } from '../../data/aboutStats';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactSection() {
  const containerRef = useRef(null);
  const numbersRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true
        }
      });

      tl.fromTo('.impact-header',
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.8 }
      )
      .fromTo('.stat-item',
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.4"
      );

      // Count up animation
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetText = aboutStats[index].value;
        const targetNum = parseInt(targetText.replace(/\D/g, ''), 10);
        const suffix = targetText.replace(/[0-9]/g, '');

        if (!isNaN(targetNum)) {
          gsap.fromTo(el,
            { innerHTML: 0 },
            {
              innerHTML: targetNum,
              duration: 2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
                once: true
              },
              snap: { innerHTML: 1 },
              onUpdate: function() {
                el.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
              }
            }
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-[#F8F6F2]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="impact-header invisible mb-16 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-2 border-gray-200 pb-8">
          <div>
            <span className="font-handwritten text-[#7A2EFF] text-2xl mb-2 inline-block">OUR IMPACT</span>
            <h2 className="font-display text-4xl lg:text-5xl text-black">
              Work that moves brands <span className="brush-underline text-[#7A2EFF]">forward.</span>
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {aboutStats.map((stat, index) => (
            <div key={stat.id} className="stat-item invisible relative">
              <div 
                ref={el => numbersRef.current[index] = el}
                className="font-display text-6xl lg:text-7xl text-[#7A2EFF] mb-4"
              >
                {stat.value}
              </div>
              <h3 className="font-display text-xl lg:text-2xl text-black mb-2 tracking-wide">
                {stat.label}
              </h3>
              <p className="font-body text-gray-600">
                {stat.description}
              </p>

              {/* Vertical Separator (Desktop) */}
              {(index < aboutStats.length - 1) && (
                <div className="hidden lg:block absolute top-0 -right-4 lg:-right-6 w-px h-full bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}