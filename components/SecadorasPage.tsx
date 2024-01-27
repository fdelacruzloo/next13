"use client"
import React, { useState, useEffect } from 'react';
import { getSecadoras } from "@/app/productos/list";
import PhotoList from "@/components/Photos";

type Secadora = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
};

const SecadorasPage: React.FC = () => {
  const [secadoras, setSecadoras] = useState<Secadora[]>([]);

  useEffect(() => {
    const fetchSecadoras = async () => {
      const result = await getSecadoras();
      setSecadoras(result);
    };

    fetchSecadoras();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl py-5 flex items-center space-x-4">
      </div>
      <div className="flex flex-wrap">
        {secadoras.map(secadora => <PhotoList key={secadora.id} {...secadora} />)}
      </div>
    </div>
  );
};

export default SecadorasPage;