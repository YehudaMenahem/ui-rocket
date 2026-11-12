import { useRef } from 'react';
import { ToasterProps } from './types';

export function Toaster({
  type = 'info',
  position = 'top-right',
  title = 'info',
  runningText = '',
  show,
  closeToaster,
}: ToasterProps) {
  const toasterRef = useRef<HTMLDivElement>(null);

  const handleCloseToaster = () => {
    const toasterEl = toasterRef.current;
    if (toasterEl) {
      toasterEl.classList.add('close');
      setTimeout(() => {
        closeToaster();
      }, 300);
    } else {
      closeToaster();
    }
  };

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'info':
        return 'i';
      case 'error':
        return '×';
      case 'warning':
        return '!';
      default:
        return 'i';
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      ref={toasterRef}
      className={`toaster ${type} ${position}`}
      role="status"
      aria-live="polite"
    >
      <div className="icon-type" aria-hidden="true">
        <span>{renderIcon()}</span>
      </div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="running-text">{runningText}</p>
      </div>
      <button
        type="button"
        className="close"
        aria-label="Dismiss notification"
        onClick={handleCloseToaster}
      />
    </div>
  );
}
