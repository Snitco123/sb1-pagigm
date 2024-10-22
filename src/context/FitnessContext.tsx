import React, { createContext, useContext, ReactNode } from 'react';

interface FitnessContextType {
  todayStats: {
    calories: number;
    activeMinutes: number;
    steps: number;
    avgHeartRate: number;
  };
  weeklyProgress: Array<{ label: string; value: number }>;
}

const FitnessContext = createContext<FitnessContextType | undefined>(undefined);

export const FitnessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Mock data - In a real app, this would come from an API or local storage
  const value = {
    todayStats: {
      calories: 847,
      activeMinutes: 95,
      steps: 8432,
      avgHeartRate: 72,
    },
    weeklyProgress: [
      { label: 'Mon', value: 65 },
      { label: 'Tue', value: 80 },
      { label: 'Wed', value: 45 },
      { label: 'Thu', value: 90 },
      { label: 'Fri', value: 75 },
      { label: 'Sat', value: 85 },
      { label: 'Sun', value: 60 },
    ],
  };

  return (
    <FitnessContext.Provider value={value}>
      {children}
    </FitnessContext.Provider>
  );
};

export const useFitness = () => {
  const context = useContext(FitnessContext);
  if (context === undefined) {
    throw new Error('useFitness must be used within a FitnessProvider');
  }
  return context;
};