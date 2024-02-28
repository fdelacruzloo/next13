// cotizacion/page.tsx
"use client";
import { NavBar } from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import classNames from "classnames"; // Asegúrate de importar la biblioteca classnames
import { getData } from "@/app/productos/data.js";
import {
  ClientReg,
  ClientReg1,
  ClientReg2,
  CotRegDes2,
  CotRegDes3,
  CotRegDes4,
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
  CotReg11,
  GuardarBotton,
} from "@/components/FilasColumnas";

export default function Page() {
  //FUNCIÓN PARA LIMPIAR LOCALSTORAGE LA PRIMERA VEZ QUE CARGA COTIZACIÓN
  useEffect(() => {
    if (!localStorage.getItem("pageLoadedBefore")) {
      localStorage.clear();
      localStorage.setItem("pageLoadedBefore", "true");
    }
  }, []); // El array vacío [] significa que este efecto se ejecutará solo una vez, al cargar la página

  //DECLARACIÓN DE VARIABLES Y FUNCIONES DEL REGISTRO DEL CLIENTE ALMACENAMIENTO EN LOCAL STORE

  //Declaración y función que cuando 'ruc' cambia, guarda el nuevo valor en localStorage
  const initialRuc =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("ruc") || ""
      : "";
  const [ruc, setRuc] = useState(initialRuc); // Cambia ruc a un estado

  useEffect(() => {
    localStorage.setItem("ruc", ruc);
  }, [ruc]);
  const handleRucChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRuc(e.target.value);
  };

  //Declaración y función que cuando 'razonNombre' cambia, guarda el nuevo valor en localStorage*/
  const initialRazonNombre =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("razonNombre") || ""
      : "";
  const [razonNombre, setRazonNombre] = useState(initialRazonNombre); // Cambia razonNombre a un estado

  useEffect(() => {
    localStorage.setItem("razonNombre", razonNombre);
  }, [razonNombre]);

  const handleRazonNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRazonNombre(e.target.value);
  };

  //Declaración y función que cuando 'cel' cambia, guarda el nuevo valor en localStorage*/
  const initialCel =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("cel") || ""
      : "";
  const [cel, setCel] = useState(initialCel); // Cambia cel a un estado

  useEffect(() => {
    localStorage.setItem("cel", cel);
  }, [cel]);

  const handleCelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCel(e.target.value);
  };

  //Declaración y función que cuando 'correo' cambia, guarda el nuevo valor en localStorage*/
  const initialCorreo =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("correo") || ""
      : "";
  const [correo, setCorreo] = useState(initialCorreo); // Cambia correo a un estado 
 
  useEffect(() => {
    localStorage.setItem("correo", correo);
  }, [correo]);

  const handleCorreoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCorreo(e.target.value);
  };

  //Declaración y función  que cuando 'direccion' cambia, guarda el nuevo valor en localStorage
  const initialDireccion =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("direccion") || ""
      : "";
  const [direccion, setDireccion] = useState(initialDireccion); // Cambia direccion a un estado

  useEffect(() => {
    localStorage.setItem("direccion", direccion);
  }, [direccion]);

  const handleDireccionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDireccion(e.target.value);
  };

  //Declaración y función que cuando 'coordenada' cambia, guarda el nuevo valor en localStorage*/
  const initialCoordenada =
    typeof window !== "undefined" && window.localStorage
      ? localStorage.getItem("coordenada") || ""
      : "";
  const [coordenada, setCoordenada] = useState(initialCoordenada); // Cambia coordenada a un estado  

  useEffect(() => {
    localStorage.setItem("coordenada", coordenada);
  }, [coordenada]);

  const handleCoordenadaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoordenada(e.target.value);
  };

  //Declaración de variable que inhabilita la escritura para evitar borrado accidental
  const [isSaved, setIsSaved] = useState(false); // Añade un nuevo estado para saber si los valores han sido guardados

  //Declaración de variables de Suministro e Instalación
  const [usoIndividual, setUsoIndividual] = useState(false);
  const [doble, setDoble] = useState(false);
  const [triple, setTriple] = useState(false);
  const [cuadruple, setCuadruple] = useState(false);

  const [alaVista, setAlaVista] = useState(false);
  const [empotrada, setEmpotrada] = useState(false);

  const [existente, setExistente] = useState(false);
  const [construido, setConstruido] = useState(false);

  const [peAlPe20251216, setPeAlPe20251216] = useState(false);
  const [peAlPe2025, setPeAlPe2025] = useState(false);
  const [cobre, setCobre] = useState(false);

  //Función para crear función kwItem que recupera kw, Regulador y debe recuperar descripción también
  let kwList = [];

  for (let i = 1; i <= 38; i++) {
    let kwItem =
      typeof window !== "undefined" && window.localStorage
        ? localStorage.getItem(`kw${i}`) || ""
        : "";
    let reguladorItem =
      typeof window !== "undefined" && window.localStorage
        ? localStorage.getItem(`Regulador${i}`) || ""
        : "";

    if (kwItem) {
      let kwValue = Number(kwItem);

      if (kwValue !== 0) {
        kwList.push({ [`kw${i}`]: kwValue, [`Regulador${i}`]: reguladorItem });
      }
    }
  }

  console.log("kwList after sort:", kwList); // Agrega esta línea

  //Función para generar los valores de gasodomesticos 1,2 y 3
  let gasodomestico1Alta = 0;
  let gasodomestico1Baja = 0;
  let gasodomestico2Alta = 0;
  let gasodomestico2Baja = 0;
  let gasodomestico3Alta = 0;
  let gasodomestico3Baja = 0;

  for (let i = 0; i < 3; i++) {
    let kwItem = kwList[i];
    if (kwItem) {
      let kwKey = Object.keys(kwItem)[0];
      let kwValue = kwItem[kwKey];
      let reguladorValue = kwItem[`Regulador${kwKey.slice(2)}`];

      if (i === 0) {
        if (reguladorValue === "true") {
          gasodomestico1Baja = Number(kwValue);
        } else if (reguladorValue === "false") {
          gasodomestico1Alta = Number(kwValue);
        }
      } else if (i === 1) {
        if (reguladorValue === "true") {
          gasodomestico2Baja = Number(kwValue);
        } else if (reguladorValue === "false") {
          gasodomestico2Alta = Number(kwValue);
        }
      } else if (i === 2) {
        if (reguladorValue === "true") {
          gasodomestico3Baja = Number(kwValue);
        } else if (reguladorValue === "false") {
          gasodomestico3Alta = Number(kwValue);
        }
      }
    }
  }

  //Declaración y función  que cuando 'gasodomesticoPersonalizadoAlta' cambia, guarda el nuevo valor en localStorage
  const initialGasodomesticoPersonalizadoAlta =
  typeof window !== "undefined" && window.localStorage
    ? Number(localStorage.getItem("gasodomesticoPersonalizadoAlta")) || 0
    : 0;
  const [gasodomesticoPersonalizadoAlta, setGasodomesticoPersonalizadoAlta] = useState(initialGasodomesticoPersonalizadoAlta);

  useEffect(() => {
    localStorage.setItem("gasodomesticoPersonalizadoAlta", gasodomesticoPersonalizadoAlta.toString());
  }, [gasodomesticoPersonalizadoAlta]);

  const handleGasodomesticoPersonalizadoAltaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGasodomesticoPersonalizadoAlta(Number(e.target.value));
  };

  //Declaración y función  que cuando 'gasodomesticoPersonalizadoBaja' cambia, guarda el nuevo valor en localStorage
  const initialGasodomesticoPersonalizadoBaja =
  typeof window !== "undefined" && window.localStorage
    ? Number(localStorage.getItem("gasodomesticoPersonalizadoBaja")) || 0
    : 0;
  const [gasodomesticoPersonalizadoBaja, setGasodomesticoPersonalizadoBaja] = useState(initialGasodomesticoPersonalizadoBaja);

  useEffect(() => {
    localStorage.setItem("gasodomesticoPersonalizadoBaja", gasodomesticoPersonalizadoBaja.toString());
  }, [gasodomesticoPersonalizadoBaja]);

  const handleGasodomesticoPersonalizadoBajaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGasodomesticoPersonalizadoBaja(Number(e.target.value));
  };

  //Declaración y función  que cuando 'gasodomesticoPersonalizadoTexto' cambia, guarda el nuevo valor en localStorage
  const initialGasodomesticoPersonalizadoTexto =
  typeof window !== "undefined" && window.localStorage
    ? localStorage.getItem("gasodomesticoPersonalizadoTexto") || ""
    : "";
  const [gasodomesticoPersonalizadoTexto, setGasodomesticoPersonalizadoTexto] = useState(initialGasodomesticoPersonalizadoTexto);

  useEffect(() => {
    localStorage.setItem("gasodomesticoPersonalizadoTexto", gasodomesticoPersonalizadoTexto);
  }, [gasodomesticoPersonalizadoTexto]);

  const handleGasodomesticoPersonalizadoTextoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGasodomesticoPersonalizadoTexto(e.target.value);
  };

  const cantEquiposAlta =
    (gasodomestico1Alta !== 0 ? 1 : 0) +
    (gasodomestico2Alta !== 0 ? 1 : 0) +
    (gasodomestico3Alta !== 0 ? 1 : 0) +
    (gasodomesticoPersonalizadoAlta !== 0 ? 1 : 0);
  const cantEquiposBaja =
    (gasodomestico1Baja !== 0 ? 1 : 0) +
    (gasodomestico2Baja !== 0 ? 1 : 0) +
    (gasodomestico3Baja !== 0 ? 1 : 0) +
    (gasodomesticoPersonalizadoBaja !== 0 ? 1 : 0);  
  
  //Función para calcular el valor de configuración
   let baja = "";
  if (cantEquiposBaja === 1) baja = "23";
  else if (cantEquiposBaja === 2) baja = "23 - 23";
  else if (cantEquiposBaja === 3) baja = "23 - 23 - 23";
  else if (cantEquiposBaja === 0) baja = "";

  let alta = "";
  if (cantEquiposAlta === 1) alta = "340";
  else if (cantEquiposAlta === 2) alta = "340 - 340";
  else if (cantEquiposAlta === 3) alta = "340 - 340 - 340";
  else if (cantEquiposAlta === 0) alta = "";

  let configuracion = baja + " - " + alta;

  const potenciaTotal =
    gasodomestico1Alta +
    gasodomestico2Alta +
    gasodomestico3Alta +
    gasodomesticoPersonalizadoAlta +
    gasodomestico1Baja +
    gasodomestico2Baja +
    gasodomestico3Baja +
    gasodomesticoPersonalizadoBaja;
  const medidor: string =
    potenciaTotal === 0
      ? ""
      : potenciaTotal < 30.09
      ? "G1.6"
      : potenciaTotal < 72.1
      ? "G4"
      : potenciaTotal < 120.16
      ? "G6"
      : potenciaTotal < 192.26
      ? "G10"
      : "";


  //Declaración de variables de Costos en Soles*/
  const [costoMedidor, setCostoMedidor] = useState(0);
  const [instalacionInterna, setInstalacionInterna] = useState(0);
  
  //Declaración y función  que cuando 'regulador' cambia, guarda el nuevo valor en localStorage
  const initialRegulador =
  typeof window !== "undefined" && window.localStorage
    ? Number(localStorage.getItem("regulador")) || 0
    : 0;
  const [regulador, setRegulador] = useState(initialRegulador);

  useEffect(() => {
    localStorage.setItem("regulador", regulador.toString());
  }, [regulador]);

  const handleReguladorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegulador(Number(e.target.value));
  };

  //Declaración y función  que cuando 'lineaMontante' cambia, guarda el nuevo valor en localStorage
  const initialLineaMontante =
  typeof window !== "undefined" && window.localStorage
    ? Number(localStorage.getItem("lineaMontante")) || 0
    : 0;
  const [lineaMontante, setLineaMontante] = useState(initialLineaMontante);

  useEffect(() => {
    localStorage.setItem("lineaMontante", lineaMontante.toString());
  }, [lineaMontante]);

  const handleLineaMontanteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLineaMontante(Number(e.target.value));
  };

  const gastoInversion = parseFloat(
    (
      instalacionInterna +
      costoMedidor +
      regulador +
      (costoMedidor !== 0 ? 230.97 : 0) +
      lineaMontante
    ).toFixed(2)
  );

  {
    /*Declaración de variables de Pago en cuotas*/
  }

  const cuota6meses = parseFloat((gastoInversion / 6).toFixed(2));
  const cuota12meses = parseFloat((gastoInversion / 12).toFixed(2));
  const cuota24meses = parseFloat((gastoInversion / 24).toFixed(2));
  const cuota36meses = parseFloat((gastoInversion / 36).toFixed(2));
  const cuota48meses = parseFloat((gastoInversion / 48).toFixed(2));
  const cuota60meses = parseFloat((gastoInversion / 60).toFixed(2));

  {
    /*Declaración de variables de Calculo referencial consumo mensual*/
  }

  const [balon10KgReferencialText, SetBalon10KgReferencialText] =
    useState("45");
  const balon10KgReferencial = Number(balon10KgReferencialText);
  const [balon10KgCantidadText, SetBalon10KgCantidadText] = useState("");
  const balon10KgCantidad = Number(balon10KgCantidadText);
  const balon10KgCActual = parseFloat(
    (balon10KgReferencial * balon10KgCantidad).toFixed(2)
  );
  const balon10KgGnv = parseFloat(
    (balon10KgCantidad * 10 * 1.34 * 1.98).toFixed(2)
  );
  const balon10KgAhorro = parseFloat(
    (Number(balon10KgCActual) - Number(balon10KgGnv)).toFixed(2)
  );

  const [balon45KgReferencialText, SetBalon45KgReferencialText] =
    useState("250");
  const balon45KgReferencial = Number(balon45KgReferencialText);
  const [balon45KgCantidadText, SetBalon45KgCantidadText] = useState("");
  const balon45KgCantidad = Number(balon45KgCantidadText);
  const balon45KgCActual = parseFloat(
    (balon45KgReferencial * balon45KgCantidad).toFixed(2)
  );
  const balon45KgGnv = parseFloat(
    (balon45KgCantidad * 45 * 1.34 * 1.98).toFixed(2)
  );
  const balon45KgAhorro = parseFloat(
    (Number(balon45KgCActual) - Number(balon45KgGnv)).toFixed(2)
  );

  const [GlpReferencialText, SetGlpReferencialText] = useState("11");
  const GlpReferencial = Number(GlpReferencialText);
  const [GlpCantidadText, SetGlpCantidadText] = useState("");
  const GlpCantidad = Number(GlpCantidadText);
  const GlpCActual = parseFloat((GlpReferencial * GlpCantidad).toFixed(2));
  const GlpGnv = parseFloat((GlpCantidad * 1.34 * 1.98).toFixed(2));
  const GlpAhorro = parseFloat(
    (Number(GlpCActual) - Number(GlpGnv)).toFixed(2)
  );

  const [petroleoReferencialText, SetPetroleoReferencialText] =
    useState("18.5");
  const petroleoReferencial = Number(petroleoReferencialText);
  const [petroleoCantidadText, SetPetroleoCantidadText] = useState("");
  const petroleoCantidad = Number(petroleoCantidadText);
  const petroleoCActual = parseFloat(
    (petroleoReferencial * petroleoCantidad).toFixed(2)
  );
  const petroleoGnv = parseFloat((petroleoCantidad * 1.34 * 1.98).toFixed(2));
  const petroleoAhorro = parseFloat(
    (Number(petroleoCActual) - Number(petroleoGnv)).toFixed(2)
  );

  {
    /*Declaración de variables de Retorno de la inversión con el ahorro*/
  }
  const retornoInversionBalon10KgAño1 = parseFloat(
    (balon10KgAhorro * 12).toFixed(2)
  );
  const retornoInversionBalon10KgAño2 = parseFloat(
    (balon10KgAhorro * 24).toFixed(2)
  );
  const retornoInversionBalon10KgAño3 = parseFloat(
    (balon10KgAhorro * 36).toFixed(2)
  );
  const retornoInversionBalon45KgAño1 = parseFloat(
    (balon45KgAhorro * 12).toFixed(2)
  );
  const retornoInversionBalon45KgAño2 = parseFloat(
    (balon45KgAhorro * 24).toFixed(2)
  );
  const retornoInversionBalon45KgAño3 = parseFloat(
    (balon45KgAhorro * 36).toFixed(2)
  );

  const retornoInversionGlpAño1 = parseFloat((GlpAhorro * 12).toFixed(2));
  const retornoInversionGlpAño2 = parseFloat((GlpAhorro * 24).toFixed(2));
  const retornoInversionGlpAño3 = parseFloat((GlpAhorro * 36).toFixed(2));

  const retornoInversionPetroleoAño1 = parseFloat(
    (petroleoAhorro * 12).toFixed(2)
  );
  const retornoInversionPetroleoAño2 = parseFloat(
    (petroleoAhorro * 24).toFixed(2)
  );
  const retornoInversionPetroleoAño3 = parseFloat(
    (petroleoAhorro * 36).toFixed(2)
  );

  {
    /*Función para guardar los valores en registro de clientes*/
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

    setIsSaved(true); // Cambia el estado isSaved a true
  };

  {
    /*Función para editar los valores de los estados*/
  }
  const editarValores = () => {
    setIsSaved(false); // Establece isSaved en false cuando se hace clic en el botón "Editar"
  };

  /*Función para calcular costo del medidor*/
  useEffect(() => {
    let costo: number = 0;

    if (medidor === "G4") {
      if (usoIndividual) {
        costo = 484.65;
      } else if (doble) {
        costo = 409.48;
      } else if (triple) {
        costo = 377.46;
      } else if (cuadruple) {
        costo = 358.45;
      }
    } else if (medidor === "G6") {
      costo = 1139.3;
    } else if (medidor === "G10") {
      costo = 2538.15;
    }

    setCostoMedidor(costo);
  }, [medidor, usoIndividual, doble, triple, cuadruple]);

  /*Función para calcular costo instalacion interna*/
  useEffect(() => {
    let costoInstalacion = 0;

    if (cantEquiposAlta === 1 && cantEquiposBaja === 0) {
      if (peAlPe20251216 === true) {
        if (alaVista) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 1541.85 : 1744.38;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 1553.28 : 1755.83;
          }
        } else if (empotrada) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 1838.81 : 2041.34;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 1850.24 : 2052.79;
          }
        }
      } else if (peAlPe2025 === true) {
        if (alaVista) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 1868.58 : 2071.11;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 1880.01 : 2082.56;
          }
        } else if (empotrada) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 2397.75 : 2600.28;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 2409.18 : 2611.73;
          }
        }
      }
    } else if (cantEquiposAlta === 0 && cantEquiposBaja === 1) {
      if (peAlPe20251216 === true) {
        if (alaVista) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 1938.59 : 2141.13;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 1950.03 : 2152.57;
          }
        } else if (empotrada) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 2186.69 : 2389.24;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 2198.14 : 2400.67;
          }
        }
      } else if (peAlPe2025 === true) {
        if (alaVista) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 2331.36 : 2533.91;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 2342.81 : 2545.34;
          }
        } else if (empotrada) {
          if (medidor === "G4") {
            costoInstalacion = existente ? 2680.11 : 2882.65;
          } else if (medidor === "G6") {
            costoInstalacion = existente ? 2691.54 : 2894.09;
          }
        }
      }
    } else if (
      cantEquiposAlta === 2 &&
      cantEquiposBaja === 0 &&
      peAlPe20251216 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2135.67 : 2338.22;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2147.12 : 2349.65;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2400.27 : 2602.81;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2411.71 : 2614.25;
        }
      }
    } else if (
      cantEquiposAlta === 1 &&
      cantEquiposBaja === 1 &&
      peAlPe20251216 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2503.58 : 2706.12;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2515.02 : 2717.56;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2761.72 : 2964.25;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2773.15 : 2975.7;
        }
      }
    } else if (
      cantEquiposAlta === 0 &&
      cantEquiposBaja === 2 &&
      peAlPe20251216 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2503.58 : 2706.12;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2515.02 : 2717.56;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2761.72 : 2964.25;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2773.15 : 2975.7;
        }
      }
    } else if (
      cantEquiposAlta === 2 &&
      cantEquiposBaja === 0 &&
      peAlPe2025 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2520.79 : 2723.33;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2532.23 : 2734.77;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3036.23 : 3238.78;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3047.68 : 3250.22;
        }
      }
    } else if (
      cantEquiposAlta === 1 &&
      cantEquiposBaja === 1 &&
      peAlPe2025 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2946.54 : 3149.09;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2957.99 : 3160.52;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3384.5 : 3587.03;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3395.93 : 3598.48;
        }
      }
    } else if (
      cantEquiposAlta === 0 &&
      cantEquiposBaja === 2 &&
      peAlPe2025 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2946.54 : 3149.09;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2957.99 : 3160.52;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3384.5 : 3587.03;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3395.93 : 3598.48;
        }
      }
    } else if (
      cantEquiposAlta === 3 &&
      cantEquiposBaja === 0 &&
      peAlPe20251216 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2711.59 : 2914.14;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2723.04 : 2925.57;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3104.0 : 3306.54;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3115.44 : 3317.98;
        }
      }
    } else if (
      cantEquiposAlta === 2 &&
      cantEquiposBaja === 1 &&
      peAlPe20251216 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3067.75 : 3270.3;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3079.2 : 3281.73;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3504.05 : 3706.59;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3515.49 : 3718.03;
        }
      }
    } else if (
      cantEquiposAlta === 1 &&
      cantEquiposBaja === 2 &&
      peAlPe20251216 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3067.75 : 3270.3;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3079.2 : 3281.73;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3504.05 : 3706.59;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3515.49 : 3718.03;
        }
      }
    } else if (
      cantEquiposAlta === 0 &&
      cantEquiposBaja === 3 &&
      peAlPe20251216 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3067.75 : 3270.3;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3079.2 : 3281.73;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3504.05 : 3706.59;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3515.49 : 3718.03;
        }
      }
    } else if (
      cantEquiposAlta === 3 &&
      cantEquiposBaja === 0 &&
      peAlPe2025 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 2981.35 : 3183.9;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 2992.8 : 3195.33;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3667.62 : 3870.16;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3679.05 : 3881.6;
        }
      }
    } else if (
      cantEquiposAlta === 2 &&
      cantEquiposBaja === 1 &&
      peAlPe2025 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3428.48 : 3631.03;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3439.92 : 3642.46;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 4073.84 : 4276.39;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 4085.29 : 4287.83;
        }
      }
    } else if (
      cantEquiposAlta === 1 &&
      cantEquiposBaja === 3 &&
      peAlPe2025 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3428.48 : 3631.03;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3439.92 : 3642.46;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 4073.84 : 4276.39;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 4085.29 : 4287.83;
        }
      }
    } else if (
      cantEquiposAlta === 1 &&
      cantEquiposBaja === 3 &&
      peAlPe2025 === true
    ) {
      if (alaVista) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 3428.48 : 3631.03;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 3439.92 : 3642.46;
        }
      } else if (empotrada) {
        if (medidor === "G4") {
          costoInstalacion = existente ? 4073.84 : 4276.39;
        } else if (medidor === "G6") {
          costoInstalacion = existente ? 4085.29 : 4287.83;
        }
      }
    }

    // Move the following line outside of the callback function
    setInstalacionInterna(costoInstalacion);
  }, [
    cantEquiposAlta,
    cantEquiposBaja,
    peAlPe20251216,
    peAlPe2025,
    alaVista,
    empotrada,
    medidor,
    existente,
    construido,
  ]);

  //OBTENCION DE RAZON SOCIAL POR LA API CON UN TOKEN
  useEffect(() => {
    localStorage.setItem("ruc", ruc);
    if (ruc.length === 11) {
      fetch(`https://api.apis.net.pe/v2/reniec/dni?numero=${ruc}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer apis-token-6383.BtVhLGpMzjiNTuWQPE-90aOThK4pkR7u'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data); // Imprime el JSON de la respuesta en la consola
          console.log(ruc);
          setRazonNombre(data.razonSocial);
        })
        .catch(error => console.error(error));
    }
  }, [ruc]);

  //RETURN PRINCIPAL
  return (
    <main className="container w-[320px]  flex flex-col items-center justify-center min-h-screen font-sans text-sm">
      <div className="flex-grow w-full flex flex-col items-center"></div>
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
            cellWidthNumberClass="w-48"
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
            cellWidthNumberClass="w-48"
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
            cellWidthNumberClass="w-48"
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
            cellWidthNumberClass="w-48"
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
            cellWidthNumberClass="w-48"
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
            cellWidthNumberClass="w-48"
            isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
          />
        </div>

        {/*TÍTULO: SUMINISTRO E INSTALACIÓN*/}
        <div className="flex flex-col items-center mt-4 mb-2">
          <h1 className="text-base ">Suministro e Instalación</h1>
        </div>

        {/*Tipo de gabiente*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotRegDes4
            text1="Tipo de gabiente"
            text2="Uso individual"
            text3="Doble"
            text4="Triple"
            text5="Cuadruple"
            rowHeightClass="h-4"
            cellWidthTextClass="w-32"
            cellWidthMenuClass="w-48"
            boolean1={usoIndividual}
            setText1={setUsoIndividual}
            boolean2={doble}
            setText2={setDoble}
            boolean3={triple}
            setText3={setTriple}
            boolean4={cuadruple}
            setText4={setCuadruple}
          />
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

        {/*Configuración*/}
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
            number1={cantEquiposAlta + cantEquiposBaja}
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
              number1={cantEquiposAlta}
              number2={cantEquiposBaja}
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

        {/*Gasodomestico Personalizado*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg7
            text1InitialValue={gasodomesticoPersonalizadoTexto}
            onText1Change={setGasodomesticoPersonalizadoTexto}
            text2InitialValue={gasodomesticoPersonalizadoAlta}
            onText2Change={setGasodomesticoPersonalizadoAlta}
            text3InitialValue={gasodomesticoPersonalizadoBaja}
            onText3Change={setGasodomesticoPersonalizadoBaja}
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-56"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-12"
            cellWidthNumber2Class="w-12"
            isDisabled={isSaved}
          />
        </div>

        {/*Sub Tot. Potencia KW*/}
        <div className="flex flex-col items-center mt-3">
          <CotReg3
            text="Sub Tot. Potencia KW"
            number1={
              gasodomestico1Alta +
              gasodomestico2Alta +
              gasodomestico3Alta +
              gasodomesticoPersonalizadoAlta
            }
            number2={
              gasodomestico1Baja +
              gasodomestico2Baja +
              gasodomestico3Baja +
              gasodomesticoPersonalizadoBaja
            }
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
            number1={potenciaTotal}
            text2="KW"
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-56"
            rowHeightNumber1Class="h-4"
            cellWidthNumber1Class="w-12"
            rowHeightNumber2Class="h-4"
            cellWidthNumber2Class="w-12"
          />
        </div>

        {/*Tipo de Medidor*/}
        <div className="flex flex-col items-center mt-3">
          <CotReg10
            text1="Medidor"
            text2={medidor}
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-56"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-24"
          />
        </div>

        {/*TÍTULO: COSTOS EN SOLES*/}
        <div className="flex flex-col items-center mt-4 mb-2">
          <h1 className="text-base ">Costos en Soles</h1>
        </div>

        {/*Costo de Instalación interna*/}
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

        {/*Costo de Medidor*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg4
            text1="Costo medidor"
            number1={costoMedidor}
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-56"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-24"
          />
        </div>

        {/*Costo de Regulador*/}
        <div className="flex flex-col items-center mt-0.25">
          <ClientReg1
            text1="Costo regulador"
            text2Name={regulador}
            text2InitialValue={regulador}
            onText2Change={setRegulador} // Pasa setCoordenada a ClientReg
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-56"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-24"
            isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
          />
        </div>
        {/*Costo de Derecho de conexión*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg4
            text1="Derecho de conexión"
            number1={costoMedidor !== 0 ? 230.97 : 0}
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-56"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-24"
          />
        </div>

        {/*Costo de línea montante*/}
        <div className="flex flex-col items-center mt-0.25">
          <ClientReg1
            text1="Valor línea montante"
            text2Name={lineaMontante}
            text2InitialValue={lineaMontante}
            onText2Change={setLineaMontante} // Pasa setLineaMontante a ClientReg
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-56"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-24"
            isDisabled={isSaved} // Pasa isSaved a ClientReg como isDisabled
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

        {/*Encabezados Cuotas y Pago mensual*/}
        <div className="flex flex-col items-center mt-0.5">
          <CotReg5
            text1="Cuotas"
            text2="Pago Mensual"
            text3="Pago Ahorro"
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-24"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-32"
          />
        </div>

        {/*6 meses*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg11
            text1="6"
            number1={cuota6meses}
            text2=""
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-24"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-32"
          />
        </div>

        {/*12 meses*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg11
            text1="12"
            number1={cuota12meses}
            text2={
              retornoInversionBalon10KgAño1 +
                retornoInversionBalon45KgAño1 +
                retornoInversionGlpAño1 +
                retornoInversionPetroleoAño1 >
              gastoInversion
                ? "pagado"
                : ""
            }
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-24"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-32"
          />
        </div>

        {/*24 meses*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg11
            text1="24"
            number1={cuota24meses}
            text2={
              retornoInversionBalon10KgAño2 +
                retornoInversionBalon45KgAño2 +
                retornoInversionGlpAño2 +
                retornoInversionPetroleoAño2 >
              gastoInversion
                ? "pagado"
                : ""
            }
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-24"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-32"
          />
        </div>

        {/*36 meses*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg11
            text1="36"
            number1={cuota36meses}
            text2={
              retornoInversionBalon10KgAño3 +
                retornoInversionBalon45KgAño3 +
                retornoInversionGlpAño3 +
                retornoInversionPetroleoAño3 >
              gastoInversion
                ? "pagado"
                : ""
            }
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-24"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-32"
          />
        </div>

        {/*48 meses*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg11
            text1="48"
            number1={cuota48meses}
            text2={
              retornoInversionBalon10KgAño3 +
                retornoInversionBalon45KgAño3 +
                retornoInversionGlpAño3 +
                retornoInversionPetroleoAño3 >
              gastoInversion
                ? "pagado"
                : ""
            }
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-24"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-32"
          />
        </div>

        {/*60 meses*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg11
            text1="60"
            number1={cuota60meses}
            text2={
              retornoInversionBalon10KgAño3 +
                retornoInversionBalon45KgAño3 +
                retornoInversionGlpAño3 +
                retornoInversionPetroleoAño3 >
              gastoInversion
                ? "pagado"
                : ""
            }
            rowHeightTextClass="h-4"
            cellWidthTextClass="w-24"
            rowHeightNumberClass="h-4"
            cellWidthNumberClass="w-32"
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
          <ClientReg2
            text="Balón 10Kg"
            text1InitialValue={balon10KgReferencialText}
            onText1Change={SetBalon10KgReferencialText}
            text2InitialValue={balon10KgCantidadText}
            onText2Change={SetBalon10KgCantidadText}
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
            isDisabled={isSaved} // Añade isDisabled a las props
          />
        </div>

        {/*Balón 45Kg*/}
        <div className="flex flex-col items-center mt-0.25">
          <ClientReg2
            text="Balón 45Kg"
            text1InitialValue={balon45KgReferencialText}
            onText1Change={SetBalon45KgReferencialText}
            text2InitialValue={balon45KgCantidadText}
            onText2Change={SetBalon45KgCantidadText}
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
            isDisabled={isSaved} // Añade isDisabled a las props
          />
        </div>

        {/*Gl. GLP*/}
        <div className="flex flex-col items-center mt-0.25">
          <ClientReg2
            text="GL GLP"
            text1InitialValue={GlpReferencialText}
            onText1Change={SetGlpReferencialText}
            text2InitialValue={GlpCantidadText}
            onText2Change={SetGlpCantidadText}
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
            isDisabled={isSaved} // Añade isDisabled a las props
          />
        </div>

        {/*Gl. Petroleo*/}
        <div className="flex flex-col items-center mt-0.25">
          <ClientReg2
            text="G Petroleo"
            text1InitialValue={petroleoReferencialText}
            onText1Change={SetPetroleoReferencialText}
            text2InitialValue={petroleoCantidadText}
            onText2Change={SetPetroleoCantidadText}
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
            isDisabled={isSaved} // Añade isDisabled a las props
          />
        </div>

        {/*TÍTULO: RETORNO DE LA INVERSIÓN CON EL AHORRO*/}
        <div className="flex flex-col items-center mt-4 mb-2">
          <h1 className="text-base">Retorno de la inversión</h1>
          <h1 className="text-base">por año con el ahorro</h1>
        </div>

        {/*Encabezados*/}
        <div className="flex flex-col items-center mt-0.25">
          <CotReg8
            text1="Comb."
            text2="Año1"
            text3="Año2"
            text4="Año3"
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

        {/*BOTONES CALCULAR E IMPRIMIR*/}
        <div className="flex justify-center space-x-5">
          {/*Boton Calcular*/}
          <div
            className={classNames(
              "flex flex-col items-center mt-4",
              isSaved && "rounded-lg bg-gray-400"
            )}
          >
            <GuardarBotton
              text="Guardar"
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
      </div>
    </main>
  );
}
