"use client"
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container">
      <h1 className="text-2xl">Products</h1>

      <div className="flex">
    
        <div className="flex flex-wrap">
          {products.map(({ id, title, imageUrl, link }) => (
            <div key={id} className="w-1/2 pr-4">
              <div className="border p-4 my-4 rounded-md">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={imageUrl}
                    style={{ width: '180px', height: '150px' }}
                    className="mb-2 rounded-md object-cover"
                  />                 
                </a>   
                <div className="text-xs" style={{ height: '70px' }}>
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
