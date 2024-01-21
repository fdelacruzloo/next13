"use client"
import { useState } from "react";

export function Counter({ children }: { children?: React.ReactNode }) {
    const [count, setCount] = useState(0);
    return (
        <div className="flex justify-center items-center">
                   
          <button className="p-2 border rounded " type="button" onClick={() => setCount(prev => prev + 1)}>Agregar</button>
          
          {children}
        </div>
    )
}