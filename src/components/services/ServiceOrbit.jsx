import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ServiceCard from './ServiceCard'
import { services } from '../../data/services'
import useReducedMotion from '../../hooks/useReducedMotion'
import cow from '../../assets/services/purple-cow-services.webp'
export default function ServiceOrbit(){
 const box=useRef(),cards=useRef([]),progress=useRef(0),speed=useRef(1),reduced=useReducedMotion()
 useEffect(()=>{const render=()=>{const b=box.current.getBoundingClientRect(),rx=Math.min(b.width*.36,345),ry=Math.min(b.height*.34,275);cards.current.forEach((el,i)=>{const a=(progress.current+services[i].initialProgress)*Math.PI*2-Math.PI/2,d=(Math.sin(a)+1)/2;gsap.set(el,{x:Math.cos(a)*rx,y:Math.sin(a)*ry,scale:.86+d*.14,opacity:.74+d*.26,zIndex:10+Math.round(d*30),rotation:services[i].rotation})})},tick=()=>{progress.current=(progress.current+.000055*gsap.ticker.deltaRatio()*speed.current)%1;render()};render();if(!reduced)gsap.ticker.add(tick);addEventListener('resize',render);return()=>{gsap.ticker.remove(tick);removeEventListener('resize',render)}},[reduced])
 const pause=e=>{speed.current=0;gsap.to(e.currentTarget,{scale:1.06,rotation:0,duration:.25})}
 return <div className="service-orbit" ref={box} onPointerEnter={()=>speed.current=.38} onPointerLeave={()=>speed.current=1}>
  <svg className="orbit-ring" viewBox="0 0 760 650" aria-hidden="true"><ellipse cx="380" cy="325" rx="310" ry="252"/></svg><div className="orbit-paint"/>
  <img className="services-cow" src={cow} alt="Purple Cow creative director mascot wearing sunglasses and a black hoodie"/>
  {services.map((s,i)=><ServiceCard key={s.id} service={s} cardRef={n=>cards.current[i]=n} onEnter={pause} onLeave={()=>speed.current=1}/>)}
  <span className="orbit-plane" aria-hidden="true">?</span><span className="orbit-star" aria-hidden="true">?</span><span className="orbit-sticky" aria-hidden="true">?</span>
 </div>
}