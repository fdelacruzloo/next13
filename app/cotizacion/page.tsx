// cotizacion/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import classNames from "classnames"; // Asegúrate de importar la biblioteca classnames
import { getData } from "@/app/productos/data.js";
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
  {
    /*Declaración de variables del registro del cliente */
  }
  const [razonNombre, setRazonNombre] = useState(""); // Cambia razonNombre a un estado
  const [ruc, setRuc] = useState(""); // Cambia ruc a un estado
  const [cel, setCel] = useState(""); // Cambia cel a un estado
  const [correo, setCorreo] = useState(""); // Cambia correo a un estado
  const [direccion, setDireccion] = useState(""); // Cambia direccion a un estado
  const [coordenada, setCoordenada] = useState(""); // Cambia coordenada a un estado
  const [isSaved, setIsSaved] = useState(false); // Añade un nuevo estado para saber si los valores han sido guardados
  {
    /*Declaración de variables de Suministro e Instalación*/
  }
  const [alaVista, setAlaVista] = useState(false);
  const [empotrada, setEmpotrada] = useState(false);

  const [existente, setExistente] = useState(false);
  const [construido, setConstruido] = useState(false);

  const configuracion = "";

  const [peAlPe20251216, setPeAlPe20251216] = useState(false);
  const [peAlPe2025, setPeAlPe2025] = useState(false);
  const [cobre, setCobre] = useState(false);

  {
    /*Declaración de variables de Calculo de la Potencia Presión del Gasodoméstico*/
  }

  const cantEquiposAlta: number = 0;
  const cantEquiposBaja: number = 0;

  const gasodomestico1Alta: number = 30;
  const gasodomestico1Baja: number = 0;

  const gasodomestico2Alta: number = 25;
  const gasodomestico2Baja: number = 0;

  const gasodomestico3Alta: number = 0;
  const gasodomestico3Baja: number = 11;

  const gasodomesticoPersonalisadoAlta: number = 0;
  const gasodomesticoPersonalizadoBaja: number = 0;

  const subPotenciaAlta: number = 0;
  const subPotenciaBaja: number = 0;

  const potenciaTotal: number = 0;

  {
    /*Declaración de variables de Costos en Soles*/
  }
  const instalacionInterna: number = 0;
  const medidor: number = 0;
  const derechoConexion: number = 0;
  const lineaMontante: number = 0;
  const gastoInversion: number = 0;

  {
    /*Declaración de variables de Pago en cuotas*/
  }

  const cuota6meses: number = 0;
  const cuota12meses: number = 0;
  const cuota24meses: number = 0;
  const cuota36meses: number = 0;
  const cuota48meses: number = 0;
  const cuota60meses: number = 0;

  {
    /*Declaración de variables de Calculo referencial consumo mensual*/
  }

  const balon10KgReferencial: number = 0;
  const balon10KgCantidad: number = 0;
  const balon10KgCActual: number = 0;
  const balon10KgGnv: number = 0;
  const balon10KgAhorro: number = 0;

  const balon45KgReferencial: number = 0;
  const balon45KgCantidad: number = 0;
  const balon45KgCActual: number = 0;
  const balon45KgGnv: number = 0;
  const balon45KgAhorro: number = 0;

  const GlpReferencial: number = 0;
  const GlpCantidad: number = 0;
  const GlpCActual: number = 0;
  const GlpGnv: number = 0;
  const GlpAhorro: number = 0;

  const petroleoReferencial: number = 0;
  const petroleoCantidad: number = 0;
  const petroleoCActual: number = 0;
  const petroleoGnv: number = 0;
  const petroleoAhorro: number = 0;

  {
    /*Declaración de variables de Retorno de la inversión con el ahorro*/
  }

  const retornoInversionBalon10KgAño1: number = 0;
  const retornoInversionBalon10KgAño2: number = 0;
  const retornoInversionBalon10KgAño3: number = 0;

  const retornoInversionBalon45KgAño1: number = 0;
  const retornoInversionBalon45KgAño2: number = 0;
  const retornoInversionBalon45KgAño3: number = 0;

  const retornoInversionGlpAño1: number = 0;
  const retornoInversionGlpAño2: number = 0;
  const retornoInversionGlpAño3: number = 0;

  const retornoInversionPetroleoAño1: number = 0;
  const retornoInversionPetroleoAño2: number = 0;
  const retornoInversionPetroleoAño3: number = 0;

  {
    /*Función para guardar los valores de los estados*/
  }
  const guardarValores = () => {
    const valores = {
      razonNombre,
      ruc,
      cel,
      correo,
      direccion,
      coordenada,
    };

    console.log(valores); // Aquí puedes hacer lo que necesites con los valores, por ejemplo, guardarlos en una base de datos

    setIsSaved(true); // Cambia el estado isSaved a true
  };

  {
    /*Función para editar los valores de los estados*/
  }
  const editarValores = () => {
    setIsSaved(false); // Establece isSaved en false cuando se hace clic en el botón "Editar"
  };

  {
    /*Función para ver los valores de los estados en Suministro e Instalación*/
  }
  useEffect(() => {
    console.log(`alaVista: ${alaVista}, empotrada: ${empotrada}`);
    console.log(
      `existente: ${existente}, construido: ${construido}, peAlPe20251216: ${peAlPe20251216}, peAlPe2025: ${peAlPe2025}, cobre: ${cobre}`
    );
  }, [
    alaVista,
    empotrada,
    existente,
    construido,
    peAlPe20251216,
    peAlPe2025,
    cobre,
  ]);

  {
    /*Función para limpiar localStorage la primera vez que carga cotización*/
  }
  useEffect(() => {
    if (!localStorage.getItem('pageLoadedBefore')) {
      localStorage.clear();
      localStorage.setItem('pageLoadedBefore', 'true');
    }
  }, []);

  {
    /*Función para imprimir KW*/
  }
  useEffect(() => {
    getData();
    for (let i = 1; i <= 38; i++) {
      const kw = localStorage.getItem(`kw${i}`);
      console.log(`KW${i}: ${kw}`);
    }
  }, []);

  {/*RETURN PRINCIPAL*/}
  return (
    <main className="container w-[320px]  flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center">
        <div className="w-full bg-white z-50 ">
          {/*Punto de inserción NavBar*/}
          <NavBar />

          {/*TÍTULO: REGISTRO DE CLIENTE*/}
          <div className="flex flex-col items-center mt-0.25 mb-1.5">
            <h1 className="text-base">Registro de Cliente</h1>
          </div>

          {/*Ingreso de RUC, DNI, CE en registro ruc*/}
          <div className="flex flex-col items-center mt-0.25">
            <ClientReg
              text1="RUC, DNI, CE"
              text2Name={ruc}
              text2InitialValue={ruc}
              onText2Change={setRuc} // Pasa setRuc a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
              isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
            />
          </div>

          {/*Ingreso de Razón social, nombre*/}
          <div className="flex flex-col items-center mt-0.25">
            <ClientReg
              text1="Razón, nombre"
              text2Name={razonNombre}
              text2InitialValue={razonNombre}
              onText2Change={setRazonNombre} // Pasa setRazonNombre a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
              isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
            />
          </div>

          {/*Ingreso de celular en registro cel*/}
          <div className="flex flex-col items-center mt-0.25">
            <ClientReg
              text1="Celular"
              text2Name={cel}
              text2InitialValue={cel}
              onText2Change={setCel} // Pasa setCel a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
              isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
            />
          </div>

          {/*Ingreso de correo en registro correo*/}
          <div className="flex flex-col items-center mt-0.25">
            <ClientReg
              text1="Correo"
              text2Name={correo}
              text2InitialValue={correo}
              onText2Change={setCorreo} // Pasa setCorreo a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
              isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
            />
          </div>

          {/*Ingreso de dirección en registro direccion*/}
          <div className="flex flex-col items-center mt-0.25">
            <ClientReg
              text1="Dirección"
              text2Name={direccion}
              text2InitialValue={direccion}
              onText2Change={setDireccion} // Pasa setDireccion a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
              isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
            />
          </div>

          {/*Ingreso de coordenadas de direccion*/}
          <div className="flex flex-col items-center mt-0.25">
            <ClientReg
              text1="Coordenada"
              text2Name={coordenada}
              text2InitialValue={coordenada}
              onText2Change={setCoordenada} // Pasa setCoordenada a ClientReg
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-50"
              isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
            />
          </div>

          {/*BOTONES GUARDAR Y EDITAR*/}
          <div className="flex justify-center space-x-5">
            {/*Botón de Guardar*/}
            <div
              className={classNames(
                "flex flex-col items-center mt-4",
                isSaved && "rounded-lg bg-gray-400"
              )}
            >
              <GuardarBotton
                text={isSaved ? "Guardado" : "Guardar"} // Cambia el texto en función de isSaved
                rowHeightTextBottonClass="h-4"
                cellWidthTextBottonClass="w-26"
                onClick={guardarValores} // Llama a la función guardarValores cuando se hace clic en el botón
              />
            </div>
            {/*Boton Editar*/}
            <div className="flex flex-col items-center mt-4">
              <GuardarBotton
                text="Editar"
                rowHeightTextBottonClass="h-4"
                cellWidthTextBottonClass="w-26"
                onClick={editarValores} // Llama a la función guardarValores cuando se hace clic en el botón
              />
            </div>
          </div>

          {/*TÍTULO: SUMINISTRO E INSTALACIÓN*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Suministro e Instalación</h1>
          </div>

          {/*Menú de Selección de Instalación*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotRegDes2
              text1="Instalación"
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

          {/*Menú de Selección de Murete*/}
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
              text2={configuracion}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-32"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-48"
            />
          </div>

          {/*Menú de Selección de Material Interna*/}
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

          {/*TÍTULO: CALCULO DE LA POTENCIA PRESIÓN DEL GASODOMÉSTICO*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Calculo de la Potencia</h1>
            <h1 className="text-base">Presión del Gasodoméstico</h1>
          </div>

          {/*Puntos de conexión*/}
          <div className="flex flex-col items-center">
            <CotReg4
              text1="Puntos de conexión"
              number1={cantEquiposAlta + (gasodomestico1Alta !== 0 ? 1 : 0) + (gasodomestico2Alta !== 0 ? 1 : 0) + (gasodomestico3Alta !== 0 ? 1 : 0) + (gasodomesticoPersonalisadoAlta !== 0 ? 1 : 0) + (gasodomestico1Baja !== 0 ? 1 : 0) + (gasodomestico2Baja !== 0 ? 1 : 0) + (gasodomestico3Baja !== 0 ? 1 : 0) + (gasodomesticoPersonalizadoBaja !== 0 ? 1 : 0)}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*Cantidad de equipos de alta y baja*/}
          <div className="flex flex-col items-center">
            <div className="flex justify-end w-[320px] mt-2">
              <CotReg2
                text1="Alta"
                text2="Baja"
                number1={cantEquiposAlta + (gasodomestico1Alta !== 0 ? 1 : 0) + (gasodomestico2Alta !== 0 ? 1 : 0) + (gasodomestico3Alta !== 0 ? 1 : 0) + (gasodomesticoPersonalisadoAlta !== 0 ? 1 : 0)}
                number2={cantEquiposBaja + (gasodomestico1Baja !== 0 ? 1 : 0) + (gasodomestico2Baja !== 0 ? 1 : 0) + (gasodomestico3Baja !== 0 ? 1 : 0) + (gasodomesticoPersonalizadoBaja !== 0 ? 1 : 0)}
                rowHeightTextClass="h-4"
                cellWidthTextClass="w-12"
                rowHeightNumberClass="h-4"
                cellWidthNumberClass="w-12"
              />
            </div>
          </div>

          {/*Gasodomesticos 1*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg3
              text="Gasodoméstico 1"
              number1={gasodomestico1Alta}
              number2={gasodomestico1Baja}
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
              number1={gasodomestico2Alta}
              number2={gasodomestico2Baja}
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
              number1={gasodomestico3Alta}
              number2={gasodomestico3Baja}
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
              number1={gasodomesticoPersonalisadoAlta}
              number2={gasodomesticoPersonalizadoBaja}
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
              number1={gasodomestico1Alta+gasodomestico2Alta+gasodomestico3Alta+gasodomesticoPersonalisadoAlta}
              number2={gasodomestico1Baja+gasodomestico2Baja+gasodomestico3Baja+gasodomesticoPersonalizadoBaja}
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
              text1="Total KW"
              number1={gasodomestico1Alta+gasodomestico2Alta+gasodomestico3Alta+gasodomesticoPersonalisadoAlta+gasodomestico1Baja+gasodomestico2Baja+gasodomestico3Baja+gasodomesticoPersonalizadoBaja}
              text2="KW"
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumber1Class="h-4"
              cellWidthNumber1Class="w-12"
              rowHeightNumber2Class="h-4"
              cellWidthNumber2Class="w-12"
            />
          </div>

          {/*Botones Calcular e Imprimir*/}
          <div className="flex justify-center space-x-5">
            {/*Boton Calcular*/}
            <div className="flex flex-col items-center mt-4">
              <GuardarBotton
                text="Calcular"
                rowHeightTextBottonClass="h-4"
                cellWidthTextBottonClass="w-26"
                onClick={guardarValores} // Llama a la función guardarValores cuando se hace clic en el botón
              />
            </div>

            {/*Boton Imprimir*/}
            <div className="flex flex-col items-center mt-4">
              <GuardarBotton
                text="Imprimir"
                rowHeightTextBottonClass="h-4"
                cellWidthTextBottonClass="w-26"
                onClick={guardarValores} // Llama a la función guardarValores cuando se hace clic en el botón
              />
            </div>
          </div>

          {/*TÍTULO: COSTOS EN SOLES*/}
          <div className="flex flex-col items-center mt-4 mb-2">
            <h1 className="text-base ">Costos en Soles</h1>
          </div>

          {/*Instalación interna*/}
          <div className="flex flex-col items-center mt-0.25">
            <CotReg4
              text1="Instalación interna"
              number1={instalacionInterna}
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
              number1={medidor}
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
              number1={derechoConexion}
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
              number1={lineaMontante}
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
              number1={gastoInversion}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*TITULO: PAGO EN CUOTAS*/}
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
              number1={cuota6meses}
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
              number1={cuota12meses}
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
              number1={cuota24meses}
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
              number1={cuota36meses}
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
              number1={cuota48meses}
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
              number1={cuota60meses}
              rowHeightTextClass="h-4"
              cellWidthTextClass="w-56"
              rowHeightNumberClass="h-4"
              cellWidthNumberClass="w-24"
            />
          </div>

          {/*TÍTULO: CALCULO REFERENCIAL CONSUMO MENSUAL*/}
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
              number1={balon10KgReferencial}
              number2={balon10KgCantidad}
              number3={balon10KgCActual}
              number4={balon10KgGnv}
              number5={balon10KgAhorro}
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
              number1={balon45KgReferencial}
              number2={balon45KgCantidad}
              number3={balon45KgCActual}
              number4={balon45KgGnv}
              number5={balon45KgAhorro}
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
              number1={GlpReferencial}
              number2={GlpCantidad}
              number3={GlpCActual}
              number4={GlpGnv}
              number5={GlpAhorro}
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
              number1={petroleoReferencial}
              number2={petroleoCantidad}
              number3={petroleoCActual}
              number4={petroleoGnv}
              number5={petroleoAhorro}
              rowHeightClass="h-4"
              cellWidthTextClass="w-20"
              cellWidthNumber1Class="w-12"
              cellWidthNumber2Class="w-12"
              cellWidthNumber3Class="w-12"
              cellWidthNumber4Class="w-12"
              cellWidthNumber5Class="w-12"
            />
          </div>

          {/*TÍTULO: RETORNO DE LA INVERSIÓN CON EL AHORRO*/}
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
              number1={retornoInversionBalon10KgAño1}
              number2={retornoInversionBalon10KgAño2}
              number3={retornoInversionBalon10KgAño3}
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
              number1={retornoInversionBalon45KgAño1}
              number2={retornoInversionBalon45KgAño2}
              number3={retornoInversionBalon45KgAño3}
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
              number1={retornoInversionGlpAño1}
              number2={retornoInversionGlpAño2}
              number3={retornoInversionGlpAño3}
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
              number1={retornoInversionPetroleoAño1}
              number2={retornoInversionPetroleoAño2}
              number3={retornoInversionPetroleoAño3}
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
