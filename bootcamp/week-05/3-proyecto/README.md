// ============================================
// PROYECTO SEMANA 05: Clasificador LogistiTrack
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
// DOMINIO: GESTIÓN DE BODEGAS (LogistiTrack)
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento (Requisito 1)
// ============================================
// Definimos 5 variables con datos de un producto de la bodega
const elementName = "Taladro Percutor Industrial"; 
const elementStatus = "available"; // Puede ser "available" o "out_of_service"
const elementStock = 12;           // Valor numérico para clasificar
const categoryType = "herramientas"; // Categoría para el switch
const elementDetails = {           // Objeto para acceso seguro ?.
    brand: "PowerMax",
    aisle: "B-12",
    warranty: null                 // Valor nulo para probar ??
};

// ============================================
// SECCIÓN 2: Clasificación con if/else (Requisito 2)
// ============================================
// Clasificamos según la cantidad de stock en 3 categorías
let stockLevel;

if (elementStock === 0) {
    stockLevel = " AGOTADO: Generar orden de compra";
} else if (elementStock < 15) {
    stockLevel = " BAJO: Reabastecimiento necesario";
} else {
    stockLevel = " ÓPTIMO: Inventario suficiente";
}

// ============================================
// SECCIÓN 3: Estado con operador ternario (Requisito 3)
// ============================================
// Determina un estado binario (Disponible / No Disponible)
const statusLabel = elementStatus === "available" ? "OPERATIVO" : "FUERA DE SERVICIO";

// ============================================
// SECCIÓN 4: Tipo con switch (Requisito 4)
// ============================================
// Clasifica según el string 'categoryType'
let categoryLabel;

switch (categoryType) {
    case "construccion":
        categoryLabel = " Materiales de Obra";
        break;
    case "herramientas":
        categoryLabel = " Equipo Eléctrico";
        break;
    case "seguridad":
        categoryLabel = "Equipo de Protección (EPP)";
        break;
    default:
        categoryLabel = "Mercancía General";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ?? (Requisito 5)
// ============================================
// Si warranty es null, asigna el texto de la derecha
const warrantyStatus = elementDetails.warranty ?? "Garantía no registrada";

// ============================================
// SECCIÓN 6: Acceso seguro con ?. (Requisito 6)
// ============================================
// Accede a la ubicación de forma segura aunque el objeto fuera nulo
const locationInfo = elementDetails?.aisle ?? "Sin ubicación asignada";

// ============================================
// SECCIÓN 7: Ficha de salida (Requisito 7)
// ============================================
// Resumen usando Template Literals y separadores visuales
console.log("=".repeat(45));
console.log(` LOGISTITRACK - REPORTE DE CLASIFICACIÓN`);
console.log("=".repeat(45));

console.log(`Producto:       ${elementName}`);
console.log(`Estado:         ${statusLabel}`);
console.log(`Categoría:      ${categoryLabel}`);
console.log(`Nivel Stock:    ${stockLevel} (${elementStock} un.)`);
console.log(`Ubicación:      Pasillo ${locationInfo}`);
console.log(`Información:    ${warrantyStatus}`);

console.log("=".repeat(45));
console.log(`       FIN DEL REPORTE SEMANA 05`);
console.log("=".repeat(45));