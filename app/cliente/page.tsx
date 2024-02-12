// cliente/page.tsx
import { NavBar } from "@/components/NavBar";
import React from "react";
import { ClientReg, GuardarBotton } from "@/components/FilasColumnas";

export default function Page() {
  const ruc = ""; // Define la variable ruc
  const cel = ""; // Define la variable ruc
  const correo = ""; // Define la variable ruc  
  const direccion = ""; // Define la variable ruc 


  return (
    <main className="container flex flex-col items-center justify-center min-h-screen font-sans text-sm">
    <div className="flex-grow w-full flex flex-col items-center">
      <div className="fixed w-full bg-white z-50">

        <NavBar />

        <div className="flex flex-col items-center mt-0.5">
          <ClientReg 
            text1="RUC, DNI, CE:"
            text2Name={ruc} // Usa text2Name en lugar de text2
            text2InitialValue={ruc} // Pasa ruc como el valor inicial de text2
            rowHeightTextClass= "h-4"
            cellWidthTextClass= "w-32"
            rowHeightNumberClass= "h-4"
            cellWidthNumberClass= "w-50"
          />
        </div>

        <div className="flex flex-col items-center mt-0.5">
          <ClientReg 
            text1="Celular:"
            text2Name={cel} // Usa text2Name en lugar de text2
            text2InitialValue={cel} // Pasa ruc como el valor inicial de text2
            rowHeightTextClass= "h-4"
            cellWidthTextClass= "w-32"
            rowHeightNumberClass= "h-4"
            cellWidthNumberClass= "w-50"
          />
        </div>

        <div className="flex flex-col items-center mt-0.5">
          <ClientReg 
            text1="Correo:"
            text2Name={correo} // Usa text2Name en lugar de text2
            text2InitialValue={correo} // Pasa ruc como el valor inicial de text2
            rowHeightTextClass= "h-4"
            cellWidthTextClass= "w-32"
            rowHeightNumberClass= "h-4"
            cellWidthNumberClass= "w-50"
          />
        </div>

        <div className="flex flex-col items-center mt-0.5">
          <ClientReg 
            text1="Dirección:"
            text2Name={direccion} // Usa text2Name en lugar de text2
            text2InitialValue={direccion} // Pasa ruc como el valor inicial de text2
            rowHeightTextClass= "h-4"
            cellWidthTextClass= "w-32"
            rowHeightNumberClass= "h-4"
            cellWidthNumberClass= "w-50"
          />
        </div>

        <div className="flex flex-col items-center mt-10">
          <GuardarBotton 
            text="Guardar"
            rowHeightTextBottonClass= "h-4"
            cellWidthTextBottonClass= "w-26"
          />
        </div>
      </div>
     </div>
  </main>
  );
}