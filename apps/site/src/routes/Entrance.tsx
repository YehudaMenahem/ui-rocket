import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@ui-rocket/rocket';

interface EntranceProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export function Entrance({ darkMode, onToggleTheme }: EntranceProps) {
  const navigate = useNavigate();

  return (
    <div className="entrance-screen">
      <button
        type="button"
        className="theme-toggle-button theme-toggle-floating"
        role="switch"
        aria-checked={darkMode}
        aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
        onClick={onToggleTheme}
      >
        <span className="theme-label">
          <span className="theme-dot" aria-hidden="true" />
          {darkMode ? 'Dark' : 'Light'} theme
        </span>
      </button>

      <div className="space-scene" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <g className="stars">
            <circle className="star-twinkle" cx="80" cy="60" r="2" />
            <circle cx="160" cy="120" r="1.5" />
            <circle className="star-twinkle" cx="320" cy="40" r="2" />
            <circle cx="180" cy="90" r="1" />
            <circle className="star-twinkle" cx="1040" cy="50" r="2.5" />
            <circle cx="800" cy="130" r="1.5" />
            <circle className="star-twinkle" cx="960" cy="70" r="2" />
            <circle cx="1100" cy="110" r="1" />
            <circle cx="100" cy="200" r="1.5" />
            <circle className="star-twinkle" cx="1080" cy="180" r="2" />
            <circle cx="900" cy="210" r="1" />
            <circle cx="70" cy="300" r="1.5" />
            <circle className="star-twinkle" cx="1150" cy="260" r="2" />
          </g>

          <g className="planet planet-slow">
            <circle cx="180" cy="520" r="70" fill="#C58FFF" />
            <circle cx="150" cy="500" r="12" fill="#000000" opacity="0.2" />
            <circle cx="210" cy="540" r="8" fill="#000000" opacity="0.15" />
            <path d="M130 530 C160 510, 200 560, 230 535" fill="none" stroke="#5CFFE4" strokeWidth="8" />
          </g>

          <g className="planet">
            <circle cx="980" cy="420" r="48" fill="#5CFFE4" />
            <circle cx="1000" cy="410" r="10" fill="#000000" opacity="0.12" />
            <ellipse cx="980" cy="420" rx="62" ry="10" fill="none" stroke="#6439B7" strokeWidth="3" />
          </g>

          <g className="planet planet-slow">
            <circle cx="720" cy="280" r="28" fill="#DCFF02" />
            <circle cx="710" cy="272" r="5" fill="#000000" opacity="0.15" />
          </g>

          {/* Simple rocket */}
          <g transform="translate(560 300)">
            <path d="M40 0 L70 90 L40 75 L10 90 Z" fill="#FFFFFF" />
            <rect x="28" y="75" width="24" height="28" rx="6" fill="#C58FFF" />
            <circle cx="40" cy="40" r="10" fill="#5CFFE4" />
            <path d="M10 90 L0 115 L20 95 Z" fill="#6439B7" />
            <path d="M70 90 L80 115 L60 95 Z" fill="#6439B7" />
            <path d="M32 103 L40 125 L48 103" fill="#DCFF02" />
          </g>
        </svg>
      </div>

      <div className="space-horizon" aria-hidden="true" />

      <div className="planet-links">
        <Link className="planet-link planet-link--buttons" to="/ButtonPage">
          <span className="planet-orb" aria-hidden="true" />
          <span className="callout-dot" aria-hidden="true" />
          <span className="callout-line" aria-hidden="true" />
          <span className="planet-link-label">Buttons</span>
        </Link>
        <Link className="planet-link planet-link--tabs" to="/TabsPage">
          <span className="planet-orb" aria-hidden="true" />
          <span className="callout-dot" aria-hidden="true" />
          <span className="callout-line" aria-hidden="true" />
          <span className="planet-link-label">Tabs</span>
        </Link>
        <Link className="planet-link planet-link--inputs" to="/InputFieldPage">
          <span className="planet-orb" aria-hidden="true" />
          <span className="callout-dot" aria-hidden="true" />
          <span className="callout-line" aria-hidden="true" />
          <span className="planet-link-label">Inputs</span>
        </Link>
        <Link className="planet-link planet-link--forms" to="/FormPage">
          <span className="planet-orb" aria-hidden="true" />
          <span className="callout-dot" aria-hidden="true" />
          <span className="callout-line" aria-hidden="true" />
          <span className="planet-link-label">Forms</span>
        </Link>
      </div>

      <div className="space-hero">
        <div className="space-hero-brand">
          <h1 className="brand-name">Rocket UI</h1>
          <p className="brand-tagline">
            A playful React component library with a flat space aesthetic.
          </p>
        </div>
        <div className="space-cta">
          <Button
            label="Explore components"
            styleBtn="solid"
            size="large"
            click={() => navigate('/ButtonPage')}
          />
        </div>
      </div>
    </div>
  );
}
