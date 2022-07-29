import React from 'react';
import { Button } from '@/common/components/ui/button';
import styles from '../quiz-buttons.module.scss';
import { POPULARITY_VARIANTS } from '@/settings/filter';

interface IPopularityProps {
  setPopularity: (arg0: string) => void;
  onNextButtonClick: () => void;
}

function Popularity({ setPopularity, onNextButtonClick }: IPopularityProps) {
  const handleLowButtonClick = () => {
    setPopularity(POPULARITY_VARIANTS.LOW);
    onNextButtonClick();
  };

  const handleHighButtonClick = () => {
    setPopularity(POPULARITY_VARIANTS.HIGH);
    onNextButtonClick();
  };

  return (
    <div>
      <h1>Шаг 3: Этот фильм</h1>
      <div className={styles.buttonWrapper}>
        <Button color="black" fullwidth onClick={handleLowButtonClick}>
          Неизвестный
        </Button>
        <Button color="green" fullwidth onClick={handleHighButtonClick}>
          Популярный
        </Button>
      </div>
    </div>
  );
}

export { Popularity };
