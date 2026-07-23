import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TeamCultureSection() {
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

      // Left Collage
      tl.fromTo('.team-img',
        { autoAlpha: 0, scale: 0.9, y: 30 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.1)' }
      )
      .fromTo('.team-note',
        { autoAlpha: 0, rotation: -10, scale: 0.8 },
        { autoAlpha: 1, rotation: 0, scale: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.5)' },
        "-=0.4"
      );

      // Right Content
      tl.fromTo('.team-content > *',
        { autoAlpha: 0, x: 30 },
        { autoAlpha: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        "-=0.6"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 bg-[#101014] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-24">
          
          {/* Left: Collage */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
            
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Image Placeholders with B&W styling */}
              <div className="team-img invisible absolute top-0 left-0 w-[60%] aspect-[4/3] bg-gray-800 p-2 transform -rotate-3 z-10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team brainstorm" className="w-full h-full object-cover filter grayscale opacity-90 mix-blend-screen" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/20 transform rotate-2"></div>
              </div>



              <div className="team-img invisible absolute bottom-0 left-[10%] w-[65%] aspect-video bg-gray-800 p-2 transform -rotate-1 z-10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800" alt="Laptop and notes" className="w-full h-full object-cover filter grayscale opacity-90 mix-blend-screen" />
              </div>

              {/* Purple Note */}
              <div className="team-note invisible absolute top-[10%] left-[-10%] w-[180px] bg-[#7A2EFF] p-5 shadow-xl transform rotate-6 z-30">
                <p className="font-handwritten text-xl text-white leading-tight">
                  Different minds.<br/>One creative rhythm.
                </p>
                {/* Binder Clip Placeholder */}
                <div className="absolute -top-4 right-4 w-6 h-8 bg-black"></div>
              </div>

              {/* Torn Note */}
              <div className="team-note invisible absolute bottom-[5%] right-[-5%] w-[220px] bg-[#F8F6F2] p-5 shadow-xl transform -rotate-3 z-30 torn-edge">
                <p className="font-handwritten text-lg text-black leading-tight">
                  Strategists, designers, writers, developers and problem-solvers — <span className="brush-underline text-[#7A2EFF]">working as one team.</span>
                </p>
              </div>
            </div>

          </div>

          {/* Right: Content */}
          <div className="team-content w-full lg:w-1/2 flex flex-col justify-center">
            
            <span className="invisible inline-block font-handwritten text-[#7A2EFF] text-2xl mb-4">
              THE PEOPLE BEHIND THE PURPLE
            </span>
            
            <h2 className="invisible font-display text-5xl lg:text-7xl leading-[0.9] mb-8">
              THINKERS, MAKERS AND DOERS.
            </h2>
            
            <p className="invisible font-body text-gray-400 text-xl leading-relaxed mb-10 max-w-xl">
              We are a collaborative team with different skills, backgrounds and perspectives, united by a shared obsession with creating work that matters.
            </p>

            <div className="invisible">
              {/* TODO: Update link when Team page is built */}
              <a href="#team" className="magnetic-btn group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-display text-xl tracking-wider uppercase hover:bg-[#F8F6F2] transition-colors focus:outline-none focus:ring-4 focus:ring-white/50">
                MEET THE TEAM
                <span className="bg-[#101014] text-white rounded-full p-1.5 flex items-center justify-center arrow-icon transition-transform duration-300">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
