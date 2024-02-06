"use client";
import React, { useState } from 'react';
import Image from 'next/image'; 

interface PhotoListProps {
  id: string;
  title: string;
  imageUrl: string;
  regulador: boolean;
  incrementarCantidad: (id: string) => void; // Agrega esta línea
}

interface CounterProps {
  children?: React.ReactNode;
  id: string;
  incrementarCantidad: (id: string) => void;
}

const Counter: React.FC<CounterProps> = ({ children, id, incrementarCantidad }) => {
  const [count, setCount] = useState(0);
  return (
    <div className=" flex items-center justify-center space-x-2 ">
      <button className=" border rounded" type="button" onClick={() => { setCount(prev => prev + 1); incrementarCantidad(id); }}>Agregar</button>
      <h2>Cant.: {count}</h2> 
      {children}
    </div>
  )
}

const PhotoList: React.FC<PhotoListProps> = ({ id, title, imageUrl, regulador, incrementarCantidad }) => (
  <div key={id} className="w-1/2 pr-2">
    <div className="border p-4 my-4 rounded-md ">
      <div className="relative h-60 w-full mb-2 rounded-md items-center"> 
        <Image
          src={imageUrl}
          alt={title}
          layout="fill" 
          objectFit="contain" // Cambia a 'contain' para evitar distorsión
        />
      </div>

      <div className="text-xs" style={{ height: '120px' }}>
        <h1>{title}</h1>
      </div>
      <div className="self-end text-xs" style={{ height: '40px' }}>
        <Counter id={id} incrementarCantidad={incrementarCantidad} />              
      </div>
    </div>
  </div>
);

export default PhotoList;