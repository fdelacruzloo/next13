"use client";
import React, { useState, useEffect } from "react";
import SecadorasComponent from "./SecadorasList";
import Footer from "./Footer";

const SecadorasPage: React.FC = () => {

  const [isHighPressureClicked, setHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setLowPressureClicked] = useState(false);

  return (
    <div className="flex-grow w-full flex flex-col items-center">
    <Footer
      isHighPressureClicked={isHighPressureClicked}
      isLowPressureClicked={isLowPressureClicked}
      setHighPressureClicked={setHighPressureClicked}
      setLowPressureClicked={setLowPressureClicked}
    />
    <div className="flex flex-col items-center mt-10 text-2xl py-5 space-x-4">
      <SecadorasComponent
        isHighPressureClicked={isHighPressureClicked}
        isLowPressureClicked={isLowPressureClicked}
      />
    </div>
  </div>
);
};

export default SecadorasPage;