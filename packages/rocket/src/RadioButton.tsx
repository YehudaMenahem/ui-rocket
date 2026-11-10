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
      className={`radio-button ${classes} ${isSelected ? 'selected' : ''}`}
    >
      <span className="radio">
        <input
          type="radio"
          id={id}
          name={name}
          value={val}
          onChange={handleChange}
          disabled={disabled}
          checked={isSelected}
        />
        <span className="icon">
          <svg
            id="radio-circle"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <path
              className="check"
              d="M21,15a6,6,0,1,1-6-6A6,6,0,0,1,21,15Z"
            />
            <path
              className="ring"
              d="M15,5A10,10,0,1,1,5,15,10,10,0,0,1,15,5m0-3A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"
            />
          </svg>
        </span>
        <span className="label">{label}</span>
      </span>
    </label>
  );
}
