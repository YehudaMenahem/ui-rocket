import { useState } from 'react';
import { Button, Modal } from '@ui-rocket/rocket';
import { ShowcaseCard } from '../components/ShowcaseCard';

export function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="ui container modal-page">
      <ShowcaseCard title="Modals">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Modal</h1>
            <p>Modals display content in a dialog overlay.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <Button
              label="Open Modal"
              click={() => setShowModal(true)}
              styleBtn="solid"
            />
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        closeModal={() => setShowModal(false)}
        modalTitle="Demo Modal"
      >
        <div className="row">
          <div className="col-1">
            <p>This is modal content.</p>
          </div>
        </div>
      </Modal>
    
      </ShowcaseCard>
    </div>
  );
}
