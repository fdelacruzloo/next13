//FreidorasList.tsx
import React, {useEffect, useState } from "react";
import PhotoList from "@/components/Photos"; // Asegúrate de importar PhotoList desde su ubicación correcta
import { getData } from "@/app/productos/data.js";

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

  // Función incrementar cantidad
const incrementarCantidad = (id: string) => {
  setFreidoras(
    freidoras.map((freidora) => {
      if (freidora.id === id) {
        const newCantidad = freidora.cantidad + 1;
        localStorage.setItem(id, String(newCantidad)); // Actualiza localStorage cada vez que cantidad cambia
        getData();
        // Imprime las variables kw1 a kw38
        for (let i = 1; i <= 38; i++) {
          const kw = localStorage.getItem(`kw${i}`);
          console.log(`KW${i}: ${kw}`);
        }
        return { ...freidora, cantidad: newCantidad };
      } else {
        return freidora;
      }
    })
  );
};

// Función decrementar cantidad
const decrementarCantidad = (id: string) => {
  setFreidoras(
    freidoras.map((freidora) => {
      if (freidora.id === id && freidora.cantidad > 0) {
        const newCantidad = freidora.cantidad - 1;
        localStorage.setItem(id, String(newCantidad)); // Actualiza localStorage cada vez que cantidad cambia
        getData();
        // Imprime las variables kw1 a kw38
        for (let i = 1; i <= 38; i++) {
          const kw = localStorage.getItem(`kw${i}`);
          console.log(`KW${i}: ${kw}`);
        }
        return { ...freidora, cantidad: newCantidad };
      } else {
        return freidora;
      }
    })
  );
};

useEffect(() => {
  // Recupera la cantidad de localStorage cuando se carga la página
  setFreidoras((prevFreidoras) =>
    prevFreidoras.map((freidora) => {
      const storedCantidad = localStorage.getItem(freidora.id);
      if (storedCantidad) {
        return { ...freidora, cantidad: Number(storedCantidad) };
      } else {
        return freidora;
      }
    })
  );
}, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

// Resto del código...

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
    incrementarCantidad={() => incrementarCantidad(freidora.id)}
    decrementarCantidad={() => decrementarCantidad(freidora.id)}
    cantidad={freidora.cantidad}
    setCantidad={(id, cantidad) => {}}
  />
));

// Y luego renderizarlos en tu JSX
return <div className="flex flex-wrap">{photoListItems}</div>;
};

export default FreidorasComponent;