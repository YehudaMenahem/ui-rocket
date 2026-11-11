import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@ui-rocket/rocket';

interface EntranceProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

const PLANET_LINKS = [
  { to: '/ButtonPage', label: 'Buttons', className: 'planet-link--buttons' },
  { to: '/TabsPage', label: 'Tabs', className: 'planet-link--tabs' },
  { to: '/InputFieldPage', label: 'Inputs', className: 'planet-link--inputs' },
  { to: '/FormPage', label: 'Forms', className: 'planet-link--forms' },
];

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
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <g className="stars">
            <circle className="star-twinkle" cx="70" cy="50" r="2" />
            <circle cx="150" cy="110" r="1.5" />
            <circle className="star-twinkle" cx="280" cy="40" r="2" />
            <circle cx="1050" cy="60" r="2.5" />
            <circle cx="920" cy="120" r="1.5" />
            <circle className="star-twinkle" cx="1120" cy="180" r="2" />
            <circle cx="60" cy="220" r="1" />
            <circle cx="1180" cy="280" r="1.5" />
          </g>

          {/* Decorative planets kept clear of the center text column */}
          <g className="planet planet-slow">
            <circle cx="140" cy="560" r="64" fill="#C58FFF" />
            <circle cx="118" cy="540" r="10" fill="#000000" opacity="0.2" />
            <circle cx="168" cy="575" r="7" fill="#000000" opacity="0.15" />
            <path
              d="M95 565 C125 545, 165 590, 190 560"
              fill="none"
              stroke="#5CFFE4"
              strokeWidth="8"
            />
          </g>

          <g className="planet">
            <circle cx="1040" cy="520" r="44" fill="#5CFFE4" />
            <circle cx="1058" cy="508" r="9" fill="#000000" opacity="0.12" />
            <ellipse
              cx="1040"
              cy="520"
              rx="58"
              ry="9"
              fill="none"
              stroke="#6439B7"
              strokeWidth="3"
            />
          </g>

          <g className="planet planet-slow">
            <circle cx="1080" cy="220" r="22" fill="#DCFF02" />
            <circle cx="1072" cy="214" r="4" fill="#000000" opacity="0.15" />
          </g>
        </svg>
      </div>

      <div className="space-horizon" aria-hidden="true" />

      <div className="space-hero">
        <div className="space-hero-brand">
          <h1 className="brand-name">Rocket UI</h1>
          <p className="brand-tagline">
            A playful React component library with a flat space aesthetic.
          </p>
        </div>

        <div className="space-rocket" aria-hidden="true">
          <svg width="96" height="140" viewBox="0 0 80 130" role="presentation">
            <path d="M40 4 L68 78 L40 64 L12 78 Z" fill="#FFFFFF" />
            <rect x="28" y="64" width="24" height="28" rx="6" fill="#C58FFF" />
            <circle cx="40" cy="36" r="10" fill="#5CFFE4" />
            <path d="M12 78 L2 104 L22 84 Z" fill="#6439B7" />
            <path d="M68 78 L78 104 L58 84 Z" fill="#6439B7" />
            <path d="M32 92 L40 122 L48 92" fill="#DCFF02" />
          </svg>
        </div>

        <nav className="planet-links" aria-label="Featured components">
          {PLANET_LINKS.map((item) => (
            <Link
              key={item.to}
              className={`planet-link ${item.className}`}
              to={item.to}
            >
              <span className="planet-orb" aria-hidden="true" />
              <span className="callout-dot" aria-hidden="true" />
              <span className="callout-line" aria-hidden="true" />
              <span className="planet-link-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mobile-planet-links" aria-label="Featured components">
          {PLANET_LINKS.map((item) => (
            <Link key={item.to} to={item.to} className="mobile-planet-link">
              <span className="planet-orb" aria-hidden="true" />
              {item.label}
            </Link>
          ))}
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
