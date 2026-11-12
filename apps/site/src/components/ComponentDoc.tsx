import {
  CSSProperties,
  Dispatch,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { ComponentMeta } from '../data/components';
import { DocsShell } from './DocsShell';
import { Icon } from './Icons';

export type PlaygroundState = {
  variant: 'solid' | 'soft' | 'outline' | 'ghost';
  color: string;
  colorHex: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius: 'none' | 'sm' | 'md' | 'full';
  loading: boolean;
  disabled: boolean;
  checked: boolean;
  required: boolean;
  labelPosition: 'label-from-left' | 'label-from-right';
  iconType: 'default' | 'heart' | 'star';
  heroImage: boolean;
  showError: boolean;
  placeholder: string;
  rows: number;
};

export type ControlKey =
  | 'variant'
  | 'color'
  | 'size'
  | 'radius'
  | 'loading'
  | 'disabled'
  | 'checked'
  | 'required'
  | 'labelPosition'
  | 'iconType'
  | 'heroImage'
  | 'showError'
  | 'placeholder'
  | 'rows';

const COLOR_PRESETS = [
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

const DEFAULT_CONTROLS: ControlKey[] = ['variant', 'color', 'size', 'radius', 'loading'];

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
  preview: (
    state: PlaygroundState,
    setState: Dispatch<SetStateAction<PlaygroundState>>
  ) => ReactNode;
  examples: ReactNode;
  props: PropRow[];
  importName?: string;
  a11y?: { key: string; title: string; body: string }[];
  generateCode?: (state: PlaygroundState) => string;
  showPlayground?: boolean;
  /** Which playground controls to show. Defaults to button-style controls. */
  controls?: ControlKey[];
  initialState?: Partial<PlaygroundState>;
}

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <button type="button" className={`tool copy-btn ${copied ? 'copied' : ''}`} onClick={onCopy}>
      <Icon name={copied ? 'check' : 'copy'} />
      <span className="copy-label">{copied ? 'Copied' : label}</span>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied to clipboard' : ''}
      </span>
    </button>
  );
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
  controls = DEFAULT_CONTROLS,
  initialState,
}: ComponentDocProps) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const [pm, setPm] = useState('pnpm');
  const [state, setState] = useState<PlaygroundState>({
    variant: 'solid',
    color: 'rust',
    colorHex: '#C4471D',
    size: 'md',
    radius: 'full',
    loading: false,
    disabled: false,
    checked: true,
    required: false,
    labelPosition: 'label-from-left',
    iconType: 'default',
    heroImage: false,
    showError: false,
    placeholder: 'Type here…',
    rows: 3,
    ...initialState,
  });

  const code = useMemo(() => {
    if (generateCode) return generateCode(state);
    return `import { ${importName} } from '@ui-rocket/rocket'

export default function Demo() {
  return <${importName} />
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
  const show = (key: ControlKey) => controls.includes(key);

  const canvasStyle = {
    '--accent': state.colorHex,
    '--accent-text': state.colorHex,
    '--accent-soft': `${state.colorHex}22`,
    '--playground-accent': state.colorHex,
  } as CSSProperties;

  return (
    <DocsShell meta={meta} sidebarOpen={sidebarOpen} onCloseSidebar={onCloseSidebar}>
      <div className="crumbs">
        Components <Icon name="chevr" /> {meta.group} <Icon name="chevr" />{' '}
        <span style={{ color: 'var(--ink)' }}>{meta.name}</span>
      </div>

      <div className="between" style={{ alignItems: 'flex-end' }}>
        <h1>{meta.name}</h1>
        <div className="row" style={{ marginBottom: 14 }}>
          <CopyButton text={code} label="Copy page" />
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
        Use the controls to try every supported prop. The preview and code update together.
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
          </div>

          {tab === 'preview' ? (
            <div className="demo-body">
              <div className="canvas" style={canvasStyle}>
                {preview(state, setState)}
              </div>
              <div className="controls">
                {show('variant') ? (
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
                ) : null}

                {show('color') ? (
                  <div className="ctl">
                    <div className="lbl">
                      Color <em>{state.color}</em>
                    </div>
                    <div className="sw">
                      {COLOR_PRESETS.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          className={state.color === c.name ? 'on' : ''}
                          style={{ background: c.value }}
                          aria-label={c.name}
                          onClick={() =>
                            setState((s) => ({ ...s, color: c.name, colorHex: c.value }))
                          }
                        >
                          {state.color === c.name ? <Icon name="check" /> : null}
                        </button>
                      ))}
                      <label className="color-picker" title="Custom color">
                        <input
                          type="color"
                          value={state.colorHex}
                          aria-label="Custom color picker"
                          onChange={(e) =>
                            setState((s) => ({
                              ...s,
                              color: 'custom',
                              colorHex: e.target.value,
                            }))
                          }
                        />
                      </label>
                    </div>
                  </div>
                ) : null}

                {show('size') ? (
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
                ) : null}

                {show('radius') ? (
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
                ) : null}

                {show('loading') ? (
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
                ) : null}

                {show('disabled') ? (
                  <div className="between">
                    <span className="lbl" style={{ margin: 0 }}>
                      Disabled
                    </span>
                    <button
                      type="button"
                      className={`switch ${state.disabled ? 'on' : ''}`}
                      role="switch"
                      aria-checked={state.disabled}
                      aria-label="Toggle disabled"
                      onClick={() => setState((s) => ({ ...s, disabled: !s.disabled }))}
                    />
                  </div>
                ) : null}

                {show('checked') ? (
                  <div className="between">
                    <span className="lbl" style={{ margin: 0 }}>
                      Checked
                    </span>
                    <button
                      type="button"
                      className={`switch ${state.checked ? 'on' : ''}`}
                      role="switch"
                      aria-checked={state.checked}
                      aria-label="Toggle checked"
                      onClick={() => setState((s) => ({ ...s, checked: !s.checked }))}
                    />
                  </div>
                ) : null}

                {show('required') ? (
                  <div className="between">
                    <span className="lbl" style={{ margin: 0 }}>
                      Required
                    </span>
                    <button
                      type="button"
                      className={`switch ${state.required ? 'on' : ''}`}
                      role="switch"
                      aria-checked={state.required}
                      aria-label="Toggle required"
                      onClick={() => setState((s) => ({ ...s, required: !s.required }))}
                    />
                  </div>
                ) : null}

                {show('labelPosition') ? (
                  <div className="ctl">
                    <div className="lbl">Label position</div>
                    <div className="seg" style={{ display: 'flex' }}>
                      {(
                        [
                          ['label-from-left', 'Left'],
                          ['label-from-right', 'Right'],
                        ] as const
                      ).map(([value, label]) => (
                        <button
                          key={value}
                          type="button"
                          className={state.labelPosition === value ? 'on' : ''}
                          style={{ flex: 1 }}
                          onClick={() => setState((s) => ({ ...s, labelPosition: value }))}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {show('iconType') ? (
                  <div className="ctl">
                    <div className="lbl">Icon type</div>
                    <div className="seg" style={{ display: 'flex' }}>
                      {(['default', 'heart', 'star'] as const).map((iconType) => (
                        <button
                          key={iconType}
                          type="button"
                          className={state.iconType === iconType ? 'on' : ''}
                          style={{ flex: 1 }}
                          onClick={() => setState((s) => ({ ...s, iconType }))}
                        >
                          {iconType}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}

                {show('heroImage') ? (
                  <div className="between">
                    <span className="lbl" style={{ margin: 0 }}>
                      Hero image
                    </span>
                    <button
                      type="button"
                      className={`switch ${state.heroImage ? 'on' : ''}`}
                      role="switch"
                      aria-checked={state.heroImage}
                      aria-label="Toggle hero image"
                      onClick={() => setState((s) => ({ ...s, heroImage: !s.heroImage }))}
                    />
                  </div>
                ) : null}

                {show('showError') ? (
                  <div className="between">
                    <span className="lbl" style={{ margin: 0 }}>
                      Show error
                    </span>
                    <button
                      type="button"
                      className={`switch ${state.showError ? 'on' : ''}`}
                      role="switch"
                      aria-checked={state.showError}
                      aria-label="Toggle error"
                      onClick={() => setState((s) => ({ ...s, showError: !s.showError }))}
                    />
                  </div>
                ) : null}

                {show('placeholder') ? (
                  <div className="ctl">
                    <div className="lbl">Placeholder</div>
                    <input
                      className="ctl-input"
                      value={state.placeholder}
                      onChange={(e) => setState((s) => ({ ...s, placeholder: e.target.value }))}
                    />
                  </div>
                ) : null}

                {show('rows') ? (
                  <div className="ctl">
                    <div className="lbl">
                      Rows <em>{state.rows}</em>
                    </div>
                    <input
                      className="ctl-input"
                      type="number"
                      min={1}
                      max={12}
                      value={state.rows}
                      onChange={(e) =>
                        setState((s) => ({ ...s, rows: Number(e.target.value) || 1 }))
                      }
                    />
                  </div>
                ) : null}
              </div>
            </div>
          ) : (
            <pre className="code">{code}</pre>
          )}

          <div className="code-head" style={{ borderTop: '1px solid var(--code-line)' }}>
            <span className="tab on">Demo.tsx</span>
            <span className="sp" />
            <CopyButton text={code} />
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
          <CopyButton text={install} />
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
      <p className="txt">{meta.name} also accepts relevant native element attributes.</p>
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
