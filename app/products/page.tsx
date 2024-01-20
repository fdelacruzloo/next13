"use client"
import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container">
      <h1 className="text-2xl">Products</h1>

    <div className="flex">
    
    <div className="flex flex-wrap">
    <div className="w-1/2 pr-4">
      {products.slice(0, Math.ceil(products.length / 2)).map(({ id, title, imageUrl, link}) => (
        <div key={id} className="border p-4 my-4 rounded-md">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              style={{ width: '170px', height: '170px' }}
              className="mb-4 rounded-md object-cover"
            />
          </a>   
          <h1 className="text-xs">{title}</h1>
        </div>
      ))}
    </div>

    <div className="w-1/2 pr-4">
      {products.slice(Math.ceil(products.length / 2)).map(({id, title, imageUrl, link}) => (
        <div key={id} className="border p-4 my-4 rounded-md">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              style={{ width: '170px', height: '170px' }}
              className="mb-4 rounded-md object-cover"
            />
          </a>   
          <h1 className="text-xl">{title}</h1>
        </div>
       
      ))}
    </div>
    </div>

    </div>

    </div>
  );
}