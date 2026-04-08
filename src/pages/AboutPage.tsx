import React from 'react';
import { ABOUT_STATS } from '../data';
import './AboutPage.css';

const SKILLS = [
  'Load Board Expert', 'Rate Negotiation', 'BOL & Invoicing',
  '24/7 Available', 'DAT & Truckstop Pro', 'FMCSA Compliant',
];

const AboutPage: React.FC = () => (
  <div className="page about-page">
    <section className="section">
      <div className="section-label">About Me</div>
      <div className="about__grid">
        <div className="about__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=700&q=80"
            alt="Truck dispatcher at work"
          />
        </div>
        <div className="about__text">
          <h2 className="section-title">
            Remote Dispatcher.<br />
            <span style={{ color: 'var(--orange)' }}>Real Results.</span>
          </h2>
          <p className="section-body" style={{ maxWidth: '100%', marginBottom: '1rem' }}>
            I'm an experienced remote truck dispatcher specializing in helping
            owner-operators and small carriers maximize their revenue without the
            overhead of an in-house dispatch team.
          </p>
          <p className="section-body" style={{ maxWidth: '100%', marginBottom: '1rem' }}>
            My approach is simple: I treat your trucks like they're my own. I hustle
            for the best rates, stay ahead of empty miles, and make sure your drivers
            are never left hanging. Every load I book is another step toward building
            a sustainable, profitable operation for you.
          </p>
          <p className="section-body" style={{ maxWidth: '100%' }}>
            Whether you run one truck or a small fleet, I offer the same level of
            dedication and professional service — at a fee that makes financial sense.
          </p>
          <div className="about__tags">
            {SKILLS.map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <div className="divider" />

    <section className="section">
      <div className="section-label">By The Numbers</div>
      <h2 className="section-title">Proven Track Record</h2>
      <div className="about__stats-grid">
        {ABOUT_STATS.map((s) => (
          <div key={s.label} className="about__stat-card card">
            <div className="about__stat-num">{s.num}</div>
            <div className="about__stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default AboutPage;
