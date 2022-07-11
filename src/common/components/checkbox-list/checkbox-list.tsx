import React from 'react';
import cn from 'classnames';
import styles from './checkbox-list.module.scss';
import { CheckboxGroup } from '@/common/components/ui/checkbox-group';
import { IcheckboxItem } from '@/interfaces';

interface ICheckboxGroup {
  checkboxes: IcheckboxItem[];
  type: string;
  onChange: (arg0: any) => any;
}

const CheckboxList = React.memo(
  ({ checkboxes, type, onChange }: ICheckboxGroup) => {
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
);

export { CheckboxList };
