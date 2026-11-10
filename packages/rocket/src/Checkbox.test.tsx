import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

test('Checkbox renders with label', () => {
  const { getByText } = render(<Checkbox label="Accept terms" />);
  expect(getByText('Accept terms')).toBeInTheDocument();
});

test('Checkbox calls change handler when clicked', () => {
  const handleChange = vi.fn();
  const { getByRole } = render(
    <Checkbox label="Accept" id="test" change={handleChange} />
  );
  fireEvent.click(getByRole('checkbox'));
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('Checkbox can be checked by default', () => {
  const { getByRole } = render(
    <Checkbox label="Accept" id="test" checked={true} />
  );
  expect(getByRole('checkbox')).toBeChecked();
});
