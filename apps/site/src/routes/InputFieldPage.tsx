import { useState } from 'react';
import { InputField } from '@ui-rocket/rocket';
import { ShowcaseCard } from '../components/ShowcaseCard';

export function InputFieldPage() {
  const [value, setValue] = useState('');

  return (
    <div className="ui container input-field-page">
      <ShowcaseCard title="Input Fields">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Input Field</h1>
            <p>Input fields allow users to enter text data.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <InputField
              label="Name"
              type="text"
              value={value}
              change={setValue}
              required
            />
          </div>
        </div>
      </div>
    
      </ShowcaseCard>
    </div>
  );
}
