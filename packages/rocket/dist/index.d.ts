import { ChangeEvent } from 'react';
import { JSX } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { ReactNode } from 'react';

export declare function Button({ label, styleBtn, size, loading, classes, id, rounded, shadow, disabled, children, scrollToTop, position, click, }: ButtonProps): JSX.Element;

export declare interface ButtonProps {
    label?: string;
    styleBtn?: 'solid' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    classes?: string;
    id?: string;
    rounded?: boolean;
    shadow?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    scrollToTop?: boolean;
    position?: string;
    click?: (event: MouseEvent_2<HTMLButtonElement>) => void;
}

export declare function Checkbox({ label, name, value, classes, id, checked, disabled, required, iconType, change, }: CheckboxProps): JSX.Element;

export declare interface CheckboxProps {
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

export declare function Form({ title, id, children, classes, novalidate, submit, }: FormProps): JSX.Element;

export declare interface FormProps {
    title?: string;
    id?: string;
    children?: ReactNode;
    classes?: string;
    novalidate?: boolean;
    submit: (values: Record<string, unknown>) => void;
}

export declare function Icon({ classes, iconClass, click }: IconProps): JSX.Element;

export declare interface IconProps {
    classes?: string;
    iconClass?: string;
    click?: () => void;
}

export declare function Img({ src, alt, width, height, classes, click }: ImgProps): JSX.Element;

export declare interface ImgProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
    classes?: string;
    click?: () => void;
}

export declare function InputField({ label, type, id, classes, name, min, max, minlength, maxlength, pattern, autocomplete, required, disabled, placeholder, error, showError, note, value, onBlur, change, }: InputFieldProps): JSX.Element;

export declare interface InputFieldProps {
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

export declare function Modal({ modalTitle, heroImage, classes, show, closeModal, children, }: ModalProps): JSX.Element | null;

export declare interface ModalProps {
    modalTitle?: string;
    heroImage?: boolean;
    classes?: string;
    show: boolean;
    closeModal: (event?: MouseEvent_2) => void;
    children?: ReactNode;
}

export declare function RadioButton({ name, val, id, classes, label, disabled, isSelected, change, }: RadioButtonProps): JSX.Element;

export declare interface RadioButtonProps {
    name?: string;
    val?: string;
    id?: string;
    classes?: string;
    label?: string;
    disabled?: boolean;
    isSelected?: boolean;
    change?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export declare function SelectField({ label, id, name, classes, disabled, multiple, required, options: initialOptions, selectOption: initialSelectOption, isOpen: initialIsOpen, change, }: SelectFieldProps): JSX.Element;

export declare interface SelectFieldProps {
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

export declare function Tabs({ tabs, activeTab, setActiveTab, }: TabsProps): JSX.Element;

export declare interface TabsProps {
    tabs: string[];
    activeTab?: number;
    classes?: string;
    id?: string;
    setActiveTab: (index: number) => void;
}

export declare function Textbox({ label, id, name, rows, cols, maxlength, classes, required, placeholder, disabled, error, note, showError, value, change, }: TextboxProps): JSX.Element;

export declare interface TextboxProps {
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

export declare function Toaster({ type, position, title, runningText, show, closeToaster, }: ToasterProps): JSX.Element | null;

export declare interface ToasterProps {
    classes?: string;
    type?: 'info' | 'success' | 'error' | 'warning';
    id?: string;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    title?: string;
    runningText?: string;
    show: boolean;
    closeToaster: () => void;
}

export declare function ToggleButton({ label, name, change, classes, id, isChecked, disabled, required, labelPosition, }: ToggleButtonProps): JSX.Element;

export declare interface ToggleButtonProps {
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

export { }
