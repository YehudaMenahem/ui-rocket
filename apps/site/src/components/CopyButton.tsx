import { useState } from 'react';
import { Icon } from './Icons';
import { copyText } from '../utils/copyText';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({
  text,
  label = 'Copy',
  className = 'tool copy-btn',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  const onCopy = async () => {
    const ok = await copyText(text);
    if (ok) {
      setCopied(true);
      setFailed(false);
      setTimeout(() => setCopied(false), 1600);
    } else {
      setFailed(true);
      setTimeout(() => setFailed(false), 2000);
    }
  };

  return (
    <button
      type="button"
      className={`${className} ${copied ? 'copied' : ''} ${failed ? 'copy-failed' : ''}`}
      onClick={onCopy}
    >
      <Icon name={copied ? 'check' : 'copy'} />
      <span className="copy-label">
        {copied ? 'Copied' : failed ? 'Failed' : label}
      </span>
      <span className="sr-only" aria-live="polite">
        {copied ? 'Copied to clipboard' : failed ? 'Copy failed' : ''}
      </span>
    </button>
  );
}
