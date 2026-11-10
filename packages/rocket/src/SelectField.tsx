import { useState, useEffect, useRef } from 'react';
import { SelectFieldProps } from './types';

export function SelectField({
  label,
  id,
  name,
  classes = '',
  disabled = false,
  multiple = false,
  required = false,
  options: initialOptions,
  selectOption: initialSelectOption,
  isOpen: initialIsOpen,
  change,
}: SelectFieldProps) {
  const [options, setOptions] = useState<string[]>(initialOptions);
  const [selectOption, setSelectOption] = useState(initialSelectOption);
  const [isOpen, setIsOpen] = useState(initialIsOpen || false);
  const selectMobileRef = useRef<HTMLSelectElement>(null);
  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const optionsList = [...initialOptions];
    if (optionsList[0] !== 'Choose an option') {
      optionsList.unshift('Choose an option');
    }
    setOptions(optionsList);
  }, [initialOptions]);

  const choseOption = (e: React.MouseEvent<HTMLLIElement>) => {
    const selectedOption = e.target as HTMLLIElement;
    const selectedOptionIndex = Number(
      selectedOption.getAttribute('data-index')
    );
    const selectNative = selectMobileRef.current;

    if (selectNative) {
      selectNative.selectedIndex = selectedOptionIndex;
    }

    const value = selectedOption.innerText;
    setSelectOption(value);
    setIsOpen(false);

    if (change) {
      change(value);
    }
  };

  const choseOptionMobile = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSelectOption(selectedOption);
    setIsOpen(false);

    if (change) {
      change(selectedOption);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="select-wrapper">
      <div className="select">
        <div
          className={`field ${classes} ${selectOption ? 'with-value' : ''} ${
            isOpen ? 'open' : ''
          }`}
          tabIndex={0}
          onClick={toggleDropdown}
          onBlur={onBlur}
        >
          <span className="label">{label}</span>
          <span className="selected">{selectOption}</span>
          <i className="icon toggle-icon">
            <svg id="arrow" viewBox="0 0 20 12">
              <path className="path" d="M18.2,1.9L10,10.1L1.8,1.9" />
            </svg>
          </i>
          <ul className="dropdown">
            {options.map((key, index) => (
              <li
                className="option"
                ref={liRef}
                key={index}
                data-index={index}
                onClick={choseOption}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <label className="select-mobile">
        {label}
        <select
          ref={selectMobileRef}
          id={id}
          name={name}
          disabled={disabled}
          multiple={multiple}
          required={required}
          onChange={choseOptionMobile}
        >
          {options.map((key, index) => (
            <option key={index} value={key.toLowerCase()}>
              {key}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
