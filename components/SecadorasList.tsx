"use client";
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

    {
      id: "p25",
      title: "SECADORA DOMESTICA, REGULADOR:SI, 23 mbar, 7.2 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-25.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },
    {
      id: "p26",
      title: "SECADORA INDUSTRIAL, REGULADOR:SI, 23 mbar, 20 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-26.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },

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