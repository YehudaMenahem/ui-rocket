import { createRef, useState } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

function Harness({
  onClose,
  onOpenChange,
  initialFocus,
  closeOnBackdropClick,
}: {
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
  initialFocus?: string;
  closeOnBackdropClick?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Trigger
      </button>
      <Modal
        show={open}
        closeModal={() => {
          onClose?.();
          setOpen(false);
        }}
        onOpenChange={onOpenChange}
        modalTitle="Hold launch?"
        description="Confirm abort sequence."
        initialFocus={initialFocus}
        closeOnBackdropClick={closeOnBackdropClick}
      >
        <input aria-label="Reason" />
        <button type="button" data-testid="extra">
          Extra
        </button>
      </Modal>
    </>
  );
}

const cancel = (el: HTMLElement) =>
  fireEvent(el, new window.Event('cancel', { cancelable: true }));

test('renders nothing while closed', () => {
  render(<Modal show={false} closeModal={() => {}} modalTitle="Hi" />);
  expect(document.querySelector('dialog')).toBeNull();
});

test('opens a native modal dialog and focuses inside it', async () => {
  const user = userEvent.setup();
  render(<Harness />);
  await user.click(screen.getByText('Trigger'));
  const dialog = await screen.findByRole('dialog');
  expect(dialog.tagName).toBe('DIALOG');
  expect(dialog).toHaveAttribute('open');
  expect(dialog).toContainElement(document.activeElement as HTMLElement);
});

test('moves focus to the initialFocus selector when given', async () => {
  const user = userEvent.setup();
  render(<Harness initialFocus="[data-testid=extra]" />);
  await user.click(screen.getByText('Trigger'));
  await screen.findByRole('dialog');
  expect(screen.getByTestId('extra')).toHaveFocus();
});

test('is labelled by its title and described by its description', async () => {
  const user = userEvent.setup();
  render(<Harness />);
  await user.click(screen.getByText('Trigger'));
  const dialog = await screen.findByRole('dialog');
  expect(dialog).toHaveAccessibleName('Hold launch?');
  expect(dialog).toHaveAccessibleDescription('Confirm abort sequence.');
  expect(dialog).not.toHaveAttribute('aria-label');
});

test('falls back to an aria-label when there is no title', () => {
  render(<Modal show closeModal={() => {}} aria-label="Settings" />);
  expect(screen.getByRole('dialog')).toHaveAccessibleName('Settings');
});

test('Escape (cancel event) calls closeModal and onOpenChange(false)', async () => {
  const user = userEvent.setup();
  const onClose = vi.fn();
  const onOpenChange = vi.fn();
  render(<Harness onClose={onClose} onOpenChange={onOpenChange} />);
  await user.click(screen.getByText('Trigger'));
  const dialog = await screen.findByRole('dialog');

  const event = new window.Event('cancel', { cancelable: true });
  fireEvent(dialog, event);
  expect(event.defaultPrevented).toBe(true);
  expect(onClose).toHaveBeenCalledTimes(1);
  expect(onOpenChange).toHaveBeenCalledWith(false);
  await act(async () => {});
  expect(screen.queryByRole('dialog')).toBeNull();
});

test('restores focus to the trigger on close', async () => {
  const user = userEvent.setup();
  render(<Harness />);
  const trigger = screen.getByText('Trigger');
  await user.click(trigger);
  const dialog = await screen.findByRole('dialog');
  expect(trigger).not.toHaveFocus();
  cancel(dialog);
  await act(async () => {});
  expect(screen.queryByRole('dialog')).toBeNull();
  expect(trigger).toHaveFocus();
});

test('closes from the header and footer close buttons', async () => {
  const user = userEvent.setup();
  const onClose = vi.fn();
  render(<Harness onClose={onClose} />);
  await user.click(screen.getByText('Trigger'));
  await user.click(await screen.findByRole('button', { name: 'Close dialog' }));
  expect(onClose).toHaveBeenCalledTimes(1);
  await act(async () => {});

  await user.click(screen.getByText('Trigger'));
  await user.click(await screen.findByRole('button', { name: 'Close' }));
  expect(onClose).toHaveBeenCalledTimes(2);
});

test('backdrop click closes, panel click does not', async () => {
  const user = userEvent.setup();
  const onClose = vi.fn();
  render(<Harness onClose={onClose} />);
  await user.click(screen.getByText('Trigger'));
  const dialog = await screen.findByRole('dialog');

  await user.click(screen.getByText('Confirm abort sequence.'));
  expect(onClose).not.toHaveBeenCalled();

  await user.click(dialog);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('closeOnBackdropClick={false} keeps it open', async () => {
  const user = userEvent.setup();
  const onClose = vi.fn();
  render(<Harness onClose={onClose} closeOnBackdropClick={false} />);
  await user.click(screen.getByText('Trigger'));
  await user.click(await screen.findByRole('dialog'));
  expect(onClose).not.toHaveBeenCalled();
});

test('locks body scroll while open and restores it on close', async () => {
  const user = userEvent.setup();
  document.body.style.overflow = 'scroll';
  render(<Harness />);
  await user.click(screen.getByText('Trigger'));
  const dialog = await screen.findByRole('dialog');
  expect(document.body.style.overflow).toBe('hidden');
  cancel(dialog);
  await act(async () => {});
  expect(document.body.style.overflow).toBe('scroll');
  document.body.style.overflow = '';
});

test('releases the scroll lock when unmounted while open', () => {
  document.body.style.overflow = '';
  const { unmount } = render(
    <Modal show closeModal={() => {}} modalTitle="x" />
  );
  expect(document.body.style.overflow).toBe('hidden');
  unmount();
  expect(document.body.style.overflow).toBe('');
});

test('forwards ref and rest props to the dialog', () => {
  const ref = createRef<React.ComponentRef<'dialog'>>();
  render(
    <Modal
      ref={ref}
      show
      closeModal={() => {}}
      modalTitle="x"
      id="my-dialog"
      data-testid="dlg"
      className="custom"
      classes="legacy"
    />
  );
  expect(ref.current).toBe(screen.getByTestId('dlg'));
  expect(ref.current).toHaveAttribute('id', 'my-dialog');
  expect(ref.current).toHaveClass('modal', 'custom', 'legacy');
});

test('hero variant keeps a screen-reader title for naming', () => {
  render(<Modal show heroImage closeModal={() => {}} modalTitle="Reset" />);
  expect(screen.getByRole('dialog')).toHaveAccessibleName('Reset');
});
