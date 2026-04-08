import React from 'react';
import type { NavProps, PageName } from '../types';
import '../styles/Nav.css';

const PAGES: PageName[] = ['home', 'about', 'services', 'blog', 'contact'];

const Nav: React.FC<NavProps> = ({ page, setPage, menuOpen, setMenuOpen }) => {
  const handleNav = (p: PageName) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="nav">
        <button className="nav__logo" onClick={() => handleNav('home')} aria-label="Corevanta Logistics Home">
          <img src="logoTransparent.png" alt="Corevanta Logistics" className="nav__logo-img" />
        </button>

        <ul className="nav__links">
          {PAGES.map((p) => (
            <li key={p}>
              <button onClick={() => handleNav(p)} className={page === p ? 'active' : ''}>
                {p.toUpperCase()}
              </button>
            </li>
          ))}
          <li>
            <button className="nav__cta" onClick={() => handleNav('contact')}>
              GET STARTED
            </button>
          </li>
        </ul>

        <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className={menuOpen ? `open-${i}` : ''} />
          ))}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <img src="/logo.png" alt="Corevanta Logistics" className="mobile-menu__logo" />
        {PAGES.map((p) => (
          <button key={p} onClick={() => handleNav(p)}>
            {p.toUpperCase()}
          </button>
        ))}
        <button className="mobile-menu__cta" onClick={() => handleNav('contact')}>
          GET STARTED →
        </button>
      </div>
    </>
  );
};

export default Nav;
