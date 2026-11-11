import { CheckboxProps } from './types';

export function Checkbox({
  label,
  name,
  value,
  classes = '',
  id,
  checked,
  disabled = false,
  required = false,
  iconType = 'default',
  change,
}: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (change && event.target) {
      change(event.target);
    }
  };

  return (
    <label
      htmlFor={id}
      className={`checkbox ${classes} ${disabled ? 'disabled' : ''}`}
    >
      <span className="control">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          defaultChecked={checked}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          data-icon-type={iconType}
        />
        <span className="indicator" aria-hidden="true" />
      </span>
      <span className="label">{label}</span>
    </label>
  );
}
