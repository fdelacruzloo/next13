type hornos = {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
};
const HORNOS = [
//Hornos
  {
    id: 'p16',
    title: 'HORNO DOMESTICO, REGULADOR:NO, 340 mbar, 15.5 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-16.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p17',
    title: 'HORNO PIZZERO, SIN QUEMADOR, REGULADOR:NO, 340 mbar, 36 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-17.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p18',
    title: 'HORNO PASTELERO, SIN QUEMADOR, REGULADOR:NO,	340 mbar, 34 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-18.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p19',
    title: 'HORNO MAX 2000, CON QUEMADOR, REGULADOR:SI, 23 mbar, 70.34 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-19.jpg',
    link: 'https://abb.com',
   },
  {
    id: 'p20',
    title: 'HORNO MAX100	CON QUEMADOR, REGULADOR:SI, 23 mbar, 46.64 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-20.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p21',
    title: 'HORNO MAX750	CON QUEMADOR, REGULADOR:SI, 23 mbar, 46.64 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-21.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p22',
    title: 'HORNO ARTESANAL, CON QUEMADOR, REGULADOR:SI,	23 mbar, 117 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-22.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p23',
    title: 'ROSTICERO O POLLERO,	CON QUEMADOR, REGULADOR:SI, 23 mbar, 20.5 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-23.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p24',
    title: 'HORNO PARA CERAMICA,	SIN QUEMADOR, REGULADOR:SI, 23 mbar, 119 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-24.jpg',
    link: 'https://abb.com',
   },
];

export async function getHornos() {
  return HORNOS;
  }