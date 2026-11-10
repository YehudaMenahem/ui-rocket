import { useState } from 'react';
import { ToggleButton } from '@ui-rocket/rocket';

export function ToggleButtonPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="ui container toggle-button-page">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Toggle Button</h1>
            <p>Toggle buttons switch between two states.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <ToggleButton
              label="Enable feature"
              isChecked={checked}
              change={setChecked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
