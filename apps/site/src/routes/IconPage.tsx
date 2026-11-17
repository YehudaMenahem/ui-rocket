import { Icon as RocketIcon } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'icon')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

const Glyph = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
    <path d={d} />
  </svg>
);

const GLYPHS = [
  { name: 'send', d: 'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z' },
  { name: 'shield', d: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z' },
  { name: 'code', d: 'm8 6-6 6 6 6M16 6l6 6-6 6' },
];

export function IconPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Icon"
      showPlayground
      controls={['color']}
      generateCode={(s) => `import { Icon } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <div style={{ color: '${s.colorHex}', display: 'flex', gap: 16 }}>
      <Icon label="Send">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </Icon>
    </div>
  )
}`}
      preview={(s) => (
        <div className="row" style={{ gap: 16, color: s.colorHex }}>
          {GLYPHS.map((g) => (
            <RocketIcon key={g.name} label={g.name} classes="ico ico-lg">
              <Glyph d={g.d} />
            </RocketIcon>
          ))}
        </div>
      )}
      examples={
        <>
          <h3>Set</h3>
          <div className="ex">
            <div className="canvas" style={{ gap: 18, color: 'var(--accent-text)' }}>
              {GLYPHS.map((g) => (
                <RocketIcon key={g.name} label={g.name} classes="ico ico-lg">
                  <Glyph d={g.d} />
                </RocketIcon>
              ))}
            </div>
            <div className="exbar">
              <span>set.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'children', type: ['ReactNode'], defaultValue: '—', description: 'SVG glyph or icon markup.' },
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Accessible name; omit for decorative icons.' },
        { name: 'iconClass', type: ['string'], defaultValue: '""', description: 'Legacy class on the inner <i> when no children.' },
        { name: 'classes', type: ['string'], defaultValue: '""', description: 'Wrapper class name.' },
        { name: 'click', type: ['() => void'], defaultValue: '—', description: 'Optional click handler.' },
      ]}
    />
  );
}
