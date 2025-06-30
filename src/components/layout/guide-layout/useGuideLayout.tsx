import { useState } from 'react';

export default function useGuideLayout({
  totalSteps,
  onComplete,
}: {
  totalSteps: number;
  onComplete: () => void;
}) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const handleNextButtonClick = () => {
    if (currentContentIndex < totalSteps - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
      return;
    }
    onComplete();
  };

  return {
    currentContentIndex,
    handleNextButtonClick,
  };
}
