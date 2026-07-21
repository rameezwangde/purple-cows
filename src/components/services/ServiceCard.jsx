export default function ServiceCard({ service, cardRef, onEnter, onLeave }) {
  const Icon = service.icon
  return <a ref={cardRef} className={`service-orbit-card service-orbit-card--${service.variant}`} href={service.href} onPointerEnter={onEnter} onPointerLeave={onLeave} onFocus={onEnter} onBlur={onLeave}>
    <span className="service-card-tape" aria-hidden="true"/><Icon className="service-card-icon" size={31} strokeWidth={1.8} aria-hidden="true"/>
    <span className="service-card-copy"><strong>{service.title}</strong><span>{service.description}</span><em>View service</em></span>
  </a>
}