import { useState } from 'react';
import { Button, Modal } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'modal')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

function ModalDemo({ heroImage = false }: { heroImage?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        label={heroImage ? 'Open hero modal' : 'Open modal'}
        styleBtn="solid"
        click={() => setOpen(true)}
      />
      <Modal
        show={open}
        closeModal={() => setOpen(false)}
        modalTitle="Hold launch?"
        heroImage={heroImage}
      >
        <p>
          Confirm abort sequence. Backdrop click, Escape, and the footer Close button all dismiss
          this dialog.
        </p>
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
      controls={['color', 'heroImage']}
      preview={(s) => <ModalDemo heroImage={s.heroImage} key={String(s.heroImage)} />}
      generateCode={(s) =>
        `import { Modal, Button } from '@ui-rocket/rocket'

export default function Demo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button label="Open" click={() => setOpen(true)} />
      <Modal
        show={open}
        closeModal={() => setOpen(false)}
        modalTitle="Hold launch?"
        heroImage={${s.heroImage}}
      >
        <p>Confirm abort sequence.</p>
      </Modal>
    </>
  )
}`
      }
      examples={
        <>
          <h3>Dialog</h3>
          <div className="ex">
            <div className="canvas">
              <ModalDemo />
            </div>
            <div className="exbar">
              <span>dialog.tsx</span>
            </div>
          </div>
          <h3>Hero image</h3>
          <div className="ex">
            <div className="canvas">
              <ModalDemo heroImage />
            </div>
            <div className="exbar">
              <span>hero.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'show', type: ['boolean'], defaultValue: 'false', description: 'Controls visibility.' },
        { name: 'closeModal', type: ['() => void'], defaultValue: '—', description: 'Close handler.' },
        { name: 'modalTitle', type: ['string'], defaultValue: '—', description: 'Header title.' },
        {
          name: 'heroImage',
          type: ['boolean'],
          defaultValue: 'false',
          description: 'Shows the illustrated hero header instead of a text title.',
        },
        { name: 'classes', type: ['string'], defaultValue: '""', description: 'Extra class names.' },
        { name: 'children', type: ['ReactNode'], defaultValue: '—', description: 'Dialog body content.' },
      ]}
    />
  );
}
