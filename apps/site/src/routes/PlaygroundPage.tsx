import { useState } from 'react';
import {
  Button,
  Checkbox,
  InputField,
  SelectField,
  ToggleButton,
  Toaster,
} from '@ui-rocket/rocket';

export function PlaygroundPage() {
  const [name, setName] = useState('Artemis IV');
  const [vehicle, setVehicle] = useState('Falcon 9');
  const [armed, setArmed] = useState(false);
  const [go, setGo] = useState(false);
  const [toast, setToast] = useState(false);

  return (
    <div className="landing simple-page">
      <section className="section">
        <div className="sec-head">
          <div className="kick">Playground</div>
          <h2>Compose a launch panel.</h2>
          <p>Every control here is a real Rocket UI component wired to state.</p>
        </div>

        <div className="card" style={{ maxWidth: 420 }}>
          <h4>Mission builder</h4>
          <InputField label="Mission name" id="pg-name" value={name} change={setName} maxlength={40} />
          <SelectField
            id="pg-vehicle"
            label="Vehicle"
            options={['Falcon 9', 'Starship', 'SLS']}
            selectOption={vehicle}
            change={setVehicle}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '12px 0' }}>
            <Checkbox
              id="pg-go"
              label="Range safety go"
              checked={go}
              change={(t) => setGo(t.checked)}
            />
          </div>
          <div className="between" style={{ marginBottom: 16 }}>
            <span>Arm thrusters</span>
            <ToggleButton id="pg-arm" label="" isChecked={armed} change={setArmed} />
          </div>
          <Button
            label="Fire demo toast"
            styleBtn="solid"
            classes="btn-primary"
            disabled={!armed || !go}
            click={() => setToast(true)}
          />
        </div>
      </section>

      <Toaster
        show={toast}
        type="success"
        title="Playground ready"
        runningText={`${name} · ${vehicle} is armed.`}
        closeToaster={() => setToast(false)}
      />
    </div>
  );
}
