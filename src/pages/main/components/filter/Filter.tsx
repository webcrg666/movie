import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './filter.module.scss';
import { Button } from '@/common/components/ui/button';
import { DropdownGroup } from '@/common/components/ui/dropdown-group';
import { CheckboxList } from '../../../../common/components/checkbox-list';
import { Navigation } from './navigation';
import {
  getCheckboxes,
  getDropdownParams,
  getUserRole,
} from '@/redux/selectors';
import { IcheckboxItem } from '@/interfaces';
import { filterSlice } from '@/redux/reducers/filterSlice';

function Filter() {
  const dispatch = useDispatch();
  const userRole = useSelector(getUserRole);
  const dropdownParams = useSelector(getDropdownParams);
  const checkboxes = useSelector(getCheckboxes);
  const {
    changeSortDropdown,
    changeFilterDropdown,
    toggleFilterCheckbox,
    resetFilters,
  } = filterSlice.actions;

  const handleResetButtonClick = React.useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  const handleCheckboxClick = useCallback(
    (e: IcheckboxItem) => {
      dispatch(toggleFilterCheckbox(e));
    },
    [dispatch]
  );

  return (
    <section className={styles.filter}>
      <p className={styles.headerText}>Фильтры:</p>
      <Button color="black" fullwidth onClick={handleResetButtonClick}>
        Сбросить все фильтры
      </Button>
      {userRole === 'user' && (
        <div className={styles.dropdownGroup}>
          <DropdownGroup
            text="Показывать:"
            selected=""
            optionsParam={dropdownParams.userFilter}
            onChange={changeFilterDropdown}
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
          onChange={changeFilterDropdown}
          fullwidth
        />
      </div>
      <CheckboxList checkboxes={checkboxes} onChange={handleCheckboxClick} />
      <Navigation />
    </section>
  );
}

export { Filter };
