import { useLayoutEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServicesHero from '../components/services-page/ServicesHero'
import ServicesGrid from '../components/services-page/ServicesGrid'
import ProcessSection from '../components/services-page/ProcessSection'
import ServicesCTA from '../components/services-page/ServicesCTA'
gsap.registerPlugin(ScrollTrigger)
export default function Services(){const root=useRef(null);useLayoutEffect(()=>{const ctx=gsap.context(()=>{const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;gsap.utils.toArray('.sp-reveal').forEach(el=>gsap.from(el,{y:reduced?8:35,opacity:0,duration:reduced ? .25 : .6,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));gsap.from('.sp-collage>*',{y:25,opacity:0,scale:.94,rotation:()=>gsap.utils.random(-5,5),stagger:.07,duration:.5,ease:'back.out(1.25)'});if(!reduced){const move=e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;gsap.to('.sp-collage>*',{x:x*9,y:y*6,duration:1,stagger:.02})};addEventListener('pointermove',move);root.current._move=move}},root);return()=>{removeEventListener('pointermove',root.current?._move);ctx.revert()}},[]);return <div className="services-page" ref={root}><Navbar/><main><ServicesHero/><ServicesGrid/><ProcessSection/><ServicesCTA/></main><Footer/></div>}