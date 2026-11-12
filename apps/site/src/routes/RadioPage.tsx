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
      controls={['color', 'disabled']}
      initialState={{ checked: true }}
      preview={(s, setState) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <RadioButton
            id="d1"
            name="demo-orbit"
            label="Low orbit"
            val="low"
            isSelected={s.checked}
            disabled={s.disabled}
            change={() => setState((prev) => ({ ...prev, checked: true }))}
          />
          <RadioButton
            id="d2"
            name="demo-orbit"
            label="Lunar"
            val="lunar"
            isSelected={!s.checked}
            disabled={s.disabled}
            change={() => setState((prev) => ({ ...prev, checked: false }))}
          />
        </div>
      )}
      generateCode={() =>
        `import { RadioButton } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <>
      <RadioButton name="orbit" label="Low orbit" val="low" isSelected />
      <RadioButton name="orbit" label="Lunar" val="lunar" />
    </>
  )
}`
      }
      examples={
        <>
          <h3>Group</h3>
          <div className="ex">
            <div className="canvas" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <RadioButton id="g1" name="g" label="Pad 39A" isSelected val="a" change={() => {}} />
              <RadioButton id="g2" name="g" label="Pad 39B" val="b" change={() => {}} />
            </div>
            <div className="exbar">
              <span>group.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Option label.' },
        { name: 'name', type: ['string'], defaultValue: '—', description: 'Radio group name.' },
        { name: 'val', type: ['string'], defaultValue: '—', description: 'Option value.' },
        { name: 'isSelected', type: ['boolean'], defaultValue: 'false', description: 'Selected state.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the option.' },
        {
          name: 'change',
          type: ['(event: ChangeEvent) => void'],
          defaultValue: '—',
          description: 'Change handler.',
        },
      ]}
    />
  );
}
