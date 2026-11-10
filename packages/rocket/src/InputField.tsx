import { InputFieldProps } from './types';

export function InputField({
  label = '',
  type = 'text',
  id,
  classes = '',
  name = '',
  min,
  max,
  minlength,
  maxlength = 30,
  pattern,
  autocomplete = 'off',
  required = false,
  disabled = false,
  placeholder,
  error = 'This field is required',
  showError = false,
  note,
  value,
  onBlur,
  change,
}: InputFieldProps) {
  const charIsUse = value ? value.length : 0;

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event.target);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (pattern) {
      const reg = new RegExp(pattern);
      if (!reg.test(e.target.value)) {
        return;
      }
    }

    if (change) {
      change(e.target.value);
    }
  };

  return (
    <div
      className={`input-field ${placeholder ? 'placeholder' : ''} ${
        value ? 'with-value' : ''
      }`}
    >
      <label className="field">
        <input
          type={type}
          id={id}
          className={classes}
          name={name}
          min={min}
          max={max}
          minLength={minlength}
          maxLength={maxlength}
          pattern={pattern}
          required={required}
          disabled={disabled}
          autoComplete={autocomplete}
          placeholder={placeholder}
          onBlur={handleBlur}
          value={value}
          onChange={handleChange}
        />
        <span className="label">
          {label}
          {required && <span className="astrix">*</span>}
        </span>
      </label>
      <div className="helpers">
        {error && showError && required && (
          <span className="error">{error}</span>
        )}
        {note && !showError && <span className="note">{note}</span>}
        <span className="char-num">
          {charIsUse}/{maxlength}
        </span>
      </div>
    </div>
  );
}
