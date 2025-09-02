import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="card">
        <span className="badge">Home Renovations in Canada</span>
        <h1>Renovations done right—on time, on budget, with pride.</h1>
        <p>
          From modern kitchens to luxury bathrooms and finished basements,
          PMK Bros Construction transforms houses into homes you love.
        </p>
        <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
          <Link to="/contact" className="btn">Get a Free Quote</Link>
          <Link to="/projects" className="btn outline">View Projects</Link>
        </div>
        <div className="kpis" style={{marginTop:16}}>
          <div className="kpi"><strong>10+</strong><div className="muted">Years Experience</div></div>
          <div className="kpi"><strong>150+</strong><div className="muted">Projects Delivered</div></div>
          <div className="kpi"><strong>100%</strong><div className="muted">Insured & Licensed</div></div>
        </div>
      </div>
      <div className="card" aria-hidden="true">
        <img src="/hero.jpg" alt="Beautiful renovated interior" />
      </div>
    </section>
  )
}
