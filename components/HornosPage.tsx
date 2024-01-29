"use client";
import React, { useState, useEffect } from "react";
import { getHornos } from "@/app/productos/list";
import HornosComponent from "@/components/HornosLowHight";
import Button from "./Button";

type Horno = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

const HornosPage: React.FC = () => {
  const [hornos, setHornos] = useState<Horno[]>([]);
  const [isHighPressureClicked, setHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setLowPressureClicked] = useState(false);

  useEffect(() => {
    const fetchHornos = async () => {
      const result = await getHornos();
      setHornos(result);
    };

    fetchHornos();
  }, []);

  return (
    <div className="flex-grow w-full flex flex-col items-center">
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

      <div className="flex flex-col items-center">
        <div className="text-2xl py-5 flex items-center space-x-4"></div>

        <HornosComponent
        isHighPressureClicked={isHighPressureClicked}
        isLowPressureClicked={isLowPressureClicked}
      />

      </div>
    </div>
  );
};

export default HornosPage;
