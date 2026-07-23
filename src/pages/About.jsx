import { useLayoutEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import MissionSection from '../components/about/MissionSection'
import ImpactSection from '../components/about/ImpactSection'
import TeamSection from '../components/about/TeamSection'
import AboutCTA from '../components/about/AboutCTA'
gsap.registerPlugin(ScrollTrigger)
export default function About(){const root=useRef(null);useLayoutEffect(()=>{const ctx=gsap.context(()=>{const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;gsap.utils.toArray('.about-reveal').forEach((el)=>gsap.from(el,{y:reduced?10:38,opacity:0,duration:reduced ? .25 : .65,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}}));gsap.from('.about-collage>*',{y:28,scale:.94,opacity:0,rotation:()=>gsap.utils.random(-5,5),stagger:.08,duration:.55,ease:'back.out(1.3)',scrollTrigger:{trigger:'.about-hero',start:'top 65%',once:true}});gsap.from('.mission-target span',{scale:0,stagger:.1,duration:.5,scrollTrigger:{trigger:'.mission-target',start:'top 85%',once:true}});if(!reduced){const move=e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;gsap.to('.about-collage>*',{x:x*10,y:y*7,duration:1,stagger:.02})};addEventListener('pointermove',move);root.current._move=move}},root);return()=>{removeEventListener('pointermove',root.current?._move);ctx.revert()}},[]);return <div ref={root} className="about-page"><Navbar/><main><AboutHero/><MissionSection/><ImpactSection/><TeamSection/><AboutCTA/></main><Footer/></div>}