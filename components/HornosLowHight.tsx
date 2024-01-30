import React from 'react';
import PhotoList from "@/components/Photos"; // Asegúrate de importar PhotoList desde su ubicación correcta

type Horno = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

interface HornosComponentProps {
  isHighPressureClicked: boolean;
  isLowPressureClicked: boolean;
}

const HORNOS: Horno[] = [

  {
    id: "p16",
    title: "HORNO DOMESTICO, REGULADOR:NO, 340 mbar, 15.5 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-16.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p17",
    title: "HORNO PIZZERO, SIN QUEMADOR, REGULADOR:NO, 340 mbar, 36 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-17.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p18",
    title: "HORNO PASTELERO, SIN QUEMADOR, REGULADOR:NO,	340 mbar, 34 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-18.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p19",
    title: "HORNO MAX 2000, CON QUEMADOR, REGULADOR:SI, 23 mbar, 70.34 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-19.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p20",
    title: "HORNO MAX100	CON QUEMADOR, REGULADOR:SI, 23 mbar, 46.64 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-20.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p21",
    title: "HORNO MAX750	CON QUEMADOR, REGULADOR:SI, 23 mbar, 46.64 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-21.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p22",
    title: "HORNO ARTESANAL, CON QUEMADOR, REGULADOR:SI,	23 mbar, 117 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-22.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p23",
    title: "ROSTICERO O POLLERO,	CON QUEMADOR, REGULADOR:SI, 23 mbar, 20.5 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-23.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p24",
    title: "HORNO PARA CERAMICA,	SIN QUEMADOR, REGULADOR:SI, 23 mbar, 119 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-24.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },


];

const HornosComponent: React.FC<HornosComponentProps> = ({ isHighPressureClicked, isLowPressureClicked }) => {
  // Filtra los datos basado en isHighPressureClicked e isLowPressureClicked
  const filteredHornos = HORNOS.filter(Horno => {
    if (isHighPressureClicked && isLowPressureClicked) {
      return true; // Mostrar todos los objetos
    } else if (isHighPressureClicked) {
      return !Horno.regulador; // Mostrar solo los objetos con regulador=false
    } else if (isLowPressureClicked) {
      return Horno.regulador; // Mostrar solo los objetos con regulador=true
    } else {
      return false; // No mostrar ningún objeto
    }
  });

  // Ahora puedes mapear tus datos filtrados a componentes PhotoList
  const photoListItems = filteredHornos.map(Horno => 
    <PhotoList key={Horno.id} id={Horno.id} title={Horno.title} imageUrl={Horno.imageUrl} regulador={Horno.regulador} />
  );

  // Y luego renderizarlos en tu JSX
  return (
    <div className="flex flex-wrap">
      {photoListItems}
    </div>
  );
};

export default HornosComponent;