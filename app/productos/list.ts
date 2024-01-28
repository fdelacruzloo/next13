type cocinas = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean; // Nuevo campo
};
const COCINAS = [
  //Cocinas
  {
    id: "p1",
    title: "COCINA DOMESTICA, 4Q+HOR, REGULADOR:SI, 23 mbar, 11.05 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-01.jpg",
    cantidad: 0,
    regulador: true, // Valor para el nuevo campo
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
  // Resto de las cocinas...
];

export async function getCocinas() {
  return COCINAS;
}

type freidoras = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean; // Nuevo campo
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
  // Resto de las freidoras...
];

export async function getFreidoras() {
  return FREIDORAS;
}

type hornos = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean; // Nuevo campo
};
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
  // Resto de los hornos...
];

export async function getHornos() {
  return HORNOS;
}

type secadoras = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean; // Nuevo campo
};
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
  // Resto de las secadoras...
];

export async function getSecadoras() {
  return SECADORAS;
}

type otros = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  regulador: boolean; // Nuevo campo
};
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
  // Resto de los otros...
];

export async function getOtros() {
  return OTROS;
}
