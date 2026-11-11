import { ReactNode, ChangeEvent, MouseEvent } from 'react';

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
}

export interface ImgProps {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  classes?: string;
  click?: () => void;
}

export interface ModalProps {
  modalTitle?: string;
  heroImage?: boolean;
  classes?: string;
  show: boolean;
  closeModal: (event?: MouseEvent) => void;
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
