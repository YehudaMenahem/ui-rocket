import { Link } from 'react-router-dom';
import { DocsShell } from '../components/DocsShell';

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

const TOC = [
  { id: 'toggle', label: 'data-theme' },
  { id: 'persist', label: 'Persistence' },
  { id: 'tokens', label: 'Tokens' },
];

export function DarkModePage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <DocsShell
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      activePath="/docs/dark-mode"
      toc={TOC}
    >
      <div className="crumbs">
        <Link to="/components">Components</Link> /{' '}
        <span style={{ color: 'var(--ink)' }}>Dark mode</span>
      </div>
      <h1>Dark mode</h1>
      <p className="one">
        Rocket UI flips light and dark by setting <code>data-theme</code> on the
        document root.
      </p>

      <h2 id="toggle">data-theme</h2>
      <p className="txt">
        Use <code>data-theme=&quot;dark&quot;</code> on{' '}
        <code>&lt;html&gt;</code> (or your root element). Omit it or set{' '}
        <code>light</code> for the cream paper theme.
      </p>
      <pre className="code">{`document.documentElement.setAttribute('data-theme', 'dark')`}</pre>

      <h2 id="persist">Persistence</h2>
      <p className="txt">
        This site stores the preference in <code>localStorage</code> and
        restores it on load. Mirror that pattern in your app, or follow the
        system preference with <code>prefers-color-scheme</code>.
      </p>

      <h2 id="tokens">Tokens</h2>
      <p className="txt">
        Dark values live beside light ones in the token sheet. See{' '}
        <Link to="/theming">Theming</Link> for the color list and a live sample.
      </p>
    </DocsShell>
  );
}
