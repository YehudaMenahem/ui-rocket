import { SelectField } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'select')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function SelectFieldPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="SelectField"
      showPlayground={true}
      preview={() => (
        <SelectField id="demo-sel" label="Vehicle" options={['Falcon 9','Starship','SLS']} selectOption="Falcon 9" />
      )}
      examples={<>
          <h3>Basic</h3>
          <div className="ex"><div className="canvas"><SelectField id="s1" label="Launch window" options={['Dawn','Noon','Dusk']} /></div><div className="exbar"><span>basic.tsx</span></div></div>
        </>}
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Field label.' },
        { name: 'options', type: ['string[]'], defaultValue: '—', description: 'Selectable options.' },
        { name: 'selectOption', type: ['string'], defaultValue: '—', description: 'Selected value.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the select.' },
      ]}
    />
  );
}
