// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// ============================================
//
//  OBJETIVO: Construir un generador de mensajes
//    en consola usando métodos de string y
//    template literals.
//
//  MI DOMINIO: GESTIÓN DE BODEGAS (LogistiTrack)
//
//   POLÍTICA ANTICOPIA: Tu implementación debe
//    ser única y coherente con tu dominio.
//
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define el nombre de tu dominio
const DOMAIN_NAME = "LogistiTrack - Gestión de Inventarios";

// TODO: Define el nombre de la entidad principal
// Inclúyelo con espacios y mayúsculas/minúsculas
// para poder aplicar transformaciones después
// MÉTODO 1 QUE USAREMOS: .trim() después
const rawEntityName = "   Montacargas Eléctrico de Pasillo Estrecho   ";

// TODO: Define una categoría o tipo (string)
const entityCategory = "Maquinaria Pesada y Logística";

// TODO: Define un código identificador (string)
const entityCode = "BOD-99-LOG";

// TODO: Define una descripción corta (string)
// Debe contener varias palabras para usar includes/slice
const entityDescription = "Vehículo industrial de alta precisión diseñado para optimizar el espacio en bodegas de gran altura.";

// TODO: Define un dato numérico relevante (number)
const mainValue = 45_000_000;

// TODO: Define un estado booleano
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// TODO: Limpia el nombre con trim()
// Requisito: Limpiar espacios innecesarios al inicio y final
const entityName = rawEntityName.trim();

// TODO: Obtén el nombre en mayúsculas para el encabezado
// MÉTODO 2: .toUpperCase()
const entityNameUpper = entityName.toUpperCase();

// TODO: Obtén el nombre en minúsculas para el código
// MÉTODO 3: .toLowerCase()
const entityNameLower = entityName.toLowerCase();

// TODO: Extrae las primeras letras del código con slice()
// MÉTODO 4: .slice() para obtener solo el prefijo 'BOD'
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// TODO: Verifica si el código empieza con el prefijo correcto
// MÉTODO 5: .startsWith()
const hasValidPrefix = entityCode.startsWith("BOD");

// TODO: Verifica si la descripción contiene una palabra clave
// MÉTODO 6: .includes()
const descriptionIsRelevant = entityDescription.includes("optimizar");

// TODO: Verifica si el código termina con los dígitos
// MÉTODO 7: .endsWith()
const hasValidSuffix = entityCode.endsWith("LOG");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

// MÉTODO 8: .repeat() para crear líneas decorativas rápidas
const separator = "=".repeat(50);
const subSeparator = "-".repeat(50);

// TODO: Construye la ficha multilínea usando template literals
// Uso de TODAS las variables transformadas arriba (SIN USAR EL SIGNO +)
const mainCard = `
${separator}
   ${DOMAIN_NAME.toUpperCase()} — FICHA TÉCNICA
${separator}
Nombre Limpio:   ${entityName}
En Mayúsculas:   ${entityNameUpper}
Categoría:       ${entityCategory}
Identificador:   ${entityCode}
Prefijo de Área: ${codePrefix}
Valor Unitario:  $${mainValue}
Estado Actual:   ${isActive ? "OPERATIVO " : "EN MANTENIMIENTO "}

${subSeparator}
Descripción de Uso:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Reporte de Auditoría de Datos ---");
// TODO: Muestra los resultados de las validaciones con template literals
console.log(`¿El código tiene el prefijo de bodega?: ${hasValidPrefix}`);
console.log(`¿La descripción menciona 'optimizar'?:  ${descriptionIsRelevant}`);
console.log(`¿El código termina en sufijo logístico?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación del Sistema ---");

// TODO: Construye un mensaje corto de una línea
// Usa template literal con el nombre limpio y el código
const notification = ` ALERTA DE STOCK: Se ha registrado el elemento ${entityName} bajo el código ${entityCode}.`;
console.log(notification);
console.log("");

console.log("=========================================");
console.log("       FIN DEL PROYECTO - SEMANA 04      ");
console.log("=========================================");