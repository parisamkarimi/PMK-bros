import { NavLink, Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" to="/">
          <img src="/logo.svg" alt="PMK Bros Construction logo" />
          <strong>PMK Bros Construction</strong>
        </Link>

        <nav className="nav" aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className="btn">Get a Quote</NavLink>
        </nav>
      </div>
    </header>
  )
}
