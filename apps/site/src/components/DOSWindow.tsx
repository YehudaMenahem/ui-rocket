import { ReactNode } from 'react';

interface DOSWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function DOSWindow({ title, children, className = '' }: DOSWindowProps) {
  return (
    <div className={`dos-window ${className}`}>
      <div className="dos-window-header">
        <h2 className="dos-window-title">{title}</h2>
        <div className="dos-window-controls">
          <span className="control-button" aria-hidden="true">
            _
          </span>
          <span className="control-button" aria-hidden="true">
            □
          </span>
          <span className="control-button close" aria-hidden="true">
            ×
          </span>
        </div>
      </div>
      <div className="dos-window-body">{children}</div>
    </div>
  );
}
