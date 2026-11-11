import { useState } from 'react';
import { ToggleButtonProps } from './types';

export function ToggleButton({
  label,
  name,
  change,
  classes = '',
  id,
  isChecked = false,
  disabled = false,
  required = false,
  labelPosition = 'label-from-left',
}: ToggleButtonProps) {
  const [toggle, setToggle] = useState(isChecked);

  const handleChange = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    if (change) {
      change(newToggle);
    }
  };

  return (
    <label
      htmlFor={id}
      className={`toggle-button ${classes} ${labelPosition} ${
        toggle ? 'checked' : 'unchecked'
      } ${disabled ? 'disabled' : ''}`}
    >
      {labelPosition === 'label-from-left' && (
        <span className="label">{label}</span>
      )}
      <span className="control">
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={toggle}
          onChange={handleChange}
          required={required}
          disabled={disabled}
        />
        <span className="switch" aria-hidden="true" />
      </span>
      {labelPosition === 'label-from-right' && (
        <span className="label">{label}</span>
      )}
    </label>
  );
}
