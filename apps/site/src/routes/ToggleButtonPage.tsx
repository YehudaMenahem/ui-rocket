import { ToggleButton } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'toggle')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function ToggleButtonPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="ToggleButton"
      showPlayground={true}
      preview={() => (
        <ToggleButton id="demo-tog" label="Thrusters" isChecked />
      )}
      examples={<>
          <h3>States</h3>
          <div className="ex"><div className="canvas">
            <ToggleButton id="t1" label="Armed" isChecked />
            <ToggleButton id="t2" label="Standby" />
          </div><div className="exbar"><span>states.tsx</span></div></div>
        </>}
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Adjacent label.' },
        { name: 'isChecked', type: ['boolean'], defaultValue: 'false', description: 'Initial on state.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the switch.' },
      ]}
    />
  );
}
