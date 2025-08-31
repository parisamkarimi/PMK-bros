import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'

export default function Projects(){
  return (
    <section className="section">
      <h2>Projects</h2>
      <p className="muted">Each project is a partnership—your vision and our craftsmanship.</p>
      <div className="projects-grid" style={{marginTop:12}}>
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
