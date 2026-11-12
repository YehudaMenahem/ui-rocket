import { Link } from 'react-router-dom';
import { Button } from '@ui-rocket/rocket';
import { Icon } from '../components/Icons';

export function DocsPage() {
  return (
    <div className="landing simple-page">
      <section className="section">
        <div className="sec-head">
          <div className="kick">Docs</div>
          <h2>Start with a component, finish with a theme.</h2>
          <p>
            Rocket UI docs cover install, theming tokens, and every primitive. Pick a path
            below — nothing here is a dead end.
          </p>
        </div>
        <div className="features">
          <Link className="feature" to="/ButtonPage">
            <div className="fi">
              <Icon name="code" className="ico ico-lg" />
            </div>
            <h3>Components</h3>
            <p>Interactive playgrounds for Button, Input, Select, Modal, and more.</p>
          </Link>
          <Link className="feature" to="/theming">
            <div className="fi">
              <Icon name="palette" className="ico ico-lg" />
            </div>
            <h3>Theming</h3>
            <p>Cream, navy, rust tokens — light and dark — driven by CSS variables.</p>
          </Link>
          <Link className="feature" to="/playground">
            <div className="fi">
              <Icon name="send" className="ico ico-lg" />
            </div>
            <h3>Playground</h3>
            <p>Compose a mini launch panel with live library components.</p>
          </Link>
        </div>
        <div className="row" style={{ marginTop: 28 }}>
          <Link to="/ButtonPage">
            <Button label="Open Button docs" styleBtn="solid" classes="btn-primary" />
          </Link>
        </div>
      </section>
    </div>
  );
}
