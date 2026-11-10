import { TextboxProps } from './types';

export function Textbox({
  label = '',
  id,
  name = '',
  rows = 1,
  cols = '100%',
  maxlength = 135,
  classes = '',
  required = false,
  placeholder,
  disabled = false,
  error = 'This is a required field',
  note,
  showError = false,
  value,
  change,
}: TextboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (change) {
      change(e.target.value);
    }
  };

  return (
    <div
      className={`textbox ${placeholder ? 'placeholder' : ''} ${
        value ? 'with-value' : ''
      }`}
    >
      <label className="field">
        <textarea
          name={name}
          rows={rows}
          style={{ width: cols }}
          placeholder={placeholder}
          maxLength={maxlength}
          className={classes}
          required={required}
          disabled={disabled}
          id={id}
          onChange={handleChange}
          value={value}
        />
        <span className="label">
          {label}
          {required && <span className="astrix">*</span>}
        </span>
      </label>
      <div className="helpers">
        {error && showError && <span className="error">{error}</span>}
        {note && !showError && <span className="note">{note}</span>}
        <span className="char-num">
          {value?.length || 0}/{maxlength}
        </span>
      </div>
    </div>
  );
}
