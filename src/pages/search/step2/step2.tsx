import React from 'react';
import { Button } from '@/common/components/ui/button';

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
      <Button color="black" onClick={handleLowButtonClick}>
        LOW
      </Button>
      <Button color="black" onClick={handleHighButtonClick}>
        High
      </Button>
    </div>
  );
}

export { Step2 };
