import React, { useCallback } from 'react';
import styles from './checkbox-group.module.scss';

interface ICheckboxGroupProps {
  name: string;
  id: number;
  checked: boolean;
  onChange: (arg0: any) => any;
}

const CheckboxGroup = React.memo(
  ({ name, id, checked = false, onChange }: ICheckboxGroupProps) => {
    const handleClick = useCallback(() => {
      onChange({ id, name, isChecked: !checked });
    }, [checked, id, name, onChange]);

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
