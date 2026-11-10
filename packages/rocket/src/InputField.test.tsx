import { render, fireEvent } from '@testing-library/react';
import { InputField } from './InputField';

function Wrapper({ onChange }: { onChange?: (val: string) => void }) {
  const [value, setValue] = React.useState('');
  const handleChange = (val: string) => {
    if (onChange) {
      onChange(val);
    }
    setValue(val);
  };
  return <InputField value={value} change={handleChange} />;
}

import React from 'react';

test('InputField change event updates value', () => {
  const changeSpy = vi.fn();
  const { getByRole } = render(<Wrapper onChange={changeSpy} />);
  const input = getByRole('textbox') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(changeSpy).toHaveBeenCalledWith('abc');
  expect(input.value).toBe('abc');
});

test('InputField respects maxlength prop', () => {
  const { getByRole } = render(<InputField maxlength={5} />);
  const input = getByRole('textbox') as HTMLInputElement;
  expect(input.maxLength).toBe(5);
});

test('InputField shows error when showError is true', () => {
  const { getByText } = render(
    <InputField
      required
      showError={true}
      error="Field is required"
      label="Test"
    />
  );
  expect(getByText('Field is required')).toBeInTheDocument();
});
