type freidoras = {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
};
const FREIDORAS = [
//Freidoras
  {
    id: 'p14',
    title: 'FREIDORA DE ALTA, QUEMADOR, REGULADOR:NO, 340 mbar, 25 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-14.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p15',
    title: 'FREIDORA DE BAJA, FLAUTA, REGULADOR:SI, 23 mbar, 20 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-15.jpg',
    link: 'https://abb.com',
  },
 ];

export async function getFreidoras() {
  return FREIDORAS;
  }