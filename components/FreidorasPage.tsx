"use client"
import React, { useState, useEffect } from 'react';
import { getFreidoras } from "@/app/productos/list";
import PhotoList from "@/components/Photos";

type Freidora = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
};

const FreidorasPage: React.FC = () => {
  const [freidoras, setFreidoras] = useState<Freidora[]>([]);

  useEffect(() => {
    const fetchFreidoras = async () => {
      const result = await getFreidoras();
      setFreidoras(result);
    };

    fetchFreidoras();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl py-5 flex items-center space-x-4">
      </div>
      <div className="flex flex-wrap">
        {freidoras.map(freidora => <PhotoList key={freidora.id} {...freidora} />)}
      </div>
    </div>
  );
};

export default FreidorasPage;