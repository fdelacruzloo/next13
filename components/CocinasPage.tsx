"use client";
import React, { useState, useEffect } from "react";
import CocinasComponent from "@/components/CocinasLowHight";
import Button from "./Button";

const CocinasPage: React.FC = () => {

  const [isHighPressureClicked, setHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setLowPressureClicked] = useState(false);

  return (
    <div className="flex-grow w-full flex flex-col items-center">
      <header className="py-5 flex flex-col items-center justify-center fixed w-full bottom-0 bg-white z-50">  {/*top-0*/}
                
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

      <div className="flex flex-col items-center mt-4">
        <div className="text-2xl py-5 flex items-center space-x-4"></div>

        <CocinasComponent
        isHighPressureClicked={isHighPressureClicked}
        isLowPressureClicked={isLowPressureClicked}
      />

      </div>
    </div>
  );
};

export default CocinasPage;
