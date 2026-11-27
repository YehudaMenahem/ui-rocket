import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  InputField,
  RadioButton,
  SelectField,
  ToggleButton,
  Toaster,
} from '@ui-rocket/rocket';
import { CopyButton } from '../components/CopyButton';
import { Icon } from '../components/Icons';
import { HeroScene3D } from '../components/HeroScene3D';
import { METRICS } from '../data/metrics.generated';
import { copyText } from '../utils/copyText';

interface EntranceProps {
  darkMode: boolean;
}

const FEATURES = [
  {
    icon: 'shield',
    title: 'Accessible by default',
    body: 'WAI-ARIA patterns, real focus rings and full keyboard support, tested with axe on every PR.',
  },
  {
    icon: 'palette',
    title: 'Themeable tokens',
    body: 'One set of CSS variables drives color, radius and type. Light and dark ship in the box.',
  },
  {
    icon: 'feather',
    title: 'Tiny & tree-shakeable',
    body: 'Each component is its own entry point. Import a Button, ship a Button — tree-shake the rest.',
  },
  {
    icon: 'code',
    title: 'Typed end to end',
    body: 'Strict TypeScript, predictable props and autocompleted variants.',
  },
];

const TILES = [
  { name: 'Button', path: '/ButtonPage' },
  { name: 'Input', path: '/InputFieldPage' },
  { name: 'Checkbox', path: '/CheckboxPage' },
  { name: 'Radio', path: '/RadioPage' },
  { name: 'Toggle', path: '/ToggleButtonPage' },
  { name: 'Select', path: '/SelectFieldPage' },
  { name: 'Icon', path: '/IconPage' },
  { name: 'Img', path: '/ImgPage' },
];

const CODEBAND = `import { Button, ToggleButton } from '@ui-rocket/rocket'

export function LaunchPanel() {
  const [armed, setArmed] = useState(false)
  return (
    <>
      <ToggleButton isChecked={armed} change={setArmed} label="Arm thrusters" />
      <Button label="Launch" styleBtn="solid" disabled={!armed} />
    </>
  )
}`;

type LaunchPhase = 'idle' | 'countdown' | 'liftoff';

export function Entrance({ darkMode: _darkMode }: EntranceProps) {
  const navigate = useNavigate();
  const [mission, setMission] = useState('Artemis IV');
  const [checks, setChecks] = useState({ a: true, b: true });
  const [armed, setArmed] = useState(true);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [phase, setPhase] = useState<LaunchPhase>('idle');
  const [count, setCount] = useState<number | null>(null);
  const [toast, setToast] = useState(false);
  const [formError, setFormError] = useState('');
  const timers = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const copyInstall = async () => {
    const ok = await copyText('pnpm add @ui-rocket/rocket');
    if (ok) {
      setCopied(true);
      setCopyFailed(false);
      setTimeout(() => setCopied(false), 1600);
    } else {
      setCopyFailed(true);
      setTimeout(() => setCopyFailed(false), 2000);
    }
  };

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };

  const startLaunch = () => {
    const missing: string[] = [];
    if (!checks.a) missing.push('propellant');
    if (!checks.b) missing.push('crew');
    if (missing.length) {
      setFormError(`Checklist incomplete: still need ${missing.join(', ')}.`);
      setPhase('idle');
      return;
    }
    if (!mission.trim()) {
      setFormError('Give the mission a name before liftoff.');
      return;
    }

    setFormError('');
    setPhase('countdown');
    setCount(3);
    clearTimers();

    timers.current.push(
      window.setTimeout(() => setCount(2), 900),
      window.setTimeout(() => setCount(1), 1800),
      window.setTimeout(() => {
        setCount(null);
        setPhase('liftoff');
        setToast(true);
      }, 2700)
    );
  };

  const badgeLabel =
    phase === 'countdown' && count != null
      ? `● T-${count}`
      : phase === 'liftoff'
        ? '● LIFTOFF'
        : '● T-00:42:10';

  const countdownOpen = phase === 'countdown' && count != null;

  const gzipLabel = METRICS.bundleGzipLabel.replace(' gzip', '');

  return (
    <div className="landing">
      <main>
        <div className="hero-wrap">
          <section className="hero">
            <div className="copy">
              <span className="eyebrow">
                <b>NEW</b>
              </span>
              <h1>
                If you build it,
                <br />
                they will come.
              </h1>
              <p className="lede">A friendly little React component library.</p>
              <div className="ctas">
                <Button
                  label="Get started"
                  styleBtn="solid"
                  size="large"
                  classes="btn-primary btn-lg"
                  click={() => navigate('/docs')}
                >
                  <Icon name="send" />
                </Button>
                <Button
                  label="Browse components"
                  styleBtn="outline"
                  size="large"
                  classes="btn-secondary btn-lg"
                  click={() => navigate('/components')}
                />
              </div>
            </div>

            <div className="stage">
              <HeroScene3D launching={phase === 'liftoff'}>
                <div className="collage">
                  <div className={`card launch launch-checklist ${phase}`}>
                    <div className="launch-checklist__head between">
                      <p className="card-kicker">Launch checklist</p>
                      <span className={`badge ${phase}`}>{badgeLabel}</span>
                    </div>
                    <div className="launch-checklist__stack">
                      <InputField
                        label="Mission name"
                        id="mission"
                        value={mission}
                        change={setMission}
                        maxlength={40}
                        classes="hero-mission"
                      />
                      <div className="launch-checklist__checks">
                        <Checkbox
                          id="c1"
                          label="Propellant loaded"
                          checked={checks.a}
                          change={(t) =>
                            setChecks((s) => ({ ...s, a: t.checked }))
                          }
                        />
                        <Checkbox
                          id="c2"
                          label="Crew boarded & sealed"
                          checked={checks.b}
                          change={(t) =>
                            setChecks((s) => ({ ...s, b: t.checked }))
                          }
                        />
                      </div>
                      {formError ? (
                        <p className="form-error" role="alert">
                          {formError}
                        </p>
                      ) : null}
                      {/* Always mounted so the card height can animate both ways
                          (grid 0fr <-> 1fr) instead of jumping on mount/unmount. */}
                      <div
                        className={`countdown-reveal ${countdownOpen ? 'is-open' : ''}`}
                        aria-hidden="true"
                      >
                        <div className="countdown-reveal__inner">
                          <p className="countdown">Liftoff in {count ?? 1}…</p>
                        </div>
                      </div>
                      <p className="sr-only" aria-live="assertive">
                        {countdownOpen ? `Liftoff in ${count}…` : ''}
                      </p>
                      <div className="launch-checklist__actions">
                        <Button
                          label={phase === 'liftoff' ? 'Liftoff!' : 'Launch'}
                          styleBtn="solid"
                          size="small"
                          classes="btn-primary btn-sm"
                          loading={phase === 'countdown'}
                          disabled={phase === 'countdown'}
                          click={startLaunch}
                        >
                          <Icon name="send" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </HeroScene3D>
            </div>
          </section>
        </div>

        <section className="hero-below" aria-label="Install and library stats">
          <div className="hero-below__inner">
            <button
              type="button"
              className={`install ${copied ? 'copied' : ''} ${copyFailed ? 'copy-failed' : ''}`}
              onClick={copyInstall}
            >
              <span>
                <span className="pr" aria-hidden="true">
                  $
                </span>{' '}
                pnpm add @ui-rocket/rocket
              </span>
              <span className="cp" aria-hidden="true">
                <Icon name={copied ? 'check' : copyFailed ? 'close' : 'copy'} />
              </span>
              <span className="sr-only">Copy install command</span>
              <span className="sr-only" aria-live="polite">
                {copied
                  ? 'Install command copied'
                  : copyFailed
                    ? 'Copy failed'
                    : ''}
              </span>
            </button>
            <div className="stats">
              <div>
                <b>{METRICS.componentCount}</b>components
              </div>
              {METRICS.bundleGzipLabel ? (
                <div>
                  <b>{gzipLabel}</b>min + gzip
                </div>
              ) : null}
              <div>
                <b>{METRICS.license}</b>license
              </div>
              <div>
                <b>{METRICS.typedPct}%</b>TypeScript
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                <span>
                  Accessible <i>✦</i>
                </span>
                <span>
                  Typed <i>✦</i>
                </span>
                <span>
                  Tiny <i>✦</i>
                </span>
                <span>
                  Themeable <i>✦</i>
                </span>
                <span>
                  Tested <i>✦</i>
                </span>
              </span>
            ))}
          </div>
        </div>

        <section className="section">
          <div className="sec-head">
            <div className="kick">Why Rocket UI</div>
            <h2>
              Built like flight hardware.
              <br />
              Light enough to launch.
            </h2>
            <p>
              Hand-written primitives with no runtime CSS-in-JS, so they stay
              fast and predictable.
            </p>
          </div>
          <div className="features">
            {FEATURES.map((f) => (
              <div className="feature" key={f.title}>
                <div className="fi">
                  <Icon name={f.icon} className="ico ico-lg" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="sec-head">
            <div className="kick">The launch pad</div>
            <h2>Every part, ready on the pad.</h2>
            <p>
              {METRICS.componentCount} components you can read in one sitting.
              Here are the ones you&apos;ll reach for first.
            </p>
          </div>
          <div className="grid8">
            {TILES.map((tile) => (
              <Link className="tile" key={tile.name} to={tile.path}>
                <div className="tv">
                  {tile.name === 'Button' && (
                    <Button
                      label="Launch"
                      styleBtn="solid"
                      size="small"
                      classes="btn-primary btn-sm"
                    >
                      <Icon name="send" />
                    </Button>
                  )}
                  {tile.name === 'Input' && (
                    <InputField
                      label=""
                      id={`tile-${tile.name}`}
                      placeholder="callsign@nasa.gov"
                      value=""
                      change={() => {}}
                    />
                  )}
                  {tile.name === 'Checkbox' && (
                    <Checkbox id="tile-check" label="Systems nominal" checked />
                  )}
                  {tile.name === 'Radio' && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                      }}
                    >
                      <RadioButton
                        id="r1"
                        name="orbit"
                        label="Low orbit"
                        isSelected
                        val="low"
                      />
                      <RadioButton
                        id="r2"
                        name="orbit"
                        label="Lunar"
                        val="lunar"
                      />
                    </div>
                  )}
                  {tile.name === 'Toggle' && (
                    <ToggleButton id="tile-tog" label="Thrusters" isChecked />
                  )}
                  {tile.name === 'Select' && (
                    <SelectField
                      id="tile-sel"
                      label=""
                      options={['Falcon 9', 'Starship']}
                      selectOption="Falcon 9"
                      change={() => {}}
                    />
                  )}
                  {tile.name === 'Icon' && (
                    <div
                      className="row"
                      style={{ gap: 14, color: 'var(--accent-text)' }}
                    >
                      <Icon name="shield" className="ico ico-lg" />
                      <Icon name="palette" className="ico ico-lg" />
                      <Icon name="code" className="ico ico-lg" />
                      <Icon name="feather" className="ico ico-lg" />
                    </div>
                  )}
                  {tile.name === 'Img' && <div className="img-demo" />}
                </div>
                <div className="tm">
                  <b>{tile.name}</b>
                  <span>Open docs</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="codeband">
            <div>
              <div className="code-head">
                <span className="tab on">LaunchPanel.tsx</span>
                <span className="tab">styles.css</span>
                <span className="sp" />
                <CopyButton
                  text={CODEBAND}
                  className="tool copy-btn codeband-copy"
                />
              </div>
              <pre className="code">{CODEBAND}</pre>
            </div>
            <div className="preview">
              <div className="card" style={{ width: 300 }}>
                <p className="card-kicker">Pre-flight</p>
                <p className="sub">Arm the thrusters to unlock launch.</p>
                <div style={{ margin: '18px 0' }}>
                  <ToggleButton
                    id="arm"
                    label="Arm thrusters"
                    isChecked={armed}
                    change={setArmed}
                  />
                </div>
                <Button
                  label="Launch"
                  styleBtn="solid"
                  classes="btn-primary"
                  disabled={!armed}
                >
                  <Icon name="send" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="cta-band">
            <div>
              <h2>
                Ready for liftoff? Your first screen is five minutes away.
              </h2>
              <p>Install, import the stylesheet, and drop in a Button.</p>
            </div>
            <div className="row">
              <Button
                label="Read the docs"
                styleBtn="solid"
                size="large"
                classes="btn-primary btn-lg"
                click={() => navigate('/docs')}
              >
                <Icon name="arrow" />
              </Button>
              <a
                className="btn btn-secondary btn-lg"
                href="https://github.com/YehudaMenahem/ui-rocket"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="gh" /> Star on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© 2026 Rocket UI · MIT License · Made by Yehuda Menahem</span>
        <nav>
          <Link to="/docs">Docs</Link>
          <a href="https://github.com/YehudaMenahem/ui-rocket">GitHub</a>
          <Link to="/blog">Blog</Link>
          <Link to="/playground">Playground</Link>
        </nav>
      </footer>

      <Toaster
        show={toast}
        type="success"
        position="top-right"
        title="Liftoff!"
        runningText={`${mission} cleared the tower`}
        closeToaster={() => setToast(false)}
      />
    </div>
  );
}
