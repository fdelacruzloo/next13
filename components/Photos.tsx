//Photos.tsx
"use client";
import React, { useEffect } from "react"; // Asegúrate de importar useEffect
import Image from "next/image";
import { getData } from "@/app/productos/data.js";

interface PhotoListProps {
  id: string;
  title: string;
  imageUrl: string;
  regulador: boolean;
  incrementarCantidad: (id: string) => void;
  cantidad: number;
  setCantidad: (id: string, cantidad: number) => void;
}
interface CounterProps {
  children?: React.ReactNode;
  id: string;
  incrementarCantidad: (id: string) => void;
  cantidad: number;
  setCantidad: (id: string, cantidad: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  children,
  id,
  incrementarCantidad,
  cantidad,
  setCantidad,
}) => {

  return (
    <div className=" flex items-center justify-center space-x-2 h-6">
      <button
        className=" border rounded"
        type="button"
        onClick={() => {
          incrementarCantidad(id);
        }}
      >
        Agregar
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
          cantidad={cantidad}
          setCantidad={setCantidad}
        />
      </div>
    </div>
  </div>
);

export default PhotoList;
