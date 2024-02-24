//Photos.tsx
"use client";
import React, { useEffect } from "react"; // Asegúrate de importar useEffect
import Image from "next/image";

interface PhotoListProps {
  id: string;
  title: string;
  imageUrl: string;
  regulador: boolean;
  incrementarCantidad: (id: string) => void;
  decrementarCantidad: (id: string) => void; // Nueva función para decrementar la cantidad
  cantidad: number;
  setCantidad: (id: string, cantidad: number) => void;
}
interface CounterProps {
  children?: React.ReactNode;
  id: string;
  incrementarCantidad: (id: string) => void;
  decrementarCantidad: (id: string) => void; // Nueva función para decrementar la cantidad
  cantidad: number;
  setCantidad: (id: string, cantidad: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  children,
  id,
  incrementarCantidad,
  decrementarCantidad, // Nueva función para decrementar la cantidad
  cantidad,
  setCantidad,
}) => {

  return (
    <div className=" flex items-center justify-center space-x-2 h-6 pt-8 pb-4">
      <button
        className=" border rounded border-gray-600 text-lg w-8"
        type="button"
        onClick={() => {
          incrementarCantidad(id);
        }}
      >
         + 
      </button>

      <button
        className=" border rounded border-gray-600 text-lg w-8"
        type="button"
        onClick={() => {
          decrementarCantidad(id); // Usar decrementarCantidad cuando se hace clic en el botón "-"
        }}
      >
         - 
      </button>
      <h2>Cant.: {cantidad}</h2>
      {children}
    </div>
  );
};

const PhotoList: React.FC<PhotoListProps> = ({
  id,
  title,
  imageUrl,
  regulador,
  incrementarCantidad,
  decrementarCantidad, // Nueva función para decrementar la cantidad
  cantidad,
  setCantidad,
}) => (
  <div key={id} className="w-1/2 pr-2 flex items-center pt-5">
    <div className="border items-center flex flex-col justify-center w-full mb-2">
      <Image
        src={imageUrl}
        alt={title}
        width={180} // replace with the width of your image
        height={200} // replace with the height of your image
        objectFit="contain"
      />

      <div className="text-xs my-2">
        <h1>{title}</h1>
        <Counter
          id={id}
          incrementarCantidad={incrementarCantidad}
          decrementarCantidad={decrementarCantidad} // Pasar decrementarCantidad a Counter
          cantidad={cantidad}
          setCantidad={setCantidad}
        />
      </div>
    </div>
  </div>
);

export default PhotoList;