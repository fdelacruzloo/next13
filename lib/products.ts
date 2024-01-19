type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  link: string;
};
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'COCINA DOMESTICA, 4Q+HOR, REGULADOR:SI, 23 mbar, 11.05 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-01.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p2',
    title: 'COCINA SI, 1Q, REGULADOR:NO, 340 mbar, 15 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-02.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p3',
    title: 'COCINA SI, 2Q, REGULADOR:NO, 340 mbar, 24 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-03.jpg',
    link: 'https://abb.com',
  },
  {
    id: 'p4',
    title: 'COCINA SI, 3Q, REGULADOR:NO, 340 mbar, 34 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-04.jpg',
    link: 'https://abb.com',
   },
  {
    id: 'p5',
    title: 'COCINA SI, 4Q, REGULADOR:NO, 340 mbar, 45 KW',
    imageUrl: 'https://pdf-viewe-2024.s3.amazonaws.com/2022-11-15/Name+of+First+Album/Image-05.jpg',
    link: 'https://abb.com',
  },
];

export async function getProducts() {
  return DUMMY_PRODUCTS;
  }