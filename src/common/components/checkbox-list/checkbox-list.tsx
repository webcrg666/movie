import React from 'react';
import styles from './checkbox-list.module.scss';
import { CheckboxGroup } from '@/common/components/ui/checkbox-group';
import cn from 'classnames';

interface ICheckboxGroup {
  checkboxes: { id: number; name: string; checked: boolean }[];
  type: string;
  onChange: (arg0: any) => any;
}

function CheckboxList({ checkboxes, type, onChange }: ICheckboxGroup) {
  const combinedClasses = cn(styles.checkboxList, styles[type]);

  return (
    <div className={combinedClasses}>
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
