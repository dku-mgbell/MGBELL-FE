import { useState } from 'react';

export default function useGuideLayout({
  totalSteps,
  onComplete,
}: {
  totalSteps: number;
  onComplete: () => void;
}) {
  const [currentStep, setCurrentContentIndex] = useState(0);

  const handleNextButtonClick = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentContentIndex(currentStep + 1);
      return;
    }
    onComplete();
  };

  return {
    currentStep,
    handleNextButtonClick,
  };
}
