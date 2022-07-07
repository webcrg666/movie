import React from 'react';
import { Button } from '@/common/components/ui/button';
import styles from '../quiz-buttons.module.scss';

function Step2({ setReview, onNextButtonClick }) {
  const handleLowButtonClick = () => {
    setReview('low');
    onNextButtonClick();
  };

  const handleHighButtonClick = () => {
    setReview('high');
    onNextButtonClick();
  };

  return (
    <div>
      <h1>Шаг 2: выберите оценку</h1>
      <div className={styles.buttonWrapper}>
        <Button color="black" fullwidth onClick={handleLowButtonClick}>
          Низкая
        </Button>
        <Button color="green" fullwidth onClick={handleHighButtonClick}>
          Высокая
        </Button>
      </div>
    </div>
  );
}

export { Step2 };
