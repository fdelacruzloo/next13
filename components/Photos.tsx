"use client";
import React, { useState, useEffect } from "react"; // Asegúrate de importar useEffect
import Image from "next/image";

interface PhotoListProps {
  id: string;
  title: string;
  imageUrl: string;
  regulador: boolean;
  incrementarCantidad: (id: string) => void;
}

interface CounterProps {
  children?: React.ReactNode;
  id: string;
  incrementarCantidad: (id: string) => void;
}

const Counter: React.FC<CounterProps> = ({
  children,
  id,
  incrementarCantidad,
}) => {
  // Inicializa el estado con el valor almacenado en localStorage o 0 si no hay nada almacenado
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem(id);
    return savedCount ? Number(savedCount) : 0;
  });

  // Actualiza localStorage cada vez que count cambia
  useEffect(() => {
    localStorage.setItem(id, String(count));
  }, [count, id]);

  return (
    <div className=" flex items-center justify-center space-x-2 h-6">
      <button
        className=" border rounded"
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
          incrementarCantidad(id);
        }}
      >
        Agregar
      </button>
      <h2>Cant.: {count}</h2>
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
        <Counter id={id} incrementarCantidad={incrementarCantidad} />
      </div>

    </div>
  </div>
);

export default PhotoList;
