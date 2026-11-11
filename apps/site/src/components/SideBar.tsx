import { Link, useLocation } from 'react-router-dom';

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { path: '/ButtonPage', label: 'Buttons' },
  { path: '/IconPage', label: 'Icons' },
  { path: '/RadioPage', label: 'Radio Buttons' },
  { path: '/CheckboxPage', label: 'Checkboxes' },
  { path: '/ToggleButtonPage', label: 'Toggle Buttons' },
  { path: '/InputFieldPage', label: 'Input Fields' },
  { path: '/SelectFieldPage', label: 'Select Fields' },
  { path: '/TextboxPage', label: 'Textboxes' },
  { path: '/TabsPage', label: 'Tabs' },
  { path: '/FormPage', label: 'Forms' },
  { path: '/ModalPage', label: 'Modals' },
  { path: '/ToasterPage', label: 'Toasters' },
  { path: '/ImgPage', label: 'Images' },
];

function RocketMark() {
  return (
    <svg
      className="rocket-mark"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {/* Clear upright rocket silhouette */}
      <path
        d="M12 1.5c2.2 3.2 3.8 6.6 4.2 10.2.2 1.6-.2 3.2-1.2 4.5l1.8 4.3c.2.4-.2.8-.6.7l-3.2-1.1c-.3.1-.7.2-1 .2s-.7-.1-1-.2l-3.2 1.1c-.4.1-.8-.3-.6-.7l1.8-4.3c-1-1.3-1.4-2.9-1.2-4.5C8.2 8.1 9.8 4.7 12 1.5z"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="2.2" fill="#5CFFE4" />
      <path d="M7.2 14.2 L4.6 17.8 L8.8 15.8 Z" fill="#6439B7" />
      <path d="M16.8 14.2 L19.4 17.8 L15.2 15.8 Z" fill="#6439B7" />
      <path d="M10.4 19.2 L12 23 L13.6 19.2 Z" fill="#DCFF02" />
    </svg>
  );
}

export function SideBar({ isOpen, onClose, darkMode, onToggleTheme }: SideBarProps) {
  const location = useLocation();

  return (
    <aside className={`side-bar ${isOpen ? 'open' : ''}`} aria-label="Component navigation">
      <div className="logo">
        <Link to="/" onClick={onClose} aria-label="Rocket UI home">
          <h3>
            <span className="icon-wrapper rocket-logo" aria-hidden="true">
              <RocketMark />
            </span>
            Rocket UI
          </h3>
        </Link>
      </div>

      <nav>
        <div className="nav-section">
          <h4 className="section-title">Components</h4>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                  onClick={onClose}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="theme-toggle-wrapper">
        <button
          type="button"
          className="theme-toggle-button"
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
      </div>
    </aside>
  );
}
