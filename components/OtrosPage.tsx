"use client"
import React, { useState, useEffect } from 'react';
import { getOtros } from "@/app/productos/list";
import PhotoList from "@/components/Photos";

type Otro = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
};

const OtrosPage: React.FC = () => {
  const [otross, setOtros] = useState<Otro[]>([]);

  useEffect(() => {
    const fetchOtros = async () => {
      const result = await getOtros();
      setOtros(result);
    };

    fetchOtros();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl py-5 flex items-center space-x-4">
      </div>
      <div className="flex flex-wrap">
        {otross.map(otros => <PhotoList key={otros.id} {...otros} />)}
      </div>
    </div>
  );
};

export default OtrosPage;