"use strict";

// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================
const DOMAIN_NAME = "LogistiTrack Pro - Bodega";
const VALUE_LABEL = "insumos de logística";
const MAX_ITEMS = 1_500; // Uso de separadores numéricos ES2021

// ============================================
// SECCIÓN 2: Datos — Array Principal
// ============================================
let items = [
  { id: 1, name: "Estantería Pesada", price: 450000, active: true, zone: "Norte", stock: 15 },
  { id: 2, name: "Montacargas Hidráulico", price: 1200000, active: true, zone: "Sur", stock: 2 },
  { id: 3, name: "Kit Cajas x50", price: 85000, active: false, zone: "Norte", stock: 100 },
  { id: 4, name: "Cinta Embalaje", price: 12500, active: true, zone: "Este", stock: 500 },
  { id: 5, name: "Escáner Industrial", price: 320000, active: true, zone: "Sur", stock: 8 },
  { id: 6, name: "Pallets Madera", price: 45000, active: true, zone: "Norte", stock: 40 }
];

// ============================================
// SECCIÓN 3: Funciones de Formato
// ============================================
// Arrow function con template literals y padding para que la consola se vea alineada
const formatItem = (item) => 
  `[ID: ${String(item.id).padStart(2, '0')}] ${item.name.padEnd(22)} | Stock: ${String(item.stock).padStart(3)} | Zona: ${item.zone}`;

// ============================================
// SECCIÓN 4: Lógica de Negocio (Integración Semanas 07-09)
// ============================================

// Buscar por ID (usando find)
const findById = (id) => items.find(item => item.id === id);

// Filtrar por estado activo (usando filter)
const getActive = () => items.filter(item => item.active);

// Filtrar dinámico (por cualquier propiedad)
const filterByField = (field, value) => items.filter(item => item[field] === value);

// Actualización Inmutable (Integración de Spread Operator)
const updateItem = (id, newData) => {
  items = items.map(item => 
    item.id === id ? { ...item, ...newData } : item
  );
  return items;
};

// Estadísticas (Uso de map y reduce)
const calculateStats = (prop) => {
  const values = items.map(item => item[prop]).filter(v => typeof v === "number");
  const total = values.reduce((acc, curr) => acc + curr, 0);
  return {
    total,
    avg: total / values.length,
    max: Math.max(...values),
    min: Math.min(...values)
  };
};

// ============================================
// SECCIÓN 5: Interfaz de Consola (Efectos)
// ============================================
const renderInventory = (title, list) => {
  console.log(`\n--- ${title.toUpperCase()} ---`);
  if (list.length === 0) {
    console.log("   No hay elementos que coincidan.");
  } else {
    list.forEach(item => console.log(`  ${formatItem(item)}`));
  }
};

// ============================================
// SECCIÓN 6: Ejecución Principal (El "Corazón" de la App)
// ============================================

console.log("=".repeat(55));
console.log(`    SISTEMA DE GESTIÓN: ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(55));

// 1. Estado inicial del sistema
console.log(`Capacidad: ${items.length} / ${MAX_ITEMS} ${VALUE_LABEL}`);

// 2. Operación: Búsqueda
const itemEncontrado = findById(5);
console.log(`\n Buscando Escáner (ID: 5): ${itemEncontrado ? "Localizado en zona " + itemEncontrado.zone : "No encontrado"}`);

// 3. Operación: Filtrado por Zona
const zonaNorte = filterByField("zone", "Norte");
renderInventory("Inventario Zona Norte", zonaNorte);

// 4. Operación: Actualización Inmutable
// Simulamos que el Kit de Cajas (ID: 3) vuelve a estar activo y sube de precio
updateItem(3, { active: true, price: 90000 });
console.log("\n Actualización: Kit de Cajas (ID: 3) reactivado en inventario.");

// 5. Estadísticas Financieras
const statsPrecios = calculateStats("price");
console.log("\n RESUMEN DE VALORIZACIÓN:");
console.log(`   Valor Total: $${statsPrecios.total.toLocaleString()}`);
console.log(`   Promedio:    $${statsPrecios.avg.toLocaleString()}`);
console.log(`   Máximo:      $${statsPrecios.max.toLocaleString()}`);

// 6. Reporte Final de Activos
const activos = getActive();
renderInventory("Reporte de Disponibilidad Final", activos);

console.log("\n" + "=".repeat(55));
console.log("   PROCESO FINALIZADO - LOGISTITRACK SYNCED");
console.log("=".repeat(55));