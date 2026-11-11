import { Checkbox } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'checkbox')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function CheckboxPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Checkbox"
      showPlayground={true}
      preview={() => (
        <Checkbox id="demo-check" label="Systems nominal" checked />
      )}
      examples={<>
          <h3>States</h3>
          <div className="ex"><div className="canvas" style={{flexDirection:'column',alignItems:'flex-start'}}>
            <Checkbox id="c1" label="Propellant loaded" checked />
            <Checkbox id="c2" label="Crew boarded" />
            <Checkbox id="c3" label="Disabled" disabled />
          </div><div className="exbar"><span>states.tsx</span></div></div>
        </>}
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Label text.' },
        { name: 'checked', type: ['boolean'], defaultValue: 'false', description: 'Initial checked state.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the checkbox.' },
        { name: 'required', type: ['boolean'], defaultValue: 'false', description: 'Required in forms.' },
      ]}
    />
  );
}
