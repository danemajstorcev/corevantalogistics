import React from 'react';
import { BLOG_POSTS, RESOURCES } from '../data';
import './BlogPage.css';

const BlogPage: React.FC = () => (
  <div className="page blog-page">
    <section className="section">
      <div className="section-label">Knowledge Hub</div>
      <h2 className="section-title">Dispatch &amp; Trucking Blog</h2>
      <p className="section-body">
        Practical tips, industry news, and insights for owner-operators and carriers.
      </p>
      <div className="blog__grid">
        {BLOG_POSTS.map((post) => (
          <article key={post.title} className="blog__card card">
            <img className="blog__img" src={post.img} alt={post.title} />
            <div className="blog__body">
              <div className="blog__tag">{post.tag}</div>
              <h3 className="blog__title">{post.title}</h3>
              <p className="blog__excerpt">{post.excerpt}</p>
              <time className="blog__date">{post.date}</time>
            </div>
          </article>
        ))}
      </div>
    </section>

    <div className="divider" />

    <section className="section">
      <div className="section-label">Stay Informed</div>
      <h2 className="section-title">Industry Resources</h2>
      <p className="section-body">
        Direct links to the platforms and databases every serious carrier uses daily.
      </p>
      <div className="blog__resources">
        {RESOURCES.map((r) => (
          <a
            key={r.name}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog__resource card"
          >
            <span>{r.icon}</span>
            <div>
              <div className="blog__resource-name">{r.name}</div>
              <div className="blog__resource-cat">{r.cat}</div>
            </div>
            <span className="blog__resource-ext">↗</span>
          </a>
        ))}
      </div>
    </section>
  </div>
);

export default BlogPage;
