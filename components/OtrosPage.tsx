"use client";
import React, { useState, useEffect } from "react";
import OtrosComponent from "./OtrosList";
import Footer from "./Footer";

const OtrosPage: React.FC = () => {

  const [isHighPressureClicked, setHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setLowPressureClicked] = useState(false);

  return (
    <div className="flex items-center justify-center"> 
      <div className="flex-grow w-full flex flex-col items-center justify-between"> 
        <div className="flex flex-col items-center mt-10 text-2xl py-5 space-x-4">
          <OtrosComponent
            isHighPressureClicked={isHighPressureClicked}
            isLowPressureClicked={isLowPressureClicked}
          />
        </div>
      </div>
      <div className="fixed w-full bg-white bottom-0 z-50 ">
        <Footer
          isHighPressureClicked={isHighPressureClicked}
          isLowPressureClicked={isLowPressureClicked}
          setHighPressureClicked={setHighPressureClicked}
          setLowPressureClicked={setLowPressureClicked}
        />
      </div>
    </div>
);
};

export default OtrosPage;