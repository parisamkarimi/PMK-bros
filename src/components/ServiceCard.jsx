export default function ServiceCard({ icon, title, description }){
  return (
    <article className="card">
      <div style={{fontSize:28}} aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
