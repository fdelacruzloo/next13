// En el archivo de getCocinas
"use client";
import React from 'react';

const COCINAS = [
  //Cocinas
  {
    id: "p1",
    title: "COCINA DOMESTICA, 4Q+HOR, REGULADOR:SI, 23 mbar, 11.05 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-01.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p2",
    title: "COCINA SI, 1Q, REGULADOR:NO, 340 mbar, 15 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-02.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p3",
    title: "COCINA SI, 2Q, REGULADOR:NO, 340 mbar, 24 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-03.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p4",
    title: "COCINA SI, 3Q, REGULADOR:NO, 340 mbar, 34 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-04.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p5",
    title: "COCINA SI, 4Q, REGULADOR:NO, 340 mbar, 45 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-05.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p6",
    title: "COCINA SI, 5Q, REGULADOR:NO, 340 mbar, 55 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-06.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p7",
    title: "COCINA SI, 6Q, REGULADOR:NO, 340 mbar, 65 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-07.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p8",
    title: "COCINA WOK, 1Q, REGULADOR:NO,	340 mbar, 19.9 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-08.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p9",
    title: "COCINA WOK, 2Q, REGULADOR:NO,	340 mbar, 39.8 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-09.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p10",
    title: "COCINA WOK, 3Q, REGULADOR:NO, 340 mbar, 59.7 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-10.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p11",
    title: "COCINA WOK, 4Q, REGULADOR:NO, 340 mbar, 79.60 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-11.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p12",
    title: "COCINA WOK, 5Q, REGULADOR:NO, 340 mbar, 99.5 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-12.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p13",
    title: "COCINA WOK, 6Q, REGULADOR:NO, 340 mbar, 119 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-13.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
];

function getCocinas(isHighPressureClicked: boolean, isLowPressureClicked: boolean) {
  return COCINAS.filter((cocina) => {
    if (cocina.regulador && !isHighPressureClicked) {
      return false;
    }
    if (!cocina.regulador && !isLowPressureClicked) {
      return false;
    }
    return true;
  });
}

export { getCocinas };

type freidoras = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  Regulador: boolean; // Nuevo campo
};
const FREIDORAS = [
  //Freidoras
  {
    id: "p14",
    title: "FREIDORA DE ALTA, QUEMADOR, REGULADOR:NO, 340 mbar, 25 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-14.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p15",
    title: "FREIDORA DE BAJA, FLAUTA, REGULADOR:SI, 23 mbar, 20 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-15.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
];

function getFreidoras(isHighPressureClicked: boolean, isLowPressureClicked: boolean) {
  return FREIDORAS.filter((freidora) => {
    if (freidora.regulador && !isHighPressureClicked) {
      return false;
    }
    if (!freidora.regulador && !isLowPressureClicked) {
      return false;
    }
    return true;
  });
}

export { getFreidoras };

const HORNOS = [
  //Hornos
  {
    id: "p16",
    title: "HORNO DOMESTICO, REGULADOR:NO, 340 mbar, 15.5 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-16.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p17",
    title: "HORNO PIZZERO, SIN QUEMADOR, REGULADOR:NO, 340 mbar, 36 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-17.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p18",
    title: "HORNO PASTELERO, SIN QUEMADOR, REGULADOR:NO,	340 mbar, 34 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-18.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p19",
    title: "HORNO MAX 2000, CON QUEMADOR, REGULADOR:SI, 23 mbar, 70.34 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-19.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p20",
    title: "HORNO MAX100	CON QUEMADOR, REGULADOR:SI, 23 mbar, 46.64 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-20.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p21",
    title: "HORNO MAX750	CON QUEMADOR, REGULADOR:SI, 23 mbar, 46.64 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-21.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p22",
    title: "HORNO ARTESANAL, CON QUEMADOR, REGULADOR:SI,	23 mbar, 117 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-22.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p23",
    title: "ROSTICERO O POLLERO,	CON QUEMADOR, REGULADOR:SI, 23 mbar, 20.5 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-23.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p24",
    title: "HORNO PARA CERAMICA,	SIN QUEMADOR, REGULADOR:SI, 23 mbar, 119 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-24.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
];

function getHornos(isHighPressureClicked: boolean, isLowPressureClicked: boolean) {
  return HORNOS.filter((horno) => {
    if (horno.regulador && !isHighPressureClicked) {
      return false;
    }
    if (!horno.regulador && !isLowPressureClicked) {
      return false;
    }
    return true;
  });
}

export { getHornos };

const SECADORAS = [
  //Secadoras
  {
    id: "p25",
    title: "SECADORA DOMESTICA, REGULADOR:SI, 23 mbar, 7.2 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-25.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p26",
    title: "SECADORA INDUSTRIAL, REGULADOR:SI, 23 mbar, 20 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-26.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
];

function getSecadoras(isHighPressureClicked: boolean, isLowPressureClicked: boolean) {
  return SECADORAS.filter((secadora) => {
    if (secadora.regulador && !isHighPressureClicked) {
      return false;
    }
    if (!secadora.regulador && !isLowPressureClicked) {
      return false;
    }
    return true;
  });
}

export { getSecadoras };

const OTROS = [
  //Otros
  {
    id: "p27",
    title: "EQUIPO MIXTO, REGULADOR:NO, 340 mbar, 45 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-27.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p28",
    title: "BROSTERA, REGULADOR:NO, 340 mbar, 20 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-28.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p29",
    title: "PLANCHAS, REGULADOR:NO, 340 mbar, 20 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-29.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p30",
    title: "QUEMADOR, REGULADOR:SI, 23 mbar, 117 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-30.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p31",
    title: "CALENTADOR DE PSCINA, 140, REGULADOR:SI, 23 mbar, 71.8 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-31.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p32",
    title: "CALENTADOR DE PSCINA, 350, REGULADOR:SI, 23 mbar, 117.62 K",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-32.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p33",
    title: "CALENTADOR DE PSCINA, 750, REGULADOR:SI, 23 mbar, 331 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-33.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p34",
    title: "OLLA ARROCERA, REGULADOR:SI,	23 mbar, 10.05 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-34.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p35",
    title: "FORNILLON, REGULADOR:NO, 340 mbar, 50 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-35.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p36",
    title: "GRATINADOR, REGULADOR:NO, 340 mbar, 22 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-36.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p37",
    title: "SALAMANDRA, REGULADOR:NO, 340 mbar, 25 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-37.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p38",
    title: "BUFETERA, REGULADOR:NO, 340 mbar, 36 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-38.jpg",
    cantidad: 0,
    regulador: false, // Valor para el nuevo campo
  },
];

function getOtros(isHighPressureClicked: boolean, isLowPressureClicked: boolean) {
  return OTROS.filter((otro) => {
    if (otro.regulador && !isHighPressureClicked) {
      return false;
    }
    if (!otro.regulador && !isLowPressureClicked) {
      return false;
    }
    return true;
  });
}

export { getOtros};