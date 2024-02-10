// Footer.tsx
"use client";
import React from "react";
import Button from "./Button";

interface FooterProps {
  isHighPressureClicked: boolean;
  isLowPressureClicked: boolean;
  setHighPressureClicked: (value: boolean) => void;
  setLowPressureClicked: (value: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({
  isHighPressureClicked,
  isLowPressureClicked,
  setHighPressureClicked,
  setLowPressureClicked,
}) => {
  return (
    <footer className="flex flex-col items-center justify-center botton-10 bg-white">
      {/*flex flex-col items-center justify-center fixed w-full bottom-0 bg-white z-100*/}

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
    </footer>
  );
};

export default Footer;
