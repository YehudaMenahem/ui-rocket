import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_GROUPS, ComponentMeta } from '../data/components';
import { Icon, RocketMark } from './Icons';

interface DocsShellProps {
  meta: ComponentMeta;
  children: ReactNode;
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
  activeToc?: string;
}

export function DocsShell({
  meta,
  children,
  sidebarOpen,
  onCloseSidebar,
  activeToc = 'usage',
}: DocsShellProps) {
  const location = useLocation();

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

      <aside className={`side ${sidebarOpen ? 'open' : ''}`} aria-label="Docs navigation">
        {NAV_GROUPS.map((group) => (
          <div key={group.title} className="nav-section">
            <h6>{group.title}</h6>
            {group.items.map((item) => (
              <Link
                key={item.path + item.label}
                to={item.path}
                className={
                  location.pathname === item.path && item.label === meta.name ? 'on' : ''
                }
                onClick={onCloseSidebar}
                aria-current={
                  location.pathname === item.path && item.label === meta.name
                    ? 'page'
                    : undefined
                }
              >
                {item.label}
                {item.badge ? <span className="new">{item.badge}</span> : null}
              </Link>
            ))}
          </div>
        ))}
      </aside>

      <main className="main">{children}</main>

      <aside className="toc" aria-label="On this page">
        <h6>On this page</h6>
        {meta.toc.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${item.sub ? 'sub' : ''} ${activeToc === item.id ? 'on' : ''}`}
          >
            {item.label}
          </a>
        ))}
        <div className="promo">
          <RocketMark />
          <b>Theme builder</b>
          Tweak tokens and export a CSS file for your brand.
          <div style={{ marginTop: 12 }}>
            <Link className="btn btn-secondary btn-xs" to="/">
              Open builder <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
