import React, { useEffect, useState } from 'react';
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

  useEffect(
    () => () => {
      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map(({ id, name }) => ({ id, name, checked: false }))
      );
    },
    []
  );

  const handleCheckboxChange = (e: any) => {
    const updatedCheckboxes = checkboxes;
    const checkbox = updatedCheckboxes.find((item) => item.id === e.id);
    checkbox!.checked = e.isChecked;

    console.log('ewt');

    setCheckboxes([...updatedCheckboxes]);
    setGenres(updatedCheckboxes.filter((item) => item.checked));
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
