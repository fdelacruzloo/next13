"use client";
import React, { useState, useEffect } from "react";
import { getCocinas } from "@/app/productos/list";
import PhotoList from "@/components/Photos";

type Cocina = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

const CocinasPage: React.FC = () => {
  const [cocinas, setCocinas] = useState<Cocina[]>([]);
  const [isHighPressureClicked, setIsHighPressureClicked] = useState(false);
  const [isLowPressureClicked, setIsLowPressureClicked] = useState(false);

  useEffect(() => {
    const fetchCocinas = async () => {
      const result = await getCocinas(isHighPressureClicked, isLowPressureClicked);
      setCocinas(result);
    };

    fetchCocinas();
  }, [isHighPressureClicked, isLowPressureClicked]);

  // Filtrar las cocinas basado en los estados de los botones
  const filteredCocinas = cocinas.filter(cocina => {
    if (isHighPressureClicked) {
      return cocina.regulador === false;
    }
    if (isLowPressureClicked) {
      return cocina.regulador === true;
    }
    return true;
  });

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl py-5 flex items-center space-x-4"></div>
      <div className="flex flex-wrap">
        {filteredCocinas.map((cocina) => (
          <PhotoList key={cocina.id} {...cocina} />
        ))}
      </div>
    </div>
  );
};

export default CocinasPage;