import React from 'react';
import type { PageName } from '../types';
import './Footer.css';

interface FooterProps { setPage: (page: PageName) => void; }

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const pages: PageName[] = ['home', 'about', 'services', 'blog', 'contact'];
  const quickLinks = [
    { label: 'FMCSA', url: 'https://www.fmcsa.dot.gov/' },
    { label: 'DAT Loadboard', url: 'https://www.dat.com/' },
    { label: 'Truckstop.com', url: 'https://truckstop.com/' },
    { label: 'SAFER Web', url: 'https://safer.fmcsa.dot.gov/' },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="logoTransparent.png" alt="Corevanta Logistics" className="footer__logo-img" />
          <p className="footer__tagline">
            Remote truck dispatching services built for owner-operators and small
            carriers. Precision. Reliability. Forward.
          </p>
        </div>
        <div className="footer__col">
          <h4>Pages</h4>
          <ul>
            {pages.map((p) => (
              <li key={p}>
                <button onClick={() => { setPage(p); window.scrollTo(0, 0); }}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Corevanta Logistics. All rights reserved.</p>
        <p>Precision. Reliability. Forward.</p>
      </div>
    </footer>
  );
};

export default Footer;
