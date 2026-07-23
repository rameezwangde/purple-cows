import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AboutCollage() {
  const collageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      const tl = gsap.timeline({ delay: 1.5 });

      tl.fromTo('.collage-item',
        { y: 30, autoAlpha: 0, scale: 0.95 },
        { y: 0, autoAlpha: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.2)' }
      )
      .fromTo('.doodle',
        { drawSVG: 0, autoAlpha: 0 },
        { drawSVG: '100%', autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: 'power2.inOut' },
        "-=0.5"
      );

      if (!reduced) {
        const move = e => {
          const x = e.clientX / innerWidth - 0.5;
          const y = e.clientY / innerHeight - 0.5;
          
          gsap.to('.collage-item', {
            x: i => x * (i * 3 + 5),
            y: i => y * (i * 3 + 5),
            duration: 1.5,
            ease: 'power2.out'
          });
        };
        window.addEventListener('pointermove', move);
        return () => window.removeEventListener('pointermove', move);
      }
    }, collageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={collageRef} className="relative w-full h-full min-h-[500px] flex items-center justify-center p-8 pt-20 lg:pt-32 z-10 perspective-1000">
      
      {/* Team Photo Removed as requested */}

      {/* Torn White Note */}
      <div className="collage-item absolute top-[5%] lg:top-[10%] left-[2%] lg:left-[5%] w-[240px] lg:w-[280px] bg-[#F8F6F2] p-6 lg:p-8 shadow-xl transform -rotate-2 z-20 torn-edge-white invisible">
        <p className="font-handwritten text-xl lg:text-3xl text-black leading-tight">
          Good ideas <br/>build <span className="brush-underline text-black">brands.</span><br/><br/>
          Great ideas <br/>build <span className="brush-underline text-[#7A2EFF]">legacies.</span>
        </p>
        <svg className="doodle absolute bottom-4 right-4 w-6 h-6 text-[#7A2EFF] invisible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>

      {/* Purple Sticky Note */}
      <div className="collage-item absolute top-[-5%] lg:top-[0%] right-[5%] lg:right-[20%] w-[160px] lg:w-[180px] h-[160px] lg:h-[180px] bg-[#7A2EFF] p-5 shadow-lg transform rotate-6 z-30 invisible">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-black/80 transform rotate-1"></div>
        <p className="font-handwritten text-2xl lg:text-3xl text-white leading-tight h-full flex items-center justify-center text-center">
          Ideas<br/>Create<br/>Impact
        </p>
        <svg className="doodle absolute top-2 right-2 w-8 h-8 text-black invisible" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 15l3-10h10l3 10L12 22 4 15z"/>
          <path d="M7 15h10"/>
        </svg>
      </div>

      {/* Strategy Sheet */}
      <div className="collage-item absolute top-[40%] lg:top-[35%] right-[2%] lg:right-[5%] w-[300px] lg:w-[400px] bg-[#F8F6F2] p-8 shadow-2xl transform rotate-2 z-10 invisible">
        <div className="relative w-full aspect-video flex items-center justify-center">
           <div className="absolute w-20 h-20 rounded-full border-2 border-black flex items-center justify-center font-handwritten text-2xl z-20 bg-[#F8F6F2]">
             IDEA
           </div>
           {/* Labels */}
           <div className="absolute top-0 left-0 font-handwritten text-lg">Strategy</div>
           <div className="absolute top-0 right-0 font-handwritten text-lg">Creative</div>
           <div className="absolute bottom-0 left-0 font-handwritten text-lg">Design</div>
           <div className="absolute bottom-0 right-0 font-handwritten text-lg">Results</div>
           {/* Arrows doodle */}
           <svg className="absolute inset-0 w-full h-full text-gray-400 doodle invisible" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="M100 50 Q 50 20 20 20" />
             <path d="M100 50 Q 150 20 180 20" />
             <path d="M100 50 Q 50 80 20 80" />
             <path d="M100 50 Q 150 80 180 80" />
           </svg>
        </div>
      </div>

      {/* Black Note */}
      <div className="collage-item absolute bottom-[-5%] lg:bottom-[5%] left-[10%] lg:left-[15%] w-[220px] lg:w-[260px] bg-[#101014] p-6 shadow-xl transform -rotate-1 z-40 torn-edge-black border-t border-gray-800 invisible">
        <p className="font-handwritten text-2xl lg:text-3xl text-white leading-tight">
          We turn bold ideas into <br/>real-world <span className="text-[#7A2EFF]">impact.</span>
        </p>
      </div>

    </div>
  );
}
