import { useState } from 'react';
import { Button, Toaster } from '@ui-rocket/rocket';
import { ShowcaseCard } from '../components/ShowcaseCard';

export function ToasterPage() {
  const [showToaster, setShowToaster] = useState(false);

  return (
    <div className="ui container toaster-page">
      <ShowcaseCard title="Toasters">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Toaster</h1>
            <p>Toasters display temporary notifications.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <Button
              label="Show Toaster"
              click={() => setShowToaster(true)}
              styleBtn="solid"
            />
          </div>
        </div>
      </div>

      <Toaster
        show={showToaster}
        closeToaster={() => setShowToaster(false)}
        type="success"
        title="Success!"
        runningText="This is a toaster notification."
      />
    
      </ShowcaseCard>
    </div>
  );
}
