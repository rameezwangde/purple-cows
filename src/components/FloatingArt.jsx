export default function FloatingArt() {
  return (
    <div className="floating-art" aria-hidden="true">
      <svg className="flight-path" viewBox="0 0 360 190" fill="none"><path d="M16 164c72 38 128-5 88-51-48-55 64-125 101-52 28 54 70 36 102 6" stroke="#111" strokeWidth="1.7" strokeDasharray="8 8" /></svg>
      <svg className="paper-plane float-item" data-depth="1.1" viewBox="0 0 110 80"><path d="m4 31 101-28-42 71-15-27L4 31Z" fill="#7A2EFF"/><path d="M48 47 105 3 59 56" fill="#5C16D6"/><path d="m48 47 13 24 2-30L105 3 48 47Z" fill="#45109E"/></svg>
      <div className="chart float-item" data-depth=".55"><span className="chart-grid"/><svg viewBox="0 0 120 80"><path d="m10 66 22-29 20 14 18-35 20 20 20-27" fill="none" stroke="#7A2EFF" strokeWidth="4"/></svg></div>
      <div className="target float-item" data-depth=".75"><span/><span/><span/><i/></div>
      <div className="strategy float-item" data-depth=".4"><b>Strategy</b><br/>+ Creativity<br/>= <u>Magic</u></div>
      <span className="spark spark--one">✦</span><span className="spark spark--two">✦</span>
    </div>
  )
}
