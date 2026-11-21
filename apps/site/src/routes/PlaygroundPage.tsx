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
      <main className="section">
        <div className="sec-head">
          <div className="kick">Playground</div>
          <h1>Compose a launch panel.</h1>
          <p>
            Every control here is a real Rocket UI component wired to state.
          </p>
        </div>

        <div className="card" style={{ maxWidth: 420 }}>
          <h2 className="card-kicker">Mission builder</h2>
          <InputField
            label="Mission name"
            id="pg-name"
            value={name}
            change={setName}
            maxlength={40}
          />
          <SelectField
            id="pg-vehicle"
            label="Vehicle"
            options={['Falcon 9', 'Starship', 'SLS']}
            selectOption={vehicle}
            change={setVehicle}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              margin: '12px 0',
            }}
          >
            <Checkbox
              id="pg-go"
              label="Range safety go"
              checked={go}
              change={(t) => setGo(t.checked)}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <ToggleButton
              id="pg-arm"
              label="Arm thrusters"
              isChecked={armed}
              change={setArmed}
            />
          </div>
          <Button
            label="Fire demo toast"
            styleBtn="solid"
            classes="btn-primary"
            disabled={!armed || !go}
            click={() => setToast(true)}
          />
        </div>
      </main>

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
