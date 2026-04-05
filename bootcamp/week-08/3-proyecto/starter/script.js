"use strict";

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "LogistiTrack - Gestión de Bodega"; 
const VALUE_LABEL = "unidades de stock";     

// ============================================
// 1. ARRAY INICIAL (Mínimo 5 objetos)
// ============================================
let items = [
  { id: 101, name: "Estantería Pesada", price: 450000, inStock: true, zone: "A", weight: 50 },
  { id: 102, name: "Montacargas Hidráulico", price: 1200000, inStock: true, zone: "B", weight: 200 },
  { id: 103, name: "Kit Cajas x50", price: 85000, inStock: false, zone: "A", weight: 12 },
  { id: 104, name: "Cinta Embalaje", price: 12500, inStock: true, zone: "C", weight: 1 },
  { id: 105, name: "Escáner Industrial", price: 320000, inStock: true, zone: "B", weight: 2 }
];

// Función de formato (Arrow Function de la Semana 7)
const formatItem = (item) => 
  `[ID: ${item.id}] ${item.name} | Zona: ${item.zone} | $${item.price.toLocaleString()}`;

// ============================================
// 2. MÉTODOS DE MUTACIÓN (Semana 8)
// ============================================

// push: Agregar al final
items.push({ id: 106, name: "Pallets Madera", price: 45000, inStock: true, zone: "A", weight: 15 });

// unshift: Agregar al inicio (Prioridad)
items.unshift({ id: 100, name: "Botiquín Emergencia", price: 65000, inStock: true, zone: "C", weight: 3 });

// pop: Elimina el último
const eliminado = items.pop(); 

// splice: Elimina el elemento en el índice 2 (la tercera posición)
items.splice(2, 1);

// ============================================
// 3. BÚSQUEDA Y FILTRADO (Semana 8)
// ============================================

// find: Buscar un producto por nombre exacto
const productoBuscado = items.find(product => product.name === "Escáner Industrial");

// filter: Crear lista de solo los que están en stock
const getActiveItems = () => items.filter(product => product.inStock === true);

// ============================================
// 4. TRANSFORMACIÓN Y SPREAD (Semana 8)
// ============================================

// map: Crear array con solo los nombres de los productos
const nombresSolo = items.map(product => product.name);

// map: Crear array con precios aplicando descuento del 10%
const preciosDescuento = items.map(product => product.price * 0.9);

// Spread Operator: Copia inmutable para auditoría
const snapshot = [...items, { id: 999, name: "Muestra Temporal", inStock: false }];

// ============================================
// 5. REPORTE FINAL
// ============================================
console.log(`\n${"=".repeat(50)}`);
console.log(` GESTIÓN DE MI INVENTARIO: ${DOMAIN_NAME}`);
console.log(`${"=".repeat(50)}`);

console.log("\n--- Inventario después de mutaciones ---\n");
// forEach: Para iterar y mostrar cada item
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---");
console.log(productoBuscado ? `   Encontrado: ${formatItem(productoBuscado)}` : "   No se encontró.");

const activos = getActiveItems();
console.log(`   Disponibles para despacho: ${activos.length}`);

console.log("\n--- Transformación con map ---");
console.log(`  Lista de nombres: ${nombresSolo.join(" | ")}`);
console.log(`  Primer precio con descuento (10%): $${preciosDescuento[0].toLocaleString()}`);

console.log("\n--- Resumen final ---");
console.log(`  Total en inventario: ${items.length} ${VALUE_LABEL}`);
console.log(`  Activos: ${activos.length} | Inactivos: ${items.length - activos.length}`);

console.log(`\n${"=".repeat(50)}`);
console.log("Reporte completado");
console.log(`${"=".repeat(50)}\n`);