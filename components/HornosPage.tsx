"use client"
import React, { useState, useEffect } from 'react';
import { getHornos } from "@/app/productos/list";
import PhotoList from "@/components/Photos";

type Horno = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
};

const HornosPage: React.FC = () => {
  const [hornos, setHornos] = useState<Horno[]>([]);

  useEffect(() => {
    const fetchHornos = async () => {
      const result = await getHornos();
      setHornos(result);
    };

    fetchHornos();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl py-5 flex items-center space-x-4">
      </div>
      <div className="flex flex-wrap">
        {hornos.map(horno => <PhotoList key={horno.id} {...horno} />)}
      </div>
    </div>
  );
};

export default HornosPage;