import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CTA from '../components/CTA.jsx'
import services from '../data/services.js'
import projects from '../data/projects.js'

export default function Home(){
  return (
    <>
      <Hero />

      <section className="section">
        <h2>Our Services</h2>
        <p className="muted">End-to-end renovations with transparent pricing and clean craftsmanship.</p>
        <div className="grid" style={{marginTop:12}}>
          {services.slice(0,6).map(s => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Featured Projects</h2>
        <p className="muted">A glimpse of transformations we’re proud of.</p>
        <div className="projects-grid" style={{marginTop:12}}>
          {projects.slice(0,3).map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  )
}
