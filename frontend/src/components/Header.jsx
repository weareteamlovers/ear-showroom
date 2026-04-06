import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" className="brand">Teamlovers</Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contacts</Link>
          <Link to="/letter" className="nav-accent">Letter</Link>
        </nav>
      </div>
    </header>
  );
}