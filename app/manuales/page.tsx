// manuales/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);

  useEffect(() => {
    getPdfFiles().then(files => setPdfFiles(files));
  }, []);

  return (
    <main className="container w-[320px]  flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="w-full bg-white z-50 ">
          {/*Punto de inserción NavBar*/}
          <NavBar />

          {/* Lista de archivos PDF */}
          <div className="mt-4">
            <h2 className="mb-2">Archivos PDF:</h2>
            <ul>
              {pdfFiles.map((file, index) => (
                <li key={index}>
                  <a href={file} target="_blank" rel="noopener noreferrer">
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

// Esta función es solo un marcador de posición. Deberías reemplazarla con tu propia lógica para obtener los archivos PDF de tu bucket S3.
function getPdfFiles(): Promise<string[]> {
  return Promise.resolve([
    'https://pdf-manuales.s3.amazonaws.com/INDE+COMBOS+CATALOGO+ENERO+2024.pdf',
    'https://pdf-manuales.s3.amazonaws.com/INDE+COMBOS+CATALOGO+ENERO+2024.pdf',
    'https://pdf-manuales.s3.amazonaws.com/INDE+GASODOMESTICOS+CATALOGO+ENERO+2024.pdf',
    'https://pdf-manuales.s3.amazonaws.com/PRECIO+DE+ESTRATO+4+Y+5+ENERO.pdf',
    'https://pdf-manuales.s3.amazonaws.com/PRECIOS+DE+COMERCIO+ENERO+2024.pdf',
    'https://pdf-manuales.s3.amazonaws.com/SOLE+ENERO+2024.pdf',
    // etc.
  ]);
}