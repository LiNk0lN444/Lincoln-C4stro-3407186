"use strict";

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================
const DOMAIN_NAME = "LogistiTrack - Catálogo Pro";
const VALUE_LABEL = "productos de inventario";

// ============================================
// 1. DATOS DEL CATÁLOGO (Mínimo 6 objetos, 5 propiedades)
// ============================================
const items = [
  { id: 1, name: "Estantería Pesada", price: 450000, available: true, zone: "A", stock: 15 },
  { id: 2, name: "Montacargas Hidráulico", price: 1200000, available: true, zone: "B" }, // Propiedad 'stock' opcional
  { id: 3, name: "Kit Cajas x50", price: 85000, available: false, zone: "A", stock: 100 },
  { id: 4, name: "Cinta Embalaje", price: 12500, available: true, zone: "C", stock: 500 },
  { id: 5, name: "Escáner Industrial", price: 320000, available: true, zone: "B", stock: 8 },
  { id: 6, name: "Pallets Madera", price: 45000, available: true, zone: "A", stock: 40 }
];

// ============================================
// 2. INSPECCIÓN DE OBJETOS (Object.keys / values)
// ============================================
const inspectItem = (item) => {
  console.log("\n--- Inspeccionando Producto ---");
  console.log("Claves (Keys):", Object.keys(item));
  console.log("Valores (Values):", Object.values(item));
};

// ============================================
// 3. PROPIEDADES OPCIONALES (Object.hasOwn)
// ============================================
const showWithOptionals = (item) => {
  let detail = `[${item.id}] ${item.name}`;
  // Verificamos si el objeto tiene la propiedad 'stock' específicamente
  if (Object.hasOwn(item, "stock")) {
    detail += ` | Stock: ${item.stock} unidades`;
  } else {
    detail += ` | Stock: No definido`;
  }
  console.log(detail);
};

// ============================================
// 4. ITERACIÓN (for...in)
// ============================================
const printAllProperties = (item) => {
  console.log(`\nDetalle técnico de: ${item.name}`);
  for (const key in item) {
    console.log(`  - ${key.toUpperCase()}: ${item[key]}`);
  }
};

// ============================================
// 5. ACTUALIZACIÓN INMUTABLE (Spread Operator)
// ============================================
const updateItemPrice = (item, newPrice) => {
  // Creamos una copia y actualizamos solo el precio
  return { ...item, price: newPrice, lastUpdate: new Date().toLocaleDateString() };
};

// ============================================
// 6. ESTADÍSTICAS (Métodos de Array + Objetos)
// ============================================
const calculateStats = () => {
  const prices = items.map(i => i.price);
  const totalValue = prices.reduce((acc, curr) => acc + curr, 0);
  return {
    count: items.length,
    average: totalValue / items.length,
    max: Math.max(...prices),
    min: Math.min(...prices)
  };
};

// ============================================
// REPORTE FINAL
// ============================================
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  const stats = calculateStats();
  const availableCount = items.filter(i => i.available).length;

  console.log(`Total de ${VALUE_LABEL}: ${stats.count}`);
  console.log(`Productos Disponibles: ${availableCount}`);
  console.log(`Valor Promedio: $${stats.average.toLocaleString()}`);
  console.log(`Producto más caro: $${stats.max.toLocaleString()}`);

  console.log("\n--- LISTADO DE PRODUCTOS (con validación de stock) ---");
  items.forEach(showWithOptionals);

  console.log("\n" + "=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================
console.log(`🚀 Iniciando catálogo: ${DOMAIN_NAME}`);

// 1. Mostrar inspección del primer producto
inspectItem(items[0]);

// 2. Mostrar todas las propiedades (usando for...in) del segundo producto
printAllProperties(items[1]);

// 3. Demostrar actualización inmutable
const itemActualizado = updateItemPrice(items[3], 15000);
console.log("\n--- Producto Actualizado (Inmutable) ---");
console.log(itemActualizado);

// 4. Generar el gran reporte final
buildReport();