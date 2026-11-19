import { Link } from 'react-router-dom';
import { DocsShell } from '../components/DocsShell';
import { CopyButton } from '../components/CopyButton';

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

const TOC = [
  { id: 'install', label: 'Install' },
  { id: 'styles', label: 'Stylesheet' },
  { id: 'first', label: 'First component' },
];

export function InstallationPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <DocsShell
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      activePath="/docs/installation"
      toc={TOC}
    >
      <div className="crumbs">
        <Link to="/components">Components</Link> /{' '}
        <span style={{ color: 'var(--ink)' }}>Installation</span>
      </div>
      <h1>Installation</h1>
      <p className="one">
        Add the package, import the stylesheet once, then drop in a component.
      </p>

      <h2 id="install">Install</h2>
      <p className="txt">
        Pick your package manager. The package name is{' '}
        <code>@ui-rocket/rocket</code>.
      </p>
      <div className="pm">
        <div className="code-head">
          <span className="tab on">pnpm</span>
          <span className="sp" />
          <CopyButton text="pnpm add @ui-rocket/rocket" />
        </div>
        <pre className="code">$ pnpm add @ui-rocket/rocket</pre>
      </div>

      <h2 id="styles">Stylesheet</h2>
      <p className="txt">
        Import the compiled CSS at your app root so tokens and component styles
        load once.
      </p>
      <pre className="code">{`import '@ui-rocket/rocket/styles'`}</pre>

      <h2 id="first">First component</h2>
      <p className="txt">
        Start with <Link to="/ButtonPage">Button</Link>, or browse the{' '}
        <Link to="/components">full catalog</Link>.
      </p>
    </DocsShell>
  );
}
