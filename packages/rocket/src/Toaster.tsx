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
    }
  };

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <i className="icon check circle"></i>;
      case 'info':
        return <i className="icon info circle"></i>;
      case 'error':
        return <i className="icon times circle"></i>;
      case 'warning':
        return <i className="icon exclamation triangle"></i>;
      default:
        return <i className="icon info circle"></i>;
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div ref={toasterRef} className={`toaster ${type} ${position}`}>
      <i className="icon close" onClick={handleCloseToaster}></i>
      <div className="icon-type mr-r-lr">
        <span>{renderIcon()}</span>
      </div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="running-text">{runningText}</p>
      </div>
    </div>
  );
}
