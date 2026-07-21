import MarketingHotspot from './MarketingHotspot'
import building from '../../assets/brand-wall/we-are-purple-cow-building.webp'
const hotspots=[
 {id:'campaigns',label:'Campaigns',position:{top:'54%',left:'14%'},href:'#campaigns',className:'hotspot-megaphone'},
 {id:'strategy',label:'Strategy',position:{top:'62%',left:'30%'},href:'#strategy',className:'hotspot-target'},
 {id:'creative',label:'Creative Ideas',position:{top:'61%',left:'48%'},href:'#creative-content',className:'hotspot-bulb'},
 {id:'content',label:'Content Production',position:{top:'61%',left:'64%'},href:'#content-production',className:'hotspot-camera'},
 {id:'performance',label:'Performance Marketing',position:{top:'60%',left:'79%'},href:'#performance',className:'hotspot-growth'},
]
export default function BrandWallScene(){return <div className="brand-wall-frame"><img className="brand-building" src={building} width="1536" height="1024" loading="lazy" alt="Purple brick creative agency building with We Are Purple Cow branding and marketing icons"/><div className="lamp-glow" aria-hidden="true"/>{hotspots.map(item=><MarketingHotspot key={item.id}{...item}/>)}<div className="brand-note">Built for brands that<br/><span>refuse to blend in.</span></div></div>}