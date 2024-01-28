"use client"
import React, { useState, useEffect } from 'react';
import { getCocinas } from "@/app/productos/list";
import PhotoList from "@/components/Photos";

type Cocina = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
};

const CocinasPage: React.FC = () => {
  const [cocinas, setCocinas] = useState<Cocina[]>([]);

  useEffect(() => {
    const fetchCocinas = async () => {
      const result = await getCocinas();
      setCocinas(result);
    };

    fetchCocinas();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl py-5 flex items-center space-x-4">
      </div>
      <div className="flex flex-wrap">
        {cocinas.map(cocina => <PhotoList key={cocina.id} {...cocina} />)}
      </div>
    </div>
  );
};

export default CocinasPage;