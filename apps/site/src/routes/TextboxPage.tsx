import { Textbox } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'textbox')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function TextboxPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Textbox"
      showPlayground={true}
      preview={() => (
        <Textbox id="demo-tb" label="Mission log" value="T-00:42:10 — systems nominal" change={() => {}} />
      )}
      examples={<>
          <h3>Basic</h3>
          <div className="ex"><div className="canvas"><Textbox id="tb1" label="Notes" placeholder="Write a note…" value="" change={() => {}} /></div><div className="exbar"><span>basic.tsx</span></div></div>
        </>}
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Field label.' },
        { name: 'value', type: ['string'], defaultValue: '—', description: 'Controlled value.' },
        { name: 'rows', type: ['number'], defaultValue: '1', description: 'Visible rows.' },
        { name: 'maxlength', type: ['number'], defaultValue: '135', description: 'Character limit.' },
      ]}
    />
  );
}
