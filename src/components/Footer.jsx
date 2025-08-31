import { Link } from 'react-router-dom'

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <div className="cols">
          <div>
            <img src="/logo.svg" alt="PMK Bros Construction" style={{height:28, marginBottom:8}}/>
            <p className="muted">Professional home renovations across Canada. Kitchens, bathrooms, basements, flooring, painting & more.</p>
          </div>
          <div>
            <h4>Company</h4>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/projects">Projects</Link></p>
            <p><Link to="/services">Services</Link></p>
          </div>
          <div>
            <h4>Contact</h4>
            <p><a href="mailto:pooyan.mohammadkarimi@gmail.com">pooyan.mohammadkarimi@gmail.com</a></p>
            <p>Owner: Pouyan Mohammad Karimi</p>
            <p>Toronto,Ontario,Canada</p>
          </div>
        </div>
        <div style={{marginTop:16}}>
          <small>© {2025} PMK Bros Construction. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}
