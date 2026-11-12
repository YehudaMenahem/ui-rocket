import { Link } from 'react-router-dom';
import { Button } from '@ui-rocket/rocket';
import { Icon } from '../components/Icons';

export function NotFound() {
  return (
    <div className="not-found">
      <p className="kick" style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-text)' }}>
        ERROR 404
      </p>
      <h1>Lost in the cream fog.</h1>
      <p>
        That route never made it onto the launch pad. Head back to the docs or browse components.
      </p>
      <div className="row" style={{ justifyContent: 'center' }}>
        <Link to="/">
          <Button label="Go home" styleBtn="solid" size="large" classes="btn-primary btn-lg">
            <Icon name="left" />
          </Button>
        </Link>
        <Link to="/ButtonPage">
          <Button label="Browse components" styleBtn="outline" size="large" classes="btn-secondary btn-lg" />
        </Link>
      </div>
    </div>
  );
}
