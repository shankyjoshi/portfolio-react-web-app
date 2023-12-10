import { useState } from "react";

export function useMultistepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function back() {
    if (currentStepIndex === 0) {
      return;
    }
    setCurrentStepIndex((prevCurrentStepIndex) => prevCurrentStepIndex - 1);
  }

  function next() {
    if (currentStepIndex === steps.length - 1) {
      return;
    }
    setCurrentStepIndex((prevCurrentStepIndex) => prevCurrentStepIndex + 1);
  }

  function goto(stepIndex) {
    setCurrentStepIndex(stepIndex);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    back,
    next,
    goto,
  };
}
