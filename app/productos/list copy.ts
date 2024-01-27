type cocinas = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
  Regulador: boolean; // Nuevo campo
};
const COCINAS = [
  //Cocinas
  {
    id: "p1",
    title: "COCINA DOMESTICA, 4Q+HOR, REGULADOR:SI, 23 mbar, 11.05 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-01.jpg",
    cantidad: 0,
    Regulador: true, // Valor para el nuevo campo
  },
  {
    id: "p2",
    title: "COCINA SI, 1Q, REGULADOR:NO, 340 mbar, 15 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-02.jpg",
    cantidad: 0,
    Regulador: false, // Valor para el nuevo campo
  },
]
export async function getCocinas() {
  return COCINAS;
}

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
    Regulador: false, // Valor para el nuevo campo
  },
  {
    id: "p15",
    title: "FREIDORA DE BAJA, FLAUTA, REGULADOR:SI, 23 mbar, 20 KW",
    imageUrl:
      "https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-15.jpg",
    cantidad: 0,
    Regulador: true, // Valor para el nuevo campo
  },
];

export async function getFreidoras() {
  return FREIDORAS;
}