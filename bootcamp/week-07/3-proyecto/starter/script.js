"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================
const DOMAIN_NAME = "LogistiTrack - Gestion de Bodega";
const VALUE_LABEL = "Valor Total con IVA";
const TAX_RATE = 0.19; // IVA asignado

const items = [
  { id: 1, name: "Estanteria Pesada", category: "Mobiliario", value: 450000, active: true },
  { id: 2, name: "Montacargas Hidraulico", category: "Maquinaria", value: 1200000, active: true },
  { id: 3, name: "Kit Cajas x50", category: "Empaque", value: 85000, active: false },
  { id: 4, name: "Cinta Embalaje", category: "Empaque", value: 12000, active: true },
  { id: 5, name: "Escaner Industrial", category: "Tecnologia", value: 320000, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================
// Arrow function que utiliza template literals para el retorno
const formatItem = (product) => 
  `ID: ${product.id} | ${product.name} [${product.category}] -- $${product.value.toLocaleString()}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================
// Es una función pura porque no tiene efectos secundarios externos
const calculateValue = (baseValue, tax = TAX_RATE) => {
  return baseValue + (baseValue * tax);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================
// Devuelve un booleano para verificar el estado del producto
const isValid = (product) => product.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================
// Implementa parametros por defecto para flexibilidad
const formatWithDefault = (value, label = VALUE_LABEL, currency = "COP") => {
  return `${label}: ${currency} $${value.toLocaleString()}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================
console.log(`\n${"=".repeat(45)}`);
console.log(`   REPORTE -- ${DOMAIN_NAME}`);
console.log(`${"=".repeat(45)}`);

if (items.length === 0) {
  console.log("\nAVISO: No hay elementos registrados en la Seccion 1.");
} else {
  // --- Listado ---
  console.log("\nLISTADO DE PRODUCTOS:");
  let lineNumber = 1;
  for (const item of items) {
    // Uso de la funcion de formato de la Seccion 2
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validacion ---
  let validCount = 0;
  for (const item of items) {
    // Uso de la funcion de validacion de la Seccion 4
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\nPRODUCTOS ACTIVOS: ${validCount} / ${items.length}`);

  // --- Calculo ---
  let totalValue = 0;
  for (const item of items) {
    if (isValid(item)) {
      // Uso de la funcion de calculo pura de la Seccion 3
      totalValue += calculateValue(item.value);
    }
  }
  
  // Resumen final usando la funcion de la Seccion 5
  console.log("\nRESUMEN FINANCIERO:");
  console.log(`   ${formatWithDefault(totalValue)}`);
}

console.log(`\n${"=".repeat(45)}\n`);