import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-col', 
        { y: 40, autoAlpha: 0 },
        { 
          y: 0, 
          autoAlpha: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-8 lg:pt-12 pb-20 lg:pb-28 bg-[#F8F6F2]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Column 1 */}
          <div className="story-col invisible">
            <h2 className="font-display text-5xl lg:text-6xl mb-8 lowercase text-black tracking-wide" style={{ fontFamily: 'Georgia, serif', textTransform: 'lowercase' }}>
              serendipity, <br/>perhaps?
            </h2>
            <p className="font-body text-[#555] text-lg leading-relaxed">
              Once upon a time, a few creative minds crossed paths in the bustling heart of the city. Fate intervened, late-night brainstorming sessions turned into deep friendships, and as the corporate grind set in, we found ourselves diving headfirst into the world of marketing at some of the top agencies. Little did we know that a simple coffee shop debate about standing out in a crowded market would spark the idea that changed everything.
            </p>
          </div>

          {/* Column 2 */}
          <div className="story-col invisible pt-2 md:pt-[104px]">
            <p className="font-body text-[#555] text-lg leading-relaxed mb-6">
              Enter Purple Cow. On that crisp morning, as we sat staring at a sea of identical brand campaigns, the seeds of our agency were sown. With our shared vision and a relentless belief that 'safe' is risky, Purple Cow was born.
            </p>
            <p className="font-body text-[#555] text-lg leading-relaxed">
              With nothing but a second-hand laptop, no big investors, and no starting portfolio, we had something that just felt right. Over a decade later, that cramped tiny room has blossomed into multi-city operations, international ventures, and a family of amazing creatives.
            </p>
          </div>

          {/* Column 3 */}
          <div className="story-col invisible pt-2 md:pt-[104px]">
            <p className="font-body text-[#555] text-lg leading-relaxed mb-6">
              But amidst the whirlwind of growth, what truly fills our hearts with pride are the memories we've made and the relationships we've forged along the way.
            </p>
            <p className="font-body text-[#555] text-lg leading-relaxed">
              Our feet? Still firmly planted on the ground. Our hearts? Still beating in the right place. And that first-day energy? It's alive and kicking, now pulsating through hundreds of projects, all dancing to the same unmistakable Purple Cow rhythm.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
