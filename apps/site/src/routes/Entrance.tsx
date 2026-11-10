import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Entrance() {
  const navigate = useNavigate();
  const [blinkCursor, setBlinkCursor] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-color-scheme: reduce)',
    ).matches;

    if (!prefersReducedMotion) {
      const interval = window.setInterval(() => {
        setBlinkCursor((prev) => !prev);
      }, 530);
      return () => window.clearInterval(interval);
    }
  }, []);

  const handleStart = () => {
    navigate('/ButtonPage');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleStart();
    }
  };

  return (
    <div className="entrance-screen">
      <div className="title-screen">
        <div className="game-title">
          <h1 className="title-main">UI ROCKET</h1>
          <p className="title-subtitle">Component Library v1.0</p>
        </div>

        <div className="ascii-art">
          <pre>{`
    ╔═══════════════════════════════════╗
    ║                                   ║
    ║           /\\                      ║
    ║          /  \\                     ║
    ║         / /\\ \\                    ║
    ║        / /  \\ \\                   ║
    ║       /_/____\\_\\                  ║
    ║      |  ROCKET  |                 ║
    ║      |    UI    |                 ║
    ║      |__________|                 ║
    ║         |  |                      ║
    ║        /|  |\\                     ║
    ║       / |  | \\                    ║
    ║         |  |                      ║
    ║        /    \\                     ║
    ║                                   ║
    ╚═══════════════════════════════════╝
          `}</pre>
        </div>

        <div className="start-prompt">
          <button
            className="start-button"
            onClick={handleStart}
            onKeyDown={handleKeyDown}
          >
            PRESS ANY KEY TO START
            {blinkCursor && <span className="cursor">▮</span>}
          </button>
        </div>

        <div className="credits">
          <p>© 2026 SEGFAULT DESIGN SYSTEM</p>
          <p className="version">BUILD 19901110</p>
        </div>
      </div>
    </div>
  );
}
