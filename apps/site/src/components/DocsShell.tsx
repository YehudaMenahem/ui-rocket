import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_GROUPS } from '../data/components';
import { Icon, RocketMark } from './Icons';

export type TocItem = { id: string; label: string; sub?: boolean };

interface DocsShellProps {
  children: ReactNode;
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
  /** Path used to highlight the sidebar link. Defaults to current location. */
  activePath?: string;
  toc?: TocItem[];
  activeToc?: string;
  showPromo?: boolean;
}

export function DocsShell({
  children,
  sidebarOpen,
  onCloseSidebar,
  activePath,
  toc = [],
  activeToc = 'usage',
  showPromo = true,
}: DocsShellProps) {
  const location = useLocation();
  const current = activePath || location.pathname;

  return (
    <div className={`shell ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {sidebarOpen ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close navigation"
          onClick={onCloseSidebar}
        />
      ) : null}

      <aside
        className={`side ${sidebarOpen ? 'open' : ''}`}
        aria-label="Docs navigation"
      >
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="nav-section">
            <h2 className="side-heading">{group.title}</h2>
            {group.items.map((item) => {
              const on = current === item.path;
              return (
                <Link
                  key={item.path + item.label}
                  to={item.path}
                  className={on ? 'on' : ''}
                  onClick={onCloseSidebar}
                  aria-current={on ? 'page' : undefined}
                >
                  {item.label}
                  {item.badge ? (
                    <span className="new">{item.badge}</span>
                  ) : null}
                </Link>
              );
            })}
          </div>
        ))}
      </aside>

      <main className="main">{children}</main>

      <aside className="toc" aria-label="On this page">
        <p className="toc-title">On this page</p>
        {toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${item.sub ? 'sub' : ''} ${activeToc === item.id ? 'on' : ''}`}
          >
            {item.label}
          </a>
        ))}
        {showPromo ? (
          <div className="promo">
            <RocketMark />
            <b>Theme builder</b>
            Tweak tokens and export a CSS file for your brand.
            <div style={{ marginTop: 12 }}>
              <Link className="btn btn-secondary btn-xs" to="/theming">
                Open builder <Icon name="arrow" />
              </Link>
            </div>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
