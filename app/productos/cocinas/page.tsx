import { getCocinas } from "@/app/productos/cocinas/list";
import { Counter } from "@/components/Counter";

export default async function CocinasPage() {
  const cocinas = await getCocinas();

  return (
    <div className="container">
      <h1 className="text-2xl text-center" >Cocinas</h1>

      <div className="flex">
    
          {cocinas.map(({ id, title, imageUrl, cantidad }) => (
            <div key={id} className="w-1/2 pr-2">
              <div className="border p-4 my-4 rounded-md">
                  <img
                    src={imageUrl}                 
                    className="mb-2 rounded-md object-cover"
                  />                 
                <div className="text-xs" style={{ height: '120px' }}>
                  <h1>{title}</h1>
                  <Counter />
                  <h1>{cantidad}</h1>
                </div>
                
              </div>
            </div>
          ))}
        </div>

    </div>
  );
}
