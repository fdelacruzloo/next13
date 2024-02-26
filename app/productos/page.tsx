// productos/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { NavBar } from "@/components/NavBar";

const containers = ["Cocinas", "Freidoras", "Hornos", "Secadoras", "Otros"];

export default function Page() {
  const [visibleContainer, setVisibleContainer] = useState(containers[0]);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Asume que los registros de "cantidad" se almacenan en localStorage con las claves 'CocinasCantidad', 'FreidorasCantidad', etc.
        const componentes = ['Cocinas', 'Freidoras', 'Hornos', 'Otros', 'Secadoras'];
        componentes.forEach(componente => {
          localStorage.removeItem(`${componente}Cantidad`);
        });
      }
    }, []); // Pasar un array vacío para que useEffect solo se ejecute una vez

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="fixed w-full bg-white z-50">
          <NavBar />
          <Header
            containers={containers}
            setVisibleContainer={setVisibleContainer}
          />
        </div>
        <div>
          {containers.map((name) => (
            <Container
              key={name}
              name={name}
              visibleContainer={visibleContainer}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
