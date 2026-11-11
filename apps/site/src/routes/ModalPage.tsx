import { useState } from 'react';
import { Button, Modal } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'modal')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button label="Open modal" styleBtn="solid" click={() => setOpen(true)} />
      <Modal show={open} closeModal={() => setOpen(false)} modalTitle="Hold launch?">
        <p>Confirm abort sequence.</p>
      </Modal>
    </>
  );
}

export function ModalPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Modal"
      showPlayground={true}
      preview={() => <ModalDemo />}
      examples={<>
          <h3>Dialog</h3>
          <div className="ex"><div className="canvas"><ModalDemo /></div><div className="exbar"><span>dialog.tsx</span></div></div>
        </>}
      props={[
        { name: 'show', type: ['boolean'], defaultValue: 'false', description: 'Controls visibility.' },
        { name: 'closeModal', type: ['() => void'], defaultValue: '—', description: 'Close handler.' },
        { name: 'modalTitle', type: ['string'], defaultValue: '—', description: 'Header title.' },
      ]}
    />
  );
}
