// cotizacion/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useState } from "react";
import {
  CotReg1,
  CotReg2,
  CotReg3,
  GuardarBotton,
} from "@/components/FilasColumnas";

export default function Page() {
  return (
    <main className="container flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="fixed w-full bg-white z-50">
          {/*Punto de inserción NavBar */}
          <NavBar />

          {/*Calculo de la Potencia Presión del Gasodoméstico*/}
          <div className="flex flex-col items-center mt-0.25 mb-1.5">
            <h1 className="text-base ">Calculo de la Potencia</h1>
            <h1 className="text-base">Presión del Gasodoméstico</h1>
          </div>

          {/*Contenedor de la tabla*/}
          <div className="container w-[320px] h-screen flex flex-col items-center">
            {/*Cantidad de puntos de conexión*/}
            <div className="flex flex-col items-center mt-0.25">
              <CotReg1
                text="Puntos de conexión"
                number1={0}
                number2=" "
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-56"
                rowHeightNumber1Class="h-4"
                cellWidthNumber1Class="w-12"
                rowHeightNumber2Class="h-4"
                cellWidthNumber2Class="w-12"
              />
            </div>

            {/*Cantidad de equipos de alta y baja*/}
            <div className="flex justify-end w-[320px] mt-4">
              <CotReg2
                text1="Alta"
                text2="Baja"
                number1={0}
                number2={0}
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-12"
                rowHeightNumberClass="h-4"
                cellWidthNumberClass="w-12"
              />
            </div>

            {/*Gasodomesticos 1*/}
            <div className="flex flex-col items-center mt-0.25">
              <CotReg3
                text="Gasodoméstico 1"
                number1={0}
                number2={0}
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-56"
                rowHeightNumber1Class="h-4"
                cellWidthNumber1Class="w-12"
                rowHeightNumber2Class="h-4"
                cellWidthNumber2Class="w-12"
              />
            </div>

            {/*Gasodomesticos 2*/}
            <div className="flex flex-col items-center mt-0.25">
              <CotReg3
                text="Gasodoméstico 2"
                number1={0}
                number2={0}
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-56"
                rowHeightNumber1Class="h-4"
                cellWidthNumber1Class="w-12"
                rowHeightNumber2Class="h-4"
                cellWidthNumber2Class="w-12"
              />
            </div>

            {/*Gasodomesticos 3*/}
            <div className="flex flex-col items-center mt-0.25">
              <CotReg3
                text="Gasodoméstico 3"
                number1={0}
                number2={0}
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-56"
                rowHeightNumber1Class="h-4"
                cellWidthNumber1Class="w-12"
                rowHeightNumber2Class="h-4"
                cellWidthNumber2Class="w-12"
              />
            </div>

            {/*Gasodomesticos Personalizado*/}
            <div className="flex flex-col items-center mt-0.25">
              <CotReg3
                text="Gasodoméstico Especial"
                number1={0}
                number2={0}
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-56"
                rowHeightNumber1Class="h-4"
                cellWidthNumber1Class="w-12"
                rowHeightNumber2Class="h-4"
                cellWidthNumber2Class="w-12"
              />
            </div>

            {/*Sub Tot. Potencia KW*/}
            <div className="flex flex-col items-center mt-1">
              <CotReg3
                text="Sub Tot. Potencia KW"
                number1={0}
                number2={0}
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-56"
                rowHeightNumber1Class="h-4"
                cellWidthNumber1Class="w-12"
                rowHeightNumber2Class="h-4"
                cellWidthNumber2Class="w-12"
              />
            </div>

            {/*Total KW*/}
            <div className="flex flex-col items-center mt-1">
              <CotReg1
                text="Total KW"
                number1={0}
                number2="KW"
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-56"
                rowHeightNumber1Class="h-4"
                cellWidthNumber1Class="w-12"
                rowHeightNumber2Class="h-4"
                cellWidthNumber2Class="w-12"
              />
            </div>

          </div>

          {/*Boton GuardarBotton*/}
          <div className="flex flex-col items-center mt-10">
            <GuardarBotton
              text="Imprimir"
              rowHeightTextBottonClass="h-4"
              cellWidthTextBottonClass="w-26"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
