import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES, PRICING, RESOURCES } from '../data';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page services-page">

      {/* Services */}
      <section className="section">
        <div className="section-label">What I Offer</div>
        <h2 className="section-title">Full-Service Dispatching</h2>
        <p className="section-body">
          Everything you need to keep your trucks moving and your bank account growing.
        </p>
        <div className="svc__grid">
          {SERVICES.map((s) => (
            <div key={s.name} className="svc__card card">
              <div className="svc__icon">{s.icon}</div>
              <div className="svc__name">{s.name}</div>
              <p className="svc__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Pricing */}
      <section className="section">
        <div className="section-label">Transparent Pricing</div>
        <h2 className="section-title">Simple. Fair. Percentage-Based.</h2>
        <p className="section-body">
          You only pay when I find you a load. No monthly retainers, no hidden fees.
        </p>
        <div className="pricing__grid">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={`pricing__card card${p.featured ? ' pricing__card--featured' : ''}`}
            >
              {p.featured && <span className="pricing__badge">MOST POPULAR</span>}
              <div className="pricing__name">{p.name}</div>
              <div className="pricing__price">{p.price}</div>
              <div className="pricing__per">{p.unit}</div>
              <ul className="pricing__features">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className="btn-primary pricing__cta"
                onClick={() => navigate('/contact')}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Resources */}
      <section className="section">
        <div className="section-label">Industry Resources</div>
        <h2 className="section-title">Essential Links for Carriers</h2>
        <p className="section-body">
          Everything you need in one place — regulatory bodies, load boards, and tools
          of the trade.
        </p>
        <div className="resources__grid">
          {RESOURCES.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource__link card"
            >
              <span className="resource__icon">{r.icon}</span>
              <div>
                <div className="resource__name">{r.name}</div>
                <div className="resource__cat">{r.cat}</div>
              </div>
              <span className="resource__ext">↗</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
