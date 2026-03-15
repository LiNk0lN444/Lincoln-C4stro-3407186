// ============================================
// PROYECTO SEMANA 02: FICHA DE DATOS DEL DOMINIO
// ============================================
//  OBJETIVO: Implementar un sistema de variables
//    usando estándares modernos de JavaScript (ES2023).
//  DOMINIO: GESTIÓN DE BODEGAS (LogistiTrack)
// ============================================

// -----------------------------------------------------------------
// SECCIÓN 1: DEFINICIÓN DE VARIABLES (Requisito: const & camelCase)
// -----------------------------------------------------------------

// Nombre del dominio en formato UPPER_SNAKE_CASE por ser configuración
const DOMAIN_NAME = "LogistiTrack - Control de Inventarios";

// Nombre del elemento principal (Tipo: String)
const itemName = "Montacargas Industrial XP-500";

// Categoría o familia del producto (Tipo: String)
const itemCategory = "Maquinaria de Carga Pesada";

// Capacidad de carga (Tipo: Number con separador numérico _)
// El separador ayuda a leer que son "Dos mil quinientos" (Requisito 5)
const capacityKg = 2_500; 

// Estado de disponibilidad (Tipo: Boolean con prefijo semántico 'is')
const isAvailable = true; 

// Operador asignado (Tipo: null para indicar "no asignado aún")
const currentOperator = null; 


// -----------------------------------------------------------------
// SECCIÓN 2: RENDERIZADO DE LA FICHA (Requisito: Template Literals)
// -----------------------------------------------------------------

console.log("=========================================");
console.log(` SISTEMA: ${DOMAIN_NAME}`);
console.log("=========================================");
console.log("");

console.log("DETALLES DE LA ENTIDAD:");
console.log("-----------------------------------------");
console.log(` Nombre:      ${itemName}`);
console.log(` Categoría:   ${itemCategory}`);
console.log(` Capacidad:   ${capacityKg} Kilogramos`);
console.log(` Disponible:  ${isAvailable}`);
console.log("");


// -----------------------------------------------------------------
// SECCIÓN 3: DIAGNÓSTICO DE TIPOS (Requisito: typeof)
// -----------------------------------------------------------------

console.log("VERIFICACIÓN TÉCNICA (Depuración):");
console.log("-----------------------------------------");
console.log(`Variable 'itemName' es:    ${typeof itemName}`);
console.log(`Variable 'capacityKg' es:  ${typeof capacityKg}`);
console.log(`Variable 'isAvailable' es: ${typeof isAvailable}`);
console.log("");


// -----------------------------------------------------------------
// SECCIÓN 4: TRANSFORMACIÓN DE DATOS (Requisito: Conversión Explícita)
// -----------------------------------------------------------------

console.log("PROCESAMIENTO DE DATOS:");
console.log("-----------------------------------------");

// Convertimos el número a texto para formatos de impresión (Requisito 3)
const capacityFormatted = String(capacityKg);

console.log(`Conversión (Number a String): "${capacityFormatted}"`);
console.log(`Tipo tras conversión:         ${typeof capacityFormatted}`);
console.log("");


// -----------------------------------------------------------------
// SECCIÓN 5: MANEJO DE VALORES NULOS
// -----------------------------------------------------------------

console.log("ESTADOS PENDIENTES:");
console.log("-----------------------------------------");
console.log(`Operador de turno: ${currentOperator}`);
console.log(`¿Valor es nulo?:   ${currentOperator === null}`); 
console.log("");


// -----------------------------------------------------------------
// CIERRE DEL SCRIPT
// -----------------------------------------------------------------

console.log("=========================================");
console.log("       FIN DEL REPORTE - SEMANA 02       ");
console.log("=========================================");