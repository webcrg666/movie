import React from 'react';
import styles from './checkbox-group.module.scss';

interface ICheckboxGroupProps {
  name: string;
  id: number;
  checked: boolean;
  onChange: (arg0: any) => any;
}

const CheckboxGroup = React.memo(
  ({ name, id, checked = false, onChange }: ICheckboxGroupProps) => {
    const handleClick = () => {
      onChange({ id, name, isChecked: !checked });
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
);

export { CheckboxGroup };
