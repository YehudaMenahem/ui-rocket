import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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

  useEffect(() => {
    if (!show) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [show, closeModal]);

  const closeModalWin = (e: React.MouseEvent) => {
    const modal = modalRef.current;
    if (modal) {
      modal.classList.add('close');
      setTimeout(() => {
        closeModal(e);
      }, 300);
    } else {
      closeModal(e);
    }
  };

  if (!show || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      ref={modalRef}
      className={`modal ${classes} ${heroImage ? 'hero-image' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={modalTitle || 'Dialog'}
      onClick={closeModal}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()} role="document">
        {heroImage ? (
          <div className="header hero">
            <Img classes="hero" src={forgotPassword} alt="" />
            <button
              type="button"
              className="close-sign"
              aria-label="Close dialog"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        ) : (
          <div className="header">
            <h3>{modalTitle}</h3>
            <button
              type="button"
              className="close-sign"
              aria-label="Close dialog"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        )}
        <div className="body">{children}</div>
        <div className="footer">
          <Button
            size="medium"
            label="Close"
            styleBtn="outline"
            classes="btn-secondary"
            click={closeModalWin}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
