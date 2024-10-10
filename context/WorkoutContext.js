import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]); // Aloita tyhjällä listalla

  const [unit, setUnit] = useState('kilometers');

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, unit, setUnit }}>
      {children}
    </WorkoutContext.Provider>
  );
};
