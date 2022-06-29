import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './CheckboxGroup.module.css';

interface ICheckboxGroupProps {
  name: string;
  id: number;
  checked: boolean;
  onChange: (arg0: any) => any;
}

function CheckboxGroup({
  name,
  id,
  checked = false,
  onChange,
}: ICheckboxGroupProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(onChange({ id, name, isChecked: !checked }));
  };

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleClick}
      />
      <label className={styles.label} htmlFor={name} onClick={handleClick}>
        {name}
      </label>
    </div>
  );
}

export { CheckboxGroup };
