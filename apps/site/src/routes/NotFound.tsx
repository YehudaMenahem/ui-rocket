import { useNavigate } from 'react-router-dom';
import { Button } from '@ui-rocket/rocket';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-screen">
      <div className="game-over-container">
        <div className="game-over-title">
          <h1 className="error-code">404</h1>
          <h2 className="game-over-text">GAME OVER</h2>
        </div>

        <div className="game-over-message">
          <p className="message-primary">PAGE NOT FOUND</p>
          <p className="message-secondary">
            THE COMPONENT YOU ARE LOOKING FOR DOES NOT EXIST
          </p>
        </div>

        <div className="game-over-ascii">
          <pre>{`
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    █░░░░░░░░░░░░░░░░░░░░░█
    █░░░▄▄░░░░░░░░░▄▄░░░░░█
    █░░░██░░░░░░░░░██░░░░░█
    █░░░░░░░░░░░░░░░░░░░░░█
    █░░░░░░░░░░░░░░░░░░░░░█
    █░░░░░░░▄▄▄▄▄░░░░░░░░░█
    █░░░░░░▀▀▀▀▀▀▀░░░░░░░░█
    █░░░░░░░░░░░░░░░░░░░░░█
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
          `}</pre>
        </div>

        <div className="game-over-actions">
          <p className="continue-prompt">CONTINUE? Y/N</p>
          <div className="action-buttons">
            <Button
              label="YES - GO HOME"
              styleBtn="solid"
              size="medium"
              click={() => navigate('/')}
            />
            <Button
              label="RETRY - GO BACK"
              styleBtn="outline"
              size="medium"
              click={() => navigate(-1)}
            />
          </div>
        </div>

        <div className="game-over-footer">
          <p className="insert-coin">INSERT COIN TO CONTINUE</p>
          <p className="credits-remaining">CREDITS: 0</p>
        </div>
      </div>
    </div>
  );
}
