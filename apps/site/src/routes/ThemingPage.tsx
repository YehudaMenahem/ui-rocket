import { Button, ToggleButton } from '@ui-rocket/rocket';
import { useState } from 'react';

const TOKENS = [
  { name: '--cream', value: '#F9E5CE', note: 'Page background' },
  { name: '--navy', value: '#1E2A47', note: 'Ink / outlines' },
  { name: '--rust', value: '#C4471D', note: 'Primary accent' },
  { name: '--olive', value: '#4A5A23', note: 'Secondary accent' },
  { name: '--mustard', value: '#E7A33B', note: 'Highlight' },
  { name: '--powder', value: '#9FC2E8', note: 'Cool accent' },
];

export function ThemingPage() {
  const [sampleOn, setSampleOn] = useState(true);

  return (
    <div className="landing simple-page">
      <section className="section">
        <div className="sec-head">
          <div className="kick">Theming</div>
          <h2>One token sheet. Light and dark.</h2>
          <p>
            Set CSS variables on <code>:root</code> / <code>[data-theme=&quot;dark&quot;]</code>.
            Components read those vars — no CSS-in-JS runtime.
          </p>
        </div>

        <div className="token-grid">
          {TOKENS.map((t) => (
            <div className="token-card" key={t.name}>
              <span className="swatch" style={{ background: t.value }} />
              <div>
                <b>{t.name}</b>
                <code>{t.value}</code>
                <p>{t.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ maxWidth: 360, marginTop: 32 }}>
          <h4>Live sample</h4>
          <p className="sub">Toggle and button inherit theme tokens.</p>
          <div className="between" style={{ margin: '16px 0' }}>
            <span>Accented controls</span>
            <ToggleButton id="theme-sample" label="" isChecked={sampleOn} change={setSampleOn} />
          </div>
          <Button label="Primary action" styleBtn="solid" classes="btn-primary" disabled={!sampleOn} />
        </div>
      </section>
    </div>
  );
}
