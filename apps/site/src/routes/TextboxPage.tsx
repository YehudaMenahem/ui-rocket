import { useState } from 'react';
import { Textbox } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'textbox')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

function TextboxPreview(props: {
  disabled: boolean;
  required: boolean;
  showError: boolean;
  placeholder: string;
  rows: number;
}) {
  const [value, setValue] = useState('T-00:42:10 — systems nominal');
  return (
    <div style={{ width: '100%', maxWidth: 360 }}>
      <Textbox
        id="demo-tb"
        label="Mission log"
        value={value}
        change={setValue}
        disabled={props.disabled}
        required={props.required}
        showError={props.showError}
        error="Log entry required"
        placeholder={props.placeholder}
        rows={props.rows}
        note="Keep it under the character limit"
        maxlength={135}
      />
    </div>
  );
}

export function TextboxPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Textbox"
      controls={['color', 'disabled', 'required', 'showError', 'placeholder', 'rows']}
      initialState={{ rows: 3, placeholder: 'Write a note…' }}
      preview={(s) => (
        <TextboxPreview
          disabled={s.disabled}
          required={s.required}
          showError={s.showError}
          placeholder={s.placeholder}
          rows={s.rows}
        />
      )}
      generateCode={(s) =>
        `import { Textbox } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Textbox
      label="Mission log"
      rows={${s.rows}}
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
              <Textbox
                id="tb1"
                label="Notes"
                placeholder="Write a note…"
                value=""
                change={() => {}}
                rows={3}
              />
            </div>
            <div className="exbar">
              <span>basic.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'label', type: ['string'], defaultValue: '—', description: 'Field label.' },
        { name: 'value', type: ['string'], defaultValue: '—', description: 'Controlled value.' },
        { name: 'rows', type: ['number'], defaultValue: '1', description: 'Visible rows.' },
        { name: 'cols', type: ['string'], defaultValue: '"100%"', description: 'Width style for the textarea.' },
        { name: 'maxlength', type: ['number'], defaultValue: '135', description: 'Character limit.' },
        { name: 'placeholder', type: ['string'], defaultValue: '—', description: 'Placeholder text.' },
        { name: 'required', type: ['boolean'], defaultValue: 'false', description: 'Required field.' },
        { name: 'disabled', type: ['boolean'], defaultValue: 'false', description: 'Disables the field.' },
        { name: 'showError', type: ['boolean'], defaultValue: 'false', description: 'Shows error text.' },
        { name: 'error', type: ['string'], defaultValue: '"This is a required field"', description: 'Error copy.' },
        { name: 'note', type: ['string'], defaultValue: '—', description: 'Helper text when not in error.' },
        { name: 'change', type: ['(value: string) => void'], defaultValue: '—', description: 'Change handler.' },
      ]}
    />
  );
}
