// Header.tsx
"use client";
import React, { useState } from "react";
import Button from "./Button";

const Header: React.FC = () => {
  const [isHighPressureClicked, setHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setLowPressureClicked] = useState(false);

  return (
    <header className="py-5 flex flex-col items-center justify-center fixed w-full top-0 bg-white z-50">
      <h1 className="text-2xl text-center mb-4">Gasodomésticos</h1>
      <div className="flex space-x-1">
        <Button
          name="Alta Presión"
          onClick={() => setHighPressureClicked(!isHighPressureClicked)}      
          className={isHighPressureClicked ? "bg-gray-400" : ""}
        />
        <Button
          name="Baja Presión"
          onClick={() => setLowPressureClicked(!isLowPressureClicked)}
          className={isLowPressureClicked ? "bg-gray-400" : ""}
        />
      </div>
    </header>
  );
};

export default Header;