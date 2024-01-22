"use client"
import { useState } from "react";

export function Counter({ children }: { children?: React.ReactNode }) {
    const [count, setCount] = useState(0);
    return (
        <div className=" flex items-center justify-center space-x-2 ">
      
          <button className=" border rounded" type="button" onClick={() => setCount(prev => prev + 1)}>Agregar</button>

          <h2>Cant.: {count}</h2> 

          {children}
        </div>
    )
}