// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Dominio: GESTIÓN DE BODEGAS (LogistiTrack)
// Objetivo: Automatizar cálculos de costos, stock y alertas
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes base para los cálculos de la bodega
// Usamos UPPER_SNAKE_CASE para valores fijos y guiones bajos para legibilidad
const UNIT_PRICE_CEMENT = 35_000;
const MAX_WAREHOUSE_CAPACITY = 1_000; // Capacidad máxima en bultos
const MIN_SAFETY_STOCK = 50;          // Stock mínimo de seguridad
const TAX_RATE = 0.19;                // IVA del 19%

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas de Inventario ===");

let currentBags = 450;
let incomingShipment = 120;

// 1. Suma (+): Total de bultos tras recibir pedido
const totalStock = currentBags + incomingShipment;
console.log("Total de bultos en bodega (Stock):", totalStock);

// 2. Resta (-): Espacio libre en la bodega
const availableSpace = MAX_WAREHOUSE_CAPACITY - totalStock;
console.log("Espacio disponible para nuevos bultos:", availableSpace);

// 3. Multiplicación (*): Costo total antes de impuestos
const subtotalCost = totalStock * UNIT_PRICE_CEMENT;
console.log("Subtotal del valor de la bodega: $", subtotalCost);

// 4. División (/): Peso total en toneladas (cada bulto pesa 50kg)
const totalTons = (totalStock * 50) / 1_000;
console.log("Peso total almacenado (Toneladas):", totalTons);

// 5. Módulo (%): Bultos que sobran al armar estibas de 12 unidades
const leftoverBags = totalStock % 12;
console.log("Bultos sueltos (fuera de estibas completas):", leftoverBags);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Actualización de Valores (Asignación compuesta) ===");

let dailyRevenue = 0;
console.log("Ingresos iniciales del día:", dailyRevenue);

// Sumamos una venta de 5 bultos (+=)
dailyRevenue += (5 * UNIT_PRICE_CEMENT);
console.log("Tras primera venta (+5 bultos):", dailyRevenue);

// Sumamos otra venta de 10 bultos con un recargo por transporte
dailyRevenue += (10 * UNIT_PRICE_CEMENT) + 15_000;
console.log("Tras segunda venta con transporte:", dailyRevenue);

// Aplicamos un descuento por pronto pago del 5% (*=)
dailyRevenue *= 0.95;
console.log("Total tras aplicar descuento del 5%: $", dailyRevenue);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones de Seguridad (===) ===");

const itemsBroken = 0;
// Verificamos si la bodega está impecable usando === (estricto)
const isImpeccable = itemsBroken === 0;
console.log("¿La bodega tiene cero pérdidas?:", isImpeccable);

// Verificamos si estamos en nivel crítico de stock
const isCritical = totalStock <= MIN_SAFETY_STOCK;
console.log("¿El nivel de stock es crítico?:", isCritical);

// Verificamos si superamos la capacidad máxima
const isOverloaded = totalStock > MAX_WAREHOUSE_CAPACITY;
console.log("¿Existe sobrecarga en la estructura?:", isOverloaded);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones de Operación (Lógicos) ===");

const isWarehouseOpen = true;
const hasPowerSupply = true;

// Condición con &&: Solo se puede despachar si está abierto Y hay stock disponible
const canDispatch = isWarehouseOpen && totalStock > 0;
console.log("¿Se pueden realizar despachos hoy?:", canDispatch);

// Condición con ||: Se requiere alerta si hay sobrecarga O si no hay luz
const requireEmergencyProtocol = isOverloaded || !hasPowerSupply;
console.log("¿Activar protocolo de emergencia?:", requireEmergencyProtocol);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen Ejecutivo LogistiTrack ===");

// Cálculo final con impuestos
const finalValuation = subtotalCost + (subtotalCost * TAX_RATE);

console.log(`Resumen: Contamos con ${totalStock} bultos.`);
console.log(`Valoración total con IVA: $${finalValuation}`);
console.log(`Estado de despacho: ${canDispatch ? "AUTORIZADO" : "BLOQUEADO"}`);

console.log("");
console.log("=========================================");
console.log("       FIN DEL CÁLCULO - SEMANA 03       ");
console.log("=========================================");