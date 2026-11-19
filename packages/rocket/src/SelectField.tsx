import { KeyboardEvent, useEffect, useId, useRef, useState } from 'react';
import { SelectFieldProps } from './types';

export function SelectField({
  label,
  id,
  name,
  classes = '',
  disabled = false,
  multiple = false,
  required = false,
  options: initialOptions,
  selectOption: initialSelectOption,
  isOpen: initialIsOpen,
  change,
}: SelectFieldProps) {
  const autoId = useId();
  const fieldId = id || autoId;
  const listId = `${fieldId}-listbox`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [options] = useState(() => [...initialOptions]);
  const [value, setValue] = useState(initialSelectOption || '');
  const [isOpen, setIsOpen] = useState(Boolean(initialIsOpen));
  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, initialOptions.indexOf(initialSelectOption || ''))
  );

  useEffect(() => {
    setValue(initialSelectOption || '');
  }, [initialSelectOption]);

  useEffect(() => {
    if (!isOpen) return;
    const onDoc = (e: globalThis.MouseEvent) => {
      if (!rootRef.current?.contains(e.target as globalThis.Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [isOpen]);

  const select = (next: string) => {
    setValue(next);
    setIsOpen(false);
    change?.(next);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else if (options[activeIndex]) {
        select(options[activeIndex]);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsOpen(true);
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIsOpen(true);
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
  };

  return (
    <div
      className={`select-field select-wrapper ${classes} ${disabled ? 'disabled' : ''} ${
        isOpen ? 'open' : ''
      }`}
      ref={rootRef}
    >
      {label ? (
        <label className="label" htmlFor={fieldId}>
          {label}
          {required ? <span className="astrix">*</span> : null}
        </label>
      ) : null}

      <button
        type="button"
        id={fieldId}
        className="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        disabled={disabled}
        onClick={() => setIsOpen((o) => !o)}
        onKeyDown={onKeyDown}
      >
        <span className={`selected ${value ? '' : 'placeholder'}`}>
          {value || 'Choose an option'}
        </span>
        <svg className="chev" viewBox="0 0 20 12" aria-hidden="true">
          <path d="M18.2,1.9L10,10.1L1.8,1.9" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {isOpen ? (
        <ul className="options" id={listId} role="listbox" aria-labelledby={fieldId}>
          {options.map((opt, index) => (
            <li key={opt} role="option" aria-selected={opt === value}>
              <button
                type="button"
                className={`option ${opt === value ? 'selected' : ''} ${
                  index === activeIndex ? 'active' : ''
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => select(opt)}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Native fallback for progressive enhancement / forms */}
      <select
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
        name={name}
        disabled={disabled}
        multiple={multiple}
        required={required}
        value={value}
        onChange={(e) => select(e.target.value)}
      >
        <option value="">Choose an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
