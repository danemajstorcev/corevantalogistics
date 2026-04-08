import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css';

const PAGES = [
  { label: 'HOME',     path: '/'         },
  { label: 'ABOUT',    path: '/about'    },
  { label: 'SERVICES', path: '/services' },
  { label: 'BLOG',     path: '/blog'     },
  { label: 'CONTACT',  path: '/contact'  },
];

interface NavProps {
  menuOpen:    boolean;
  setMenuOpen: (open: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav__logo" aria-label="Corevanta Logistics Home" onClick={closeMenu}>
          <img src="logoTransparent.png" alt="Corevanta Logistics" className="nav__logo-img" />
        </Link>

        <ul className="nav__links">
          {PAGES.map((p) => (
            <li key={p.path}>
              <Link
                to={p.path}
                className={location.pathname === p.path ? 'active' : ''}
                onClick={closeMenu}
              >
                {p.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav__cta" onClick={closeMenu}>
              GET STARTED
            </Link>
          </li>
        </ul>

        <button
          className="nav__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className={menuOpen ? `open-${i}` : ''} />
          ))}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <img src="/logo.png" alt="Corevanta Logistics" className="mobile-menu__logo" />
        {PAGES.map((p) => (
          <Link key={p.path} to={p.path} onClick={closeMenu}>
            {p.label}
          </Link>
        ))}
        <Link to="/contact" className="mobile-menu__cta" onClick={closeMenu}>
          GET STARTED →
        </Link>
      </div>
    </>
  );
};

export default Nav;