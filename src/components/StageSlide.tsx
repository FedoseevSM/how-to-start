import React from 'react';
import { BoxIcon } from 'lucide-react';
interface StageSlideProps {
  title: string;
  description: string;
  icon: BoxIcon;
  stageNumber: number;
  isActive: boolean;
}
export function StageSlide({
  title,
  description,
  icon: Icon,
  stageNumber,
  isActive
}: StageSlideProps) {
  if (!isActive) return null;
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-right-4 duration-300 w-full">
      <div className="relative mb-8 mt-4">
        <div className="absolute inset-0 bg-orange-500 blur-xl opacity-20 rounded-full"></div>
        <div className="relative bg-gray-900 border-4 border-orange-500 rounded-full p-6 shadow-lg shadow-orange-500/20">
          <Icon className="w-12 h-12 text-orange-500" />
        </div>
        <div className="absolute -bottom-3 -right-3 bg-white text-orange-600 font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-orange-500 shadow-sm">
          {stageNumber}
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed max-w-md">
        {description}
      </p>
    </div>);

}