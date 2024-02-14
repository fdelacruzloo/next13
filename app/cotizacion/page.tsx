// cotizacion/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useState } from "react";
import {
  ClientReg,
  CotReg1,
  CotReg2,
  CotReg3,
  GuardarBotton,
} from "@/components/FilasColumnas";

export default function Page() {
  {/*Declaración de variables */}
  const [ruc, setRuc] = useState(""); // Cambia ruc a un estado
  const [cel, setCel] = useState(""); // Cambia cel a un estado
  const [correo, setCorreo] = useState(""); // Cambia correo a un estado
  const [direccion, setDireccion] = useState(""); // Cambia direccion a un estado
  const [coordenada, setCoordenada] = useState(""); // Cambia direccion a un estado

  return (
    <main className="container w-[320px]  flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="w-full bg-white z-50 ">
          {/*Punto de inserción NavBar*/}
          <NavBar />

          {/*Registro de Cliente*/}
          <div className="flex flex-col items-center mt-0.25 mb-1.5">
            <h1 className="text-base">Registro de Cliente</h1>
          </div>

          {/*Ingreso de RUC, DNI, CE en registro ruc*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="RUC, DNI, CE:"
              text2Name={ruc}
              text2InitialValue={ruc}
              onText2Change={setRuc} // Pasa setRuc a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de celular en registro cel*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Celular:"
              text2Name={cel}
              text2InitialValue={cel}
              onText2Change={setCel} // Pasa setCel a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de correo en registro correo*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Correo:"
              text2Name={correo}
              text2InitialValue={correo}
              onText2Change={setCorreo} // Pasa setCorreo a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de dirección en registro direccion*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Dirección:"
              text2Name={direccion}
              text2InitialValue={direccion}
              onText2Change={setDireccion} // Pasa setDireccion a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de coordenadas de direccion*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Coordenada:"
              text2Name={coordenada}
              text2InitialValue={coordenada}
              onText2Change={setCoordenada} // Pasa setCoordenada a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Botón de guardar*/}
          <div className="flex flex-col items-center mt-2">
            <GuardarBotton
              text="Guardar"
              rowHeightTextBottonClass="h-4"
              cellWidthTextBottonClass="w-26"
            />
          </div>

          {/*Calculo de la Potencia Presión del Gasodoméstico*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Suministro e Instalación</h1>
          </div>

          {/*Ingreso de coordenadas de direccion*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Gabinete:"
              text2Name={coordenada}
              text2InitialValue={coordenada}
              onText2Change={setCoordenada} // Pasa setCoordenada a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de coordenadas de direccion*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Instalación:"
              text2Name={coordenada}
              text2InitialValue={coordenada}
              onText2Change={setCoordenada} // Pasa setCoordenada a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de coordenadas de direccion*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Murete:"
              text2Name={coordenada}
              text2InitialValue={coordenada}
              onText2Change={setCoordenada} // Pasa setCoordenada a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de coordenadas de direccion*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Mat. Interno:"
              text2Name={coordenada}
              text2InitialValue={coordenada}
              onText2Change={setCoordenada} // Pasa setCoordenada a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>

          {/*Ingreso de coordenadas de direccion*/}
          <div className="flex flex-col items-center mt-0.5">
            <ClientReg
              text1="Confguración:"
              text2Name={coordenada}
              text2InitialValue={coordenada}
              onText2Change={setCoordenada} // Pasa setCoordenada a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
            />
          </div>        
          {/*Calculo de la Potencia Presión del Gasodoméstico*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Calculo de la Potencia</h1>
            <h1 className="text-base">Presión del Gasodoméstico</h1>
          </div>

          {/*Contenedor de la tabla container w-[320px] h-screen*/}
          <div className="flex flex-col items-center">
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
            <div className="flex justify-end w-[320px] mt-2">
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
