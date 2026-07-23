import { Clock3, Mail, Phone, Send } from 'lucide-react'
import { contactInfo } from '../../data/contactInfo'
import art from '../../assets/contact/contact-editorial.png'
const details=[
  {label:'Call us',value:contactInfo.phone,href:'tel:'+contactInfo.phone.replace(/\s/g,''),Icon:Phone},
  {label:'Email us',value:contactInfo.email,href:'mailto:'+contactInfo.email,Icon:Mail},
  {label:'Working hours',value:contactInfo.workingHours.join(' · '),Icon:Clock3},
  {label:'Quick reply',value:'We typically respond '+contactInfo.responseTime.toLowerCase()+'.',Icon:Send}
]
export default function ContactInfoPanel(){return <aside className="ct-info"><div className="ct-info-copy"><h2>Get <span>in Touch</span></h2><p>We’re here, ready to listen and help.</p>{details.map(({label,value,href,Icon})=><div className="ct-detail" key={label}><i><Icon/></i><div><b>{label}</b>{href?<a href={href}>{value}</a>:<span>{value}</span>}</div></div>)}</div><div className="ct-info-art"><img src={art} alt="Hanging studio lights in a monochrome creative collage" loading="lazy"/><div>Ideas.<br/>Passion.<br/>Purpose.<br/>That’s how<br/>we work. ☺</div></div></aside>}