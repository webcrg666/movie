import React, { useCallback, useState } from 'react';
import styles from './search.module.scss';
import { Genre } from './genre';
import { Rating } from './rating';
import { Popularity } from './popularity';
import { Final } from './final';
import { IcheckboxItem } from '@/interfaces';

function Search() {
  const [currentStep, setCurrentStep] = useState(1);
  const [genres, setGenres] = useState<IcheckboxItem[]>([]);
  const [rating, setRating] = useState('');
  const [popularity, setPopularity] = useState('');

  const handleNextStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
  }, []);

  return (
    <div className="container">
      <div className={styles.quizWrapper}>
        {currentStep === 1 && (
          <Genre
            genres={genres}
            setGenres={setGenres}
            onNextButtonClick={handleNextStep}
          />
        )}
        {currentStep === 2 && (
          <Rating setRating={setRating} onNextButtonClick={handleNextStep} />
        )}
        {currentStep === 3 && (
          <Popularity
            setPopularity={setPopularity}
            onNextButtonClick={handleNextStep}
          />
        )}
        {currentStep === 4 && (
          <Final genres={genres} rating={rating} popularity={popularity} />
        )}
      </div>
    </div>
  );
}

export { Search };
