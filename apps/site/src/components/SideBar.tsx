import { Link, useLocation } from 'react-router-dom';
import { Icon } from '@ui-rocket/rocket';

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

export function SideBar({ isOpen, onClose, darkMode, onToggleTheme }: SideBarProps) {
  const location = useLocation();

  return (
    <aside className={`side-bar ${isOpen ? 'open' : ''}`} aria-label="Component navigation">
      <div className="logo">
        <Link to="/" onClick={onClose} aria-label="Rocket UI home">
          <h3>
            <span className="icon-wrapper" aria-hidden="true">
              <Icon iconClass="rocket" />
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
