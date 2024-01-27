// App.tsx
import React, { useState } from 'react';
import { PressureContext } from './PressureContext';
import Footer from './Footer';
import PhotoList from './Photos';

const App: React.FC = () => {
  const [isHighPressureClicked, setHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setLowPressureClicked] = useState(false);

  const toggleHighPressure = () => {
    setHighPressureClicked(!isHighPressureClicked);
  };

  const toggleLowPressure = () => {
    setLowPressureClicked(!isLowPressureClicked);
  };

  return (
    <PressureContext.Provider value={{ isHighPressureClicked, isLowPressureClicked, toggleHighPressure, toggleLowPressure }}>
      <Footer />
      <PhotoList />
    </PressureContext.Provider>
  );
};

export default App;