import { useState } from 'react';
import { Button, Toaster } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'toaster')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

function ToasterDemo() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button label="Show toast" styleBtn="solid" click={() => setShow(true)} />
      <Toaster show={show} closeToaster={() => setShow(false)} type="success" title="Systems go" runningText="Range is clear." />
    </>
  );
}

export function ToasterPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Toaster"
      showPlayground={true}
      controls={['color']}
      preview={() => <ToasterDemo />}
      examples={<>
          <h3>Positions</h3>
          <div className="ex"><div className="canvas"><ToasterDemo /></div><div className="exbar"><span>toast.tsx</span></div></div>
        </>}
      props={[
        { name: 'show', type: ['boolean'], defaultValue: 'false', description: 'Visibility.' },
        { name: 'type', type: ['"info"', '"success"', '"error"', '"warning"'], defaultValue: '"info"', description: 'Tone.' },
        { name: 'title', type: ['string'], defaultValue: '—', description: 'Toast title.' },
      ]}
    />
  );
}
