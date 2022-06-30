import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { Button } from '@/common/components/ui/button';
import { DropdownGroup } from '@/common/components/ui/dropdownGroup';
import { CheckboxList } from './checkboxList';
import { Navigation } from './navigation';
import {
  getCheckboxes,
  getDropdownParams,
  getUserRole,
} from '@/redux/selectors';
import {
  changeSortDropdown,
  changeYearFilterDropdown,
  changeUserFilterDropdown,
  toggleFilterCheckbox,
  resetFilters,
} from '@/redux/actions';

function Filter() {
  const dispatch = useDispatch();
  const userRole = useSelector(getUserRole);
  const dropdownParams = useSelector(getDropdownParams);
  const checkboxes = useSelector(getCheckboxes);

  return (
    <section className={styles.filter}>
      <p className={styles.headerText}>Фильтры:</p>
      <Button color="black" fullwidth onClick={() => dispatch(resetFilters())}>
        Сбросить все фильтры
      </Button>
      {userRole === 'user' && (
        <div className={styles.dropdownGroup}>
          <DropdownGroup
            text="Показывать:"
            selected=""
            optionsParam={dropdownParams.userFilter}
            onChange={changeUserFilterDropdown}
            fullwidth
          />
        </div>
      )}
      <div className={styles.dropdownGroup}>
        <DropdownGroup
          text="Сортировать по:"
          selected="Популярные по убыванию"
          optionsParam={dropdownParams.sort}
          onChange={changeSortDropdown}
          fullwidth
        />
      </div>
      <div className={styles.dropdownGroup}>
        <DropdownGroup
          text="Год релиза:"
          selected="2020"
          optionsParam={dropdownParams.yearFilter}
          onChange={changeYearFilterDropdown}
          fullwidth
        />
      </div>
      <CheckboxList checkboxes={checkboxes} onChange={toggleFilterCheckbox} />
      <Navigation />
    </section>
  );
}

export { Filter };
