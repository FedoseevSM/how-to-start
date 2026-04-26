import React from 'react';
interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}
export function ProgressIndicator({
  currentStep,
  totalSteps,
  onStepClick
}: ProgressIndicatorProps) {
  return (
    <div className="w-full flex flex-col gap-2 mb-6">
      <div className="flex justify-between items-center text-xs font-medium text-gray-400 mb-1">
        <span>Старт</span>
        <span>Финиш</span>
      </div>
      <div className="flex gap-1 h-2 w-full">
        {Array.from({
          length: totalSteps
        }).map((_, index) =>
        <button
          key={index}
          onClick={() => onStepClick(index)}
          aria-label={`Перейти к этапу ${index + 1}`}
          className={`flex-1 rounded-full transition-all duration-300 ${index <= currentStep ? 'bg-orange-500' : 'bg-gray-700'} ${index === currentStep ? 'ring-2 ring-orange-300 ring-opacity-50' : ''}`} />

        )}
      </div>
      <div className="text-center mt-2 text-sm font-semibold text-orange-500">
        Этап {currentStep + 1} из {totalSteps}
      </div>
    </div>);

}