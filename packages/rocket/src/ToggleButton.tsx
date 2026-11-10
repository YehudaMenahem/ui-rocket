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
      className={`toggle-button ${classes} ${labelPosition} ${
        toggle ? 'checked' : 'unchecked'
      }`}
    >
      <span className="label">{label}</span>
      <span className="switch">
        <input
          type="checkbox"
          id={id}
          name={name}
          defaultChecked={toggle}
          onChange={handleChange}
          required={required}
          disabled={disabled}
        />
        <span className="circle-bg"></span>
        <span className="circle"></span>
      </span>
    </label>
  );
}
