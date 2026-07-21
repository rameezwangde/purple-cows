import { BarChart3, Fingerprint, Globe2, Lightbulb, Megaphone, MessageSquare } from 'lucide-react'
export const services = [
  { id:'branding', title:'Branding', description:'We create identities that are iconic, memorable and impossible to ignore.', icon:Fingerprint, initialProgress:0, rotation:-2.5, variant:'wide', href:'#branding' },
  { id:'social', title:'Social Media', description:'Scroll-stopping content that builds community, sparks conversations and grows brands.', icon:MessageSquare, initialProgress:1/6, rotation:3, variant:'medium', href:'#social-media' },
  { id:'performance', title:'Performance', description:'Measure, optimize and scale what works to maximize every marketing rupee.', icon:BarChart3, initialProgress:2/6, rotation:1.5, variant:'wide', href:'#performance' },
  { id:'web', title:'Web & Experience', description:'Websites and digital experiences that look stunning and perform flawlessly.', icon:Globe2, initialProgress:3/6, rotation:-3, variant:'medium', href:'#web-experience' },
  { id:'content', title:'Creative Content', description:'Ideas that entertain, educate and engage while telling your brand story better.', icon:Lightbulb, initialProgress:4/6, rotation:-1.5, variant:'wide', href:'#creative-content' },
  { id:'digital', title:'Digital Marketing', description:'Data-driven campaigns that reach the right people and deliver the right results.', icon:Megaphone, initialProgress:5/6, rotation:2.5, variant:'medium', href:'#digital-marketing' },
]
