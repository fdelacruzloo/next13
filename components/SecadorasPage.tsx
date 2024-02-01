"use client";
import React, { useState } from "react";
import PhotoList from "@/components/Photos";

type Secadora = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

interface SecadorasPageProps {
  isHighPressureClicked: boolean;
  isLowPressureClicked: boolean;
}

const SecadorasPage: React.FC<SecadorasPageProps> = ({ isHighPressureClicked, isLowPressureClicked }) => {
  const [secadoras, setSecadoras] = useState<Secadora[]>([
    // Aquí van tus objetos Secadora
    // ...
  ]);

  const incrementarCantidad = (id: string) => {
    setSecadoras(secadoras.map(secadora => 
      secadora.id === id ? { ...secadora, cantidad: secadora.cantidad + 1 } : secadora
    ));
  };

  const filteredSecadoras = secadoras.filter(secadora => {
    if (isHighPressureClicked && isLowPressureClicked) {
      return true;
    } else if (isHighPressureClicked) {
      return !secadora.regulador;
    } else if (isLowPressureClicked) {
      return secadora.regulador;
    } else {
      return false;
    }
  });

  const photoListItems = filteredSecadoras.map(secadora => 
    <PhotoList key={secadora.id} id={secadora.id} title={secadora.title} imageUrl={secadora.imageUrl} regulador={secadora.regulador} />
  );

  return (
    <div className="flex flex-wrap">
      {photoListItems}
    </div>
  );
};

export default SecadorasPage;