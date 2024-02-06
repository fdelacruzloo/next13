//HornosList.jsx
import React, { useState } from 'react';
import PhotoList from "@/components/Photos";

type Otro = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

interface OtrosComponentProps {
  isHighPressureClicked: boolean;
  isLowPressureClicked: boolean;
}

const OtrosComponent: React.FC<OtrosComponentProps> = ({ isHighPressureClicked, isLowPressureClicked }) => {
  const [otros, setOtros] = useState<Otro[]>([

    {
      id: "p27",
      title: "EQUIPO MIXTO, REGULADOR:NO, 340 mbar, 45 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-27.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p28",
      title: "BROSTERA, REGULADOR:NO, 340 mbar, 20 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-28.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p29",
      title: "PLANCHAS, REGULADOR:NO, 340 mbar, 20 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-29.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p30",
      title: "QUEMADOR, REGULADOR:SI, 23 mbar, 117 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-30.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },
    {
      id: "p31",
      title: "CALENTADOR DE PSCINA, 140, REGULADOR:SI, 23 mbar, 71.8 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-31.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },
    {
      id: "p32",
      title: "CALENTADOR DE PSCINA, 350, REGULADOR:SI, 23 mbar, 117.62 K",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-32.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },
    {
      id: "p33",
      title: "CALENTADOR DE PSCINA, 750, REGULADOR:SI, 23 mbar, 331 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-33.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },
    {
      id: "p34",
      title: "OLLA ARROCERA, REGULADOR:SI,	23 mbar, 10.05 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-34.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },
    {
      id: "p35",
      title: "FORNILLON, REGULADOR:NO, 340 mbar, 50 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-35.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p36",
      title: "GRATINADOR, REGULADOR:NO, 340 mbar, 22 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-36.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p37",
      title: "SALAMANDRA, REGULADOR:NO, 340 mbar, 25 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-37.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p38",
      title: "BUFETERA, REGULADOR:NO, 340 mbar, 36 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-38.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    }, 

  ]);

  const incrementarCantidad = (id: string) => {
    setOtros(otros.map(otro => 
      otro.id === id ? { ...otro, cantidad: otro.cantidad + 1 } : otro
    ));
  };

  const filteredOtros = otros.filter(otro => {
    if (isHighPressureClicked && isLowPressureClicked) {
      return true;
    } else if (isHighPressureClicked) {
      return !otro.regulador;
    } else if (isLowPressureClicked) {
      return otro.regulador;
    } else {
      return false;
    }
  });

  const photoListItems = filteredOtros.map(otro => 
    <PhotoList key={otro.id} id={otro.id} title={otro.title} imageUrl={otro.imageUrl} regulador={otro.regulador} />
  );

  return (
    <div className="flex flex-wrap">
      {photoListItems}
    </div>
  );
};

export default OtrosComponent;