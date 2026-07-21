import { Crown, Globe2, Lightbulb, Rocket } from 'lucide-react'

const stats = [
  { value: '15+', line1: 'Years of', line2: 'Crafting Stories', icon: Crown },
  { value: '250+', line1: 'Brands', line2: 'Transformed', icon: Rocket },
  { value: '1000+', line1: 'Campaigns That', line2: 'Made Noise', icon: Lightbulb },
  { value: '6', line1: 'Cities,', line2: 'One Vision', icon: Globe2 },
]

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Purple Cow in numbers">
      <div className="stats-inner">
        {stats.map(({ value, line1, line2, icon: Icon }) => (
          <div className="stat" key={value}>
            <Icon className="stat-icon" size={52} strokeWidth={1.8} aria-hidden="true" />
            <div><strong>{value}</strong><p>{line1}<br/>{line2}</p></div>
          </div>
        ))}
        <p className="stats-note">We don&apos;t follow trends,<br/><u>we start them.</u></p>
      </div>
    </section>
  )
}
