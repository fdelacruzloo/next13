// data.js
const ids = []; //lista de ids de p1 a p38
for (let i = 1; i <= 38; i++) {
  ids.push(`p${i}`);
}

// Mapeo de ids a sus multiplicadores correspondientes
const idToMultiplier = {
  'p1': 11.05,
  'p2': 15.00,
  'p3': 24.00,
  'p4': 34.00,
  'p5': 45.00,
  'p6': 55.00,
  'p7': 65.00,
  'p8': 19.90,
  'p9': 39.80,
  'p10': 59.70,
  'p11': 79.60,
  'p12': 99.50,
  'p13': 119.00,
  'p14': 25.00,
  'p15': 20.00,
  'p16': 15.50,
  'p17': 36.00,
  'p18': 34.00,
  'p19': 70.34,
  'p20': 46.64,
  'p21': 46.64,
  'p22': 117.00,
  'p23': 20.50,
  'p24': 119.00,
  'p25': 7.20,
  'p26': 20.00,
  'p27': 45.00,
  'p28': 20.00,
  'p29': 20.00,
  'p30': 117.00,
  'p31': 71.80,
  'p32': 117.72,
  'p33': 331.00,
  'p34': 10.05,
  'p35': 50.00,
  'p36': 22.00,
  'p37': 25.00,
  'p38': 36.00
};

// Mapeo de ids a sus valores de regulador correspondientes
const idToRegulator = {
  'p1': true,
  'p2': false,
  'p3': false,
  'p4': false,
  'p5': false,
  'p6': false,
  'p7': false,
  'p8': false,
  'p9': false,
  'p10': false,
  'p11': false,
  'p12': false,
  'p13': false,
  'p14': false,
  'p15': true,
  'p16': false,
  'p17': false,
  'p18': false,
  'p19': true,
  'p20': true,
  'p21': true,
  'p22': true,
  'p23': true,
  'p24': true,
  'p25': true,
  'p26': true,
  'p27': false,
  'p28': false,
  'p29': false,
  'p30': true,
  'p31': true,
  'p32': true,
  'p33': true,
  'p34': true,
  'p35': false,
  'p36': false,
  'p37': false,
  'p38': false
};

export const getData = () => {
  const data = ids.map(id => {
    const cantidad = localStorage.getItem(id);
    const regulador = idToRegulator[id]; // obtiene el valor de regulador para este id
    
    return {
      id,
      cantidad: cantidad ? Number(cantidad) : 0, // convierte la cantidad a un número, o usa 0 si no hay un valor almacenado
      regulador // agrega el valor de regulador a cada objeto
    };
  });

  // Para cada id en idToMultiplier, encuentra el objeto correspondiente, multiplica su cantidad por el multiplicador y almacena el resultado en localStorage
  for (const [id, multiplier] of Object.entries(idToMultiplier)) {
    const obj = data.find(item => item.id === id);
    if (obj) {
      const kwValue = obj.cantidad * multiplier;
      localStorage.setItem(`kw${id.slice(1)}`, String(kwValue));
      localStorage.setItem(`Regulador${id.slice(1)}`, String(obj.regulador)); // guarda el valor de regulador para este id en localStorage
      }
  }

  return data;
};
