// cotizacion/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useState } from "react";
import {
  ClientReg,
  CotRegDes2,
  CotRegDes3,
  CotReg1,
  CotReg2,
  CotReg3,
  CotReg4,
  CotReg5,
  CotReg6,
  CotReg7,
  CotReg8,
  CotReg9,  
  CotReg10,
  GuardarBotton,
} from "@/components/FilasColumnas";

export default function Page() {
  
  {/*Declaración de variables del registro del cliente */}
  const [ruc, setRuc] = useState(""); // Cambia ruc a un estado
  const [cel, setCel] = useState(""); // Cambia cel a un estado
  const [correo, setCorreo] = useState(""); // Cambia correo a un estado
  const [direccion, setDireccion] = useState(""); // Cambia direccion a un estado
  const [coordenada, setCoordenada] = useState(""); // Cambia direccion a un estado

   {/*Declaración de variables de Suministro e Instalación */}
  const [alaVista, setAlaVista] = useState(false);
  const [empotrada, setEmpotrada] = useState(false);

  const [existente, setExistente] = useState(false);
  const [construido, setConstruido] = useState(false);

  const [peAlPe20251216, setPeAlPe20251216] = useState(false);
  const [peAlPe2025, setPeAlPe2025] = useState(false);
  const [cobre, setCobre] = useState(false);

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
          <div className="flex flex-col items-center mt-0.25">
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
          <div className="flex flex-col items-center mt-0.25">
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
          <div className="flex flex-col items-center mt-0.25">
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
          <div className="flex flex-col items-center mt-0.25">
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
          <div className="flex flex-col items-center mt-0.25">
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

          {/*Botones Calcular e Imprimir*/}
          <div className="flex justify-center space-x-5">
          {/*Botón de Guardar*/}
          <div className="flex flex-col items-center mt-4">
            <GuardarBotton
              text="Guardar"
              rowHeightTextBottonClass="h-4"
              cellWidthTextBottonClass="w-26"
            />
          </div>

            {/*Boton Editar*/}
            <div className="flex flex-col items-center mt-4">
              <GuardarBotton
                text="Editar"
                rowHeightTextBottonClass="h-4"
                cellWidthTextBottonClass="w-26"
              />
            </div>
          </div>

          {/*Suministro e Instalación*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Suministro e Instalación</h1>
          </div>

          {/*Selección de Instalación*/}
          <div className="flex flex-col items-center mt-0.25">
          <CotRegDes2
            text1="Instalación:"
            text2="A la vista"
            text3="Empotrada"
            rowHeightClass="h-4"
            cellWidthTextClass="w-32"
            cellWidthMenuClass="w-48"
            boolean1={alaVista}
            setText1={setAlaVista}
            boolean2={empotrada}
            setText2={setEmpotrada}
          />
          </div>

          {/*Selección de Murete*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotRegDes2
              text1="Murete"
              text2="Existente"
              text3="Construido"
              rowHeightClass="h-4"
              cellWidthTextClass="w-32"
              cellWidthMenuClass="w-48"
              boolean1={existente}
              setText1={setExistente}
              boolean2={construido}
              setText2={setConstruido}
            />
          </div>

          {/*Confguración*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg10
              text1="Configuración"
              text2=""
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-48"
            />
          </div>

          {/*Selección de Material Interna*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotRegDes3
              text1="Material Interna"
              text2="Pe-Al-Pe 2025-1216"
              text3="Pe-Al-Pe 2025"
              text4="Cobre"              
              rowHeightClass="h-4"
              cellWidthTextClass="w-32"
              cellWidthMenuClass="w-48"
              boolean1={peAlPe20251216}
              setText1={setPeAlPe20251216}
              boolean2={peAlPe2025}
              setText2={setPeAlPe2025}
              boolean3={cobre}
              setText3={setCobre}              
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
            <div className="flex flex-col items-center mt-3">
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
            <div className="flex flex-col items-center mt-3">
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

          {/*Botones Calcular e Imprimir*/}
          <div className="flex justify-center space-x-5">
            {/*Boton Calcular*/}
            <div className="flex flex-col items-center mt-4">
              <GuardarBotton
                text="Calcular"
                rowHeightTextBottonClass="h-4"
                cellWidthTextBottonClass="w-26"
              />
            </div>

            {/*Boton Imprimir*/}
            <div className="flex flex-col items-center mt-4">
              <GuardarBotton
                text="Imprimir"
                rowHeightTextBottonClass="h-4"
                cellWidthTextBottonClass="w-26"
              />
            </div>
          </div>

          {/*Costos*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Costos en Soles</h1>
          </div>

          {/*Instalación interna*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="Instalación interna"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*Medidor*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="Medidor"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*Derecho de conexión*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="Derecho de conexión"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*Valor línea montante*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="Valor línea montante"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*Gasto de la inversión*/}
          <div className="flex flex-col items-center mt-3">
            <CotReg4
              text1="Gasto de la inversión"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*Pago en cuotas*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Pago en cuotas</h1>
          </div>

          {/*Cuotas y Pago mensual*/}
          <div className="flex flex-col items-center mt-0.5">
            <CotReg5
              text1="Cuota"
              text2="Pago Mensual"
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*6 meses*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="6"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*12 meses*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="12"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*24 meses*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="24"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*36 meses*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="36"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*48 meses*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="48"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*60 meses*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="60"
              number1={0}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*Calculo referencial consumo mensual*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base">Calculo referencial</h1>
            <h1 className="text-base">consumo y ahorro mensual</h1>
          </div>

          {/*Encabezados*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg6
              text1="Volumen en"
              text2="Ref."
              text3="Cant."
              text4="C. Act."
              text5="E. GNV"
              text6="Ahorro"
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-12"
              cellWidthNumber2Class="w-12"
              cellWidthNumber3Class="w-12"
              cellWidthNumber4Class="w-12"
              cellWidthNumber5Class="w-12"
            />
          </div>

          {/*Balón 10Kg*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg7
              text="Balón 10Kg"
              number1={0}
              number2={0}
              number3={0}
              number4={0}
              number5={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-12"
              cellWidthNumber2Class="w-12"
              cellWidthNumber3Class="w-12"
              cellWidthNumber4Class="w-12"
              cellWidthNumber5Class="w-12"
            />
          </div>

          {/*Balón 45Kg*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg7
              text="Balón 45Kg"
              number1={0}
              number2={0}
              number3={0}
              number4={0}
              number5={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-12"
              cellWidthNumber2Class="w-12"
              cellWidthNumber3Class="w-12"
              cellWidthNumber4Class="w-12"
              cellWidthNumber5Class="w-12"
            />
          </div>

          {/*Gl. GLP*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg7
              text="GL GLP"
              number1={0}
              number2={0}
              number3={0}
              number4={0}
              number5={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-12"
              cellWidthNumber2Class="w-12"
              cellWidthNumber3Class="w-12"
              cellWidthNumber4Class="w-12"
              cellWidthNumber5Class="w-12"
            />
          </div>

          {/*Gl. Petroleo*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg7
              text="G Petroleo"
              number1={0}
              number2={0}
              number3={0}
              number4={0}
              number5={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-12"
              cellWidthNumber2Class="w-12"
              cellWidthNumber3Class="w-12"
              cellWidthNumber4Class="w-12"
              cellWidthNumber5Class="w-12"
            />
          </div>
          
          {/*Retorno de la inversión con el ahorro*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base">Retorno de la inversión</h1>
            <h1 className="text-base">con el ahorro</h1>
          </div>

          {/*Gl. Petroleo*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg8
              text1="Tipo"
              text2="Año 1"
              text3="Año 2"
              text4="Año 3"
              rowHeightClass="h-4"
              cellWidthText1Class="w-20"
              cellWidthText2Class="w-20"
              cellWidthText3Class="w-20"
              cellWidthText4Class="w-20"
            />
          </div>
 
          {/*Retorno de inversión Balón 10Kg*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg9
              text="Balón 10Kg"
              number1={0}
              number2={0}
              number3={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-20"
              cellWidthNumber2Class="w-20"
              cellWidthNumber3Class="w-20"
            />
          </div>

          {/*Retorno de inversión Balón 45Kg*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg9
              text="Balón 45Kg"
              number1={0}
              number2={0}
              number3={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-20"
              cellWidthNumber2Class="w-20"
              cellWidthNumber3Class="w-20"
            />
          </div>

            {/*Retorno de inversión GL GLP*/}
            <div className="flex flex-col items-center mt-0.25">
            <CotReg9
              text="GL GLP"
              number1={0}
              number2={0}
              number3={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-20"
              cellWidthNumber2Class="w-20"
              cellWidthNumber3Class="w-20"
            />
          </div>

            {/*Retorno de inversión G Petroleo*/}
            <div className="flex flex-col items-center mt-0.25">
            <CotReg9
              text="G Petroleo"
              number1={0}
              number2={0}
              number3={0}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-20"
              cellWidthNumber2Class="w-20"
              cellWidthNumber3Class="w-20"
            />
          </div>

        </div>
      </div>
    </main>
  );
}
