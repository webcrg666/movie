import React, { useCallback, useState } from 'react';
import { CheckboxList } from '@/common/components/checkbox-list';
import { CHECKBOXES } from '@/settings/filter';
import { Button } from '@/common/components/ui/button';
import styles from './step1.module.scss';

function Step1({ genres, setGenres, onNextButtonClick }) {
  const [checkboxes, setCheckboxes] = useState(CHECKBOXES);

  const handleCheckboxChange = useCallback((e) => {
    const updatedCheckboxes = checkboxes;
    const checkbox = updatedCheckboxes.find((item) => item.id === e.id);
    checkbox!.checked = e.isChecked;

    setCheckboxes([...updatedCheckboxes]);
    setGenres(updatedCheckboxes.filter((item) => item.checked));
  }, []);

  console.log();

  return (
    <div>
      <h1>Шаг 1: выберите жанр</h1>
      <CheckboxList
        checkboxes={checkboxes}
        type="typeFlex"
        onChange={handleCheckboxChange}
      />
      <div className={styles.buttonWrapper}>
        <Button
          color="black"
          onClick={onNextButtonClick}
          disabled={genres.length === 0}
        >
          Дальше
        </Button>
      </div>
    </div>
  );
}

export { Step1 };
