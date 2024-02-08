// pages/api/cocinas.js

export default function handler(req, res) {
  // Tu código para manejar la solicitud aquí
  // Por ejemplo, podrías devolver un array de "cocinas" como este:
  const cocinas = [

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

  res.status(200).json(cocinas);
}