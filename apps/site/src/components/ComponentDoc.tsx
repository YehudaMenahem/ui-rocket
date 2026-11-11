import { ReactNode, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ComponentMeta } from '../data/components';
import { DocsShell } from './DocsShell';
import { Icon } from './Icons';

export type PlaygroundState = {
  variant: 'solid' | 'soft' | 'outline' | 'ghost';
  color: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius: 'none' | 'sm' | 'md' | 'full';
  loading: boolean;
};

const COLORS = [
  { name: 'rust', value: '#C4471D' },
  { name: 'olive', value: '#4A5A23' },
  { name: 'navy', value: '#1E2A47' },
  { name: 'mustard', value: '#E7A33B' },
  { name: 'powder', value: '#9FC2E8' },
  { name: 'plum', value: '#8B5A8C' },
];

const SIZES: PlaygroundState['size'][] = ['xs', 'sm', 'md', 'lg', 'xl'];
const RADII: PlaygroundState['radius'][] = ['none', 'sm', 'md', 'full'];
const VARIANTS: PlaygroundState['variant'][] = ['solid', 'soft', 'outline', 'ghost'];

export type PropRow = {
  name: string;
  type: string[];
  defaultValue: string;
  description: string;
};

interface ComponentDocProps {
  meta: ComponentMeta;
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
  preview: (state: PlaygroundState) => ReactNode;
  examples: ReactNode;
  props: PropRow[];
  importName?: string;
  a11y?: { key: string; title: string; body: string }[];
  generateCode?: (state: PlaygroundState) => string;
  showPlayground?: boolean;
}

export function ComponentDoc({
  meta,
  sidebarOpen,
  onCloseSidebar,
  preview,
  examples,
  props,
  importName = meta.name,
  a11y = [
    {
      key: 'Enter',
      title: 'Activates the control',
      body: 'Fires the primary action, same as a mouse click.',
    },
    {
      key: 'Space',
      title: 'Activates on release',
      body: 'Matches native control timing.',
    },
    {
      key: 'Tab',
      title: 'Visible focus ring',
      body: '3:1 contrast against every surface.',
    },
    {
      key: 'aria',
      title: 'Busy & disabled states',
      body: 'Announced via aria-busy and aria-disabled.',
    },
  ],
  generateCode,
  showPlayground = true,
}: ComponentDocProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [pm, setPm] = useState('pnpm');
  const [state, setState] = useState<PlaygroundState>({
    variant: 'solid',
    color: 'rust',
    size: 'md',
    radius: 'full',
    loading: false,
  });

  const code = useMemo(() => {
    if (generateCode) return generateCode(state);
    return `import { ${importName} } from '@ui-rocket/rocket'

export default function Demo() {
  return <${importName} variant="${state.variant}" color="${state.color}" size="${state.size}" radius="${state.radius}"${state.loading ? ' loading' : ''} />
}`;
  }, [generateCode, importName, state]);

  const install =
    pm === 'pnpm'
      ? 'pnpm add @ui-rocket/rocket'
      : pm === 'npm'
        ? 'npm install @ui-rocket/rocket'
        : pm === 'yarn'
          ? 'yarn add @ui-rocket/rocket'
          : 'bun add @ui-rocket/rocket';

  const sizePct = (SIZES.indexOf(state.size) / (SIZES.length - 1)) * 100;
  const radiusPct = (RADII.indexOf(state.radius) / (RADII.length - 1)) * 100;

  return (
    <DocsShell meta={meta} sidebarOpen={sidebarOpen} onCloseSidebar={onCloseSidebar}>
      <div className="crumbs">
        Components <Icon name="chevr" /> {meta.group} <Icon name="chevr" />{' '}
        <span style={{ color: 'var(--ink)' }}>{meta.name}</span>
      </div>

      <div className="between" style={{ alignItems: 'flex-end' }}>
        <h1>{meta.name}</h1>
        <div className="row" style={{ marginBottom: 14 }}>
          <button type="button" className="chip" onClick={() => navigator.clipboard?.writeText(code)}>
            <Icon name="copy" /> Copy page
          </button>
        </div>
      </div>

      <p className="one">{meta.oneLiner}</p>

      <div className="meta">
        <a className="chip" href="https://github.com/YehudaMenahem/ui-rocket" target="_blank" rel="noreferrer">
          <Icon name="gh" /> Source
        </a>
        <span className="chip">
          <Icon name="shield" /> {meta.aria}
        </span>
        <span className="chip">
          <Icon name="pkg" /> {meta.gzip}
        </span>
        <span className="chip">
          <Icon name="test" /> {meta.tests}
        </span>
      </div>

      <div className="doc-tabs" role="tablist">
        <button type="button" className="on" role="tab" aria-selected>
          Documentation
        </button>
        <a href="#props">Props</a>
        <a href="#accessibility">Accessibility</a>
      </div>

      <h2 id="usage">Usage</h2>
      <p className="txt">
        Use the controls to try every variant. The code below updates with your choices.
      </p>

      {showPlayground ? (
        <div className="demo">
          <div className="demo-bar">
            <div className="seg">
              <button
                type="button"
                className={tab === 'preview' ? 'on' : ''}
                onClick={() => setTab('preview')}
              >
                Preview
              </button>
              <button
                type="button"
                className={tab === 'code' ? 'on' : ''}
                onClick={() => setTab('code')}
              >
                Code
              </button>
            </div>
            <span className="sp" />
            <span className="tool">
              <Icon name="monitor" />
            </span>
            <span className="tool">
              <Icon name="phone" />
            </span>
            <span className="tool">
              <Icon name="refresh" />
            </span>
          </div>

          {tab === 'preview' ? (
            <div className="demo-body">
              <div className="canvas">{preview(state)}</div>
              <div className="controls">
                <div className="ctl">
                  <div className="lbl">Variant</div>
                  <div className="seg" style={{ display: 'flex' }}>
                    {VARIANTS.map((v) => (
                      <button
                        key={v}
                        type="button"
                        className={state.variant === v ? 'on' : ''}
                        style={{ flex: 1, textAlign: 'center', padding: '5px 4px' }}
                        onClick={() => setState((s) => ({ ...s, variant: v }))}
                      >
                        {v[0].toUpperCase() + v.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="ctl">
                  <div className="lbl">
                    Color <em>{state.color}</em>
                  </div>
                  <div className="sw">
                    {COLORS.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        className={state.color === c.name ? 'on' : ''}
                        style={{ background: c.value }}
                        aria-label={c.name}
                        onClick={() => setState((s) => ({ ...s, color: c.name }))}
                      >
                        {state.color === c.name ? <Icon name="check" /> : null}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="ctl">
                  <div className="lbl">
                    Size <em>{state.size}</em>
                  </div>
                  <div
                    className="slider"
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={SIZES.length - 1}
                    aria-valuenow={SIZES.indexOf(state.size)}
                    aria-label="Size"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      const i = SIZES.indexOf(state.size);
                      if (e.key === 'ArrowRight' && i < SIZES.length - 1) {
                        setState((s) => ({ ...s, size: SIZES[i + 1] }));
                      }
                      if (e.key === 'ArrowLeft' && i > 0) {
                        setState((s) => ({ ...s, size: SIZES[i - 1] }));
                      }
                    }}
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const pct = (e.clientX - rect.left) / rect.width;
                      const idx = Math.round(pct * (SIZES.length - 1));
                      setState((s) => ({ ...s, size: SIZES[idx] }));
                    }}
                  >
                    <div className="fill" style={{ width: `${sizePct}%` }} />
                    <div className="th" style={{ left: `${sizePct}%` }} />
                  </div>
                  <div className="marks">
                    {SIZES.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>

                <div className="ctl">
                  <div className="lbl">
                    Radius <em>{state.radius}</em>
                  </div>
                  <div
                    className="slider"
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={RADII.length - 1}
                    aria-valuenow={RADII.indexOf(state.radius)}
                    aria-label="Radius"
                    tabIndex={0}
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const pct = (e.clientX - rect.left) / rect.width;
                      const idx = Math.round(pct * (RADII.length - 1));
                      setState((s) => ({ ...s, radius: RADII[idx] }));
                    }}
                  >
                    <div className="fill" style={{ width: `${radiusPct}%` }} />
                    <div className="th" style={{ left: `${radiusPct}%` }} />
                  </div>
                  <div className="marks">
                    {RADII.map((r) => (
                      <span key={r}>{r}</span>
                    ))}
                  </div>
                </div>

                <div className="between">
                  <span className="lbl" style={{ margin: 0 }}>
                    Loading
                  </span>
                  <button
                    type="button"
                    className={`switch ${state.loading ? 'on' : ''}`}
                    role="switch"
                    aria-checked={state.loading}
                    aria-label="Toggle loading"
                    onClick={() => setState((s) => ({ ...s, loading: !s.loading }))}
                  />
                </div>
              </div>
            </div>
          ) : (
            <pre className="code">{code}</pre>
          )}

          <div className="code-head" style={{ borderTop: '1px solid var(--code-line)' }}>
            <span className="tab on">Demo.tsx</span>
            <span className="sp" />
            <button
              type="button"
              className="tool"
              aria-label="Copy code"
              onClick={() => navigator.clipboard?.writeText(code)}
            >
              <Icon name="copy" />
            </button>
          </div>
          <pre className="code" style={{ borderTop: 0 }}>
            {code}
          </pre>
        </div>
      ) : null}

      <h2 id="installation" style={{ marginTop: 48 }}>
        Installation
      </h2>
      <p className="txt">Install the package, then import the stylesheet once at your app root.</p>
      <div className="pm">
        <div className="code-head">
          {['pnpm', 'npm', 'yarn', 'bun'].map((t) => (
            <button
              key={t}
              type="button"
              className={`tab ${pm === t ? 'on' : ''}`}
              onClick={() => setPm(t)}
            >
              {t}
            </button>
          ))}
          <span className="sp" />
          <button
            type="button"
            className="tool"
            aria-label="Copy install command"
            onClick={() => navigator.clipboard?.writeText(install)}
          >
            <Icon name="copy" />
          </button>
        </div>
        <pre className="code">$ {install}</pre>
      </div>

      <h2 id="examples" style={{ marginTop: 48 }}>
        Examples
      </h2>
      {examples}

      <h2 id="props" style={{ marginTop: 48 }}>
        Props
      </h2>
      <p className="txt">
        {meta.name} also accepts relevant native element attributes.
      </p>
      <div className="props-wrap">
        <table className="props">
          <thead>
            <tr>
              <th style={{ width: 120 }}>Prop</th>
              <th>Type</th>
              <th style={{ width: 110 }}>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>
                  {row.type.map((t) => (
                    <span className="tb" key={t}>
                      {t}
                    </span>
                  ))}
                </td>
                <td>
                  <span className="db">{row.defaultValue}</span>
                </td>
                <td style={{ color: 'var(--muted)' }}>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="accessibility" style={{ marginTop: 48 }}>
        Accessibility
      </h2>
      <p className="txt">Built on native controls so keyboard and screen-reader support come free.</p>
      <div className="a11y">
        {a11y.map((item) => (
          <div key={item.key}>
            <span className="kb">{item.key}</span>
            <span>
              <b>{item.title}</b>
              {item.body}
            </span>
          </div>
        ))}
      </div>

      <div className="pn">
        {meta.prev ? (
          <Link to={meta.prev.path}>
            <small>← Previous</small>
            <b>{meta.prev.label}</b>
          </Link>
        ) : (
          <span />
        )}
        {meta.next ? (
          <Link to={meta.next.path}>
            <small>Next →</small>
            <b>{meta.next.label}</b>
          </Link>
        ) : null}
      </div>
    </DocsShell>
  );
}
