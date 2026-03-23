// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: LogistiTrack - Gestión de Bodegas
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Array con 6 elementos representativos de la bodega (Requisito 1)
const items = [
  { name: "Cemento Gris 50kg", category: "Construcción", value: 120 },
  { name: "Taladro Percutor", category: "Herramientas", value: 15 },
  { name: "Casco de Seguridad", category: "Protección", value: 45 },
  { name: "Ladrillo Estructural", category: "Construcción", value: 500 },
  { name: "Guantes de Nitrilo", category: "Protección", value: 80 },
  { name: "Pala de Punta", category: "Herramientas", value: 30 }
];

// Categorías para el proceso de conteo (Requisito 3)
const categories = ["Construcción", "Herramientas", "Protección"];

// Etiqueta para el valor numérico (Requisito 1)
const valueLabel = "unidades en stock";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

// Recorremos el array para listar los productos (Requisito 2)
for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  // Bucle anidado para contar productos por cada categoría (Requisito 3)
  for (const item of items) {
    if (item.category === category) {
        count++;
    }
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

// Sumamos el stock de todos los items (Requisito 4)
for (const item of items) {
  totalValue += item.value;
}

// Calculamos el promedio de stock
const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

// Inicializamos con el primer elemento para comparar (Requisito 5)
let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    // Lógica para encontrar el valor máximo
    if (item.value > maxItem.value) {
        maxItem = item;
    }
    // Lógica para encontrar el valor mínimo
    if (item.value < minItem.value) {
        minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${maxItem?.value})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${minItem?.value})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

// Usamos un for clásico (i) como pide el requisito (Requisito 6)
for (let i = 0; i < items.length; i++) {
  const item = items[i];

  // Clasificamos según el promedio calculado en la sección 4
  const comparison = item.value >= averageValue ? "SOBRE EL PROMEDIO" : "BAJO EL PROMEDIO";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE LOGISTITRACK ===");