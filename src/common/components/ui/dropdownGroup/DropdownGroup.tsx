import React from 'react';
import { DropdownTitle } from '@/common/components/ui/dropdownTitle';
import { Dropdown } from '@/common/components/ui/dropdown';
import { IoptionsParam } from '@/interfaces';

interface IDropdownGroup {
  text: string;
  selected: string;
  optionsParam: IoptionsParam[];
  fullwidth: boolean;
  disabled?: boolean;
  onChange: (arg0: any) => any;
}

function DropdownGroup({
  text,
  selected,
  optionsParam,
  fullwidth,
  disabled,
  onChange,
}: IDropdownGroup) {
  return (
    <>
      <DropdownTitle text={text} />
      <Dropdown
        selected={selected}
        optionsParam={optionsParam}
        fullwidth={fullwidth}
        disabled={disabled}
        onChange={onChange}
      />
    </>
  );
}

export { DropdownGroup };
