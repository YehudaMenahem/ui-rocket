import { Link } from 'react-router-dom';
import { Button } from '@ui-rocket/rocket';
import { Icon } from '../components/Icons';

export function DocsPage() {
  return (
    <div className="landing simple-page">
      <main className="section">
        <div className="sec-head">
          <div className="kick">Docs</div>
          <h1>Start with a component, finish with a theme.</h1>
          <p>
            Rocket UI docs cover install, theming tokens, and every primitive.
            Pick a path below — nothing here is a dead end.
          </p>
        </div>
        <div className="features">
          <Link className="feature" to="/docs/installation">
            <div className="fi">
              <Icon name="pkg" className="ico ico-lg" />
            </div>
            <h2>Installation</h2>
            <p>Install the package and import the stylesheet once.</p>
          </Link>
          <Link className="feature" to="/components">
            <div className="fi">
              <Icon name="code" className="ico ico-lg" />
            </div>
            <h2>Components</h2>
            <p>
              Interactive playgrounds for Button, Input, Select, Modal, and
              more.
            </p>
          </Link>
          <Link className="feature" to="/theming">
            <div className="fi">
              <Icon name="palette" className="ico ico-lg" />
            </div>
            <h2>Theming</h2>
            <p>
              Cream, navy, rust tokens — light and dark — driven by CSS
              variables.
            </p>
          </Link>
          <Link className="feature" to="/docs/dark-mode">
            <div className="fi">
              <Icon name="moon" className="ico ico-lg" />
            </div>
            <h2>Dark mode</h2>
            <p>Flip themes with a single data-theme attribute.</p>
          </Link>
        </div>
        <div className="row" style={{ marginTop: 28 }}>
          <Link to="/ButtonPage">
            <Button
              label="Open Button docs"
              styleBtn="solid"
              classes="btn-primary"
            />
          </Link>
        </div>
      </main>
    </div>
  );
}
