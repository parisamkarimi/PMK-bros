import ServiceCard from '../components/ServiceCard.jsx'
import services from '../data/services.js'

export default function Services(){
  return (
    <section className="section">
      <h2>Renovation Services</h2>
      <p className="muted">We manage design, permits, materials, and build—so you don’t have to.</p>
      <div className="grid" style={{marginTop:12}}>
        {services.map(s => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  )
}
