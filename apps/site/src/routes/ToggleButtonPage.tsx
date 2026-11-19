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
      controls={['color', 'checked', 'disabled', 'required', 'labelPosition']}
      initialState={{ checked: true, labelPosition: 'label-from-left' }}
      preview={(s, setState) => (
        <ToggleButton
          id="demo-tog"
          label="Thrusters"
          isChecked={s.checked}
          disabled={s.disabled}
          required={s.required}
          labelPosition={s.labelPosition}
          change={(checked) => setState((prev) => ({ ...prev, checked }))}
        />
      )}
      generateCode={(s) =>
        `import { ToggleButton } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <ToggleButton
      label="Thrusters"
      isChecked={${s.checked}}
      labelPosition="${s.labelPosition}"
      disabled={${s.disabled}}
    />
  )
}`
      }
      examples={
        <>
          <h3>States</h3>
          <div className="ex">
            <div className="canvas" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
              <ToggleButton id="t1" label="Armed" isChecked />
              <ToggleButton id="t2" label="Standby" />
              <ToggleButton
                id="t3"
                label="Label on right"
                isChecked
                labelPosition="label-from-right"
              />
            </div>
            <div className="exbar">
              <span>states.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Adjacent label.' },
        { name: 'isChecked', type: ['boolean'], defaultValue: 'false', description: 'On/off state.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the switch.' },
        { name: 'required', type: ['boolean'], defaultValue: 'false', description: 'Required in forms.' },
        {
          name: 'labelPosition',
          type: ['"label-from-left"', '"label-from-right"'],
          defaultValue: '"label-from-left"',
          description: 'Places the label before or after the switch.',
        },
        { name: 'change', type: ['(checked: boolean) => void'], defaultValue: '—', description: 'Change handler.' },
      ]}
    />
  );
}
