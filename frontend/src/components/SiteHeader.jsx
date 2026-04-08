import { Link, useLocation } from "react-router-dom";

export default function SiteHeader() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="editorial-header">
      <div className="editorial-header__inner">
        <Link to="/" className="editorial-logo">
          TEAMLOVERS
        </Link>

        <nav className="editorial-nav">
          <Link className={isActive("/") ? "is-active" : ""} to="/">
            Home
          </Link>
          <Link className={isActive("/projects") ? "is-active" : ""} to="/projects">
            Archive
          </Link>
          <Link className={isActive("/contact") ? "is-active" : ""} to="/contact">
            Contact
          </Link>
          <Link className={isActive("/letter") ? "is-active" : ""} to="/letter">
            Letter
          </Link>
        </nav>
      </div>
    </header>
  );
}