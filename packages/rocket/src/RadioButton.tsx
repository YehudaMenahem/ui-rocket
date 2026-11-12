import { RadioButtonProps } from './types';

export function RadioButton({
  name,
  val,
  id,
  classes = '',
  label,
  disabled = false,
  isSelected = false,
  change,
}: RadioButtonProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (change) {
      change(e);
    }
  };

  return (
    <label
      htmlFor={id}
      className={`radio-button ${classes} ${disabled ? 'disabled' : ''} ${
        isSelected ? 'selected' : ''
      }`}
    >
      <span className="control">
        <input
          type="radio"
          id={id}
          name={name}
          value={val}
          onChange={handleChange}
          disabled={disabled}
          checked={isSelected}
        />
        <span className="indicator" aria-hidden="true" />
      </span>
      <span className="label">{label}</span>
    </label>
  );
}
