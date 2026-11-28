import {
  ReactNode,
  ChangeEvent,
  ComponentPropsWithRef,
  MouseEvent,
  RefObject,
} from 'react';

export interface ButtonProps {
  label?: string;
  styleBtn?: 'solid' | 'outline' | 'text' | 'soft' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'xs' | 'xl';
  color?: 'brand' | 'olive' | 'navy' | 'mustard' | 'powder';
  radius?: 'none' | 'sm' | 'md' | 'full';
  loading?: boolean;
  classes?: string;
  id?: string;
  rounded?: boolean;
  shadow?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  scrollToTop?: boolean;
  position?: string;
  click?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface InputFieldProps {
  label?: string;
  type?: string;
  id?: string;
  classes?: string;
  name?: string;
  min?: number;
  max?: number;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  autocomplete?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  showError?: boolean;
  note?: string;
  value?: string;
  onBlur?: (target: HTMLInputElement) => void;
  change?: (value: string) => void;
}

export interface CheckboxProps {
  label?: string;
  name?: string;
  value?: string;
  classes?: string;
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  iconType?: 'default' | 'heart' | 'star';
  change?: (target: HTMLInputElement) => void;
}

export interface IconProps {
  classes?: string;
  iconClass?: string;
  click?: () => void;
  children?: ReactNode;
  /** Accessible name; omit for decorative icons. */
  label?: string;
}

export interface ImgSource {
  /** MIME type, e.g. `image/avif` or `image/webp`. */
  type: string;
  srcSet: string;
  sizes?: string;
}

export interface ImgProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  classes?: string;
  click?: () => void;
  /** Native `srcset` on the `<img>` (or fallback inside `<picture>`). */
  srcSet?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  /** When set, renders a `<picture>` with these `<source>` elements before the img. */
  sources?: ImgSource[];
  /** Swapped in if the primary `src` fails to load. */
  fallbackSrc?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export interface ModalProps extends Omit<
  ComponentPropsWithRef<'dialog'>,
  'open' | 'children' | 'onCancel' | 'onClose'
> {
  /** Dialog title. Rendered as a heading and used as the accessible name. */
  modalTitle?: string;
  /** Shows the illustrated hero header; the title stays screen-reader only. */
  heroImage?: boolean;
  /** Extra class names (kept for backward compatibility; `className` also works). */
  classes?: string;
  /** Controls visibility. */
  show: boolean;
  /**
   * Called when the user asks to close: Escape, backdrop click, or a close
   * button. Set `show` to `false` in response.
   */
  closeModal: (event?: MouseEvent) => void;
  /** Optional `(open: boolean) => void` companion to `closeModal`; called with `false`. */
  onOpenChange?: (open: boolean) => void;
  /** Supporting text rendered above the children and wired to `aria-describedby`. */
  description?: ReactNode;
  /**
   * Element to focus when the dialog opens: a ref or a CSS selector inside the
   * dialog. Defaults to an `[autofocus]` / `[data-autofocus]` element, then the
   * first focusable element.
   */
  initialFocus?: RefObject<HTMLElement | null> | string;
  /** Close when the backdrop is clicked. Defaults to `true`. */
  closeOnBackdropClick?: boolean;
  children?: ReactNode;
}

export interface RadioButtonProps {
  name?: string;
  val?: string;
  id?: string;
  classes?: string;
  label?: string;
  disabled?: boolean;
  isSelected?: boolean;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectFieldProps {
  label?: string;
  id?: string;
  name?: string;
  classes?: string;
  disabled?: boolean;
  multiple?: boolean;
  required?: boolean;
  options: string[];
  selectOption?: string;
  isOpen?: boolean;
  change?: (value: string) => void;
}

export interface TabsProps {
  tabs: string[];
  activeTab?: number;
  classes?: string;
  id?: string;
  setActiveTab: (index: number) => void;
}

export interface TextboxProps {
  label?: string;
  id?: string;
  name?: string;
  rows?: number;
  cols?: string;
  maxlength?: number;
  classes?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  note?: string;
  showError?: boolean;
  value?: string;
  change?: (value: string) => void;
}

export interface ToggleButtonProps {
  label?: string;
  name?: string;
  change?: (checked: boolean) => void;
  classes?: string;
  id?: string;
  isChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  labelPosition?: 'label-from-left' | 'label-from-right';
}

export interface ToasterProps {
  classes?: string;
  type?: 'info' | 'success' | 'error' | 'warning';
  id?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  title?: string;
  runningText?: string;
  show: boolean;
  closeToaster: () => void;
}

export interface FormProps {
  title?: string;
  id?: string;
  children?: ReactNode;
  classes?: string;
  novalidate?: boolean;
  submit: (values: Record<string, unknown>) => void;
}
