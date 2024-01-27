// PhotoList.tsx
"use client";
import React, { useContext } from 'react';
import { PressureContext } from './PressureContext';
import { Counter } from "@/components/Counter";
import Image from 'next/image'; 

interface PhotoListProps {
  id: string;
  title: string;
  imageUrl: string;
  Regulador: boolean;
}

const PhotoList: React.FC<PhotoListProps> = ({ id, title, imageUrl, Regulador }) => {
  const { isHighPressureClicked, isLowPressureClicked } = useContext(PressureContext);

  if ((isHighPressureClicked && Regulador) || (isLowPressureClicked && !Regulador)) {
    return null;
  }

  return (
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
          <Counter />              
        </div>
      </div>
    </div>
  );
};

export default PhotoList;