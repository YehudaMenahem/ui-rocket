import { useState } from 'react';
import { Button, InputField, Modal } from '@ui-rocket/rocket';
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
        description="Confirm abort sequence. Escape, a backdrop click, the × button and the footer Close button all dismiss this dialog."
        heroImage={heroImage}
      >
        <p>Focus returns to the button that opened it.</p>
      </Modal>
    </>
  );
}

function ModalFormDemo() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  return (
    <>
      <Button
        label="Open form modal"
        styleBtn="outline"
        click={() => setOpen(true)}
      />
      <Modal
        show={open}
        closeModal={() => setOpen(false)}
        modalTitle="Abort reason"
        description="Focus starts in the field below instead of the close button."
        initialFocus="#abort-reason"
        closeOnBackdropClick={false}
      >
        <InputField
          id="abort-reason"
          label="Reason"
          value={reason}
          change={setReason}
        />
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
      preview={(s) => (
        <ModalDemo heroImage={s.heroImage} key={String(s.heroImage)} />
      )}
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
        description="Confirm abort sequence."
        heroImage={${s.heroImage}}
      >
        <p>Focus returns to the button that opened it.</p>
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
          <h3>Initial focus</h3>
          <div className="ex">
            <div className="canvas">
              <ModalFormDemo />
            </div>
            <div className="exbar">
              <span>initial-focus.tsx</span>
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
      a11y={[
        {
          key: 'Tab',
          title: 'Focus stays inside',
          body: 'Opened with the native showModal(), so Tab and Shift+Tab cycle within the dialog and the page behind is inert.',
        },
        {
          key: 'Esc',
          title: 'Closes the dialog',
          body: 'Escape calls closeModal, and focus returns to the control that opened it.',
        },
        {
          key: 'Focus',
          title: 'Predictable initial focus',
          body: 'Focus moves into the dialog on open: initialFocus, then [autofocus], then the first focusable element.',
        },
        {
          key: 'aria',
          title: 'Named and described',
          body: 'The title labels the dialog (aria-labelledby) and description is linked with aria-describedby.',
        },
      ]}
      props={[
        {
          name: 'show',
          type: ['boolean'],
          defaultValue: 'false',
          description: 'Controls visibility.',
        },
        {
          name: 'closeModal',
          type: ['(event?: MouseEvent) => void'],
          defaultValue: '—',
          description:
            'Called on Escape, backdrop click and the close buttons. Set show to false in response.',
        },
        {
          name: 'onOpenChange',
          type: ['(open: boolean) => void'],
          defaultValue: '—',
          description:
            'Optional companion to closeModal; called with false whenever a close is requested.',
        },
        {
          name: 'modalTitle',
          type: ['string'],
          defaultValue: '—',
          description:
            'Header title and accessible name. With heroImage it stays screen-reader only.',
        },
        {
          name: 'description',
          type: ['ReactNode'],
          defaultValue: '—',
          description:
            'Supporting text above the children, linked with aria-describedby.',
        },
        {
          name: 'initialFocus',
          type: ['RefObject<HTMLElement>', 'string'],
          defaultValue: '—',
          description:
            'Element to focus on open: a ref or a CSS selector inside the dialog. Defaults to [autofocus], then the first focusable element.',
        },
        {
          name: 'closeOnBackdropClick',
          type: ['boolean'],
          defaultValue: 'true',
          description: 'Close when the backdrop is clicked.',
        },
        {
          name: 'heroImage',
          type: ['boolean'],
          defaultValue: 'false',
          description:
            'Shows the illustrated hero header instead of a visible text title.',
        },
        {
          name: 'classes',
          type: ['string'],
          defaultValue: '""',
          description: 'Extra class names (className also works).',
        },
        {
          name: 'ref',
          type: ['Ref<HTMLDialogElement>'],
          defaultValue: '—',
          description:
            'Ref to the underlying <dialog>. Other dialog attributes (id, data-*, aria-*) are passed through.',
        },
        {
          name: 'children',
          type: ['ReactNode'],
          defaultValue: '—',
          description: 'Dialog body content.',
        },
      ]}
    />
  );
}
