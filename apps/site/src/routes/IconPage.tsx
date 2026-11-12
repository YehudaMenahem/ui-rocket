import { ComponentDoc } from '../components/ComponentDoc';
import { Icon } from '../components/Icons';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'icon')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function IconPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Icon"
      showPlayground={true}
      controls={['color']}
      preview={() => (
        <div className="row" style={{ gap: 16, color: 'var(--accent-text)' }}>
          <Icon name="send" className="ico ico-lg" />
          <Icon name="shield" className="ico ico-lg" />
          <Icon name="code" className="ico ico-lg" />
        </div>
      )}
      examples={<>
          <h3>Set</h3>
          <div className="ex"><div className="canvas" style={{gap:18,color:'var(--accent-text)'}}>
            {['send','shield','palette','feather','code','pkg'].map((n) => <Icon key={n} name={n} className="ico ico-lg" />)}
          </div><div className="exbar"><span>set.tsx</span></div></div>
        </>}
      props={[
        { name: 'name', type: ['string'], defaultValue: '—', description: 'Icon glyph name.' },
        { name: 'className', type: ['string'], defaultValue: '"ico"', description: 'CSS class.' },
      ]}
    />
  );
}
