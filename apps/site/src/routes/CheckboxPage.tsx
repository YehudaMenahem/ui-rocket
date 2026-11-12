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
      controls={['color', 'checked', 'disabled', 'required', 'iconType']}
      initialState={{ checked: true }}
      preview={(s, setState) => (
        <Checkbox
          id="demo-check"
          label="Systems nominal"
          checked={s.checked}
          disabled={s.disabled}
          required={s.required}
          iconType={s.iconType}
          change={(t) => setState((prev) => ({ ...prev, checked: t.checked }))}
        />
      )}
      generateCode={(s) =>
        `import { Checkbox } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Checkbox
      label="Systems nominal"
      checked={${s.checked}}
      disabled={${s.disabled}}
      required={${s.required}}
      iconType="${s.iconType}"
    />
  )
}`
      }
      examples={
        <>
          <h3>States</h3>
          <div className="ex">
            <div className="canvas" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Checkbox id="c1" label="Propellant loaded" checked change={() => {}} />
              <Checkbox id="c2" label="Crew boarded" checked={false} change={() => {}} />
              <Checkbox id="c3" label="Disabled" disabled checked={false} change={() => {}} />
              <Checkbox id="c4" label="Favorite" iconType="heart" checked change={() => {}} />
              <Checkbox id="c5" label="Starred" iconType="star" checked change={() => {}} />
            </div>
            <div className="exbar">
              <span>states.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Label text.' },
        { name: 'checked', type: ['boolean'], defaultValue: 'false', description: 'Checked state.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the checkbox.' },
        { name: 'required', type: ['boolean'], defaultValue: 'false', description: 'Required in forms.' },
        {
          name: 'iconType',
          type: ['"default"', '"heart"', '"star"'],
          defaultValue: '"default"',
          description: 'Glyph shown when checked.',
        },
        {
          name: 'change',
          type: ['(target: HTMLInputElement) => void'],
          defaultValue: '—',
          description: 'Change handler.',
        },
      ]}
    />
  );
}
