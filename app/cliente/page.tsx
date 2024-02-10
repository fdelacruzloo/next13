// page.tsx
"use client";
import TwoCellComponent from "@/components/Fila1";
import { NavBar } from "@/components/NavBar";
import React, { useState } from "react";

const containers = ["Cocinas", "Freidoras", "Hornos", "Secadoras", "Otros"];

export default function Page() {
  const [visibleContainer, setVisibleContainer] = useState(containers[0]);

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen pb-20">
      <div className="flex-grow w-full flex flex-col items-center">
        <NavBar />
        <TwoCellComponent text={"Gasodomesticos 1"} number={3450} /> 
        <TwoCellComponent text={"Gasodomesticos 2"} number={4540} /> 
        <h1>Hola cliente</h1>
      </div>
    </main>
  );
}
