import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="section">
      <div className="card" style={{textAlign:'center'}}>
        <h2>Ready to renovate?</h2>
        <p className="muted">Let’s turn your vision into reality with a free, no-obligation quote.</p>
        <p className="muted">.</p>
        <Link to="/contact" className="btn" style={{marginTop:10}}>Get a Quote</Link>
      </div>
    </section>
  )
}
