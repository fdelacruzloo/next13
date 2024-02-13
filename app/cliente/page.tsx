// cliente/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useState } from "react";
import { ClientReg, GuardarBotton } from "@/components/FilasColumnas";

export default function Page() {
  const [ruc, setRuc] = useState(""); // Cambia ruc a un estado
  const [cel, setCel] = useState(""); // Cambia cel a un estado
  const [correo, setCorreo] = useState(""); // Cambia correo a un estado
  const [direccion, setDireccion] = useState(""); // Cambia direccion a un estado

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen font-sans text-sm">
    <div className="flex-grow w-full flex flex-col items-center">
      <div className="fixed w-full bg-white z-50">

        <NavBar />

        <div className="flex flex-col items-center mt-0.5">
         <ClientReg 
            text1="RUC, DNI, CE:"
            text2Name={ruc}
            text2InitialValue={ruc}
            onText2Change={setRuc} // Pasa setRuc a ClientReg
            rowHeightTextClass= "h-4"
            cellWidthTextClass= "w-32"
            rowHeightNumberClass= "h-4"
            cellWidthNumberClass= "w-50"
          />
        </div>

        <div className="flex flex-col items-center mt-0.5">
          <ClientReg 
            text1="Celular:"
            text2Name={cel}
            text2InitialValue={cel}
            onText2Change={setCel} // Pasa setCel a ClientReg
            rowHeightTextClass= "h-4"
            cellWidthTextClass= "w-32"
            rowHeightNumberClass= "h-4"
            cellWidthNumberClass= "w-50"
          />
        </div>

        <div className="flex flex-col items-center mt-0.5">
          <ClientReg 
            text1="Correo:"
            text2Name={correo}
            text2InitialValue={correo}
            onText2Change={setCorreo} // Pasa setCorreo a ClientReg
            rowHeightTextClass= "h-4"
            cellWidthTextClass= "w-32"
            rowHeightNumberClass= "h-4"
            cellWidthNumberClass= "w-50"
          />
        </div>

        <div className="flex flex-col items-center mt-0.5">
          <ClientReg 
            text1="Dirección:"
            text2Name={direccion}
            text2InitialValue={direccion}
            onText2Change={setDireccion} // Pasa setDireccion a ClientReg
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