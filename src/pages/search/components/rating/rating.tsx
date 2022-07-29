import React from 'react';
import { Button } from '@/common/components/ui/button';
import { RATING_VARIANTS } from '@/settings/filter';
import styles from '../quiz-buttons.module.scss';

interface IRatingProps {
  setRating: (arg0: string) => void;
  onNextButtonClick: () => void;
}

function Rating({ setRating, onNextButtonClick }: IRatingProps) {
  const handleLowButtonClick = () => {
    setRating(RATING_VARIANTS.LOW);
    onNextButtonClick();
  };

  const handleHighButtonClick = () => {
    setRating(RATING_VARIANTS.HIGH);
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

export { Rating };
