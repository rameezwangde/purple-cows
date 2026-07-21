import CampaignTablet from './CampaignTablet'
import StrategyNotebook from './StrategyNotebook'
export default function WorkspaceScene(){return <div className="workspace-scene" aria-label="Top-down creative strategy desk">
 <div className="paint paint-a desk-back" aria-hidden="true"/><div className="paint paint-b desk-back" aria-hidden="true"/>
 <div className="desk-laptop desk-back" tabIndex="0" aria-label="Laptop displaying Brands That Matter"><div className="laptop-screen"><span>Brands</span><b>That<br/>Matter.</b><i>?</i></div><div className="laptop-base"><div className="keyboard">{Array.from({length:40},(_,i)=><i key={i}/>)}</div><div className="trackpad"/><em>Make<br/>noise</em></div></div>
 <div className="plant desk-back" aria-hidden="true"><i/><i/><i/><i/><span/></div>
 <div className="coffee-mug desk-back" aria-label="Coffee mug reading Ideas Fuel Impact"><div className="steam steam-a"/><div className="steam steam-b"/><b>Ideas<br/>Fuel<br/><span>Impact</span></b></div>
 <StrategyNotebook/><CampaignTablet/>
 <div className="wireframe-sheet desk-back" aria-hidden="true"><i/><i/><i/><i/><i/></div>
 <div className="color-swatches desk-mid" tabIndex="0" aria-label="Purple brand colour swatches">{['#ede3ff','#d0b5ff','#a974ff','#7a2eff','#5c16d6'].map(color=><i style={{background:color}} key={color}/>)}</div>
 <a className="business-card desk-front" href="#identity"><b>Purple Cow</b><span>Creative agency</span><em>View identity</em></a>
 <div className="sticky sticky-a desk-front">Bigger<br/>Impact</div><div className="sticky sticky-b desk-front">Big<br/>Ideas</div><div className="sticky sticky-c desk-front">Let&apos;s<br/>Build It!</div>
 <span className="pen pen-black desk-front" aria-hidden="true"/><span className="pen pen-purple desk-front" aria-hidden="true"/><span className="paper-ball ball-a desk-front" aria-hidden="true"/><span className="paper-ball ball-b desk-front" aria-hidden="true"/><span className="paperclip desk-front" aria-hidden="true">?</span>
 </div>}