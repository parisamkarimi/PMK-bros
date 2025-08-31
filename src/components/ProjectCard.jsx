export default function ProjectCard({ image, title, scope, location }){
  return (
    <article className="card project">
      <div className="thumb">
        {image ? <img src={image} alt={title} /> : null}
      </div>
      <h3 style={{margin:'10px 0 6px'}}>{title}</h3>
      <p className="muted">{scope} • {location}</p>
    </article>
  )
}
