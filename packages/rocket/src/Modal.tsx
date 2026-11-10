import { useRef } from 'react';
import { Button } from './Button';
import { Img } from './Img';
import { ModalProps } from './types';
import forgotPassword from './assets/images/forgot_password.svg';

export function Modal({
  modalTitle,
  heroImage,
  classes = '',
  show,
  closeModal,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModalWin = (e: React.MouseEvent) => {
    const modal = modalRef.current;
    if (modal) {
      modal.classList.add('close');
      setTimeout(() => {
        closeModal(e);
      }, 300);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      className={`modal ${classes} ${heroImage ? 'hero-image' : ''}`}
      onClick={closeModal}
    >
      <div className="box" onClick={(e) => e.stopPropagation()}>
        {heroImage ? (
          <div className="header">
            <Img classes="hero" src={forgotPassword} alt="Hero" />
            <i className="close-sign close icon" onClick={closeModal}></i>
          </div>
        ) : (
          <div className="header">
            <h3>{modalTitle}</h3>
            <i className="close-sign close icon" onClick={closeModal}></i>
          </div>
        )}
        <div className="body grid">{children}</div>
        <div className="footer grid">
          <div className="row">
            <div className="col-1">
              <Button size="medium" label="Close Modal" click={closeModalWin} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
