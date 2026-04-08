import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HERO_STATS, TESTIMONIALS } from '../data';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    '🏆 Top Market Rates',
    '📉 Lowest Fee Around',
    '🤝 No Long Contracts',
    '⚡ Fast Response Time',
    '🗂️ Paperwork Included',
    '🛡️ No BS, Just Miles',
  ];

  return (
    <div className="page">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__grid" />

        <div className="hero__content">
          <div className="hero__badge">⚡ Corevanta Logistics — Remote Dispatching</div>
          <h1 className="hero__title">
            Your Loads.<br />
            <span>My Mission.</span>
          </h1>
          <p className="hero__sub">
            Professional remote dispatching for independent owner-operators and small
            carriers. More miles, better rates, zero headaches — at the best value
            for your money.
          </p>
          <div className="hero__btns">
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Start Working Together
            </button>
            <button className="btn-outline" onClick={() => navigate('/services')}>
              View Services
            </button>
          </div>
        </div>

        <div className="hero__stats">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="hero__stat">
              <div className="hero__stat-num">{s.num}</div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-arrow" />
        </div>
      </section>

      <div className="divider" />

      {/* ── WHY US ── */}
      <section className="section">
        <div className="section-label">Why Choose Me</div>
        <h2 className="section-title">
          Great Dispatching.<br />Low Cost.
        </h2>
        <p className="section-body">
          No contracts, no hidden fees. Just results. I work as an extension of your
          operation — finding you the best loads, handling the paperwork, and
          supporting your drivers so you can focus on what you do best.
        </p>
        <div className="home__features-grid">
          {features.map((item) => {
            const [icon, ...rest] = item.split(' ');
            return (
              <div key={item} className="home__feature-card card">
                <span className="home__feature-icon">{icon}</span>
                <span className="home__feature-name font-condensed">
                  {rest.join(' ')}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="divider" />

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="section-label">What Carriers Say</div>
        <h2 className="section-title">Trusted by Operators</h2>
        <p className="section-body">
          Real feedback from owner-operators and fleet carriers who rely on Corevanta
          Logistics every day.
        </p>
        <div className="home__testi-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="home__testi-card card">
              <div className="home__stars">{'★'.repeat(t.stars)}</div>
              <p className="home__testi-text">"{t.text}"</p>
              <div className="home__testi-author">{t.author}</div>
              <div className="home__testi-company">{t.company}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA STRIP ── */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="section-label">Ready to Roll?</div>
        <h2 className="section-title">Let's Get Your Trucks Moving</h2>
        <p className="section-body" style={{ margin: '0 auto 2rem' }}>
          Send me a message today and I'll respond within 2 hours. No fluff, no
          pressure — just a conversation about what your operation needs.
        </p>
        <button className="btn-primary" onClick={() => navigate('/contact')}>
          Contact Me Now
        </button>
      </section>
    </div>
  );
};

export default HomePage;