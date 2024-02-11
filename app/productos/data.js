// data.js
const ids = []; //lista de ids de p1 a p38
for (let i = 1; i <= 38; i++) {
  ids.push(`p${i}`);
}

// Mapeo de ids a sus multiplicadores correspondientes
const idToMultiplier = {
  'p1': 11.05,
  'p2': 15,
  'p3': 24,
  'p4': 34,
  'p5': 45,
  'p6': 55,
  'p7': 65,
  'p8': 19.90,
  'p9': 39.80,
  'p10': 59.70,
  'p11': 79.60,
  'p12': 99-50,
  'p13': 119,
  'p14': 25,
  'p15': 20,
  'p16': 15.50,
  'p17': 36,
  'p18': 34,
  'p19': 70.34,
  'p20': 46.64,
  'p21': 46.64,
  'p22': 117,
  'p23': 20.50,
  'p24': 119,
  'p25': 7.20,
  'p26': 20,
  'p27': 45,
  'p28': 20,
  'p29': 20,
  'p30': 117,
  'p31': 71.80,
  'p32': 117.72,
  'p33': 331,
  'p34': 10.05,
  'p35': 50,
  'p36': 22,
  'p37': 25,
  'p38': 36
};

export const getData = () => {
  const data = ids.map(id => {
    const cantidad = localStorage.getItem(id);
    return {
      id,
      cantidad: cantidad ? Number(cantidad) : 0 // convierte la cantidad a un número, o usa 0 si no hay un valor almacenado
    };
  });

  // Para cada id en idToMultiplier, encuentra el objeto correspondiente, multiplica su cantidad por el multiplicador y almacena el resultado en localStorage
  for (const [id, multiplier] of Object.entries(idToMultiplier)) {
    const obj = data.find(item => item.id === id);
    if (obj) {
      const kwValue = obj.cantidad * multiplier;
      localStorage.setItem(`kw${id.slice(1)}`, String(kwValue));
    }
  }

  return data;
};