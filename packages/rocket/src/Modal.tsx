import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type Ref,
} from 'react';
import { createPortal } from 'react-dom';
import { Button } from './Button';
import { Img } from './Img';
import { ModalProps } from './types';
import forgotPassword from './assets/images/forgot_password.svg';

type DialogElement = React.ComponentRef<'dialog'>;

/**
 * Number of open modals holding the body scroll lock, so stacked dialogs
 * restore the original `overflow` only when the last one closes.
 */
let scrollLocks = 0;
let scrollLockPrevious = '';

function lockBodyScroll() {
  if (scrollLocks === 0) {
    scrollLockPrevious = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
  scrollLocks += 1;
}

function unlockBodyScroll() {
  scrollLocks = Math.max(0, scrollLocks - 1);
  if (scrollLocks === 0) {
    document.body.style.overflow = scrollLockPrevious;
  }
}

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') {
    return ref(value);
  }
  if (ref) {
    ref.current = value;
  }
  return undefined;
}

/** Waits for CSS exit animations on the dialog, if any are running. */
function exitAnimationsFinished(dialog: DialogElement): Promise<unknown> {
  if (typeof dialog.getAnimations !== 'function') {
    return Promise.resolve();
  }
  const running = dialog
    .getAnimations({ subtree: true })
    .map((animation) => animation.finished);
  return Promise.allSettled(running);
}

export function Modal({
  modalTitle,
  heroImage,
  classes = '',
  show,
  closeModal,
  onOpenChange,
  description,
  initialFocus,
  closeOnBackdropClick = true,
  children,
  className,
  ref,
  onClick,
  onMouseDown,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...rest
}: ModalProps) {
  const uid = useId();
  const titleId = `${uid}-title`;
  const descriptionId = `${uid}-description`;

  const dialogRef = useRef<DialogElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const ownsScrollLock = useRef(false);
  const pressStartedOnBackdrop = useRef(false);

  // The dialog stays mounted while its exit animation plays.
  const [mounted, setMounted] = useState(show);
  if (show && !mounted) {
    setMounted(true);
  }

  // Always call the latest handlers without re-running the open/close effect.
  const handlers = useRef({ closeModal, onOpenChange, initialFocus });
  useEffect(() => {
    handlers.current = { closeModal, onOpenChange, initialFocus };
  });

  const requestClose = useCallback((event?: ReactMouseEvent) => {
    handlers.current.closeModal(event);
    handlers.current.onOpenChange?.(false);
  }, []);

  const setDialogRef = useCallback(
    (node: DialogElement | null) => {
      dialogRef.current = node;
      const cleanup = assignRef(ref, node);
      return typeof cleanup === 'function'
        ? cleanup
        : () => {
            assignRef(ref, null);
          };
    },
    [ref]
  );

  const releaseScroll = useCallback(() => {
    if (ownsScrollLock.current) {
      ownsScrollLock.current = false;
      unlockBodyScroll();
    }
  }, []);

  const restoreFocus = useCallback(() => {
    const target = previouslyFocused.current;
    previouslyFocused.current = null;
    if (target && target.isConnected) {
      target.focus({ preventScroll: true });
    }
  }, []);

  // Open and close the native dialog in sync with `show`.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (show) {
      delete dialog.dataset.closing;
      if (!dialog.open) {
        const active = document.activeElement;
        previouslyFocused.current =
          active instanceof HTMLElement && active !== document.body
            ? active
            : null;
        dialog.showModal();
        if (!ownsScrollLock.current) {
          ownsScrollLock.current = true;
          lockBodyScroll();
        }

        const wanted = handlers.current.initialFocus;
        const target =
          typeof wanted === 'string'
            ? dialog.querySelector<HTMLElement>(wanted)
            : wanted
              ? wanted.current
              : dialog.querySelector<HTMLElement>(
                  '[data-autofocus], [autofocus]'
                );
        target?.focus();
      }
      return;
    }

    if (!dialog.open) {
      setMounted(false);
      return;
    }

    let cancelled = false;
    dialog.dataset.closing = 'true';
    exitAnimationsFinished(dialog).then(() => {
      if (cancelled) return;
      // `close` fires asynchronously; `data-closing` tells onClose that this
      // close was requested by us, so handlers are not called twice.
      dialog.close();
      releaseScroll();
      restoreFocus();
      setMounted(false);
    });
    return () => {
      cancelled = true;
    };
  }, [show, mounted, releaseScroll, restoreFocus]);

  // If the component unmounts while open, release everything it took.
  useEffect(() => {
    const dialog = dialogRef;
    return () => {
      if (dialog.current?.open) {
        dialog.current.dataset.closing = 'true';
        dialog.current.close();
      }
      releaseScroll();
      restoreFocus();
    };
  }, [releaseScroll, restoreFocus]);

  // Escape fires `cancel`; keep React state as the source of truth.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (event: { preventDefault(): void }) => {
      event.preventDefault();
      if (dialog.dataset.closing) return;
      requestClose();
    };
    // A browser may still close the dialog without a cancelable `cancel`
    // event (for example a second Escape press). Keep state in sync.
    const onClose = () => {
      if (dialog.dataset.closing) return;
      releaseScroll();
      restoreFocus();
      requestClose();
    };
    dialog.addEventListener('cancel', onCancel);
    dialog.addEventListener('close', onClose);
    return () => {
      dialog.removeEventListener('cancel', onCancel);
      dialog.removeEventListener('close', onClose);
    };
  }, [mounted, requestClose, releaseScroll, restoreFocus]);

  const handleMouseDown = (event: ReactMouseEvent<DialogElement>) => {
    onMouseDown?.(event);
    pressStartedOnBackdrop.current = event.target === event.currentTarget;
  };

  const handleClick = (event: ReactMouseEvent<DialogElement>) => {
    onClick?.(event);
    const startedOnBackdrop = pressStartedOnBackdrop.current;
    pressStartedOnBackdrop.current = false;
    if (
      closeOnBackdropClick &&
      !event.defaultPrevented &&
      event.target === event.currentTarget &&
      startedOnBackdrop
    ) {
      requestClose(event);
    }
  };

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  const hasTitle = Boolean(modalTitle);
  const labelledBy =
    ariaLabelledBy ?? (hasTitle && !ariaLabel ? titleId : undefined);
  const label = ariaLabel ?? (!labelledBy ? 'Dialog' : undefined);
  const describedBy =
    ariaDescribedBy ?? (description ? descriptionId : undefined);

  const closeButton = (
    <button
      type="button"
      className="close-sign"
      aria-label="Close dialog"
      onClick={(event) => requestClose(event)}
    >
      ×
    </button>
  );

  return createPortal(
    <dialog
      {...rest}
      ref={setDialogRef}
      className={['modal', classes, heroImage ? 'hero-image' : '', className]
        .filter(Boolean)
        .join(' ')}
      aria-label={label}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
    >
      <div className="modal-panel">
        {heroImage ? (
          <div className="header hero">
            <Img classes="hero" src={forgotPassword} alt="" />
            {hasTitle ? (
              <h3 id={titleId} className="sr-only">
                {modalTitle}
              </h3>
            ) : null}
            {closeButton}
          </div>
        ) : (
          <div className="header">
            {hasTitle ? <h3 id={titleId}>{modalTitle}</h3> : <span />}
            {closeButton}
          </div>
        )}
        <div className="body">
          {description ? <p id={descriptionId}>{description}</p> : null}
          {children}
        </div>
        <div className="footer">
          <Button
            size="medium"
            label="Close"
            styleBtn="outline"
            classes="btn-secondary"
            click={(event) => requestClose(event)}
          />
        </div>
      </div>
    </dialog>,
    document.body
  );
}
