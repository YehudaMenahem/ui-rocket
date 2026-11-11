import { InputField } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'input')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function InputFieldPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="InputField"
      showPlayground={true}
      preview={() => (
        <InputField label="Mission name" id="demo-input" value="Artemis IV" change={() => {}} maxlength={40} />
      )}
      examples={<>
          <h3>Basic</h3>
          <div className="ex"><div className="canvas"><InputField label="Callsign" id="ex1" placeholder="callsign@nasa.gov" value="" change={() => {}} /></div><div className="exbar"><span>basic.tsx</span></div></div>
          <h3>Required</h3>
          <div className="ex"><div className="canvas"><InputField label="Pad" id="ex2" required showError error="Required" value="" change={() => {}} /></div><div className="exbar"><span>required.tsx</span></div></div>
        </>}
      props={[
        { name: 'label', type: ['string'], defaultValue: '""', description: 'Visible label above the field.' },
        { name: 'value', type: ['string'], defaultValue: '—', description: 'Controlled value.' },
        { name: 'maxlength', type: ['number'], defaultValue: '30', description: 'Character limit.' },
        { name: 'required', type: ['boolean'], defaultValue: 'false', description: 'Marks the field required.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the input.' },
      ]}
    />
  );
}
