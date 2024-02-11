// data.js
const ids = ["id1", "id2", "id3"]; // reemplaza esto con tu lista real de ids

const data = ids.map(id => {
  const cantidad = localStorage.getItem(id);
  return {
    id,
    cantidad: cantidad ? Number(cantidad) : 0 // convierte la cantidad a un número, o usa 0 si no hay un valor almacenado
  };
});

// Imprime cada registro
data.forEach(({ id, cantidad }) => {
  console.log(`ID: ${id}, Cantidad: ${cantidad}`);
});

export default data;