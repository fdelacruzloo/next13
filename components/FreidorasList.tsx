//FreidorasList.tsx
import React, { useState } from "react";
import PhotoList from "@/components/Photos"; // Asegúrate de importar PhotoList desde su ubicación correcta

type Freidora = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

interface FreidorasComponentProps {
  isHighPressureClicked: boolean;
  isLowPressureClicked: boolean;
}

const FreidorasComponent: React.FC<FreidorasComponentProps> = ({
  isHighPressureClicked,
  isLowPressureClicked,
}) => {
  const [freidoras, setFreidoras] = useState<Freidora[]>([
    {
      id: "p14",
      title: "FREIDORA DE ALTA, QUEMADOR, REGULADOR:NO, 340 mbar, 25 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-14.jpg",
      cantidad: 0,
      regulador: false,
    },
    {
      id: "p15",
      title: "FREIDORA DE BAJA, FLAUTA, REGULADOR:SI, 23 mbar, 20 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-15.jpg",
      cantidad: 0,
      regulador: true,
    },
  ]);

  const incrementarCantidad = (id: string) => {
    setFreidoras(
      freidoras.map((freidora) =>
        freidora.id === id
          ? { ...freidora, cantidad: freidora.cantidad + 1 }
          : freidora
      )
    );
  };

  // Filtra los datos basado en isHighPressureClicked e isLowPressureClicked
  const filteredFreidoras = freidoras.filter((freidora) => {
    if (isHighPressureClicked && isLowPressureClicked) {
      return true; // Mostrar todos los objetos
    } else if (isHighPressureClicked) {
      return !freidora.regulador; // Mostrar solo los objetos con regulador=false
    } else if (isLowPressureClicked) {
      return freidora.regulador; // Mostrar solo los objetos con regulador=true
    } else {
      return false; // No mostrar ningún objeto
    }
  });

  // Ahora puedes mapear tus datos filtrados a componentes PhotoList
  const photoListItems = filteredFreidoras.map((freidora) => (
    <PhotoList
      key={freidora.id}
      id={freidora.id}
      title={freidora.title}
      imageUrl={freidora.imageUrl}
      regulador={freidora.regulador}
      incrementarCantidad={incrementarCantidad}
    />
  ));

  // Y luego renderizarlos en tu JSX
  return <div className="flex flex-wrap">{photoListItems}</div>;
};

export default FreidorasComponent;
