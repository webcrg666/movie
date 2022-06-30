import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import styles from './dropdown.module.scss';
import { IoptionsParam } from '@/interfaces';

interface IDropdown {
  selected: string;
  optionsParam: IoptionsParam[];
  fullwidth: boolean;
  disabled?: boolean;
  onChange: (arg0: any) => any;
}

function Dropdown({
  selected,
  optionsParam,
  fullwidth,
  disabled,
  onChange,
}: IDropdown) {
  const dispatch = useDispatch();
  const currentSelected = optionsParam.find((item) => item.selected)?.name;
  const dropdownStyles = classNames(styles.dropdown, {
    [styles.fullwidth]: fullwidth,
  });

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    const currentOption = optionsParam.find((item) => item.name === value);

    dispatch(onChange(currentOption));
  };

  return (
    <select
      value={currentSelected ?? selected}
      onChange={handleChange}
      className={dropdownStyles}
      disabled={disabled}
    >
      {optionsParam.map(({ name }) => (
        <option className={styles.option} value={name} key={name}>
          {name}
        </option>
      ))}
    </select>
  );
}

export { Dropdown };
