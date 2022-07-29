import React, { useState } from 'react';
import { CheckboxList } from '@/common/components/checkbox-list';
import { CHECKBOXES } from '@/settings/filter';
import { Button } from '@/common/components/ui/button';
import styles from './genre.module.scss';
import { IcheckboxItem } from '@/interfaces';

interface IGenreProps {
  genres: IcheckboxItem[];
  setGenres: (arg0: IcheckboxItem[]) => void;
  onNextButtonClick: () => void;
}

function Genre({ genres, setGenres, onNextButtonClick }: IGenreProps) {
  const [checkboxes, setCheckboxes] = useState([...CHECKBOXES]);

  const handleCheckboxChange = (e: any) => {
    const updatedCheckboxes = checkboxes.map(({ id, name, checked }) => {
      const isModified = id === e.id;

      return { id, name, checked: isModified ? e.isChecked : checked };
    });

    setCheckboxes(updatedCheckboxes);
    setGenres(updatedCheckboxes.filter((item) => item.checked));

    // [...updatedCheckboxes]);
  };

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

export { Genre };
