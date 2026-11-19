import { useState } from 'react';
import { InputField } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'input')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

function InputPreview({
  disabled,
  required,
  showError,
  placeholder,
  colorHex,
}: {
  disabled: boolean;
  required: boolean;
  showError: boolean;
  placeholder: string;
  colorHex: string;
}) {
  const [value, setValue] = useState('Artemis IV');
  return (
    <div style={{ width: '100%', maxWidth: 320, ['--accent' as string]: colorHex }}>
      <InputField
        label="Mission name"
        id="demo-input"
        value={value}
        change={setValue}
        maxlength={40}
        disabled={disabled}
        required={required}
        showError={showError}
        error="Mission name is required"
        placeholder={placeholder}
        note="Displayed on the pad board"
      />
    </div>
  );
}

export function InputFieldPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="InputField"
      controls={['color', 'disabled', 'required', 'showError', 'placeholder']}
      preview={(s) => (
        <InputPreview
          disabled={s.disabled}
          required={s.required}
          showError={s.showError}
          placeholder={s.placeholder}
          colorHex={s.colorHex}
        />
      )}
      generateCode={(s) =>
        `import { InputField } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <InputField
      label="Mission name"
      value="Artemis IV"
      placeholder="${s.placeholder}"
      disabled={${s.disabled}}
      required={${s.required}}
      showError={${s.showError}}
    />
  )
}`
      }
      examples={
        <>
          <h3>Basic</h3>
          <div className="ex">
            <div className="canvas">
              <InputField
                label="Callsign"
                id="ex1"
                placeholder="callsign@nasa.gov"
                value=""
                change={() => {}}
              />
            </div>
            <div className="exbar">
              <span>basic.tsx</span>
            </div>
          </div>
          <h3>Required</h3>
          <div className="ex">
            <div className="canvas">
              <InputField
                label="Pad"
                id="ex2"
                required
                showError
                error="Required"
                value=""
                change={() => {}}
              />
            </div>
            <div className="exbar">
              <span>required.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'label', type: ['string'], defaultValue: '""', description: 'Visible label above the field.' },
        { name: 'value', type: ['string'], defaultValue: '—', description: 'Controlled value.' },
        { name: 'maxlength', type: ['number'], defaultValue: '30', description: 'Character limit.' },
        { name: 'required', type: ['boolean'], defaultValue: 'false', description: 'Marks the field required.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the input.' },
        { name: 'placeholder', type: ['string'], defaultValue: '—', description: 'Placeholder text.' },
        { name: 'showError', type: ['boolean'], defaultValue: 'false', description: 'Shows the error message.' },
        { name: 'error', type: ['string'], defaultValue: '"This field is required"', description: 'Error copy.' },
        { name: 'note', type: ['string'], defaultValue: '—', description: 'Helper text when not in error.' },
        { name: 'change', type: ['(value: string) => void'], defaultValue: '—', description: 'Change handler.' },
      ]}
    />
  );
}
