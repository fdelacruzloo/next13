import React from 'react';
import PhotoList from "@/components/Photos"; // Asegúrate de importar PhotoList desde su ubicación correcta

type Secadora = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

interface SecadorasComponentProps {
  isHighPressureClicked: boolean;
  isLowPressureClicked: boolean;
}

const SECADORAS: Secadora[] = [

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
];

const SecadorasComponent: React.FC<SecadorasComponentProps> = ({ isHighPressureClicked, isLowPressureClicked }) => {
  // Filtra los datos basado en isHighPressureClicked e isLowPressureClicked
  const filteredSecadoras = SECADORAS.filter(secadora => {
    if (isHighPressureClicked && isLowPressureClicked) {
      return true; // Mostrar todos los objetos
    } else if (isHighPressureClicked) {
      return !secadora.regulador; // Mostrar solo los objetos con regulador=false
    } else if (isLowPressureClicked) {
      return secadora.regulador; // Mostrar solo los objetos con regulador=true
    } else {
      return false; // No mostrar ningún objeto
    }
  });

  // Ahora puedes mapear tus datos filtrados a componentes PhotoList
  const photoListItems = filteredSecadoras.map(secadora => 
    <PhotoList key={secadora.id} id={secadora.id} title={secadora.title} imageUrl={secadora.imageUrl} regulador={secadora.regulador} />
  );

  // Y luego renderizarlos en tu JSX
  return (
    <div className="flex flex-wrap">
      {photoListItems}
    </div>
  );
};

export default SecadorasComponent;