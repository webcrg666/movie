import React, { useState } from 'react';
import styles from './search.module.scss';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';

function Search() {
  const [currentStep, setCurrentStep] = useState(1);
  const [genres, setGenres] = useState([]);
  const [review, setReview] = useState('');
  const [popularity, setPopularity] = useState('');

  const onNextButtonClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  console.log(styles);

  console.log(genres, review, popularity);

  return (
    <div className="container">
      <div className={styles.quizWrapper}>
        {currentStep === 1 && (
          <Step1
            genres={genres}
            setGenres={setGenres}
            onNextButtonClick={onNextButtonClick}
          />
        )}
        {currentStep === 2 && (
          <Step2 setReview={setReview} onNextButtonClick={onNextButtonClick} />
        )}
        {currentStep === 3 && (
          <Step3
            setPopularity={setPopularity}
            onNextButtonClick={onNextButtonClick}
          />
        )}
        {currentStep === 4 && (
          <Step4 genres={genres} review={review} popularity={popularity} />
        )}
      </div>
    </div>
  );
}

export { Search };
