import { useState } from 'react';
import { Textbox } from '@ui-rocket/rocket';
import { ShowcaseCard } from '../components/ShowcaseCard';

export function TextboxPage() {
  const [value, setValue] = useState('');

  return (
    <div className="ui container textbox-page">
      <ShowcaseCard title="Textboxes">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Textbox</h1>
            <p>Textbox for multi-line text input.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <Textbox
              label="Comments"
              rows={5}
              value={value}
              change={setValue}
            />
          </div>
        </div>
      </div>
    
      </ShowcaseCard>
    </div>
  );
}
