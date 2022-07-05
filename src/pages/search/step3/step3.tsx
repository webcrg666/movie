import React from 'react';
import { Button } from '@/common/components/ui/button';

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
      <Button color="black" onClick={handleLowButtonClick}>
        LOW
      </Button>
      <Button color="black" onClick={handleHighButtonClick}>
        High
      </Button>
    </div>
  );
}

export { Step3 };
