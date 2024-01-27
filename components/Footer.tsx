// Footer.tsx
"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const Footer: React.FC = () => {
  const [isHighPressureClicked, setHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setLowPressureClicked] = useState(false);

  console.log(`isHighPressureClicked: ${isHighPressureClicked}, isLowPressureClicked: ${isLowPressureClicked}`);
 
  return (
    <footer className="py-5 flex justify-center space-x-4 fixed inset-x-0 bottom-0 bg-white">
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
    </footer>
  );
};

export default Footer;