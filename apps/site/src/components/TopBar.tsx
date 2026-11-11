import { Link, useLocation } from 'react-router-dom';
import { Icon, RocketMark } from './Icons';

interface TopBarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onOpenNav?: () => void;
  activeNav?: string;
}

const LINKS = [
  { label: 'Docs', path: '/ButtonPage' },
  { label: 'Components', path: '/ButtonPage' },
  { label: 'Theming', path: '/ButtonPage' },
  { label: 'Playground', path: '/ButtonPage' },
  { label: 'Blog', path: '/' },
];

export function TopBar({
  darkMode,
  onToggleTheme,
  onOpenSearch,
  onOpenNav,
  activeNav = 'Components',
}: TopBarProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="topbar">
      {onOpenNav ? (
        <button
          type="button"
          className="icon-btn mobile-nav-btn"
          aria-label="Open navigation"
          onClick={onOpenNav}
        >
          <Icon name="menu" />
        </button>
      ) : null}

      <Link className="logo" to="/" aria-label="Rocket UI home">
        <RocketMark />
        <span>Rocket UI</span>
        <span className="ver">v2.0</span>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className={
              (isHome && link.label === 'Docs') ||
              (!isHome && link.label === activeNav)
                ? 'on'
                : ''
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="top-right">
        <button
          type="button"
          className="search"
          onClick={onOpenSearch}
          aria-label="Search docs"
        >
          <Icon name="search" />
          <span>Search docs…</span>
          <span className="kbd">⌘K</span>
        </button>

        <button
          type="button"
          className="icon-btn"
          role="switch"
          aria-checked={darkMode}
          aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={onToggleTheme}
        >
          <Icon name={darkMode ? 'sun' : 'moon'} />
        </button>

        <a
          className="gh"
          href="https://github.com/YehudaMenahem/ui-rocket"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="gh" />
          GitHub <small>2.4k</small>
        </a>
      </div>
    </header>
  );
}
