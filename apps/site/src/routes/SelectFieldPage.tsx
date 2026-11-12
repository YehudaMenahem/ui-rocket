import { SelectField } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'select')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

const OPTIONS = ['Falcon 9', 'Starship', 'SLS'];

export function SelectFieldPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="SelectField"
      controls={['color', 'disabled', 'required']}
      preview={(s) => (
        <div style={{ width: '100%', maxWidth: 280 }}>
          <SelectField
            id="demo-sel"
            label="Vehicle"
            options={OPTIONS}
            selectOption="Falcon 9"
            disabled={s.disabled}
            required={s.required}
          />
        </div>
      )}
      generateCode={(s) =>
        `import { SelectField } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <SelectField
      label="Vehicle"
      options={['Falcon 9', 'Starship', 'SLS']}
      selectOption="Falcon 9"
      disabled={${s.disabled}}
      required={${s.required}}
    />
  )
}`
      }
      examples={
        <>
          <h3>Basic</h3>
          <div className="ex">
            <div className="canvas">
              <SelectField id="s1" label="Launch window" options={['Dawn', 'Noon', 'Dusk']} />
            </div>
            <div className="exbar">
              <span>basic.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Field label.' },
        { name: 'options', type: ['string[]'], defaultValue: '—', description: 'Selectable options.' },
        { name: 'selectOption', type: ['string'], defaultValue: '—', description: 'Selected value.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the select.' },
        { name: 'required', type: ['boolean'], defaultValue: 'false', description: 'Required in forms.' },
        { name: 'multiple', type: ['boolean'], defaultValue: 'false', description: 'Native multiple select (progressive enhancement).' },
        { name: 'isOpen', type: ['boolean'], defaultValue: 'false', description: 'Initial open state.' },
        { name: 'change', type: ['(value: string) => void'], defaultValue: '—', description: 'Selection handler.' },
      ]}
    />
  );
}
