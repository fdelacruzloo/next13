"use client";
"use client";
import React, {useEffect, useState } from "react";
import PhotoList from "@/components/Photos";
import { getData } from "@/app/productos/data.js";

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

// Función incrementar cantidad
const incrementarCantidad = (id: string) => {
  setSecadoras(
    secadoras.map((secadora) => {
      if (secadora.id === id) {
        const newCantidad = secadora.cantidad + 1;
        localStorage.setItem(id, String(newCantidad)); // Actualiza localStorage cada vez que cantidad cambia
        getData();
        // Imprime las variables kw1 a kw38
        for (let i = 1; i <= 38; i++) {
          const kw = localStorage.getItem(`kw${i}`);
          console.log(`KW${i}: ${kw}`);
        }
        return { ...secadora, cantidad: newCantidad };
      } else {
        return secadora;
      }
    })
  );
};

// Función decrementar cantidad
const decrementarCantidad = (id: string) => {
  setSecadoras(
    secadoras.map((secadora) => {
      if (secadora.id === id && secadora.cantidad > 0) {
        const newCantidad = secadora.cantidad - 1;
        localStorage.setItem(id, String(newCantidad)); // Actualiza localStorage cada vez que cantidad cambia
        getData();
        // Imprime las variables kw1 a kw38
        for (let i = 1; i <= 38; i++) {
          const kw = localStorage.getItem(`kw${i}`);
          console.log(`KW${i}: ${kw}`);
        }
        return { ...secadora, cantidad: newCantidad };
      } else {
        return secadora;
      }
    })
  );
};

useEffect(() => {
  // Recupera la cantidad de localStorage cuando se carga la página
  setSecadoras((prevSecadoras) =>
    prevSecadoras.map((secadora) => {
      const storedCantidad = localStorage.getItem(secadora.id);
      if (storedCantidad) {
        return { ...secadora, cantidad: Number(storedCantidad) };
      } else {
        return secadora;
      }
    })
  );
}, []); // Dependencias vacías para que se ejecute solo una vez al montar el componente

// Resto del código...

// Filtra los datos basado en isHighPressureClicked e isLowPressureClicked
const filteredSecadoras = secadoras.filter((secadora) => {
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
const photoListItems = filteredSecadoras.map((secadora) => (
  <PhotoList
    key={secadora.id}
    id={secadora.id}
    title={secadora.title}
    imageUrl={secadora.imageUrl}
    regulador={secadora.regulador}
    incrementarCantidad={() => incrementarCantidad(secadora.id)}
    decrementarCantidad={() => decrementarCantidad(secadora.id)}
    cantidad={secadora.cantidad}
    setCantidad={(id, cantidad) => {}}
  />
));

// Y luego renderizarlos en tu JSX
return <div className="flex flex-wrap">{photoListItems}</div>;
};

export default SecadorasPage;