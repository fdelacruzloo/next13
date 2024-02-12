// CocinasList.tsx
import React, { useEffect, useState } from "react";
import PhotoList from "@/components/Photos"; // Asegúrate de importar PhotoList desde su ubicación correcta
import { getData } from "@/app/productos/data.js";

type Cocina = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean;
};

interface CocinasComponentProps {
  isHighPressureClicked: boolean;
  isLowPressureClicked: boolean;
}

const CocinasComponent: React.FC<CocinasComponentProps> = ({
  isHighPressureClicked,
  isLowPressureClicked,
}) => {
  const [cocinas, setCocinas] = useState<Cocina[]>([
    {
      id: "p1",
      title: "COCINA DOMESTICA, 4Q+HOR, REGULADOR:SI, 23 mbar, 11.05 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-01.jpg",
      cantidad: 0,
      regulador: true, // Valor para el nuevo campo
    },
    {
      id: "p2",
      title: "COCINA SI, 1Q, REGULADOR:NO, 340 mbar, 15 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-02.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p3",
      title: "COCINA SI, 2Q, REGULADOR:NO, 340 mbar, 24 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-03.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p4",
      title: "COCINA SI, 3Q, REGULADOR:NO, 340 mbar, 34 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-04.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p5",
      title: "COCINA SI, 4Q, REGULADOR:NO, 340 mbar, 45 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-05.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p6",
      title: "COCINA SI, 5Q, REGULADOR:NO, 340 mbar, 55 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-06.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p7",
      title: "COCINA SI, 6Q, REGULADOR:NO, 340 mbar, 65 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-07.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p8",
      title: "COCINA WOK, 1Q, REGULADOR:NO,	340 mbar, 19.9 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-08.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p9",
      title: "COCINA WOK, 2Q, REGULADOR:NO,	340 mbar, 39.8 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-09.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p10",
      title: "COCINA WOK, 3Q, REGULADOR:NO, 340 mbar, 59.7 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-10.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p11",
      title: "COCINA WOK, 4Q, REGULADOR:NO, 340 mbar, 79.60 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-11.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p12",
      title: "COCINA WOK, 5Q, REGULADOR:NO, 340 mbar, 99.5 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-12.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
    {
      id: "p13",
      title: "COCINA WOK, 6Q, REGULADOR:NO, 340 mbar, 119 KW",
      imageUrl:
        "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-13.jpg",
      cantidad: 0,
      regulador: false, // Valor para el nuevo campo
    },
  ]);

// CODIGO MODIFICADO
const incrementarCantidad = (id: string) => {
  setCocinas(
    cocinas.map((cocina) => {
      if (cocina.id === id) {
        const newCantidad = cocina.cantidad + 1;
        localStorage.setItem(id, String(newCantidad)); // Actualiza localStorage cada vez que cantidad cambia
        getData();
        // Imprime las variables kw1 a kw38
        for (let i = 1; i <= 38; i++) {
          const kw = localStorage.getItem(`kw${i}`);
          console.log(`KW${i}: ${kw}`);
        }
        return { ...cocina, cantidad: newCantidad };
      } else {
        return cocina;
      }
    })
  );
};

useEffect(() => {
  // Recupera la cantidad de localStorage cuando se carga la página
  setCocinas((prevCocinas) =>
    prevCocinas.map((cocina) => {
      const storedCantidad = localStorage.getItem(cocina.id);
      if (storedCantidad) {
        return { ...cocina, cantidad: Number(storedCantidad) };
      } else {
        return cocina;
      }
    })
  );
}, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

// Resto del código...

  // Filtra los datos basado en isHighPressureClicked e isLowPressureClicked
  const filteredCocinas = cocinas.filter((cocina) => {
    if (isHighPressureClicked && isLowPressureClicked) {
      return true; // Mostrar todos los objetos
    } else if (isHighPressureClicked) {
      return !cocina.regulador; // Mostrar solo los objetos con regulador=false
    } else if (isLowPressureClicked) {
      return cocina.regulador; // Mostrar solo los objetos con regulador=true
    } else {
      return false; // No mostrar ningún objeto
    }
  });

  // Ahora puedes mapear tus datos filtrados a componentes PhotoList
  const photoListItems = filteredCocinas.map((cocina) => (
    <PhotoList
      key={cocina.id}
      id={cocina.id}
      title={cocina.title}
      imageUrl={cocina.imageUrl}
      regulador={cocina.regulador}
      incrementarCantidad={() => incrementarCantidad(cocina.id)}
      cantidad={cocina.cantidad}
      setCantidad={(id, cantidad) => {}}
    />
  ));

  // Y luego renderizarlos en tu JSX
  return <div className="flex flex-wrap">{photoListItems}</div>;
};

export default CocinasComponent;
