import { BarChart3, ChartNoAxesCombined, Fingerprint, Globe2, Lightbulb, Mail, Megaphone, MessageSquare, MessageSquareText, Monitor, Pencil, Target, Users } from 'lucide-react'
export const services = [
  { id:'branding', title:'Branding', description:'We create identities that are iconic, memorable and impossible to ignore.', icon:Fingerprint, initialProgress:0, rotation:-2.5, variant:'wide', href:'#branding' },
  { id:'social', title:'Social Media', description:'Scroll-stopping content that builds community, sparks conversations and grows brands.', icon:MessageSquare, initialProgress:1/6, rotation:3, variant:'medium', href:'#social-media' },
  { id:'performance', title:'Performance', description:'Measure, optimize and scale what works to maximize every marketing rupee.', icon:BarChart3, initialProgress:2/6, rotation:1.5, variant:'wide', href:'#performance' },
  { id:'web', title:'Web & Experience', description:'Websites and digital experiences that look stunning and perform flawlessly.', icon:Globe2, initialProgress:3/6, rotation:-3, variant:'medium', href:'#web-experience' },
  { id:'content', title:'Creative Content', description:'Ideas that entertain, educate and engage while telling your brand story better.', icon:Lightbulb, initialProgress:4/6, rotation:-1.5, variant:'wide', href:'#creative-content' },
  { id:'digital', title:'Digital Marketing', description:'Data-driven campaigns that reach the right people and deliver the right results.', icon:Megaphone, initialProgress:5/6, rotation:2.5, variant:'medium', href:'#digital-marketing' },
]

// Temporary service list. Replace or reorder after final client approval.
export const marketingServices = [
  { id:'brand-strategy', title:'Brand Strategy', description:'We uncover insights, define positioning and build strategies that create clarity and long-term direction.', icon:Target, enabled:true },
  { id:'branding-identity', title:'Branding & Identity', description:'From naming to visual identity, we craft memorable brands that connect, communicate and stand out.', icon:Pencil, enabled:true },
  { id:'web-design', title:'Website Design & Development', description:'We design high-performance websites that are beautiful, functional and built to convert.', icon:Monitor, enabled:true },
  { id:'digital-marketing', title:'Digital Marketing', description:'Data-driven campaigns across SEO, PPC, social media and display that drive traffic and real results.', icon:Megaphone, enabled:true },
  { id:'content-marketing', title:'Content Marketing', description:'Strategic content that informs, engages and builds trust across blogs, social, video and more.', icon:MessageSquareText, enabled:true },
  { id:'social-management', title:'Social Media Management', description:'We manage your social presence with content, community and creativity that builds loyal followers.', icon:Users, enabled:true },
  { id:'email-marketing', title:'Email Marketing', description:'Smart email campaigns that nurture leads, build relationships and turn subscribers into customers.', icon:Mail, enabled:true },
  { id:'analytics-reporting', title:'Analytics & Reporting', description:'We track what matters, measure performance and turn data into smarter marketing decisions.', icon:ChartNoAxesCombined, enabled:true },
]