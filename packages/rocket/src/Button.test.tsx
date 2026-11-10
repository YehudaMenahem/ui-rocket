import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('Button renders with label', () => {
  const { getByText } = render(<Button label="Click me" />);
  expect(getByText('Click me')).toBeInTheDocument();
});

test('Button calls click handler when clicked', () => {
  const handleClick = vi.fn();
  const { getByRole } = render(<Button label="Click me" click={handleClick} />);
  fireEvent.click(getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button is disabled when disabled prop is true', () => {
  const { getByRole } = render(<Button label="Click me" disabled={true} />);
  expect(getByRole('button')).toBeDisabled();
});

test('Button shows loading state', () => {
  const { container } = render(<Button label="Click me" loading={true} />);
  expect(container.querySelector('.loading-bg')).toBeInTheDocument();
});
