type otros = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
};
const OTROS = [
//Otros
  {
    id: 'p27',
    title: 'EQUIPO MIXTO, REGULADOR:NO, 340 mbar, 45 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-27.jpg',
    cantidad: 0,
  },
  {
    id: 'p28',
    title: 'BROSTERA, REGULADOR:NO, 340 mbar, 20 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-28.jpg',
    cantidad: 0,
  },
  {
    id: 'p29',
    title: 'PLANCHAS, REGULADOR:NO, 340 mbar, 20 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-29.jpg',
    cantidad: 0,
  },
  {
    id: 'p30',
    title: 'QUEMADOR, REGULADOR:SI, 23 mbar, 117 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-30.jpg',
    cantidad: 0,
   },
  {
    id: 'p31',
    title: 'CALENTADOR DE PSCINA, 140, REGULADOR:SI, 23 mbar, 71.8 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-31.jpg',
    cantidad: 0,
  },
  {
    id: 'p32',
    title: 'CALENTADOR DE PSCINA, 350, REGULADOR:SI, 23 mbar, 117.62 K',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-32.jpg',
    cantidad: 0,
  },
  {
    id: 'p33',
    title: 'CALENTADOR DE PSCINA, 750, REGULADOR:SI, 23 mbar, 331 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-33.jpg',
    cantidad: 0,
  },
  {
    id: 'p34',
    title: 'OLLA ARROCERA, REGULADOR:SI,	23 mbar, 10.05 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-34.jpg',
    cantidad: 0,
  },
  {
    id: 'p35',
    title: 'FORNILLON, REGULADOR:NO, 340 mbar, 50 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-35.jpg',
    cantidad: 0,
   },
  {
    id: 'p36',
    title: 'GRATINADOR, REGULADOR:NO, 340 mbar, 22 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-36.jpg',
    cantidad: 0,
  },
  {
    id: 'p37',
    title: 'SALAMANDRA, REGULADOR:NO, 340 mbar, 25 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-37.jpg',
    cantidad: 0,
  },
  {
    id: 'p38',
    title: 'BUFETERA, REGULADOR:NO, 340 mbar, 36 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-38.jpg',
    cantidad: 0,
  },
];

export async function getOtros() {
  return OTROS;
  }