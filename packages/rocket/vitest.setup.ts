import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

afterEach(() => {
  cleanup();
});

globalThis.jest = vi;

// jsdom does not implement the modal parts of HTMLDialogElement. This minimal
// stand-in mirrors the behaviour Modal relies on: `open`, focusing the first
// focusable element on showModal(), and a `close` event on close(). Real
// browser behaviour (focus trap, inert background) is covered by the
// Playwright checks described in the PR, not by jsdom.
const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

if (typeof HTMLDialogElement !== 'undefined') {
  HTMLDialogElement.prototype.showModal = function showModal(
    this: HTMLDialogElement
  ) {
    if (this.open) {
      throw new DOMException('Already open', 'InvalidStateError');
    }
    this.setAttribute('open', '');
    const target =
      this.querySelector<HTMLElement>('[autofocus]') ??
      this.querySelector<HTMLElement>(FOCUSABLE);
    target?.focus();
  };
  HTMLDialogElement.prototype.close = function close(this: HTMLDialogElement) {
    if (!this.open) return;
    this.removeAttribute('open');
    setTimeout(() => this.dispatchEvent(new Event('close')), 0);
  };
}
