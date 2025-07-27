import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from '../InputField';

function Wrapper({onChange}) {
  const [value, setValue] = React.useState('');
  const handleChange = val => {
    if (onChange) {
      onChange(val);
    }
    setValue(val);
  };
  return <InputField value={value} change={handleChange} />;
}

test('InputField default props change event updates value', () => {
  const changeSpy = jest.fn();
  const { getByRole } = render(<Wrapper onChange={changeSpy} />);
  const input = getByRole('textbox');
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(changeSpy).toHaveBeenCalledWith('abc');
  expect(input.value).toBe('abc');
});
