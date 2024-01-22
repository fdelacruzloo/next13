"use client"
import { getOtros } from "@/app/productos/otros/list";

export default async function OtrosPage() {
  const otros = await getOtros();

  return (
    <div className="container">
      <h1 className="text-2xl text-center" >Otros</h1>

      <div className="flex">
    
        <div className="flex flex-wrap">
          {otros.map(({ id, title, imageUrl, link }) => (
            <div key={id} className="w-1/2 pr-2">
              <div className="border p-4 my-4 rounded-md">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageUrl}                 
                    className="mb-2 rounded-md object-cover"
                  />                 
                </a>   
                <div className="text-xs" style={{ height: '120px' }}>
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
