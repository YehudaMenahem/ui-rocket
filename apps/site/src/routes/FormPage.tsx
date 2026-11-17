import { useState } from 'react';
import { InputField, Button, Checkbox, Form, Toaster } from '@ui-rocket/rocket';
import { ComponentDoc, PlaygroundState } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'form')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

function FormPreview({ disabled, idPrefix = 'f' }: { disabled: boolean; idPrefix?: string }) {
  const [callsign, setCallsign] = useState('');
  const [ready, setReady] = useState(false);
  const [showError, setShowError] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <div style={{ width: '100%', maxWidth: 320 }}>
      <Form
        title="Pad clearance"
        classes="form"
        submit={() => {
          if (!callsign.trim() || !ready) {
            setShowError(true);
            return;
          }
          setShowError(false);
          setToast(true);
        }}
      >
        <InputField
          label="Callsign"
          id={`${idPrefix}-callsign`}
          name="callsign"
          value={callsign}
          change={setCallsign}
          required
          showError={showError && !callsign.trim()}
          error="Callsign is required"
          disabled={disabled}
        />
        <Checkbox
          id={`${idPrefix}-go`}
          name="ready"
          label="Ready"
          checked={ready}
          change={(t) => setReady(t.checked)}
          disabled={disabled}
        />
        <Button label="Submit" styleBtn="solid" disabled={disabled} />
      </Form>
      <Toaster
        show={toast}
        type="success"
        position="top-right"
        title="Checklist submitted"
        runningText={`${callsign || 'Crew'} is cleared for launch.`}
        closeToaster={() => setToast(false)}
      />
    </div>
  );
}

export function FormPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Form"
      showPlayground
      controls={['color', 'disabled']}
      generateCode={(s: PlaygroundState) => `import { Form, InputField, Checkbox, Button } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Form title="Pad clearance" submit={(data) => console.log(data)}>
      <InputField label="Callsign" name="callsign" required disabled={${s.disabled}} />
      <Checkbox id="ready" name="ready" label="Ready" />
      <Button label="Submit" styleBtn="solid" disabled={${s.disabled}} />
    </Form>
  )
}`}
      preview={(s) => <FormPreview disabled={s.disabled} idPrefix="pg" />}
      examples={
        <>
          <h3>Checklist</h3>
          <div className="ex">
            <div className="canvas">
              <FormPreview disabled={false} idPrefix="ex" />
            </div>
            <div className="exbar">
              <span>form.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'title', type: ['string'], defaultValue: '""', description: 'Form heading.' },
        { name: 'submit', type: ['(data) => void'], defaultValue: '—', description: 'Called with field values when valid.' },
        { name: 'children', type: ['ReactNode'], defaultValue: '—', description: 'Form fields and actions.' },
        { name: 'novalidate', type: ['boolean'], defaultValue: 'false', description: 'Skip HTML5 validation attributes.' },
      ]}
    />
  );
}
