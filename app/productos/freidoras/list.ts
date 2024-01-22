type freidoras = {
  id: string;
  title: string;
  imageUrl: string;
  cantidad: number;
};
const FREIDORAS = [
//Freidoras
  {
    id: 'p14',
    title: 'FREIDORA DE ALTA, QUEMADOR, REGULADOR:NO, 340 mbar, 25 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-14.jpg',
    cantidad: 0,
  },
  {
    id: 'p15',
    title: 'FREIDORA DE BAJA, FLAUTA, REGULADOR:SI, 23 mbar, 20 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-15.jpg',
    cantidad: 0,
  },
 ];

export async function getFreidoras() {
  return FREIDORAS;
  }