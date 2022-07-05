import React, { useState } from 'react';
import styles from './search.module.scss';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';

function Search() {
  const [currentStep, setCurrentStep] = useState(1);
  const [genres, setGenres] = useState([
    { id: 99, name: 'документальный', checked: true },
    { id: 10751, name: 'семейный', checked: true },
    { id: 27, name: 'ужасы', checked: true },
    { id: 878, name: 'фантастика', checked: true },
  ]);
  const [review, setReview] = useState('low');
  const [popularity, setPopularity] = useState('low');

  const onNextButtonClick = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  console.log(styles);

  console.log(genres, review, popularity);

  return (
    <div className="container">
      <div className={styles.quizWrapper}>
        {currentStep === 1 ? (
          <Step1
            genres={genres}
            setGenres={setGenres}
            onNextButtonClick={onNextButtonClick}
          />
        ) : null}
        {currentStep === 2 ? (
          <Step2 setReview={setReview} onNextButtonClick={onNextButtonClick} />
        ) : null}
        {currentStep === 3 ? (
          <Step3
            setPopularity={setPopularity}
            onNextButtonClick={onNextButtonClick}
          />
        ) : null}
        {currentStep === 4 ? (
          <Step4 genres={genres} review={review} popularity={popularity} />
        ) : null}
      </div>
    </div>
  );
}

export { Search };
