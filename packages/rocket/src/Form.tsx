import { useState } from 'react';
import { FormProps } from './types';

export function Form({
  title = '',
  id,
  children,
  classes = '',
  novalidate = false,
  submit,
}: FormProps) {
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formEl = event.target as HTMLFormElement;
    const res: Record<string, unknown> = {};
    let preventSubmit = false;

    for (let i = 0; i < formEl.elements.length; i++) {
      const element = formEl.elements[i] as HTMLInputElement;

      if (element.type === 'radio') {
        if (element.checked) {
          res[element.name] = element.value;
        }
      } else if (element.type === 'checkbox') {
        res[element.name] = element.checked;
      } else if (element.tagName === 'SELECT') {
        if (element.value === 'choose an option') {
          continue;
        }
        res[element.name] = element.value;
      } else if (element.type === 'submit') {
        continue;
      } else {
        if (element.value === '' && element.required) {
          preventSubmit = true;
        } else {
          res[element.name] = element.value;
          preventSubmit = false;
        }
      }
    }

    if (preventSubmit) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    submit(res);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id={id}
      noValidate={novalidate}
      className={classes}
    >
      <h3 className="form-header">{title}</h3>
      {children}
      {error && (
        <p className="error">
          Please fill the fields with the astrik (*) mark
        </p>
      )}
    </form>
  );
}
