import { Link } from 'react-router-dom';
import { DocsShell } from '../components/DocsShell';
import { COMPONENTS } from '../data/components';
import { METRICS } from '../data/metrics.generated';

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function ComponentsIndexPage({
  sidebarOpen,
  onCloseSidebar,
}: PageProps) {
  const groups = [...new Set(COMPONENTS.map((c) => c.group))];

  return (
    <DocsShell
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      activePath="/components"
      toc={groups.map((g) => ({ id: g.toLowerCase(), label: g }))}
      showPromo
    >
      <div className="crumbs">
        <Link to="/docs">Docs</Link> /{' '}
        <span style={{ color: 'var(--ink)' }}>Components</span>
      </div>
      <h1>Components</h1>
      <p className="one">
        {METRICS.componentCount} primitives exported from{' '}
        <code>@ui-rocket/rocket</code> — each with a playground and props table.
      </p>

      {groups.map((group) => (
        <section key={group} style={{ marginTop: 36 }}>
          <h2 id={group.toLowerCase()}>{group}</h2>
          <ul className="component-index">
            {COMPONENTS.filter((c) => c.group === group).map((c) => (
              <li key={c.id}>
                <Link to={c.path}>
                  <b>{c.name}</b>
                  <span>{c.oneLiner}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </DocsShell>
  );
}
