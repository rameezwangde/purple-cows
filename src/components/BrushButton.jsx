import { ArrowUpRight } from 'lucide-react'

export default function BrushButton({ children, compact = false, href = '#contact' }) {
  return (
    <a className={`brush-button magnetic ${compact ? 'brush-button--compact' : ''}`} href={href}>
      <span>{children}</span>
      <span className="brush-button__icon" aria-hidden="true"><ArrowUpRight size={compact ? 18 : 21} strokeWidth={2.5} /></span>
    </a>
  )
}
