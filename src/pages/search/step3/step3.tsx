import React from 'react';
import { Button } from '@/common/components/ui/button';
import styles from '../quiz-buttons.module.scss';

function Step3({ setPopularity, onNextButtonClick }) {
  const handleLowButtonClick = () => {
    setPopularity('low');
    onNextButtonClick();
  };

  const handleHighButtonClick = () => {
    setPopularity('high');
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

export { Step3 };
