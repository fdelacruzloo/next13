import React from 'react';

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
];

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
];

function List() {
  return (
    <div>
      <h1>Cocinas</h1>
      {COCINAS.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title} />
          <p>Cantidad: {item.cantidad}</p>
          <p>Regulador: {item.Regulador ? 'Sí' : 'No'}</p>
        </div>
      ))}

      <h1>Freidoras</h1>
      {FREIDORAS.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title} />
          <p>Cantidad: {item.cantidad}</p>
          <p>Regulador: {item.Regulador ? 'Sí' : 'No'}</p>
        </div>
      ))}
    </div>
  );
}

export default List;