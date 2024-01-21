"use client"
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container">
      <h1 className="text-2xl text-center" >Cocinas</h1>

      <div className="flex">
    
        <div className="flex flex-wrap">
          {products.map(({ id, title, imageUrl, link }) => (
            <div key={id} className="w-1/2 pr-2">
              <div className="border p-4 my-4 rounded-md">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageUrl}                 
                    className="mb-2 rounded-md object-cover"
                  />                 
                </a>   
                <div className="text-xs" style={{ height: '80px' }}>
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
