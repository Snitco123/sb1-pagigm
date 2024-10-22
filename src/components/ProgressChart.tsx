import React from 'react';
import { useFitness } from '../context/FitnessContext';

const ProgressChart: React.FC = () => {
  const { weeklyProgress } = useFitness();

  const maxValue = Math.max(...weeklyProgress.map((day) => day.value));
  const getHeight = (value: number) => `${(value / maxValue) * 100}%`;

  return (
    <div className="h-64 flex items-end justify-between">
      {weeklyProgress.map((day, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2"
          style={{ width: '12%' }}
        >
          <div className="w-full bg-gray-100 rounded-full relative" style={{ height: '90%' }}>
            <div
              className="absolute bottom-0 w-full bg-indigo-600 rounded-full transition-all duration-500"
              style={{ height: getHeight(day.value) }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600">{day.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressChart;