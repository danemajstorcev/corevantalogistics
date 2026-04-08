import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  const pages = [
    { label: 'Home',     path: '/'        },
    { label: 'About',    path: '/about'   },
    { label: 'Services', path: '/services'},
    { label: 'Blog',     path: '/blog'    },
    { label: 'Contact',  path: '/contact' },
  ];

  const quickLinks = [
    { label: 'FMCSA',        url: 'https://www.fmcsa.dot.gov/'        },
    { label: 'DAT Loadboard', url: 'https://www.dat.com/'              },
    { label: 'Truckstop.com', url: 'https://truckstop.com/'            },
    { label: 'SAFER Web',     url: 'https://safer.fmcsa.dot.gov/'      },
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
              <li key={p.path}>
                <Link to={p.path}>{p.label}</Link>
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