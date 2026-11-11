import { useNavigate } from 'react-router-dom';
import { Button } from '@ui-rocket/rocket';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-screen">
      <div className="lost-in-space">
        <div className="lost-planet" aria-hidden="true" />
        <h1 className="error-code">404</h1>
        <h2 className="title">Lost in space</h2>
        <p className="message">
          That route drifted out of orbit. Pick a planet below or head back to base.
        </p>
        <div className="actions">
          <Button
            label="Back to home"
            styleBtn="solid"
            size="medium"
            click={() => navigate('/')}
          />
          <Button
            label="Browse buttons"
            styleBtn="outline"
            size="medium"
            click={() => navigate('/ButtonPage')}
          />
        </div>
      </div>
    </div>
  );
}
