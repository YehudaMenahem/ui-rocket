import React from 'react';

const InputField = ({
  label = '',
  type = 'text',
  id = undefined,
  classes = '',
  name = '',
  min = undefined,
  max = undefined,
  minlength = undefined,
  maxlength = 30,
  pattern = undefined,
  autocomplete = 'off',
  required = false,
  disabled = false,
  placeholder = undefined,
  error = 'This field is required',
  showError = false,
  note = undefined,
  value = undefined,
  onBlur,
  change,
}) => {
  const charIsUse = value ? value.length : 0;

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event.target);
    }
  };

  const handleChange = e => {
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
      <label className={`field`}>
        <input
          type={type}
          id={id}
          classes={classes}
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
          showerror={showError.toString()}
        />
        <span className="label">
          {label}
          {required ? <span className="astrix">*</span> : null}
        </span>
      </label>
      <div className="helpers">
        {error && showError && required ? (
          <span className="error">{error}</span>
        ) : null}
        {note && !showError ? <span className="note">{note}</span> : null}
        <span className="char-num">{charIsUse}/{maxlength}</span>
      </div>
    </div>
  );
};

export default InputField;

InputField.defaultProps = {
  label: '',
  type: 'text',
  id: undefined,
  classes: '',
  name: '',
  min: undefined,
  max: undefined,
  minlength: undefined,
  maxlength: 30,
  pattern: undefined,
  autocomplete: 'off',
  required: false,
  disabled: false,
  placeholder: undefined,
  error: 'This field is required',
  showError: false,
  note: undefined,
  value: undefined,
};

