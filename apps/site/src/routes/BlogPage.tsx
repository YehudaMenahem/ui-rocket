import { Link } from 'react-router-dom';

const POSTS = [
  {
    title: 'Retro Launch: why hard shadows still feel modern',
    date: 'Nov 2026',
    blurb: 'Offset shadows, cream paper, and Fraunces display type — the Retro Launch visual language.',
  },
  {
    title: 'Shipping accessible primitives without the bloat',
    date: 'Oct 2026',
    blurb: 'How Rocket UI keeps each entry under a few kilobytes while staying keyboard-first.',
  },
  {
    title: 'From class components to a typed package',
    date: 'Sep 2026',
    blurb: 'What we kept from the original API surface — and what we intentionally tightened.',
  },
];

export function BlogPage() {
  return (
    <div className="landing simple-page">
      <section className="section">
        <div className="sec-head">
          <div className="kick">Blog</div>
          <h2>Notes from the launch pad.</h2>
          <p>Short posts on design, accessibility, and package craft.</p>
        </div>
        <div className="blog-list">
          {POSTS.map((post) => (
            <article className="blog-card" key={post.title}>
              <small>{post.date}</small>
              <h3>{post.title}</h3>
              <p>{post.blurb}</p>
            </article>
          ))}
        </div>
        <p className="txt" style={{ marginTop: 24 }}>
          Looking for API docs? <Link to="/docs">Start in Docs</Link> or jump to{' '}
          <Link to="/ButtonPage">Components</Link>.
        </p>
      </section>
    </div>
  );
}
