// PressureContext.tsx
"use client";
import React from 'react';

export const PressureContext = React.createContext({
  isHighPressureClicked: false,
  isLowPressureClicked: false,
  toggleHighPressure: () => {},
  toggleLowPressure: () => {},
});