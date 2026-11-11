import { RadioButton } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'radio')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function RadioPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="RadioButton"
      showPlayground={true}
      preview={() => (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <RadioButton id="d1" name="demo" label="Low orbit" isSelected val="low" />
          <RadioButton id="d2" name="demo" label="Lunar" val="lunar" />
        </div>
      )}
      examples={<>
          <h3>Group</h3>
          <div className="ex"><div className="canvas" style={{flexDirection:'column',alignItems:'flex-start'}}>
            <RadioButton id="g1" name="g" label="Pad 39A" isSelected val="a" />
            <RadioButton id="g2" name="g" label="Pad 39B" val="b" />
          </div><div className="exbar"><span>group.tsx</span></div></div>
        </>}
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Option label.' },
        { name: 'name', type: ['string'], defaultValue: '—', description: 'Radio group name.' },
        { name: 'isSelected', type: ['boolean'], defaultValue: 'false', description: 'Selected state.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the option.' },
      ]}
    />
  );
}
