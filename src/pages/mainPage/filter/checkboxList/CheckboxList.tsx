import React from 'react';
import styles from './CheckboxList.module.css';
import { CheckboxGroup } from '@/components/UI/checkboxGroup';

interface ICheckboxGroup {
  checkboxes: { id: number; name: string; checked: boolean }[];
  onChange: (arg0: any) => any;
}

function CheckboxList({ checkboxes, onChange }: ICheckboxGroup) {
  return (
    <div className={styles.checkboxList}>
      {checkboxes.map(({ id, name, checked }) => (
        <CheckboxGroup
          name={name}
          id={id}
          key={id}
          checked={checked}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export { CheckboxList };
