import { useState } from 'react';
import { RadioButton } from '@ui-rocket/rocket';

export function RadioPage() {
  const [selected, setSelected] = useState('option1');

  return (
    <div className="ui container radio-page">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Radio Button</h1>
            <p>Radio buttons allow selection of a single option from a set.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <RadioButton
              name="demo"
              val="option1"
              id="option1"
              label="Option 1"
              isSelected={selected === 'option1'}
              change={() => setSelected('option1')}
            />
            <RadioButton
              name="demo"
              val="option2"
              id="option2"
              label="Option 2"
              isSelected={selected === 'option2'}
              change={() => setSelected('option2')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
